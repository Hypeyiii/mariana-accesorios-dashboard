import { db } from "@vercel/postgres";

export async function getUsers() {
  let client;

  try {
    client = await db.connect();
    const data = await client.query(
      `SELECT 
         u.*, 
         COUNT(o.id) AS order_count, 
         COALESCE(SUM(o.amount), 0) AS total_amount
       FROM users u
       LEFT JOIN orders o ON u.id = o.userid
       GROUP BY u.id`
    );
    const users = data.rows;
    return users;
  } catch (err) {
    console.error("Error fetching users:", err);
    return [];
  } finally {
    if (client) {
      client.release();
    }
  }
}

export async function getUserById({ id }: { id: string }) {
  let client;

  try {
    client = await db.connect();
    const data = await client.query(`SELECT * FROM users WHERE id = $1`, [id]);
    const user = data.rows[0];
    return user;
  } catch (err) {
    console.error("Error fetching user by id:", err);
    return null;
  } finally {
    if (client) {
      client.release();
    }
  }
}

export async function getLatestUsers() {
  let client;

  try {
    client = await db.connect();
    const data = await client.query(
      `SELECT * FROM users ORDER BY created_at DESC LIMIT 5`
    );
    const users = data.rows;
    return users;
  } catch (err) {
    console.error("Error fetching latest users:", err);
    return [];
  } finally {
    if (client) {
      client.release();
    }
  }
}

export async function getMonthlyUserData() {
  return [
    { month: "Jan", users: 10 },
    { month: "Feb", users: 20 },
    { month: "Mar", users: 50 },
    { month: "Apr", users: 80 },
    { month: "May", users: 70 },
    { month: "Jun", users: 90 },
    { month: "Jul", users: 60 },
    { month: "Aug", users: 50 },
    { month: "Sep", users: 40 },
    { month: "Oct", users: 100 },
    { month: "Nov", users: 70 },
    { month: "Dec", users: 80 },
  ];
}

export async function getUsersRegisterByMonth({ month }: { month: string }) {
  let client;

  try {
    client = await db.connect();
    const data = await client.query(
      `SELECT COUNT(*) FROM users WHERE EXTRACT(MONTH FROM created_at) = $1`,
      [month]
    );
    const users = data.rows[0].count;
    return users;
  } catch (err) {
    console.error("Error fetching users registered by month:", err);
    return 0;
  } finally {
    if (client) {
      client.release();
    }
  }
}

export async function editUser({
  id,
  username,
  email,
  role,
}: {
  id: string;
  username: string;
  email: string;
  role: string;
}) {
  let client;

  try {
    client = await db.connect();
    const data = await client.query(
      `UPDATE users
       SET username = $1, email = $2, role = $3
       WHERE id = $4`,
      [username, email, role, id]
    );
    return data;
  } catch (err) {
    console.error("Error editing user:", err);
    return null;
  } finally {
    if (client) {
      client.release();
    }
  }
}

export async function getOrders() {
  let client;

  try {
    client = await db.connect();
    const data = await client.query(
      `SELECT 
         o.*,
         u.*
       FROM orders o
       JOIN users u ON o.userid = u.id`
    );
    const users = data.rows;
    return users;
  } catch (err) {
    console.error("Error fetching orders:", err);
    return [];
  } finally {
    if (client) {
      client.release();
    }
  }
}

export async function getLatestOrders() {
  let client;

  try {
    client = await db.connect();
    const data = await client.query(
      `SELECT 
         o.*,
         u.*
       FROM orders o
       JOIN users u ON o.userid = u.id
       ORDER BY o.created_at DESC
       LIMIT 5`
    );
    const ordersWithUserInfo = data.rows;
    return ordersWithUserInfo;
  } catch (err) {
    console.error("Error fetching latest orders:", err);
    return [];
  } finally {
    if (client) {
      client.release();
    }
  }
}

export async function getPendingOrders() {
  let client;

  try {
    client = await db.connect();
    const data = await client.query(
      `SELECT * FROM orders where status = 'pending'`
    );
    const users = data.rows;
    return users;
  } catch (err) {
    console.error("Error fetching orders:", err);
    return [];
  } finally {
    if (client) {
      client.release();
    }
  }
}

export async function getTotalAmount() {
  let client;

  try {
    client = await db.connect();
    const data = await client.query(`SELECT SUM(amount) FROM orders`);
    const users = data.rows[0].sum;
    return users;
  } catch (err) {
    console.error("Error fetching total amount:", err);
    return 0;
  } finally {
    if (client) {
      client.release();
    }
  }
}

export async function getLatestProducts() {
  let client;

  try {
    client = await db.connect();
    const data = await client.query(
      `SELECT * from products
       ORDER BY o.created_at DESC
       LIMIT 5`
    );
    const products = data.rows;
    return products;
  } catch (err) {
    console.error("Error fetching latest orders:", err);
    return [];
  } finally {
    if (client) {
      client.release();
    }
  }
}

export async function getProducts() {
  let client;

  try {
    client = await db.connect();
    const data = await client.query(`SELECT * FROM products`);
    const products = data.rows;
    return products;
  } catch (err) {
    console.error("Error fetching products:", err);
    return [];
  } finally {
    if (client) {
      client.release();
    }
  }
}

export async function getProductByRoute({ route }: { route: string }) {
  let client;

  try {
    client = await db.connect();
    const data = await client.query(`SELECT * FROM products WHERE route = $1`, [
      route,
    ]);
    const product = data.rows[0];
    return product;
  } catch (err) {
    console.error("Error fetching product by route:", err);
    return null;
  } finally {
    if (client) {
      client.release();
    }
  }
}

export async function createProduct({
  name,
  description,
  price,
  category,
  image_url,
  stock,
  colors,
}: {
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  stock: number;
  colors: string[];
}) {
  let client;

  try {
    client = await db.connect();
    const sales = 0;
    const route = name.toLowerCase().replace(/\s/g, "-");
    const data = await client.query(
      `INSERT INTO products (name, description, price, image_url, category, stock, colors, sales, route)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [
        name,
        description,
        price,
        image_url,
        category,
        stock,
        colors,
        sales,
        route,
      ]
    );
    return data;
  } catch (err) {
    console.error("Error creating product:", err);
    return null;
  } finally {
    if (client) {
      client.release();
    }
  }
}

export async function editProduct({
  id,
  name,
  description,
  price,
  category,
  image_url,
  stock,
  colors,
}: {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  stock: number;
  colors: string[];
}) {
  let client;

  try {
    client = await db.connect();
    const route = name.toLowerCase().replace(/\s/g, "-");
    const data = await client.query(
      `UPDATE products
       SET name = $1, description = $2, price = $3, image_url = $4, category = $5, stock = $6, colors = $7, route = $8
       WHERE id = $9`,
      [name, description, price, image_url, category, stock, colors, route, id]
    );
    return data;
  } catch (err) {
    console.error("Error editing product:", err);
    return null;
  } finally {
    if (client) {
      client.release();
    }
  }
}
