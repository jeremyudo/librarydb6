import mysql from "mysql2/promise"

export default async function handler(req, res) {
    const dbconnection = await mysql.createConnection({
        host: "library-db.mysql.database.azure.com",
        database: "library",
        user: "alinabangash",
        password: "libdb123!"
    });
    try {
        const query = "SELECT make, model, year FROM cars"
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
    res.status(200).json({name: "John Doe"});
}