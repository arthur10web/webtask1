const db = require("../db");
class cupController {
  async createCup(req, res) {
    const {
      title,
      excerpt,
      place,
      user_id
    } = req.body;
    const newCup = await db.query(
      `INSERT INTO cups (title, excerpt,place, user_id) VALUES ($1, $2,$3, $4) RETURNING *`,
      [title, excerpt, place, user_id]
    );
    res.json(newCup.rows[0]);
  }

  async getAllCups(req, res) {
    const getCups = await db.query(`SELECT * FROM cups `);
    res.json(getCups.rows);
  }
  async getCupById(req, res) {
    const id = req.params.id;
    const getCup = await db.query(`SELECT * FROM cups WHERE id=$1`, [id]);
    res.json(getCup.rows);
  }
  async deleteCup(req, res) {
    const id = req.params.id;
    const user = await db.query(`DELETE FROM cups WHERE id=$1`, [id]);
    res.json(user.rows[0]);
  }
  async updateCup(req, res) {
    const id = req.params.id;
    const cup = await db.query(`SELECT * FROM cups WHERE id=$1`, [id]);
    console.log(cup.rows[0]);
    const {
      title = cup.rows[0].title,
        excerpt = cup.rows[0].excerpt,
        place = cup.rows[0].place,
        user_id = cup.rows[0].user_id,
    } = req.body;

    const updatedCup = await db.query(
      `UPDATE cups SET title= $1, excerpt=$2, place=$3,user_id=$4 WHERE id = $5 RETURNING *`,
      [title, excerpt, place, user_id, id]
    );

    res.json(updatedCup.rows[0]);
  }
}

module.exports = new cupController();