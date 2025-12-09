var { img, user, password, email, title, description, rating } = require('../frontend/index.js')

var express = require("express")
var app = express()
var path = require("path")

var bathrooms = require("../data/bathrooms.json")
var profiles = require("../data/profiles.json")
var fs = require("fs")

var port = process.env.PORT || 8000
require("dotenv").config()

app.use(function (req, res, next) {
    console.log("== Request received")
    console.log(" -- method: ", req.method)
    console.log(" -- url: ", req.url)
    console.log(" -- headers: ", req.headers)

    next()
})

/* -- This whole section was a template to put into a function that will actually use --
   -- a button in order to add the new review into the existing database of reviews.  --

var newReview = [{
    "img": img,
    "user": user,
    "title": title,
    "description": description,
    "rating": rating
}]

bathrooms.push(newReview)

console.log("== New review data: ", newReview)

var bathroomPath = path.join(__dirname, "../data/bathrooms.json")
fs.writeFile(bathroomPath, JSON.stringify(bathrooms, null, 2), function (err) {
    if (err) {
        console.log("== Error occured: ", err)
    } else {
        console.log("== Added new review successfully")
    }
})
*/

/*
 * This function adds a new review to the database bathrooms.json.
 *
 * Includes:
 * - img: Image url/picture file.
 * - user: The user's username.
 * - title: The title of the review.
 * - description: The description of th review.
 * - rating: The amount of stars rated.
 */
function newReviewButton(event) {
    console.log("== New review created, event: ", event)
    var newReview = [{
        "img": img,
        "user": user,
        "title": title,
        "description": description,
        "rating": rating
    }]

    bathrooms.push(newReview)

    var bathroomPath = path.join(__dirname, "../data/bathrooms.json")
    fs.writeFile(bathroomPath, JSON.stringify(bathrooms, null, 2), function (err) {
        if (err) {
            console.log("== Error occured: ", err)
        } else {
            console.log("== Added new review successfully")
        }
    })
}

/*
 * This function adds a new profile to the database profiles.json.
 * 
 * - user: The user's username.
 * - password: The user's password.
 * - email: The user's email.
 */
function newProfile(event) {
    console.log("== New profile created, event: ", event)
    var newProfile = [{
        "user": user,
        "password": password,
        "email": email
    }]

    profiles.push(newProfile)

    var profilePath = path.join(__dirname, "../data/profiles.json")
    fs.writeFile(bathroompath, JSON.stringify(profiles, null, 2), function (err) {
        if (err) {
            console.log("== Error occured: ", err)
        } else {
            console.log("== Added new profile successfully")
        }
    })
}

app.get("/", async (req, res, next) => {
    console.log("== Full database for bathrooms.json: ", bathrooms)
    console.log("== Full database for profiles.json: ", profiles)
})

app.listen(8000, function () {
    console.log("== Server is running on ", port)
})

console.log("== Data from bathrooms.json: ", bathrooms)
console.log("== Data from profiles.json", profiles)