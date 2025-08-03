import React from "react";
import SummaryCards from "../components/SummaryCards";
import SalesBarChart from "../components/SalesBarChart";
import OrdersLineChart from "../components/OrdersLineChart";

export default function Dashboard() {
  return (
    <div>
      <SummaryCards />
      <div style={{ display: "flex", gap: "24px", marginTop: "24px" }}>
        <div className="dashboard-card" style={{ flex: 2, minWidth: 0 }}>
          <h3>Visual Representation</h3>
          <SalesBarChart />
        </div>
        <div className="dashboard-card" style={{ flex: 1, minWidth: 0 }}>
          <h3>Today Latest Order</h3>
          <OrdersLineChart />
        </div>
      </div>
    </div>
  );
}
