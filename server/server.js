const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const categoryRoute = require("./routes/categoryRoute");
const productRoute = require("./routes/productRoute");
// const searchRoute = require("./routes/searchRoute");
const cors = require("cors");
const multer = require("multer");

app.use(express.json());
app.use(cors());

// MULTER
const storage = multer.diskStorage({
  destination: function (req, files, callback) {
    callback(null, "/files/images");
  },
  filename: function (req, files, callback) {
    callback(null, req.body.filename);
  },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("images"), async (req, res) => {
  return res.status(200).json({ msg: "Uploaded successfully" });
});

// Middleware connection
app.use("/api/files", express.static("/files/images"));
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
// app.use("/api/search", searchRoute);

// connect to mongodb database

const PORT = process.env.PORT || 5000;

const mongoConnect = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() =>
      app.listen(PORT, () => console.log(`server running on port ${PORT}`))
    )
    .catch(async (error) => {
      console.log(error.message);
      //  @ts-ignore
      setTimeout(await mongoConnect(), 3000);
    });
};
mongoConnect();
