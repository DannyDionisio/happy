import React from "react";

import "../assets/styles/pages/dashboard.css";
import SidebarDashboard from "../components/SidebarDashboard";

export default function Dashboard() {
  return (
    <div id="dashboard-page">
      <SidebarDashboard />

      <main>
        <header>
          <legend>Orfanatos Cadastrados</legend>
          <span>2 orfanatos</span>
        </header>

        <div className="line" />

        <div className="orphanage-card"></div>
      </main>
    </div>
  );
}
