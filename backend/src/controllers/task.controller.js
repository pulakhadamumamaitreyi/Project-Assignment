const db = require("../config/db");

exports.createTask = (req, res) => {
  db.run(
    "INSERT INTO tasks (title, userId) VALUES (?, ?)",
    [req.body.title, req.user.id],
    () => res.json({ message: "Task created" })
  );
};

exports.getTasks = (req, res) => {
  db.all(
    "SELECT * FROM tasks WHERE userId=?",
    [req.user.id],
    (_, rows) => res.json(rows)
  );
};
