"use client";
import React, { useEffect, useState, useRef } from 'react';
import './add_book.css'; // Make sure the CSS file is correctly linked
import Navbar from '@/components/Navbar';
import Head from "next/head";
import styles from "@/styles/Home.module.scss";


function AddBookPage() {
  const carMakeRef = useRef();
  const carModelRef = useRef(); // Ref for car model input
  const carYearRef = useRef(); // Ref for car year input
  const carIDToDeleteRef = useRef();
  const carIDToUpdateRef = useRef();
  const carNameToUpdateRef = useRef();

  const [cars, setCars] = useState([]);

  const [updated, setUpdated] = useState(false);
  const [created, setCreated] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [updatedError, setUpdatedError] = useState(false);
  const [deletedError, setDeletedError] = useState(false);
  // Add more state variables for other book attributes as needed


  async function getCars() {
    const postData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/cars`,
      postData
    );
    
    const response = await res.json();
    console.log(response.cars);
    setCars(response.cars);    
  }

  async function addCar() {
    const carMake = carMakeRef.current.value.trim();
    const carModel = carModelRef.current.value.trim(); // Get model value
    const carYear = carYearRef.current.value.trim(); // Get year value

    // Validate input
    if (carMake.length < 3 || carModel.length === 0 || carYear.length === 0) return;
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        make: carMake,
        model: carModel, // Include model in request body
        year: carYear, // Include year in request body
      }),
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/cars`,
      postData
    );
    
    const response = await res.json();
    console.log(response);
    if (response.response.message !== "success") return;
    const newcar = response.response.car;
    setCars([
      ...cars,
      {
        make: newcar.make,
        model: newcar.model,
        year: newcar.year
      },
    ]);
    setCreated(true);
  }
  

  useEffect(() => {
    getCars();
  },[]);

  return (
    <div>
      <Navbar />
      <div style={{ margin: "100px 0" }}></div> {/* Empty div for spacing */}
      <div className={styles.read}>
        <h2>Read</h2>
        <div className={styles.cars}>
          {cars.map((item, index) => {
            return (
              <div key={item.make} className={styles.car}>
                <span>make</span>: {item.make} {" "}
                <span>model</span>: {item.model} {" "}
                <span>year</span>: {item.year} {" "}
                <br /> 
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ margin: "100px 0" }}></div> {/* Empty div for spacing */}
      <div>
      <div className={styles.create}>
        <h2>Create</h2>
        <div style={{ margin: "25px 0" }}></div> {/* Empty div for spacing */}
        <div className={styles.input}>
          <div className={styles.label}>Make</div>
          <input type="text" ref={carMakeRef} />
        </div>
        <div className={styles.input}>
          <div className={styles.label}>Model</div> {/* Add input for model */}
          <input type="text" ref={carModelRef} />
        </div>
        <div className={styles.input}>
          <div className={styles.label}>Year</div> {/* Add input for year */}
          <input type="text" ref={carYearRef} />
        </div>
        {created ? <div className={styles.success}>Success!</div> : null}
        <div className={styles.buttonarea}>
          <button className={styles.button} onClick={addCar}>Save</button>
        </div>
      </div>
    </div>
    </div>
  );  
}

export default AddBookPage;
