const { response, request } = require("express")
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const postmodel = require("./schema")
const signuppostmodel = require("./schema")
const port = 5000
const cors = require("cors")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

mongoose.connect("mongodb+srv://admin:admin@cluster0.x26vs.mongodb.net/dev",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

mongoose.connection.on("connected", () => console.log("Mongoose Connected"))
mongoose.connection.on("error", () => console.log("Mongoose not connected"))


// Create
app.post("/add", (request, response) => {
    try {
        const body = request.body
        postmodel.create(body, (error, data) => {
            if (error) {
                throw error
            } else {
                response.send("Create Successfuly")

            }
        })

    } catch (error) {
        response.send(error)
    }
})

app.post("/registration", (request, response) => {
    try {
        const body = request.body;
        signuppostmodel.findOne({ email: body.email }, (error, user) => {
            if (error) {
                throw error;
            }
            if (user) {
                response.send("Email Already exist")


            } else {
                signuppostmodel.create(body, (error, user) => {
                    if (error) {
                        response.send(error.message)
                    } else {
                        response.send("Account Created")

                    }
                });
            }
        })
    } catch (error) {
        response.send(`Got an error `, error.message);
    }
});

app.post("/login", (request, response) => {
    try {   
        const body = request.body;
        signuppostmodel.findOne({email: body.email }, (error, user) => {
            if (error) {
                throw error;
            }
            if (user) {
                response.send(user);
            }
            if (!user) {
                response.send(`Account not found ${body.email}`);
            }
        })
    } catch (error) {
        response.send(`Got an error `, error.message);
    }
});

// Read All
app.get("/read", (request, response) => {
    try {
        postmodel.find({}, (error, data) => {
            if (error) {
                throw error
            } else {
                console.log(data)
                response.send(data);
            }
        })
    } catch (error) {
        response.send(error)
    }
})


// Read all data of specific user
app.get("/find", (request, response) => {
    try {
        const { title } = request.headers
        if (title) {
            postmodel.find({ title }, (error, data) => {
                if (error) {
                    throw error
                } else {
                    response.send(data)
                }
            })
        }
        else {
            response.send("Field Missing")
        }
    } catch (error) {
        response.send(error)
    }
})


// Find one post of specific user
app.get("/findone", (request, response) => {
    try {
        const { title } = request.headers
        if (title) {
            postmodel.findOne({ title }, (error, data) => {
                if (error) {
                    throw error
                } else {
                    response.send(data)
                }
            })
        }
        else {
            response.send("Field Missing")
        }
    } catch (error) {
        response.send(error)
    }
})


app.listen(port, () => console.log(`Server is running on port: ${port}`))