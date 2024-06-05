import React, { useState, useEffect } from "react";
import ListDemandes from "./list_demande";
import { useGetDemandesQuery } from "@/hooks/apis/DemandeApi";

const DemandesTable = () => {
  const {
    data: users,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetDemandesQuery(); // Utilise useGetDemandesQuery pour obtenir les utilisateurs

  const [isServerAccessible, setIsServerAccessible] = useState(true);

  useEffect(() => {
    const checkServerAccessibility = async () => {
      try {
        const response = await fetch("http://localhost:8081/demandes");
        const responseData = await response.json();
  
        if (!response.ok) {
          console.error("Erreur de connexion au serveur:", responseData.error);
          setIsServerAccessible(false);
        }
      } catch (error) {
        console.error("Erreur lors de la connexion au serveur:", error);
        setIsServerAccessible(false);
      }
    };
  
    checkServerAccessibility();
  }, []);

  if (!isServerAccessible) {
    return (
      <div>
        Le serveur n'est pas accessible. Veuillez vérifier votre connexion
        Internet ou réessayer plus tard.
      </div>
    );
  }

  if (isLoading) {
    return <span>Chargement de données</span>;
  } else if (isError) {
    let errorMessage = "Une erreur s'est produite lors du chargement des données.";
    if (error && error.data && error.data.message) {
      errorMessage = error.data.message;
    } else if (error && error.message) {
      errorMessage = error.message;
    }
    return (
      <div>
        <span className="text-danger">{errorMessage}</span>
      </div>
    );
  } else if (isSuccess) {
    return <>{users && <ListDemandes users={users} />} </>; // Utilisez la propriété users au lieu de Demandes
  }
  return <div>Something went wrong</div>;
};

export default DemandesTable;
