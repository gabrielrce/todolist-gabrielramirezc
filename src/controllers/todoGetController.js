const Todo = require("../models/Todo");

module.exports.showAll = (req, res) => {
  Todo.find({}, (error, todos) => {
    if (error) {
      return res.status(500).json({ message: "Error showing todos" });
    }

    res.status(201).json(todos);
  });
};

module.exports.showById = (req, res) => {
  const { id } = req.params;
  Todo.findById(id, function (err, todo) {
    if (err) {
      console.log(err);
    } else {
      res.send(todo);
    }
  });
};

module.exports.create = (req, res) => {
  const todo = new Todo({
    text: req.body.text,
    done: req.body.done,
  });

  if (todo.text.length === 0 || todo.done !== (true || false)) {
    return res.status(500).json({
      message: "Error in some of the paramters.",
    });
  }

  todo.save(function (error, todo) {
    if (error) {
      return res.status(500).json({
        message: "Error creating the todo list. ",
      });
    }
    res.redirect("/todos");
  });
};

module.exports.editById = (req, res) => {
  const { id } = req.params;
  const text = req.body.text;
  const done = req.body.done;

  if (text.length === 0) {
    return res.status(500).json({
      message: "Cannot update text to a blank space.",
    });
  }

  Todo.findByIdAndUpdate(id, { text: text, done: done }, function (err, todo) {
    if (err) {
      return res.status(500).json({
        message: "Error updating some of the paramters.",
      });
    } else {
      res.status(200).json({
        message: "Todo list updated succesfully.",
      });
    }
  });
};

module.exports.delete = (req, res) => {
  const { id } = req.params;
  Todo.findByIdAndRemove(id, function (err, todos) {
    if (err) {
      res.send(err);
    } else {
      res.status(200).json({
        message: "Todo list deleted succesfully.",
      });
    }
  });
};
