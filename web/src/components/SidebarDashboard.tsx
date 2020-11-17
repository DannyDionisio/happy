import React from "react";

import "../assets/styles/components/sidebarDashboard.css";

import mapMarkerImg from "../assets/images/map-marker.svg";
import { FiMapPin, FiAlertCircle, FiPower } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function SidebarDashboard() {
  return (
    <aside id="sidebar-dashboard">
      <img src={mapMarkerImg} alt="Happy" />

      <div>
        <button type="button" className="mapPin-button">
          <FiMapPin size={24} color="#0089A5" className="color-icon" />
        </button>

        <button type="button" className="alert-button">
          <FiAlertCircle size={24} color="#fff" />
        </button>
      </div>

      <Link to="/" className="power-button">
        <FiPower size={24} color="#FFF" />
      </Link>
    </aside>
  );
}
