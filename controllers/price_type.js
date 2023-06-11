const db = require("../config/db");

exports.getAllprice_type = (req, res) => {
  db.query("SELECT * FROM price_type", (error, results) => {
    if (error) {
      console.log("price_typeda xato:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

exports.getprice_typeByid = (req, res) => {
  const price_typeId = req.params.id;
  db.query(
    "SELECT * FROM price_type WHERE id = ?",
    [price_typeId],
    (error, results) => {
      if (error) {
        console.log("Error retrieving price_type: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "price_type not found" });
      }
      res.json(results[0]);
    }
  );
};

exports.createprice_type = (req, res) => {
  const { price_per_day, price_per_hour, late_fee_per_hour } = req.body;
  db.query(
    "insert into price_type(price_per_day,price_per_hour,late_fee_per_hour) values(?,?,?);",
    [price_per_day, price_per_hour, late_fee_per_hour],
    (error, results) => {
      if (error) {
        console.log("Error creating price_type: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log(results);
      res.json({
        message: "price_type created successfully",
        price_typeId: results.insertId,
      });
    }
  );
};

exports.updateprice_type = (req, res) => {
  const price_typeId = req.params.id;
  const { price_per_day, price_per_hour, late_fee_per_hour } = req.body;
  db.query(
    "UPDATE price_type SET price_per_day = ?,price_per_hour = ?,late_fee_per_hour = ? WHERE id = ?",
    [price_per_day, price_per_hour, late_fee_per_hour, price_typeId],
    (error) => {
      if (error) {
        console.log("Error updating price_type: ", error, results);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "price_type updating successfully" });
    }
  );
};

exports.deleteprice_type = (req, res) => {
  const price_typeId = req.params.id;
  db.query(
    "DELETE FROM price_type WHERE id = ?",
    [price_typeId],
    (error, results) => {
      if (error) {
        console.log("Error deleting price_type: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "price_type deleted successfully" });
    }
  );
};
