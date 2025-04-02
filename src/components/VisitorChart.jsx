import React from 'react';
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Mar 1', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Mar 10', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar 20', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Mar 30', uv: 2780, pv: 3908, amt: 2000 },
];



const VisitorChart = () => {
  return (
    <ResponsiveContainer width="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line color='white' type="linear" dataKey="pv" dot={false} stroke="#fff" />
      </LineChart>
    </ResponsiveContainer>
  )
}
export default VisitorChart
