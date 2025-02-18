# Use node:18-alpine as the base image
FROM node:18-alpine

# Arguments for build-time variables
ARG GOOGLE_SPREADSHEET_ID
ARG GOOGLE_SERVICE_ACCOUNT_KEY

# Environment variables
ENV GOOGLE_SPREADSHEET_ID=${GOOGLE_SPREADSHEET_ID}
ENV GOOGLE_SERVICE_ACCOUNT_KEY=${GOOGLE_SERVICE_ACCOUNT_KEY}

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm i

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
