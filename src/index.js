const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const app = express();

// Sử dụng Morgan để log request
app.use(morgan("dev"));

// Cấu hình Handlebars làm view engine
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));
console.log(__dirname)

const route = require("./routes");
// Routes init
route(app)

app.listen(3000, () => {
    console.log("Server chạy tại http://localhost:3000");
});
