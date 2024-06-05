import React, { useState, useEffect } from "react";
import ListOffres from "./list_offre";
import { useGetOffresQuery } from "@/hooks/apis/OffreApi";

const OffresTable = () => {
  const {
    data: users,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetOffresQuery(); // Utilise useGetOffresQuery pour obtenir les utilisateurs

  const [isServerAccessible, setIsServerAccessible] = useState(true);

  useEffect(() => {
    const checkServerAccessibility = async () => {
      try {
        const response = await fetch("http://localhost:8081/offres");
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
    return <>{users && <ListOffres users={users} />} </>; // Utilisez la propriété users au lieu de Offres
  }
  return <div>Something went wrong</div>;
};

export default OffresTable;
