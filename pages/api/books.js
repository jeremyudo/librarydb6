import { query } from "@/lib/db";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const books = await query({
            query: "SELECT * FROM books",
            values: [],
        });

        res.status(200).json({books: books});
    }

    if (req.method === "POST") {
        const { ISBN, Title, Authors } = req.body;
        let message = "";

        if (!ISBN || !Title || !Authors) {
            message = "ISBN, Title, and Authors are required fields.";
            return res.status(400).json({ response: { message: message } });
        }

        const addBooks = await query({
            query: "INSERT INTO books (ISBN, Title, Authors) VALUES (?, ?, ?)",
            values: [ISBN, Title, Authors],
        });

        if (addBooks.insertId) {
            message = "success";
        } else {
            message = "error";
        }

        res.status(200).json({ response: { message: message } });
    }
}