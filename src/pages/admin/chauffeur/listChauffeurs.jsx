import React from "react";
import Card from "@/components/ui/Card";

import ChauffeursTable from "./chauffeur-table";

const ListChauffeurs = () => {
  return (
    <div>
      <Card title="Liste des Chauffeurs">
        <ChauffeursTable></ChauffeursTable>
      </Card>
    </div>
  );
};

export default ListChauffeurs;
