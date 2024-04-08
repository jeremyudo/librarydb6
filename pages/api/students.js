import { query } from "@/lib/db";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const students = await query({
            query: "SELECT * FROM students",
            values: [],
        });

        res.status(200).json({ students: students });
    }

    if (req.method === "POST") {
        const { StudentID, FirstName, LastName, DateOfBirth, Gender, Address, ContactNumber, GuardiansName, GuardiansContactNumber, GradeYearLevel, Section, SchoolIDNumber, DateEnrolled, Status, CreatedDate, UpdatedDate, Password, EmailAddress } = req.body;
        let message = "";
    
        if (!StudentID || !FirstName || !LastName || !DateOfBirth || !Gender || !Address || !ContactNumber || !GuardiansName || !GuardiansContactNumber || !GradeYearLevel || !Section || !SchoolIDNumber || !DateEnrolled || !Status || !CreatedDate || !UpdatedDate || !Password) {
            message = "All fields are required.";
            return res.status(400).json({ response: { message: message } });
        }
    
        const addStudent = await query({
            query: "INSERT INTO students (StudentID, FirstName, LastName, DateOfBirth, Gender, Address, ContactNumber, GuardiansName, GuardiansContactNumber, GradeYearLevel, Section, SchoolIDNumber, DateEnrolled, Status, CreatedDate, UpdatedDate, Password, EmailAddress) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            values: [StudentID, FirstName, LastName, DateOfBirth, Gender, Address, ContactNumber, GuardiansName, GuardiansContactNumber, GradeYearLevel, Section, SchoolIDNumber, DateEnrolled, Status, CreatedDate, UpdatedDate, Password, EmailAddress],
        });
    
        if (addStudent.insertId) {
            message = "success";
        } else {
            message = "error";
        }
    
        res.status(200).json({ response: { message: message } });
    }    
}
