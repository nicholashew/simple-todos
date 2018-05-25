const Todo = require('../models/Todo');

/**
 * GET /todos
 * Gets todo list
 */
exports.getTodos = (req, res) => {
  Todo.find({}, function (err, todos) {
    if (err)
      res.send(err);
    res.json(todos);
  });
};

/**
 * POST /todos
 * Create new todo
 */
exports.addTodo = (req, res) => {
  let newTodo = new Todo(req.body);
  newTodo.save(function (err, todo) {
    if (err)
      res.send(err);
    res.json(todo);
  });
};

/**
 * GET /todos/:todoId
 * Get todo
 */
exports.getTodo = (req, res) => {
  Todo.findById(req.params.todoId, function (err, todo) {
    if (err)
      res.send(err);
    res.json(todo);
  });
};

/**
 * PUT /todos/:todoId
 * Update todo
 */
exports.updateTodo = (req, res) => {
  Todo.findOneAndUpdate({
    _id: req.params.todoId
  }, req.body, {
    new: true
  }, function (err, todo) {
    if (err)
      res.send(err);
    res.json(todo);
  });
};

/**
 * DELETE /todos/:todoId
 * Delete todo
 */
exports.deleteTodo = (req, res) => {
  Todo.remove({
    _id: req.params.todoId
  }, function (err, todo) {
    if (err)
      res.send(err);
    res.json({
      message: 'Todo successfully deleted.'
    });
  });
};