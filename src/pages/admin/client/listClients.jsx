import React from "react";
import Card from "@/components/ui/Card";

import ClientsTable from "./client-table";

const ListClients = () => {
  return (
    <div>
      <Card title="Liste des Clients">
        <ClientsTable></ClientsTable>
      </Card>
    </div>
  );
};

export default ListClients;
