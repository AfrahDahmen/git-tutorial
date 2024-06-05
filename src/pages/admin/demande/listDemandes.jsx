import React from "react";
import Card from "@/components/ui/Card";

import DemandesTable from "./demande-table";

const ListDemandes = () => {
  return (
    <div>
      <Card title="Liste des Demandes">
        <DemandesTable></DemandesTable>
      </Card>
    </div>
  );
};

export default ListDemandes;
