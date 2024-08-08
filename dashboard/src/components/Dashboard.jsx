import React, { useState, useEffect } from 'react';
import DataCard from './DataCard';
import './Dashboard.css';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

const Dashboard = () => {
  const [data, setData] = useState({
    testType: 'COMPRESSION',
    force: 0,
    extension: 23.42,
    originalLength: 21.5,
    keyPressed: '',
    status: 'Inactive',
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
          <div className={`status-indicator ${data.status === 'Active' ? 'active' : ''}`}></div>
        </div>
        <div className="data-cards">
          <DataCard title="Test type" value={data.testType} />
          <DataCard title="Force (N)" value={data.force} />
          <DataCard title="Extension (mm)" value={data.extension} />
          <DataCard title="Original Length (mm)" value={data.originalLength} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
