const mongoose = require("mongoose");
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_PASS}@cluster0.gvuvc3a.mongodb.net/?retryWrites=true&w=majority`,

    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected to  mongo Db"))
  .catch((error) => {
    console.log("Failled to " + error);    
  });
 
