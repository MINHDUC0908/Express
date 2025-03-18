const express = require("express"); // 🔹 Bổ sung khai báo Express
const path = require("path"); // 🔹 Bổ sung khai báo Path
const newsRouter = require('./news')
function route(app)
{
    app.get("/", (req, res) => {
        res.render("home"); // Render file home.handlebars trong thư mục views
    });
    app.get("/search", (req, res) => {
        res.render("search"); // Render file home.handlebars trong thư mục views
    });
    
    app.use(express.static(path.join(__dirname, '../public'))) // hiển thị hình ảnh


    app.use('/news', newsRouter)
}
 
module.exports = route;