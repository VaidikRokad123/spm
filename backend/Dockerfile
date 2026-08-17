# 1. Use the official lightweight Node.js runtime based on Alpine Linux
FROM node:20-alpine

# 2. Set the working directory inside the container
WORKDIR /usr/src/app

# 3. Copy package.json and package-lock.json first.
# This allows Docker to cache dependency layers and speed up subsequent builds
COPY package*.json ./

# 4. Install production-ready dependencies (skip nodemon or test utilities)
RUN npm ci --only=production

# 5. Copy the rest of the application files
COPY . .

# 6. Inform Docker that the container will listen on port 3000 at runtime
EXPOSE 3000

# 7. Define the runtime command to start the server
CMD [ "npm", "start" ]
