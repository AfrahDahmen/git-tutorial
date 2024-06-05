import React from "react";
import Card from "@/components/ui/Card";

import OffresTable from "./offre-table";

const ListOffres = () => {
  return (
    <div>
      <Card title="Liste des Offres">
        <OffresTable></OffresTable>
      </Card>
    </div>
  );
};

export default ListOffres;
