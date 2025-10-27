require('dotenv').config();

const express = require ('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    const locals ={
        title: "Home Page",
        description: "This is the home page description"
    }
    //if you want to pass more data to the index.ejs, you can add more properties to the locals object examples:
    // {locals, user: req.user, items: itemList}
    //since we are only passing locals for now, we can just pass locals directly
    res.render('index', locals);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});