import { createConnection } from "mysql2";

const db = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "clicon",
});

db.connect((err) => {
  if (err) {
    console.log(err.message);
    return;
  }

  console.log("Database connected successfully");
});

export default db;
