# Software Project Management: Task-1 (PLT-1)
## Student: Vaidik Rokad (23BCE291)
### Project: FleetFlow (Backend & Database Setup)

---

## 🚛 Selected Project: FleetFlow
FleetFlow is a Fleet and Delivery Management System. It replaces manual paper logbooks with a digital system that tracks vehicle status, fuel costs, maintenance logs, and driver details.

---

## 🎯 1. Project Objectives (Goals)
* **All Info in One Place:** Put all driver data, vehicle status, and trips into a single system so it is easy to access.
* **Checking Rules & Safety:** Make sure the system checks safety rules automatically (for example, blocking a driver if their license is expired, or blocking a trip if the cargo is too heavy for the vehicle).
* **Automatic Updates:** Make vehicle status change automatically (for example, if a vehicle goes for repairs, its status changes to `in_shop` so no one can assign it to a trip by mistake).
* **Tracking Costs:** Save fuel usage, odometer readings, and repair costs to calculate reports easily.

---

## 👥 2. Project Stakeholders (People Involved)
* **Fleet Managers:** The main bosses who need full control to add vehicles, edit logs, and see final reports.
* **Dispatchers:** Team members who create trips and assign drivers and vehicles.
* **Safety Officers:** People who check driver licenses and vehicle fitness logs.
* **Financial Analysts:** People who check fuel spend, repair bills, and money reports.
* **Backend Developer (Vaidik Rokad):** The developer who designs the database, writes the server code, manages login security, and sets up Docker.

---

## 🔍 3. Scope of Work (What Vaidik Built)
* **Login & Security:** Built a secure login system using passwords and secret keys (JWT) so users only see what their role allows.
* **Database Setup:** Created database tables (using Mongoose/MongoDB) to store:
  * Users (names, logins, roles)
  * Vehicles (plates, type, capacity, status)
  * Drivers (license details, safety ratings, status)
  * Trips (weight, starting point, ending point, distance)
  * Expenses (fuel bills, insurance, cost categories)
  * Maintenance (repair details, costs, dates)
* **Server Logic:** Wrote backend code to control what happens when a trip is started or when a vehicle is sent for service.
* **Docker Setup:** Created a Docker package so the backend server runs the same way on any computer.

---

## 📦 4. Project Deliverables (What is Delivered)
* **Database Design:** Structured database tables and indexes.
* **Working Server Application:** Express backend code that handles data requests.
* **Security System:** Secure login cookies and role-checking software.
* **Docker Config:** Configuration files (`Dockerfile` and rebuild scripts) to start the server easily.

---

## ⚠️ 5. Project Constraints (Limitations)
* **Resource Limits:** The server must run smoothly even on basic computers using Docker.
* **Safe Deleting Rules:** The database must prevent mistakes (for example, you cannot delete a vehicle if it is currently out on a delivery trip).
* **Fast Calculations:** Calculating heavy reports (like total vehicle cost or mileage) must be quick and not slow down the server.
