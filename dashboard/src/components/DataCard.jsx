// src/components/DataCard.jsx
import React from 'react';
import './DataCard.css';

const DataCard = ({ title, value }) => {
  return (
    <div className="data-card">
      <p className="data-title">{title}</p>
      <p className="data-value">{value}</p>
    </div>
  );
};

export default DataCard;
