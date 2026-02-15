# Use a lightweight Node image
FROM node:18-alpine

# Set the directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Open port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]