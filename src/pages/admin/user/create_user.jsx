import React, { useState, useEffect } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useAddUserMutation } from "@/hooks/apis/UserApi";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreateUser = () => {
  const [addUser] = useAddUserMutation();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [etat, setEtat] = useState(0); // État par défaut à désactiver
  const [role, setRole] = useState(""); // Ajout de l'état initial

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const userData = { ...data, etat, role }; // Ajout du rôle dans les données de l'utilisateur
      const response = await addUser(userData);
      if (!response.error) {
        toast.success("Utilisateur ajouté avec succès !");
        setIsSuccess(true);
        setIsError(false);
      } else {
        toast.error("Une erreur s'est produite. Veuillez réessayer.");
        setIsError(true);
      }
    } catch (error) {
      toast.error(
        "Une erreur s'est produite lors de la communication avec le serveur."
      );
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
      setIsSuccess(false);
    }
  }, [isSuccess, reset]);

  const handleEtatChange = (newEtat) => {
    setEtat(newEtat);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <>
      <Card title="Créer un nouveau Utilisateur">
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="grid xl:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-5">
            <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
              {/* Champs Nom et Prénom */}
              <div>
                <label
                  htmlFor="nom"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nom*
                </label>
                <input
                  type="text"
                  id="nom"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nom"
                  {...register("nom", { required: true })}
                />
                {errors.nom && (
                  <span className="text-red-700 font-light">
                    Le champ Nom est requis
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="prenom"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Prénom*
                </label>
                <input
                  type="text"
                  id="prenom"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Prénom"
                  {...register("prenom", { required: true })}
                />
                {errors.prenom && (
                  <span className="text-red-700 font-light">
                    Le champ Prénom est requis
                  </span>
                )}
              </div>
            </div>
            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="NumTelephone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Numéro de téléphone*
                </label>
                <input
                  type="text"
                  id="NumTelephone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Numéro de téléphone"
                  {...register("NumTelephone", { required: true })}
                />
                {errors.NumTelephone && (
                  <span className="text-red-700 font-light">
                    Le champ Numéro de téléphone est requis
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-700 font-light">
                    Le champ Email est requis
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mot de passe*
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Mot de passe"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-700 font-light">
                    Le champ Mot de passe est requis
                  </span>
                )}
              </div>



              
              {/* Champ Role */}
              <div>
                <label
                  htmlFor="role"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Role*
                </label>
                <select
                  id="role"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={role}
                  onChange={handleRoleChange}
                >
                  <option value="">Sélectionnez un rôle</option>
                  <option value="client">Client</option>
                  <option value="chauffeur">Chauffeur</option>
                </select>
                {errors.role && (
                  <span className="text-red-700 font-light">
                    Le champ Role est requis
                  </span>
                )}
              </div>

              {/* Champ État */}
              <div>
                <label
                  htmlFor="etat"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  État
                </label>
                <div className="flex items-center space-x-2">
                  <Button
                    onClick={() => handleEtatChange(1)}
                    type="button"
                    className={`${
                      etat === 1 ? "bg-green-500" : "bg-gray-300"
                    } text-white`}
                  >
                    Activer
                  </Button>
                  <Button
                    onClick={() => handleEtatChange(0)}
                    type="button"
                    className={`${
                      etat === 0 ? "bg-red-500" : "bg-gray-300"
                    } text-white`}
                  >
                    Désactiver
                  </Button>
                </div>
              </div>
            </div>
            {/* Boutons Enregistrer et Annuler */}
            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-5">
              <span className="text-black-700 font-light">
                Tous les champs sont obligatoires !
              </span>
              <Button type="submit">
                {isLoading ? "Enregistrement en cours..." : "Enregistrer"}
              </Button>
              <Button className="bg-danger-600 text-white" type="reset">
                Annuler
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </>
  );
};

export default CreateUser;
