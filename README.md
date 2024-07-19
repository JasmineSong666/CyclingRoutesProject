# Cycling Routes Project

## Description
A full-stack project to create a cycling routes review application where users can create, view, and review cycling routes.
Upload and review a cycling route NOW!

- Signup and login to your account
- Go through all the cycling routes and find them on the map
- Review the cycling routes
- Create new cycling routes
- Edit and delete the cycling routes or review that you created

## Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation
1. Clone the repository
   ```git clone https://github.com/JasmineSong666/YelpCampProject.git```
 
   
2. Navigate to the project directory
  ```cd YelpCampProject```

3. Install the dependencies
   ```npm install```

4. Environment Setup
Create a .env file in the root directory of the project and add the following environment variables. Replace the values with your actual credentials.
```
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
MAPBOX_TOKEN=your_mapbox_token
DATABASE_URL=mongodb://localhost:27017/yelp-camp
```
5. Running the App
Start your MongoDB server (if it is not running already)
```mongod```
Start the application
```node app.js```
Open your browser and visit http://localhost:3000
