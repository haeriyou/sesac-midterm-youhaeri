const { Todo } = require("../models/index");

/* Todos 전체 목록 불러오기 */
exports.readAll = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.send(todos);
  } catch (err) {
    console.log("Todo not found", err);
    res.status(500).send("internal server error");
  }
};

/* Todo 한 개 불러오기 */
exports.readOne = async (req, res) => {
  try {
    const { id } = req.params;
    const todos = await Todo.fineOne({
      where: { id },
    });
    res.send(todos);
  } catch (err) {
    console.log("internal server error", err);
    res.status(500).send("Todo not found");
  }
};

/* 새로운 Todo 생성 */
exports.create = async (req, res) => {
  try {
    const todos = await Todo.create(req.body);
    res.send("response");
  } catch (err) {
    console.log("internal server error", err);
    res.status(500).send("Todo not found");
  }
};

/* 기존 Todo 수정 */
exports.update = async (req, res) => {
  try {
    const todos = await Todo.update(
      { title: req.body.title },
      { where: { id: req.body.id } }
    );
    res.send(todos);
  } catch (err) {
    console.log("internal server error", err);
    res.status(500).send("Todo not found");
  }
};

/* 기존 Todo 삭제 */
exports.delete = async (req, res) => {
  try {
    const { todoId } = req.params;
    const isDeleted = await Todo.destroy({
      where: {
        id: id,
      },
    });
    if (Boolean(isDeleted)) {
      res.send("Todo deleted successfully");
    } else res.send(false);
    res.send("deleted");
  } catch (err) {
    console.log("internal server error", err);
    res.status(500).send("Todo not found");
  }
};
