const express = require('express');
const app = express();
const add_data = require('./mongo');
app.use(express.json());



const auth_middleware = (req, res, next) => {
    console.log("Authenticating User.");
    next();
}

app.use((req, res, next) => {
    // Request Type, Request URL, Request Time 

    console.log("IP Address: ", req.ip)
    console.log(req.method, req.url, new Date());
    next();
})

app.get('/', (req, res) => {
        return res.send("Hello World");
    }
);


app.post("/auth", auth_middleware, (req, res) => {
    return res.send("Authenticated");

});


app.post("/add_data", auth_middleware, async(req, res) => {
    try {
        const data = req.body;
        const result = await add_data(data);

        return res.status(200).send(result);
    } catch (error) {
        console.Console.log(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
});






app.listen(3000, () => {
    console.log('Listening on port 3000');
    }
);