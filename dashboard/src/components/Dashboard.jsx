import React, { useState, useEffect } from 'react';
import DataCard from './DataCard';
import './Dashboard.css';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import Graph from './Graph';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIjD9MYmWPJD0aVn7sp-ynxxCf7GHEXXk",
  authDomain: "isutmx-2d383.firebaseapp.com",
  databaseURL: "https://isutmx-2d383-default-rtdb.firebaseio.com",
  projectId: "isutmx-2d383",
  storageBucket: "isutmx-2d383.appspot.com",
  messagingSenderId: "875635107374",
  appId: "1:875635107374:web:0b7489341f6c77f92721bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

const Dashboard = () => {
  const [data, setData] = useState({
    testType: 'COMPRESSION',
    force: 8,
    extension: 1.4,
    originalLength: 8,
    keyPressed: '',
    status: 'inactive',
  });

  useEffect(() => {
    const forceRef = ref(database, 'test/LED');
    const testTypeRef = ref(database, 'test/key');
    // const extensionRef = ref(database, 'test/extension');
    // const originalLengthRef = ref(database, 'test/originalLength');

    onValue(forceRef, (snapshot) => {
      const newForce = snapshot.val();
      setData(prevData => ({ ...prevData, force: newForce }));
    });

    onValue(testTypeRef, (snapshot) => {
      const newTestType = snapshot.val();
      setData(prevData => ({ ...prevData, keyPressed: newTestType }));
    });

    // onValue(extensionRef, (snapshot) => {
    //   const newExtension = snapshot.val();
    //   setData(prevData => ({ ...prevData, extension: newExtension }));
    // });

    // onValue(originalLengthRef, (snapshot) => {
    //   const newOriginalLength = snapshot.val();
    //   setData(prevData => ({ ...prevData, originalLength: newOriginalLength }));
    // });
  }, []);

  return (
    <div className="dashboard">
      <header>
        <h1>Welcome</h1>
      </header>
      <main>
        <div className="status">
          <p>Status</p>
          <div className={`status-indicator ${data.status === 'active' ? 'active' : 'inactive'}`}></div>
        </div>
        {
          data.status === "active" ? 
          <section>

          <div className="data-cards">
            <DataCard title="Test type" value={data.testType} />
            <DataCard title="Force (N)" value={data.force} />
            <DataCard title="Extension (mm)" value={data.extension} />
            <DataCard title="Original Length (mm)" value={data.originalLength} />
          </div>
          <div>
            {/* <h1>Force vs Extension Graph</h1> */}
            <Graph />
          </div>
          </section> : <p style={{fontStyle: "italic"}}>No test being carried out yet!</p>
        }
      
      </main>
    </div>
  );
};

export default Dashboard;
