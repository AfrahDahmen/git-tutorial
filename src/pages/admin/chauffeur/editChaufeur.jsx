import React, { useState, useEffect } from "react";
import { useUpdateChauffeurMutation } from "@/hooks/apis/ChauffeurApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; 

const EditChauffeur = ({ nom, prenom, NumTelephone, email, password, id }) => {
  const navigate = useNavigate();
  const [updateChauffeur] = useUpdateChauffeurMutation();
  const [newNom, setNewNom] = useState(nom);
  const [newPrenom, setNewPrenom] = useState(prenom);
  const [newNumeroTelephone, setNewNumeroTelephone] = useState(NumTelephone);
  const [newEmail, setNewEmail] = useState(email);
  const [newPassword, setNewPassword] = useState(password);
  const [newEtat, setNewEtat] = useState(0); // Ajout de l'état initial
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedUserData = {
      nom: newNom,
      prenom: newPrenom,
      NumTelephone: newNumeroTelephone,
      email: newEmail,
      password: newPassword,
      etat: newEtat // Ajout de l'état dans les données mises à jour
    };

    updateChauffeur({ id, body: updatedUserData })
      .unwrap()
      .then(() => {
        setIsSuccess(true);
      })
      .catch(() => {
        setIsError(true);
      });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Chauffeur modifiée avec succès !");
      setTimeout(() => {
        setIsSuccess(false);
        window.location.reload();
      }, 1000);
    }
    if (isError) {
      toast.error("Une erreur s'est produite. Veuillez réessayer.");
      setTimeout(() => {
        setIsError(false);
      }, 5000);
    }
  }, [isSuccess, isError, navigate]);

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="grid xl:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-5 mb-8">
          <label htmlFor="nom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Nom*
          </label>
          <input
            type="text"
            id="nom"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nom"
            value={newNom}
            onChange={(e) => setNewNom(e.target.value)}
          />
        </div>
        <div className="grid xl:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-5 mb-8">
          <label htmlFor="prenom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Prénom*
          </label>
          <input
            type="text"
            id="prenom"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Prénom"
            value={newPrenom}
            onChange={(e) => setNewPrenom(e.target.value)}
          />
        </div>
        <div className="grid xl:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-5 mb-8">
          <label htmlFor="NumTelephone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Numéro de téléphone*
          </label>
          <input
            type="text"
            id="NumTelephone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Numéro de téléphone"
            value={newNumeroTelephone}
            onChange={(e) => setNewNumeroTelephone(e.target.value)}
          />
        </div>
        <div className="grid xl:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-5 mb-8">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email*
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <div className="grid xl:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-5 mb-8">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password*
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
       
        <div className="grid xl:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-5 mb-8">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            État*
          </label>
          <div className="flex items-center space-x-2">
            <label>
              <input
                type="radio"
                value={1}
                checked={newEtat === 1}
                onChange={() => setNewEtat(1)}
              />
              Activer
            </label>
            <label>
              <input
                type="radio"
                value={0}
                checked={newEtat === 0}
                onChange={() => setNewEtat(0)}
              />
              Désactiver
            </label>
          </div>
        </div>
        <div className="grid xl:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-5 mb-8">
          <button type="submit" className="btn-success text-white font-bold py-2 px-4 rounded">
            Modifier
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditChauffeur;