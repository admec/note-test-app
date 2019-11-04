const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

var data = [{item: 'Get some breads'}, {item: 'Buy milk'}, {item: 'Close the windows'}];

app.get('/todo', (req, res) => {
    res.render('todo', {todos: data});
});

app.listen(process.env.PORT || 3000, function(){
    console.log('connected');    
});