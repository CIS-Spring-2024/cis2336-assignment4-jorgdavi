//server.js

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path')

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/public/html/order_form.html');
});

app.post('/submit',(req,res) => {
    const{item1, item2, item3} = req.body;

const num1 = parseFloat(item1);
const num2 = parseFloat(item2);
const num3 = parseFloat(item3);

const amount = num1 + num2 + num3

res.send('Total: $ ' + amount);
//res.sendFile(__dirname + '/public/html/order_confirmation.html', {amount});

});

app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');

});