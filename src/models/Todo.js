const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  text: String,
  date: { type: Date, default: Date.now },
  done: Boolean,
});

module.exports = mongoose.model("todo", todoSchema);
