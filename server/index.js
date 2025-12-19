require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Project, Client, Contact, Subscriber } = require("./models/Schemas");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch((err) => console.log(err));

app.get("/api/projects", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

app.get("/api/clients", async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

app.post("/api/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: "Contact saved" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/subscribe", async (req, res) => {
  try {
    const newSub = new Subscriber({ email: req.body.email });
    await newSub.save();
    res.status(201).json({ message: "Subscribed" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/admin/projects", async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
});

app.post("/api/admin/clients", async (req, res) => {
  const client = new Client(req.body);
  await client.save();
  res.json(client);
});

app.get("/api/admin/contacts", async (req, res) => {
  const contacts = await Contact.find().sort({ date: -1 });
  res.json(contacts);
});

app.get("/api/admin/subscribers", async (req, res) => {
  const subs = await Subscriber.find().sort({ date: -1 });
  res.json(subs);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
