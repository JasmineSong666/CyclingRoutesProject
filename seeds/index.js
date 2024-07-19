if (process.env.NODE_ENV !== 'production') {
    //if we are not running in development enviornment
    require('dotenv').config()
}
const mongoose = require('mongoose');
const Campground = require('../models/campground')//import campground model
const cities = require('./cities');
const { descriptors, places } = require('./seedHelpers');

const dbUrl = process.env.DB_URL;
// const dbUrl = 'mongodb://127.0.0.1:27017/yelp-camp'

mongoose.connect(dbUrl)
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })
// a function to produce a random string in an array
const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '6505bbab9c6ea13c7f0bbde3',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam impedit eum pariatur, temporibus unde quis at sint, laborum ipsa nulla commodi fuga distinctio! Neque voluptate quibusdam tempore nemo? Quibusdam, facilis!',
            price,
            geometry: {
                type: 'Point',
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dbchiykkp/image/upload/v1721364812/YelpCamp/pf2xwpw74wvqrupzuhmf.jpg',
                    filename: 'YelpCamp/pf2xwpw74wvqrupzuhmf'
                },
                {
                    url: 'https://res.cloudinary.com/dbchiykkp/image/upload/c_thumb,w_200,g_face/v1721364807/YelpCamp/gwllq3jgt6i6mfukc9hc.jpg',
                    filename: 'YelpCamp/gwllq3jgt6i6mfukc9hc'

                }
            ]
        })
        await camp.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close()
})
