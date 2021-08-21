const BASE_URL = "http://localhost:5000";



function send() {
    const title = document.getElementById("title").value
    const description = document.getElementById("description").value
    const post = document.getElementById("post")

    const obj = {
        title: title,
        description: description
    }
    console.log(obj)


    axios.post(`${BASE_URL}/add`, obj)
        .then(function (response) {
            console.log(response);
        })
    alert("Create Successfully")
        .catch(function (error) {
            // handle error
            console.log(error);
        })

}

function onSignup() {
    const fullname = document.getElementById("fullname").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const Address = document.getElementById("Address").value
    const Age = document.getElementById("Age").value
    const MobileNumber = document.getElementById("MobileNumber").value
    const message = document.getElementById("message")

    const obj = {
        fullname: fullname,
        email: email,
        password: password,
        Address: Address,
        Age: Age,
        MobileNumber: MobileNumber
    }
    console.log(obj)


    axios.post(`http://localhost:5000/registration`, obj)
        .then(function (response) {
            console.log(response);
            const data = response
            if (data.data == "Account Created") {
                message.innerHTML = ("Signup Successfully")
                setTimeout(() => {
                    message.innerHTML = ""
                    location.href = "login.html"
                }, 2000);
            }
            if (data.data == "Email Already exist") { message.innerHTML = ("E-mail use in another account") }
            setTimeout(() => {
                message.innerHTML = "";
            }, 2000);




        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

}

function onLogin() {
    const obj = email
    axios.post(`${BASE_URL}/login`, obj)
    .then((response) => {
        if (response.data.email) {
            // store user id in storage
            alert("Go to dashboard")
        }
        console.log(response.data);
    }).catch((error) => {
        console.log(error);
    })
}



















    // post(url,body,headers)
    // axios.post(`${BASE_URL}/login`, obj)
    //     .then((response) => {
    //         if (response.data.email) {
                // store user id in storage
                // alert("Go to dashboard")
            // }
            // console.log(response.data);
            // const data = response
            // if (data.data == "Account found") {
            //     message.innerHTML = ("Welcome")
            //     setTimeout(() => {
            //         message.innerHTML = ""
            //         location.href = "Dashboard.html"
            //     }, 2000);
            // }
            // if (data.data == "Account not found") {
            //     message.innerHTML = ("Type Correctly!")
            //     setTimeout(() => {
            //         message.innerHTML = ""
            //         location.href = "Dashboard.html"
            //     }, 2000);
            // }
            
            
//         }).catch((error) => {
//             console.log(error);
//         })
// }


// app.post("/login", (request, response) => {
//     try {
//         const body = request.body;
//         signuppostmodel.findOne({ email: body.email }, (error, user) => {
//             if (error) {
//                 throw error;
//             }
//             if (user) {
//                 response.send(`Account  found ${body.email}`, user)}
//                 if (data.data == "Account found") {
//                     message.innerHTML = ("Welcome")
//                     setTimeout(() => {
//                         message.innerHTML = ""
//                         location.href = "Dashboard.html"
//                     }, 2000)
//                 }
//                 if (!user) {
//                     response.send(`Account not found ${body.email}`)}
//                     if (data.data == "Account not found") {
//                         message.innerHTML = ("Type Correctly")
//                         setTimeout(() => {
//                             message.innerHTML = ""
//                             location.href = "login.html"
//                         }, 2000);
//                     }
//                 })
            
//               }  catch (error) {
//             response.send(`Got an error `, error.message);

//         }});

function read() {
    axios.get(`http://localhost:5000/read`)
        .then(function (response) {
            // console.log(response);
            const data = response
            var p = document.getElementById("post")
            for (var i in data.data) {
                var a = document.createElement("li")
                a.innerHTML = `<div class="card" style="width: 18rem;">
               
                <div class="card-body">
                  <h5 class="card-title">${data.data[i].title}</h5>
                  <p class="card-text">${data.data[i].description}</p>
                  
                </div>
              </div>`

                p.appendChild(a)
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

}
