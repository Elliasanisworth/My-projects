const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const expressSession = require("express-session");
const flash = require("connect-flash");

require("dotenv").config();

const ownerRouter = require("./routes/ownerRouter");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const indexRouter = require("./routes/index");

const db  =  require("./config/mongoose-connection");
 
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(
    expressSession({
        secret: process.env.EXPRESS_SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);
app.use(flash());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/owner", ownerRouter);
app.use("/users", userRouter);
app.use("/product", productRouter);

app.use((err, req, res,next) => {
    console.error(err.stack);
    res.status(500).send("something went wrong!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('server is running an port 3000')
});