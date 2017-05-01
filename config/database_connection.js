const mongoose = require('mongoose');


module.exports = () => {

  mongoose.connect("mongodb://localhost/personal-website");

  console.log(" 📁 📂 🗄 DATABSE RUNNING🗄 📂 📁")

}
