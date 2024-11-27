const express = require("express");
const mongoose = require("mongoose");
const formDataRoutes = require("./Routes/FormDataRoutes");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const corsOptions = {
//   origin: "http://localhost:5000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
const app = express();
// app.use(cors(corsOptions));
app.use(cors());

app.use(cookieParser());

const port = process.env.PORT || 5000;

// mongoose.connect('mongodb+srv://deepikadeepika7684:Deepu@cluster0.jgs6vt6.mongodb.net/MasterDetailing?retryWrites=true&w=majority&appName=Cluster0', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/formdata", formDataRoutes);

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// app.get("/", (req, res) => {
//   res.cookie("visited", "true", { maxAge: 86400000 });
//   res.render("index", { cookieData: req.cookies });
// });
// app.get("/", (req, res) => {
//   // Setting the cookie
//   res.cookie("visited", "true", { maxAge: 86400000 });

//   // Your response logic
// });

// const Consent = mongoose.model("Consent", {
//   allowed: Boolean,
//   timestamp: { type: Date, default: Date.now },
// });

// app.post("/consent", async (req, res) => {
//   const { allowed } = req.body;

//   try {
//     // Save consent data to the database
//     const consent = new Consent({ allowed });
//     await consent.save();
//     res.status(201).send("Consent saved successfully.");
//   } catch (err) {
//     console.error("Error saving consent:", err);
//     res.status(500).send("Error saving consent.");
//   }
// });

app.get("/", (req, res) => {
  if (req.cookies.visited) {
    res.send("Welcome back! You have visited this site before.");
  } else {
    res.cookie("visited", "true", { maxAge: 86400000 }); // Set visited cookie with a maximum age of 24 hours
    res.send("Welcome! This is your first visit to this site.");
  }
});

// app.use(cors(
//   {
//     origin:["https://cardetailngstyle-khsq.vercel.app"],
//     methods:["POST","GET"],
//     credentials:true
//   }
// ));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



