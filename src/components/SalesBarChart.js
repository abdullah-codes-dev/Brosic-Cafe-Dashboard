import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Example data (change it as per your need)
const data = [
  { name: "Jan", earning: 4000, order: 120 },
  { name: "Feb", earning: 3000, order: 98 },
  { name: "Mar", earning: 2000, order: 90 },
  { name: "Apr", earning: 2780, order: 80 },
  { name: "May", earning: 1890, order: 70 },
  { name: "Jun", earning: 2390, order: 160 },
  { name: "Jul", earning: 3490, order: 112 },
  { name: "Aug", earning: 2100, order: 92 },
  { name: "Sep", earning: 2300, order: 100 },
  { name: "Oct", earning: 3200, order: 140 },
  { name: "Nov", earning: 4300, order: 170 },
  { name: "Dec", earning: 3000, order: 130 },
];

export default function SalesBarChart() {
  // By default, show Earning (yellow) bars
  const [showEarning, setShowEarning] = useState(true);
  const [showOrder, setShowOrder] = useState(false);

  // Custom legend for toggling bars
  const renderCustomLegend = () => (
    <div
      style={{
        display: "flex",
        gap: 18,
        marginTop: 18,
        marginLeft: 8,
        userSelect: "none",
      }}
    >
      <span
        onClick={() => {
          setShowEarning(true);
          setShowOrder(false);
        }}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          opacity: showEarning ? 1 : 0.55,
          fontWeight: showEarning ? 700 : 500,
          fontSize: 17,
        }}
      >
        <span
          style={{
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "#ffd600",
            marginRight: 7,
            border: showEarning ? "2px solid #bba800" : "1.5px solid #eee",
            boxShadow: showEarning ? "0 2px 10px #fffce2" : "none",
            display: "inline-block",
          }}
        />
        Earning
      </span>
      <span
        onClick={() => {
          setShowEarning(false);
          setShowOrder(true);
        }}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          opacity: showOrder ? 1 : 0.55,
          fontWeight: showOrder ? 700 : 500,
          fontSize: 17,
        }}
      >
        <span
          style={{
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "#ff4747",
            marginRight: 7,
            border: showOrder ? "2px solid #b81414" : "1.5px solid #eee",
            boxShadow: showOrder ? "0 2px 10px #ffdede" : "none",
            display: "inline-block",
          }}
        />
        Order
      </span>
    </div>
  );

  return (
    <div style={{ width: "100%" }}>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {showEarning && (
            <Bar dataKey="earning" fill="#ffd600" radius={[7, 7, 0, 0]} />
          )}
          {showOrder && (
            <Bar dataKey="order" fill="#ff4747" radius={[7, 7, 0, 0]} />
          )}
        </BarChart>
      </ResponsiveContainer>
      {/* The clickable legend */}
      {renderCustomLegend()}
    </div>
  );
}
