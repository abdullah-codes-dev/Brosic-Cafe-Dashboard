import React from "react";
import {
  FaWallet,
  FaShoppingBag,
  FaClipboardCheck,
  FaClipboardList,
} from "react-icons/fa";
import "./SummaryCards.css";

const data = [
  {
    label: "Total Earning",
    value: "$961,625",
    icon: <FaWallet />,
    color: "red",
  },
  {
    label: "Total Order",
    value: "1",
    icon: <FaShoppingBag />,
    color: "yellow",
  },
  {
    label: "Completed Order",
    value: "14",
    icon: <FaClipboardCheck />,
    color: "green",
  },
  {
    label: "Pending Order",
    value: "8",
    icon: <FaClipboardList />,
    color: "orange",
  },
];

export default function SummaryCards() {
  return (
    <div className="summary-cards">
      {data.map((card, idx) => (
        <div key={idx} className={`summary-card ${card.color}`}>
          <span className="icon">{card.icon}</span>
          <div>
            <div className="value">{card.value}</div>
            <div className="label">{card.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
