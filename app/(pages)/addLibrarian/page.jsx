"use client";
import React, { useEffect, useState, useRef } from 'react';
import './add_librarian.css'; // Make sure the CSS file is correctly linked
import Navbar from '@/components/Navbar';
import styles from "@/styles/Home.module.scss";


function AddLibrarianPage() {
  const [staffID, setStaffID] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [salary, setSalary] = useState('');
  const [supervisorID, setSupervisorID] = useState('');
  const [status, setStatus] = useState('');
  const [createdDate, setCreatedDate] = useState('');
  const [updatedDate, setUpdatedDate] = useState('');
  const [password, setPassword] = useState('');

  const [librarians, setLibrarians] = useState([]);

  const staffIDRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const dateOfBirthRef = useRef();
  const genderRef = useRef();
  const addressRef = useRef();
  const contactNumberRef = useRef();
  const emailAddressRef = useRef();
  const positionRef = useRef();
  const departmentRef = useRef();
  const joiningDateRef = useRef();
  const salaryRef = useRef();
  const supervisorIDRef = useRef();
  const statusRef = useRef();
  const createdDateRef = useRef();
  const updatedDateRef = useRef();
  const passwordRef = useRef();

  const addLibrarian = async () => {
    const staffID = staffIDRef.current.value.trim();
    const firstName = firstNameRef.current.value.trim();
    const lastName = lastNameRef.current.value.trim();
    const dateOfBirth = dateOfBirthRef.current.value.trim();
    const gender = genderRef.current.value.trim();
    const address = addressRef.current.value.trim();
    const contactNumber = contactNumberRef.current.value.trim();
    const emailAddress = emailAddressRef.current.value.trim();
    const position = positionRef.current.value.trim();
    const department = departmentRef.current.value.trim();
    const joiningDate = joiningDateRef.current.value.trim();
    const salary = salaryRef.current.value.trim();
    const supervisorID = supervisorIDRef.current.value.trim();
    const status = statusRef.current.value.trim();
    const createdDate = createdDateRef.current.value.trim();
    const updatedDate = updatedDateRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    // Validate input
    if (!staffID || !firstName || !lastName) return;

    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        StaffID: staffID,
        FirstName: firstName,
        LastName: lastName,
        DateOfBirth: dateOfBirth,
        Gender: gender,
        Address: address,
        ContactNumber: contactNumber,
        EmailAddress: emailAddress,
        Position: position,
        Department: department,
        JoiningDate: joiningDate,
        Salary: salary,
        SupervisorID: supervisorID,
        Status: status,
        CreatedDate: createdDate,
        UpdatedDate: updatedDate,
        Password: password,
      }),
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/librarians`, postData);
    const response = await res.json();

    if (response.response.message === "success") {
      const newLibrarian = response.response.librarian;
      setLibrarians([
        ...librarians,
        {
          StaffID: newLibrarian.StaffID,
          FirstName: newLibrarian.FirstName,
          LastName: newLibrarian.LastName,
          DateOfBirth: newLibrarian.DateOfBirth,
          Gender: newLibrarian.Gender,
          Address: newLibrarian.Address,
          ContactNumber: newLibrarian.ContactNumber,
          EmailAddress: newLibrarian.EmailAddress,
          Position: newLibrarian.Position,
          Department: newLibrarian.Department,
          JoiningDate: newLibrarian.JoiningDate,
          Salary: newLibrarian.Salary,
          SchoolIDNumber: newLibrarian.SchoolIDNumber,
          SupervisorID: newLibrarian.SupervisorID,
          Status: newLibrarian.Status,
          CreatedDate: newLibrarian.CreatedDate,
          UpdatedDate: newLibrarian.UpdatedDate,
          Password: newLibrarian.Password,
        },
      ]);
      setCreated(true);
    }
  };

  async function getLibrarians() {
    const postData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/librarians`,
      postData
    );
    
    const response = await res.json();
    console.log(response.librarians);
    setLibrarians(response.librarians);   
  };

  const updateLibrarian = () => {

  };

  const deleteLibrarian = () => {

  };

  useEffect(() => {
    getLibrarians();
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ margin: "100px 0" }}></div> {/* Empty div for spacing */}
      <div className={styles.read}>
        <h2>Read</h2>
        <div className={styles.librarian}>
          {librarians.map((item, index) => (
            <div key={item.StaffID} className={styles.librarian}>
              <span>Staff ID</span>: {item.StaffID} <br />
              <span>First Name</span>: {item.FirstName} <br />
              <span>Last Name</span>: {item.LastName} <br />
              <span>Date of Birth</span>: {item.DateOfBirth} <br />
              <span>Gender</span>: {item.Gender} <br />
              <span>Address</span>: {item.Address} <br />
              <span>Contact Number</span>: {item.ContactNumber} <br />
              <span>Email Address</span>: {item.EmailAddress} <br />
              <span>Position</span>: {item.Position} <br />
              <span>Department</span>: {item.Department} <br />
              <span>Joining Date</span>: {item.JoiningDate} <br />
              <span>Salary</span>: {item.Salary} <br />
              <span>School ID Number</span>: {item.SchoolIDNumber} <br />
              <span>Supervisor ID</span>: {item.SupervisorID} <br />
              <span>Status</span>: {item.Status} <br />
              <span>Created Date</span>: {item.CreatedDate} <br />
              <span>Updated Date</span>: {item.UpdatedDate} <br />
              <span>Password</span>: {item.Password} <br />
            </div>
          ))}
        </div>
      </div>
      <div style={{ margin: "100px 0" }}></div> {/* Empty div for spacing */}
      <div className="addLibrarianContainer">
        <div className="formContainer">
          <h1 id="heading">Add Librarian</h1>
          <div className="inputGroup">
            <label htmlFor="staffIDInput">Staff ID:</label>
            <input 
              type="text" 
              ref={staffIDRef}
              id="staffIDInput" 
              name="staffID"
              value={staffID} 
              onChange={(e) => setStaffID(e.target.value)} 
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="firstNameInput">First Name:</label>
            <input 
              type="text"
              ref={firstNameRef} 
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
              ref={lastNameRef} 
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
                ref={dateOfBirthRef} 
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
                ref={genderRef} 
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
                ref={addressRef} 
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
                ref={contactNumberRef} 
                id="contactNumberInput" 
                name="contactNumber"
                value={contactNumber} 
                onChange={(e) => setContactNumber(e.target.value)} 
            />
            </div>
            <div className="inputGroup">
            <label htmlFor="emailAddressInput">Email Address:</label>
            <input 
                type="text"
                ref={emailAddressRef} 
                id="emailAddressInput" 
                name="emailAddress"
                value={emailAddress} 
                onChange={(e) => setEmailAddress(e.target.value)} 
            />
            </div>
            <div className="inputGroup">
            <label htmlFor="positionInput">Position:</label>
            <input 
                type="text"
                ref={positionRef} 
                id="positionInput" 
                name="position"
                value={position} 
                onChange={(e) => setPosition(e.target.value)} 
            />
            </div>
            <div className="inputGroup">
            <label htmlFor="departmentInput">Department:</label>
            <input 
                type="text"
                ref={departmentRef} 
                id="departmentInput" 
                name="department"
                value={department} 
                onChange={(e) => setDepartment(e.target.value)} 
            />
            </div>
            <div className="inputGroup">
            <label htmlFor="joiningDateInput">Joining Date:</label>
            <input 
                type="text"
                ref={joiningDateRef} 
                id="joiningDateInput" 
                name="joiningDate"
                value={joiningDate} 
                onChange={(e) => setJoiningDate(e.target.value)} 
            />
            </div>
            <div className="inputGroup">
            <label htmlFor="salaryInput">Salary:</label>
            <input 
                type="text"
                ref={salaryRef} 
                id="salaryInput" 
                name="salary"
                value={salary} 
                onChange={(e) => setSalary(e.target.value)} 
            />
            </div>
            <div className="inputGroup">
            <label htmlFor="supervisorIDInput">Supervisor ID:</label>
            <input 
                type="text"
                ref={supervisorIDRef} 
                id="supervisorIDInput" 
                name="supervisorID"
                value={supervisorID} 
                onChange={(e) => setSupervisorID(e.target.value)} 
            />
            </div>
            <div className="inputGroup">
            <label htmlFor="statusInput">Status:</label>
            <input 
                type="text"
                ref={statusRef} 
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
                ref={createdDateRef} 
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
                ref={updatedDateRef} 
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
                ref={passwordRef} 
                id="passwordInput" 
                name="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            </div>
          <button onClick={addLibrarian}>Add Librarian</button>
        </div>
      </div>
    </div>
  );
}

export default AddLibrarianPage;
