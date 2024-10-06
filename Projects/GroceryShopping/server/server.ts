import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";
import { pool } from "./database.js";
import "./reset.js";

const app = express();

/**
 * Dependencies configurations
 */

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello, world!" });
});

app.get("/groceries", async (req: Request, res: Response) => {
  try {
    const { rows } = await pool.query("SELECT * FROM groceries");
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: "Not able to fetch groceries" });
  }
});

app.post("/groceries", async (req: Request, res: Response) => {
  const { name, category, quantity, note, picture } = req.body;

  try {
    await pool.query(
      "INSERT INTO groceries (name, category, quantity, note, picture) VALUES ($1, $2, $3, $4, $5)",
      [name, category, quantity, note, picture]
    );
    res.status(200).json({ message: "Grocery added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Not Able to add grocery" });
  }
});

app.put("/groceries/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, category, quantity, note, picture } = req.body;

  try {
    await pool.query(
      "UPDATE groceries SET name = $1, category = $2, quantity = $3, note = $4, picture = $5 WHERE id = $6",
      [name, category, quantity, note, picture, id]
    );
    res.status(200).json({ message: "Grocery updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Not able to update grocery" });
  }
});

app.delete("/groceries/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    await pool.query("DELETE FROM groceries WHERE id = $1", [id]);
    res.status(200).json({ message: "Grocery deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Not able to delete grocery" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
