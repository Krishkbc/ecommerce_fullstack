import db from "../database/db.js";

export function addToWishlist(user_id, product_id) {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO wishlist (user_id, product_id)
      VALUES (?, ?)
    `;

    db.query(query, [user_id, product_id], (err, result) => {
      if (err) {
        console.error("Error adding to wishlist:", err);
        return reject(err);
      }
      resolve(result);
    });
  });
}

export function showWishlist(user_id) {
  const query = `
SELECT product_id
FROM wishlist
WHERE user_id = ?;
  `;

  return new Promise((resolve, reject) => {
    db.query(query, [user_id], (err, rows) => {
      if (err) {
        console.error("Error showing wishlist:", err);
        return reject(err);
      }
      resolve(rows);
    });
  });
}

export function removeFromWishlist(user_id, product_id) {
  const query = `
    DELETE FROM wishlist 
    WHERE user_id = ? AND product_id = ?
  `;

  return new Promise((resolve, reject) => {
    db.query(query, [user_id, product_id], (err, result) => {
      if (err) {
        console.error("Error removing from wishlist:", err);
        return reject(err);
      }
      resolve(result);
    });
  });
}

// CREATE TABLE wishlist (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     user_id INT NOT NULL,
//     product_id INT NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     UNIQUE KEY unique_user_product (user_id, product_id),
//     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
//   );

// UNIQUE KEY unique_user_product (user_id, product_id),

// by this line i dont have to check if the product is already added for the specific user, the combination of user_id and product_id should always be unique
