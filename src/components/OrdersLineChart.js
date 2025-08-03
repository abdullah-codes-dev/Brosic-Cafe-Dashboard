import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "8 AM", value: 10 },
  { name: "10 AM", value: 30 },
  { name: "12 PM", value: 45 },
  { name: "2 PM", value: 20 },
  { name: "4 PM", value: 55 },
  { name: "6 PM", value: 32 },
];

export default function OrdersLineChart() {
  return (
    <ResponsiveContainer width="100%" height={160}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#ff3030"
          strokeWidth={3}
          dot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
