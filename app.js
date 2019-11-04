const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('./public'));

var data = [{item: 'Get some breads'}, {item: 'Buy milk'}, {item: 'Close the windows'}];

app.get('/todo', (req, res) => {
    res.render('todo', {todos: data});
});

app.listen(port, function(){
    console.log('connected');    
});