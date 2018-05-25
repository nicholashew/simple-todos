const todoController = require('../controllers/todo');

module.exports = function(app) {
  app.route('/api/todos')
    .get(todoController.getTodos)
    .post(todoController.addTodo);

  app.route('/api/todos/:todoId')
    .get(todoController.getTodo)
    .put(todoController.updateTodo)
    .delete(todoController.deleteTodo);
};