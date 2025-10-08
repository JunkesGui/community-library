import express from 'express'
const app = express();
const port = 3000;

app.use(express.json());
const users = [];

app.post('/users', (req, res) => {
    const body = req.body;
    users.push(body);
    res.status(201).send("User sucessfully created!");
});

app.get('/users', (req, res) =>{
    res.json({users})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
