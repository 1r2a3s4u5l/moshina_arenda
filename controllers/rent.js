const db = require("../config/db");

exports.getAllrent = (req, res) => {
  db.query("SELECT * FROM rent", (error, results) => {
    if (error) {
      console.log("rentda xato:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

exports.getrentByid = (req, res) => {
  const rentId = req.params.id;
  db.query(
    "SELECT * FROM rent WHERE id = ?",
    [rentId],
    (error, results) => {
      if (error) {
        console.log("Error retrieving rent: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "rent not found" });
      }
      res.json(results[0]);
    }
  );
};








exports.createrent = (req, res) => {
  const {  car_id,rent_id,from_date_time,to_date_time,rent_status_id,rent_type_id,amount} = req.body;
  db.query(
    "insert into rent( car_id,rent_id,from_date_time,to_date_time,rent_status_id,rent_type_id,amount) values(?,?,?,?,?,?,?);",
    [ car_id,rent_id,from_date_time,to_date_time,rent_status_id,rent_type_id,amount,rent_id],
    (error, results) => {
      if (error) {
        console.log("Error creating rent: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log(results);
      res.json({
        message: "rent created successfully",
        rentId: results.insertId,
      });
    }
  );
};

exports.updaterent = (req, res) => {
  const rentId = req.params.id;
  const {  car_id,rent_id,from_date_time,to_date_time,rent_status_id,rent_type_id,amount } = req.body;
  db.query(
    "UPDATE rent SET  car_id = ?,rent_id = ?,from_date_time = ?,to_date_time = ?,rent_status_id = ?,rent_type_id = ?,amount = ? WHERE id = ?",
    [car_id,rent_id,from_date_time,to_date_time,rent_status_id,rent_type_id,amount, rentId],
    (error, results) => {
      if (error) {
        console.log("Error updating rent: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "rent updating successfully" });
    }
  );
};

exports.deleterent = (req, res) => {
  const rentId = req.params.id;
  db.query("DELETE FROM rent WHERE id = ?", [rentId], (error, results) => {
    if (error) {
      console.log("Error deleting rent: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ message: "rent deleted successfully" });
  });
};

