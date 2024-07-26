const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended: false}))

// routes
app.use("/api/products", productRoute)

// app.get('/', (req, res) => {
//     res.send('Hello from node api Server updated !!!')
// })


//connect mongoDB
mongoose.connect('mongodb+srv://guramijibladze:ivZsK5YoGOCF9e6Y@backenddb.cvmxlwq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('Connected to database!');
    app.listen(3000, () => {
        console.log('server is running on port 3000')
    })
  })
  .catch(() => console.log('connection faild!'))

  app.get('/', async (req, res) => {
    res.send('Hello from node api Server updated !!!')

    try {
      // აქ შეგიძლიათ მონაცემთა ბაზასთან ოპერაციების შესრულება
      const data = await Product.find({});
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


  //mongodb+srv://guramijibladze:ivZsK5YoGOCF9e6Y@backenddb.cvmxlwq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB
  // ivZsK5YoGOCF9e6Y