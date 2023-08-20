const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";
// mongoose.set("strictQuery", false)
// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany();
  })
  .then(() => {
    const recipe1 = {
      title: "Chicken Soup",
      level: "Easy Peasy",
      ingredients: ["chicken", "onion", "tomato", "green chilli"],
      cuisine: "Indian",
      dishType: "soup",
      image: "soup",
      duration: 15,
      creator: "Sunitha",
      created: "1987-09-28",
    };
    Recipe.create(recipe1)
      .then((user) => {
        console.log(user.title);
      })
      .catch((error) => {
        console.log("there is a error while creating recipe", error);
      });

    // Run your code here, after you have insured that the connection was made
  })
  .catch((error) => {
    console.error("Error", error);
  })

  .then(() => {
    Recipe.create(data)
    .then(() => {
      Recipe.updateOne(
        { title: "Rigatoni alla Genovese" },
        { $set: { duration: 100 } }
      )
        .then((user) => {
          console.log("Duration successfully updated");
        })
        .catch((error) => {
          console.log("there is a error while updating recipe", error);
        });
      Recipe.deleteOne({ title: "Carrot Cake" })
      .then(()=>{
        console.log("deleted successfully")
      })
    });
    
    // Run your code here, after you have insured that the connection was made
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  }).catch((error) => {
    console.error("Error connecting to the database", error);
  });

