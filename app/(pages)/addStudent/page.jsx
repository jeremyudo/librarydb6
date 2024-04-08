"use client";
import React, { useEffect, useState, useRef } from 'react';
import './add_student.css'; // Make sure the CSS file is correctly linked
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import styles from "@/styles/Home.module.scss";


function addStudentPage() {
  const [staffID, setStudentID] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [guardiansName, setGuardiansName] = useState('');
  const [guardiansContactNumber, setGuardiansContactNumber] = useState('');
  const [gradeYearLevel, setGradeYearLevel] = useState('');
  const [section, setSection] = useState('');
  const [schoolIDNumber, setSchoolIDNumber] = useState('');
  const [dateEnrolled, setDateEnrolled] = useState('');
  const [status, setStatus] = useState('');
  const [createdDate, setCreatedDate] = useState('');
  const [updatedDate, setUpdatedDate] = useState('');
  const [password, setPassword] = useState('');

  const [students, setStudents] = useState([]);

  const studentStudentIDRef = useRef();
  const studentStudentFirstNameRef = useRef();
  const studentStudentLastNameRef = useRef();
  const studentDateOfBirthRef = useRef();
  const studentGenderRef = useRef();
  const studentAddressRef = useRef();
  const studentContactNumberRef = useRef();
  const studentEmailAddressRef = useRef();
  const studentGuardiansNameRef = useRef();
  const studentGuardiansContactNumberRef = useRef();
  const studentGradeYearLevelRef = useRef();
  const studentSectionRef = useRef();
  const studentSchoolIDNumberRef = useRef();
  const studentDateEnrolledRef = useRef();
  const studentStatusRef = useRef();
  const studentCreatedDateRef = useRef();
  const studentUpdatedDateRef = useRef();
  const studentPasswordRef = useRef();

  const [created, setCreated] = useState(false);

  async function addStudent() {
    // Implement functionality to add student to database
    const studentID = studentStudentIDRef.current.value.trim();
    const firstName = studentStudentFirstNameRef.current.value.trim();
    const lastName = studentStudentLastNameRef.current.value.trim();
    const dateOfBirth = studentDateOfBirthRef.current.value.trim();
    const gender = studentGenderRef.current.value.trim();
    const address = studentAddressRef.current.value.trim();
    const contactNumber = studentContactNumberRef.current.value.trim();
    const emailAddress = studentEmailAddressRef.current.value.trim();
    const guardiansName = studentGuardiansNameRef.current.value.trim();
    const guardiansContactNumber = studentGuardiansContactNumberRef.current.value.trim();
    const gradeYearLevel = studentGradeYearLevelRef.current.value.trim();
    const section = studentSectionRef.current.value.trim();
    const schoolIDNumber = studentSchoolIDNumberRef.current.value.trim();
    const dateEnrolled = studentDateEnrolledRef.current.value.trim();
    const status = studentStatusRef.current.value.trim();
    const createdDate = studentCreatedDateRef.current.value.trim();
    const updatedDate = studentUpdatedDateRef.current.value.trim();
    const password = studentPasswordRef.current.value.trim();

    // Validate input
    if (studentID.length < 3 || firstName.length === 0 || lastName.length === 0) return;
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        StudentID: studentID,
        FirstName: firstName,
        LastName: lastName,
        DateOfBirth: dateOfBirth,
        Gender: gender,
        Address: address,
        ContactNumber: contactNumber,
        EmailAddress: emailAddress,
        GuardiansName: guardiansName,
        GuardiansContactNumber: guardiansContactNumber,
        GradeYearLevel: gradeYearLevel,
        Section: section,
        SchoolIDNumber: schoolIDNumber,
        DateEnrolled: dateEnrolled,
        Status: status,
        CreatedDate: createdDate,
        UpdatedDate: updatedDate,
        Password: password,
      }),
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/students`,
      postData
    );
    const response = await res.json();
    console.log(response);
    if (response.response.message !== "success") return;
    const newstudent = response.response.student;
    setStudents([
      ...students,
      {
        StudentID: newstudent.StudentID,
        FirstName: newstudent.FirstName,
        LastName: newstudent.LastName,
        DateOfBirth: newstudent.DateOfBirth,
        Gender: newstudent.Gender,
        Address: newstudent.Address,
        ContactNumber: newstudent.ContactNumber,
        EmailAddress: newstudent.EmailAddress,
        GuardiansName: newstudent.GuardiansName,
        GuardiansContactNumber: newstudent.GuardiansContactNumber,
        GradeYearLevel: newstudent.GradeYearLevel,
        Section: newstudent.Section,
        SchoolIDNumber: newstudent.SchoolIDNumber,
        DateEnrolled: newstudent.DateEnrolled,
        Status: newstudent.Status,
        CreatedDate: newstudent.CreatedDate,
        UpdatedDate: newstudent.UpdatedDate,
        Password: newstudent.Password,
      },
    ]);
    setCreated(true);
  };

  async function getStudents() {
    const postData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/students`,
      postData
    );
    
    const response = await res.json();
    console.log(response.students);
    setStudents(response.students);   
  };

  const updateStudent = () => {

  };

  const deleteStudent = () => {

  };


  useEffect(() => {
    getStudents();
  },[]);

  return (
    <div>
      <Navbar />
      <div style={{ margin: "100px 0" }}></div> {/* Empty div for spacing */}
      <div className={styles.read}>
        <h2>Read</h2>
        <div className={styles.student}>
          {students.map((item, index) => {
            return (
              <div key={item.StudentID} className={styles.student}>
                <span>Student ID</span>: {item.StudentID} {" "}
                <span>First Name</span>: {item.FirstName} {" "}
                <span>Last Name</span>: {item.LastName} {" "}
                <span>Date of Birth</span>: {item.DateOfBirth} {" "}
                <span>Gender</span>: {item.Gender} {" "}
                <span>Address</span>: {item.Address} {" "}
                <span>Contact Number</span>: {item.ContactNumber} {" "}
                <span>E-Mail Address</span>: {item.EmailAddress} {" "}
                <span>Gaurdian's Name</span>: {item.GuardiansName} {" "}
                <span>Gaurdian's Contact Number</span>: {item.GuardiansContactNumber} {" "}
                <span>Grade Year Level</span>: {item.GradeYearLevel} {" "}
                <span>Section</span>: {item.Section} {" "}
                <span>School ID Number</span>: {item.SchoolIDNumber} {" "}
                <span>Date Enrolled</span>: {item.DateEnrolled} {" "}
                <span>Status</span>: {item.Status} {" "}
                <span>Created Date</span>: {item.CreatedDate} {" "}
                <span>Updated Date</span>: {item.UpdatedDate} {" "}
                <span>Password</span>: {item.Password} {" "}
                <br /> 
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ margin: "100px 0" }}></div> {/* Empty div for spacing */}
      <div className="addStudentContainer">
        <div className="formContainer">
          <h1 id="heading">Add Student</h1>
          <div className="inputGroup">
            <label htmlFor="StudentIDinput">Student ID:</label>
            <input 
              type="text" 
              ref={studentStudentIDRef}
              id="studentIDInput" 
              name="studentID"
              value={staffID} 
              onChange={(e) => setStudentID(e.target.value)} 
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="firstNameInput">First Name:</label>
            <input 
              type="text"
              ref={studentStudentFirstNameRef} 
              id="firstNameInput" 
              name="firstName"
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="lastNameInput">Last Name:</label>
            <input 
              type="text"
              ref={studentStudentLastNameRef} 
              id="lastNameInput" 
              name="lastName"
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="dateOfBirthInput">Date of Birth:</label>
            <input 
              type="text"
              ref={studentDateOfBirthRef} 
              id="dateOfBirthInput" 
              name="dateOfBirth"
              value={dateOfBirth} 
              onChange={(e) => setDateOfBirth(e.target.value)} 
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="genderInput">Gender:</label>
            <input 
              type="text"
              ref={studentGenderRef} 
              id="genderInput" 
              name="gender"
              value={gender} 
              onChange={(e) => setGender(e.target.value)} 
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="addressInput">Address:</label>
            <input 
              type="text"
              ref={studentAddressRef} 
              id="addressInput" 
              name="address"
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="contactNumberInput">Contact Number:</label>
            <input 
              type="text"
              ref={studentContactNumberRef} 
              id="contactNumberInput" 
              name="contactNumber"
              value={contactNumber} 
              onChange={(e) => setContactNumber(e.target.value)} 
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="emailAddressInput">E-Mail Address:</label>
            <input 
              type="text"
              ref={studentEmailAddressRef} 
              id="emailAddressInput" 
              name="emailAddress"
              value={emailAddress} 
              onChange={(e) => setEmailAddress(e.target.value)} 
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="guardiansNameInput">Guardian's Name:</label>
            <input 
              type="text"
              ref={studentGuardiansNameRef} 
              id="guardiansNameInput" 
              name="guardiansName"
              value={guardiansName} 
              onChange={(e) => setGuardiansName(e.target.value)} 
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="guardiansContactNumberInput">Guardian's Contact Number:</label>
            <input 
              type="text"
              ref={studentGuardiansContactNumberRef} 
              id="guardiansContactNumberInput" 
              name="guardiansContactNumber"
              value={guardiansContactNumber} 
              onChange={(e) => setGuardiansContactNumber(e.target.value)} 
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="gradeYearLevelInput">Grade Year Level:</label>
            <input 
              type="text"
              ref={studentGradeYearLevelRef} 
              id="gradeYearLevelInput" 
              name="gradeYearLevel"
              value={gradeYearLevel} 
              onChange={(e) => setGradeYearLevel(e.target.value)} 
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="sectionInput">Section:</label>
            <input 
              type="text"
              ref={studentSectionRef} 
              id="sectionInput" 
              name="section"
              value={section} 
              onChange={(e) => setSection(e.target.value)} 
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="schoolIDNumberInput">School ID Number:</label>
            <input 
              type="text"
              ref={studentSchoolIDNumberRef} 
              id="schoolIDNumberInput" 
              name="schoolIDNumber"
              value={schoolIDNumber} 
              onChange={(e) => setSchoolIDNumber(e.target.value)} 
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="dateEnrolledInput">Date Enrolled:</label>
            <input 
              type="text"
              ref={studentDateEnrolledRef} 
              id="dateEnrolledInput" 
              name="dateEnrolled"
              value={dateEnrolled} 
              onChange={(e) => setDateEnrolled(e.target.value)} 
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="statusInput">Status:</label>
            <input 
              type="text"
              ref={studentStatusRef} 
              id="statusInput" 
              name="status"
              value={status} 
              onChange={(e) => setStatus(e.target.value)} 
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="createdDateInput">Created Date:</label>
            <input 
              type="text"
              ref={studentCreatedDateRef} 
              id="createdDateInput" 
              name="createdDate"
              value={createdDate} 
              onChange={(e) => setCreatedDate(e.target.value)} 
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="updatedDateInput">Updated Date:</label>
            <input 
              type="text"
              ref={studentUpdatedDateRef} 
              id="updatedDateInput" 
              name="updatedDate"
              value={updatedDate} 
              onChange={(e) => setUpdatedDate(e.target.value)} 
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="passwordInput">Password:</label>
            <input 
              type="text"
              ref={studentPasswordRef} 
              id="passwordInput" 
              name="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button onClick={addStudent}>Add Student</button>
        </div>
      </div>
    </div>
  );
}

export default addStudentPage;
