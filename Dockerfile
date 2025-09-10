FROM node:18

# Set working dir
WORKDIR /app

# Copy package.json (if exists, otherwise create one)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Expose app port
EXPOSE 3000

# Run the server
CMD ["node", "server.js"]
