import React from "react";
import Card from "@/components/ui/Card";

const DashboardA = () => {
  let UserName = localStorage.getItem("name");

  return (
    <div>
      <Card title="Dashboard">
        Bienvenue <strong>SOS Remorquage</strong>!
      </Card>
    </div>
  );
};

export default DashboardA;
