import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const Graph = () => {
  // Mock data
  const data = [
    { extension: 0.4, force: 1.2 },
    { extension: 0.6, force: 3.4 },
    { extension: 0.8, force: 5.1 },
    { extension: 1.1, force: 7.2 },
    { extension: 1.4, force: 8.0 },
    { extension: 1.7, force: 13.0 },
    { extension: 1.9, force: 16.5 },
    { extension: 2.0, force: 24.6 },
    { extension: 2.3, force: 32.0 },
    { extension: 2.6, force: 36 },
    { extension: 3.0, force: 40 },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="extension" label={{ value: 'Extension (mm)', position: 'insideBottomRight', offset: -5 }} />
        <YAxis label={{ value: 'Force (N)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="force" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Graph;
