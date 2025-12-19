const mongoose = require('mongoose');

// Project Schema
const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String, // Storing URL for simplicity in this task
});

// Client Schema ("Happy Clients")
const ClientSchema = new mongoose.Schema({
  name: String,
  designation: String,
  description: String,
  imageUrl: String,
});

// Contact Form Schema
const ContactSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  mobile: String,
  city: String,
  date: { type: Date, default: Date.now }
});

// Newsletter Subscriber Schema
const SubscriberSchema = new mongoose.Schema({
  email: String,
  date: { type: Date, default: Date.now }
});

module.exports = {
  Project: mongoose.model('Project', ProjectSchema),
  Client: mongoose.model('Client', ClientSchema),
  Contact: mongoose.model('Contact', ContactSchema),
  Subscriber: mongoose.model('Subscriber', SubscriberSchema),
};