# 👤 Individual Task Report & Code Diff
## Developer: Vaidik Rokad (23BCE291)
### Role: Backend Developer & DevOps Engineer

---

## 📋 Tasks Performed & Responsibilities

1. **System Core & Express Server Config:**
   * Initialized the Node/Express backend infrastructure (`server.js` and `app.js`).
   * Established the database connection module (`config/db.js`) to interface with MongoDB.
   
2. **Database Schema & Mongoose Modeling:**
   * Designed the database schemas for all six models (`User`, `Vehicle`, `Driver`, `Trip`, `Expense`, `Maintenance`).
   * Implemented custom pre-save schema validation hooks (such as hashing user passwords using bcrypt).
   * Configured virtual fields and compound indexes (e.g. status-type and vehicle-date combinations) for query optimization.

3. **Security, Middleware & JWT Auth:**
   * Implemented user authentication controllers for registration, login, and token generation.
   * Built role-based access checking middleware (`auth.middleware.js`) using JSON Web Tokens (JWT) to enforce API routing protections.
   * Created central error handling middleware (`error.middleware.js`).

4. **Business Logic & Validation Guardrails:**
   * Programmed controller actions verifying business rules:
     * Restricting trip dispatch if `cargoWeight` exceeds `vehicle.maxCapacity`.
     * Restricting driver assignment if commercial driver's license is expired.
     * Auto-syncing vehicle status to `in_shop` when maintenance is created, and restoring to `available` upon completion.
   * Defined strict validation schemas using `express-validator` to scrub client request payloads.

5. **DevOps & Containerization:**
   * Created Docker configurations (`Dockerfile`, `.dockerignore`) for running the backend service in containerized environments.
   * Authored utility setup scripts (`rebuild.bat`, `rebuild.sh`) to automate the environment builds.

---

## 💻 Simulated Git Contributions (Commit Diff)

Below is a simulated Git diff capturing the backend structure, model schemas, and containerization setup committed by Vaidik Rokad:

```diff
diff --git a/backend/Dockerfile b/backend/Dockerfile
new file mode 100644
--- /dev/null
+++ b/backend/Dockerfile
@@ -0,0 +1,13 @@
+FROM node:18-alpine
+
+WORKDIR /usr/src/app
+
+COPY package*.json ./
+
+RUN npm ci --only=production
+
+COPY . .
+
+EXPOSE 3000
+
+CMD ["node", "server.js"]
diff --git a/backend/src/middleware/auth.middleware.js b/backend/src/middleware/auth.middleware.js
new file mode 100644
--- /dev/null
+++ b/backend/src/middleware/auth.middleware.js
@@ -0,0 +1,33 @@
+const jwt = require('jsonwebtoken');
+const User = require('../models/user.model');
+
+exports.protect = async (req, res, next) => {
+  let token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
+  if (!token) {
+    return res.status(401).json({ success: false, message: 'Not authorized, token missing' });
+  }
+  try {
+    const decoded = jwt.verify(token, process.env.JWT_SECRET);
+    req.user = await User.findById(decoded.id).select('-password');
+    if (!req.user || !req.user.isActive) {
+      return res.status(401).json({ success: false, message: 'User account is deactivated' });
+    }
+    next();
+  } catch (error) {
+    return res.status(401).json({ success: false, message: 'Not authorized, token invalid' });
+  }
+};
+
+exports.authorize = (...roles) => {
+  return (req, res, next) => {
+    if (!req.user || !roles.includes(req.user.role)) {
+      return res.status(403).json({
+        success: false,
+        message: `Role (${req.user?.role || 'Guest'}) is not allowed to access this resource`
+      });
+    }
+    next();
+  };
+};
diff --git a/backend/src/models/vehicle.model.js b/backend/src/models/vehicle.model.js
new file mode 100644
--- /dev/null
+++ b/backend/src/models/vehicle.model.js
@@ -0,0 +1,39 @@
+const mongoose = require('mongoose');
+
+const vehicleSchema = new mongoose.Schema({
+  name: { type: String, required: true, trim: true },
+  licensePlate: { type: String, required: true, unique: true, uppercase: true },
+  type: { type: String, required: true, enum: ['truck', 'van', 'car'] },
+  maxCapacity: { type: Number, required: true }, // in kg
+  status: { 
+    type: String, 
+    enum: ['available', 'on_trip', 'in_shop', 'retired'], 
+    default: 'available' 
+  },
+  fuelType: { type: String, enum: ['diesel', 'petrol', 'cng', 'electric'], required: true },
+  acquisitionCost: { type: Number, required: true },
+  currentOdometer: { type: Number, required: true, default: 0 },
+  region: { type: String, required: true },
+  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
+}, { timestamps: true });
+
+vehicleSchema.index({ status: 1, type: 1 });
+vehicleSchema.index({ region: 1 });
+
+module.exports = mongoose.model('Vehicle', vehicleSchema);
```
