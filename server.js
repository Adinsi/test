require("dotenv").config({ path: "./config/.env" });
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const UserRoutes = require("./routes/userRoutes");
const PostRoutes = require("./routes/postRoutes");
const UserModel = require("./models/user");
const multer = require("multer");
const { uploadErrors } = require("./utils/error");

require("./config/db");
const cors = require("cors");
const { checkUser, requireAuth } = require("./middleware/auth.middleware");

const app = express();

const corsOption = {
  origin: process.env.CLIENT_URL,
  Credential: true,
  allowedHeaders: ["sessionId", "content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors({ credentials: true, origin: `http://localhost:3000` }));
app.use(cookieParser());
app.use(bodyParser.json()); // Transformer les body en json
app.use(bodyParser.urlencoded({ extended: true }));

// jwt

//routes
app.use("/api/user", UserRoutes);
app.use("/api/post", PostRoutes);

//Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./client/public/image");
  },
  filename: (req, file, cb) => {
    cb(null, `${req.body.name}.jpg`);
  },
});
const upload = multer({ storage: storage });
app.post("/single", upload.single("image"), async (req, res) => {
  // console.log(req.file);
  try {
    if (
      req.file.detectedMineType != "image/jpg" &&
      req.file.detectedMineType != "image/png" &&
      req.file.detectedMineType != "image/jpeg"
    )
      throw Error("Invalid File");

    if (req.file.size > 500000) throw Error("max size");
  } catch (error) {
    // const errors = uploadErrors(error);
    // res.status(400).json({ error });
  }

  const filename = req.body.prenom;
  try {
    await UserModel.findByIdAndUpdate(
      req.body.userId,
      {
        $set: { picture: `../image/${req.body.name}.jpg` },
      },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      },
      (error, docs) => {
        if (!error) {
          return res.status(200).json(docs);
        } else return res.send(error);
      }
    );
  } catch (error) {
    // return res.send(error);
  }
});

//server
app.listen(process.env.PORT, () =>
  console.log(`Listen to port ${process.env.PORT}`)
);
