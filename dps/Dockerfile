# Please write a Dockerfile that can be used to build an image for our NodeJS application. 
# The resulting image should be able to run once it has been built.
# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the application is listening on
EXPOSE 3000

# Start the NodeJS application
CMD ["npm", "start"]
