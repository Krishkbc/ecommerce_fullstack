import db from "../database/db.js";

export const showCartItems = (user_id) => {
  const query = `
    SELECT cart.product_id 
    FROM cart 
    LEFT JOIN users ON cart.user_id = users.id 
    WHERE cart.user_id = ?;
  `;
  return new Promise((resolve, reject) => {
    db.query(query, [user_id], (err, rows) => {
      if (err) {
        console.error("Error fetching cart items:", err);
        return reject(err);
      }
      resolve(rows);
    });
  });
};

export const addToCart = (user_id, product_id, quantity) => {
  const query = `
    INSERT INTO cart (user_id, product_id, quantity)
    VALUES (?, ?, ?)
  `;
  return new Promise((resolve, reject) => {
    db.query(query, [user_id, product_id, quantity], (err, result) => {
      if (err) {
        console.error("Error adding to cart:", err);
        return reject(err);
      }
      resolve(result);
    });
  });
};

// but what if we have to check if the user with same product exist or not
export const checkIfProductInCart = (user_id, product_id) => {
  const query = `
    SELECT *
    FROM cart
    WHERE user_id = ? AND product_id = ?
  `;
  return new Promise((resolve, reject) => {
    db.query(query, [user_id, product_id], (err, rows) => {
      if (err) {
        console.error("Error checking cart item:", err);
        return reject(err);
      }
      resolve(rows.length > 0 ? rows[0] : null);
    });
  });
};

export const incrementCartQuantity = (
  user_id,
  product_id,
  additionalQuantity
) => {
  const query = `
    UPDATE cart
    SET quantity = quantity + ?
    WHERE user_id = ? AND product_id = ?
  `;
  return new Promise((resolve, reject) => {
    db.query(
      query,
      [additionalQuantity, user_id, product_id],
      (err, result) => {
        if (err) {
          console.error("Error incrementing cart quantity:", err);
          return reject(err);
        }
        resolve(result);
      }
    );
  });
};

export const decreaseCartQuantity = (user_id, product_id, quantity) => {
  const query = `
    UPDATE cart 
    SET quantity = quantity - ? 
    WHERE user_id = ? AND product_id = ?
  `;
  return new Promise((resolve, reject) => {
    db.query(query, [quantity, user_id, product_id], (err, result) => {
      if (err) {
        console.error("Error decreasing cart quantity:", err);
        return reject(err);
      }
      resolve(result);
    });
  });
};

export const removeFromCart = (user_id, product_id) => {
  const query = `DELETE FROM cart WHERE user_id = ? AND product_id = ?`;
  return new Promise((resolve, reject) => {
    db.query(query, [user_id, product_id], (err, result) => {
      if (err) {
        console.error("Error removing from cart:", err);
        return reject(err);
      }
      resolve(result);
    });
  });
};
