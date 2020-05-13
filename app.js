const express           = require('express');
const mongoose          = require('mongoose');
const authRoutes        = require('./routes/auth');
const verifyRoutes      = require('./routes/verifyToken');
const bodyParser        = require('body-parser');
const secretRoutes      = require("./routes/secret");
const app               = express();

mongoose.set('useCreateIndex', true)
mongoose.connect("mongodb://localhost/auth_app", {useUnifiedTopology: true,  useNewUrlParser: true }).then(() => console.log('DB Connected!')).catch(err => {
console.log("DB Connection Error: ");
});

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/",authRoutes);
app.use("/",secretRoutes);
app.use("/",verifyRoutes);

app.listen(process.env.PORT||3000,function(){
    console.log("App started");
})