const db = require("../config/db");

exports.getAllcar = (req, res) => {
  db.query("SELECT * FROM car", (error, results) => {
    if (error) {
      console.log("carda xato:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

exports.getcarByid = (req, res) => {
  const carId = req.params.id;
  db.query(
    "SELECT * FROM car WHERE id = ?",
    [carId],
    (error, results) => {
      if (error) {
        console.log("Error retrieving car: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "car not found" });
      }
      res.json(results[0]);
    }
  );
};








exports.createcar = (req, res) => {
  const {  car_number, make, model,year,mileage,price_type_id, mijoz_id} = req.body;
  db.query(
    "insert into car( car_number, make, model,year,mileage,price_type_id) values(?,?,?,?,?,?);",
    [ car_number, make, model,year,mileage,price_type_id,mijoz_id],
    (error, results) => {
      if (error) {
        console.log("Error creating car: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log(results);
      res.json({
        message: "car created successfully",
        carId: results.insertId,
      });
    }
  );
};

exports.updatecar = (req, res) => {
  const carId = req.params.id;
  const {  car_number, make, model,year,mileage,price_type_id } = req.body;
  db.query(
    "UPDATE car SET  car_number = ?, make = ?, model = ?,year = ?,mileage = ?,price_type_id = ? WHERE id = ?",
    [ car_number, make, model,year,mileage,price_type_id, carId],
    (error) => {
      if (error) {
        console.log("Error updating car: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "car updating successfully" });
    }
  );
};

exports.deletecar = (req, res) => {
  const carId = req.params.id;
  db.query("DELETE FROM car WHERE id = ?", [carId], (error, results) => {
    if (error) {
      console.log("Error deleting car: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ message: "car deleted successfully" });
  });
};

