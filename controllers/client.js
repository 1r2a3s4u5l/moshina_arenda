const db = require("../config/db");

exports.getAllclient = (req, res) => {
  db.query("SELECT * FROM client", (error, results) => {
    if (error) {
      console.log("clientda xato:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

exports.getclientByid = (req, res) => {
  const clientId = req.params.id;
  db.query(
    "SELECT * FROM client WHERE id = ?",
    [clientId],
    (error, results) => {
      if (error) {
        console.log("Error retrieving client: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "client not found" });
      }
      res.json(results[0]);
    }
  );
};








exports.createclient = (req, res) => {
  const {  first_name,last_name,birthday,passport,driver_listense,address,phone} = req.body;
  db.query(
    "insert into client( first_name,last_name,birthday,passport,driver_listense,address,phone) values(?,?,?,?,?,?,?);",
    [ first_name,last_name,birthday,passport,driver_listense,address,phone,last_name],
    (error, results) => {
      if (error) {
        console.log("Error creating client: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log(results);
      res.json({
        message: "client created successfully",
        clientId: results.insertId,
      });
    }
  );
};

exports.updateclient = (req, res) => {
  const clientId = req.params.id;
  const {  first_name,last_name,birthday,passport,driver_listense,address,phone } = req.body;
  db.query(
    "UPDATE client SET  first_name = ?,last_name = ?,birthday = ?,passport = ?,driver_listense = ?,address = ?,phone = ? WHERE id = ?",
    [first_name,last_name,birthday,passport,driver_listense,address,phone, clientId],
    (error, results) => {
      if (error) {
        console.log("Error updating client: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "client updating successfully" });
    }
  );
};

exports.deleteclient = (req, res) => {
  const clientId = req.params.id;
  db.query("DELETE FROM client WHERE id = ?", [clientId], (error, results) => {
    if (error) {
      console.log("Error deleting client: ", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json({ message: "client deleted successfully" });
  });
};

