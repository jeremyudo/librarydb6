
import { query } from "@/lib/db";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const librarians = await query({
            query: "SELECT * FROM library_staff",
            values: [],
        });

        res.status(200).json({ librarians: librarians });
    }

    if (req.method === "POST") {
        const { StaffID, FirstName, LastName, DateOfBirth, Gender, Address, ContactNumber, EmailAddress, Position, Department, JoiningDate, Salary, SupervisorID, Status, CreatedDate, UpdatedDate, Password } = req.body;
        let message = "";
    
        if (!StaffID || !FirstName || !LastName || !DateOfBirth || !Gender || !Address || !ContactNumber || !EmailAddress || !Position || !Department || !JoiningDate || !Salary || !SupervisorID || !Status || !CreatedDate || !UpdatedDate || !Password) {
            message = "All fields are required.";
            return res.status(400).json({ response: { message: message } });
        }
    
        const addLibrarian = await query({
            query: "INSERT INTO library_staff (StaffID, FirstName, LastName, DateOfBirth, Gender, Address, ContactNumber, EmailAddress, Position, Department, JoiningDate, Salary, SupervisorID, Status, CreatedDate, UpdatedDate, Password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            values: [StaffID, FirstName, LastName, DateOfBirth, Gender, Address, ContactNumber, EmailAddress, Position, Department, JoiningDate, Salary, SupervisorID, Status, CreatedDate, UpdatedDate, Password],
        });
    
        if (addLibrarian.insertId) {
            message = "success";
        } else {
            message = "error";
        }
    
        res.status(200).json({ response: { message: message } });
    }    
}
