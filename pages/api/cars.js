import { query } from "@/lib/db";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const cars = await query({
            query: "SELECT * FROM cars",
            values: [],
        });

        res.status(200).json({cars: cars});
    }

    if (req.method === "POST") {
        const { make, model, year } = req.body;
        let message = "";

        if (!make || !model || !year) {
            message = "Make, model, and year are required fields.";
            return res.status(400).json({ response: { message: message } });
        }

        const addCars = await query({
            query: "INSERT INTO cars (make, model, year) VALUES (?, ?, ?)",
            values: [make, model, year],
        });

        if (addCars.insertId) {
            message = "success";
        } else {
            message = "error";
        }

        res.status(200).json({ response: { message: message } });
    }
}