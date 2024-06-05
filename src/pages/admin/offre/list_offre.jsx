import React from "react";

const ListOffres = ({ users }) => {
  const getEtatText = (etat) => {
    switch (etat) {
      case 0:
        return "En cours";
      case 1:
        return "Acceptée";
      case 2:
        return "Terminée";
      default:
        return "Inconnu";
    }
  };

  const getEtatColor = (etat) => {
    switch (etat) {
      case 0:
        return "text-orange-500"; // Orange pour En cours
      case 1:
        return "text-blue-500"; // Bleu pour Acceptée
      case 2:
        return "text-green-500"; // Vert pour Terminée
      default:
        return "text-gray-500"; // Gris pour Inconnu
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
        <thead className="bg-slate-200 dark:bg-slate-700">
          <tr>
            <th className="table-th px-4 py-2">Nom</th>
            <th className="table-th px-4 py-2">Prénom</th>
            <th className="table-th px-4 py-2">Durée</th>
            <th className="table-th px-4 py-2">Prix</th>
            <th className="table-th px-4 py-2">État</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="table-td px-4 py-2">{user.nom}</td>
              <td className="table-td px-4 py-2">{user.prenom}</td>
              <td className="table-td px-4 py-2">{user.duree}</td>
              <td className="table-td px-4 py-2">{user.prix}</td>
              <td className={`table-td px-4 py-2 ${getEtatColor(user.etat)}`}>
                {getEtatText(user.etat)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOffres;
