const express = require('express');

const mc = require('./controllers/messages_controller');

const app = express();

app.use(express.json());

app.use(express.static(__dirname + '/../public/build'));

const port = 3001;

const messagesBaseUrl = "/api/messages";

//Endpoints
//get
app.get(messagesBaseUrl, mc.read);

//post
app.post(messagesBaseUrl, mc.create);

//put
app.put(`${messagesBaseUrl}/:id`, mc.update);

//delete
app.delete(`${messagesBaseUrl}/:id`, mc.delete);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});