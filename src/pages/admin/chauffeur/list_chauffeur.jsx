import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { useDeleteChauffeurMutation } from "@/hooks/apis/ChauffeurApi";
import { toast } from "react-toastify";
import Modal from "@/components/ui/Modal";
import EditChauffeur from "./editChaufeur";

const ListChauffeurs = ({ users }) => {
  const [deleteChauffeur] = useDeleteChauffeurMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleDeleteClick = (userId) => {
    setSelectedUserId(userId);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteChauffeur({ id: selectedUserId });
      toast.success("Utilisateur supprimé avec succès");
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Erreur lors de la suppression de l'utilisateur");
      setIsModalOpen(false);
    }
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
        <thead className="bg-slate-200 dark:bg-slate-700">
          <tr>
            <th className="table-th px-4 py-2">Nom</th>
            <th className="table-th px-4 py-2">Prénom</th>
            <th className="table-th px-4 py-2">Numéro de téléphone</th>
            <th className="table-th px-4 py-2">Email</th>
            <th className="table-th px-4 py-2">Password</th>
            <th className="table-th px-4 py-2">Rôle</th>
            <th className="table-th px-4 py-2">État</th>
            <th className="table-th px-4 py-2" colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="table-td px-4 py-2">{user.nom}</td>
              <td className="table-td px-4 py-2">{user.prenom}</td>
              <td className="table-td px-4 py-2">{user.NumTelephone}</td>
              <td className="table-td px-4 py-2">{user.email}</td>
              <td className="table-td px-4 py-2">{user.password}</td>
              <td className="table-td px-4 py-2">{user.role}</td>
              <td className="table-td px-4 py-2">
                {user.etat === 1 ? (
                  <span className="text-green-500">Activer</span>
                ) : (
                  <span className="text-red-500">Désactiver</span>
                )}
              </td>
              <td className="table-td px-4 py-2">
                <Modal
                  title="Modifier un utilisateur"
                  label="Modifier"
                  labelClass="btn-outline-success p-2"
                  themeClass="bg-success-500"
                  uncontrol
                >
                  <div className="text-base text-slate-600 dark:text-slate-300">
                    <EditChauffeur
                      nom={user.nom}
                      prenom={user.prenom}
                      NumTelephone={user.NumTelephone}
                      email={user.email}
                      password={user.password}
                      role={user.role}
                      id={user.id}
                    />
                  </div>
                </Modal>
              </td>
              <td className="table-td px-4 py-2">
                <Button
                  className="btn-outline-danger p-2"
                  onClick={() => handleDeleteClick(user.id)}
                >
                  Supprimer
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4">Confirmation de suppression</h2>
            <p>Êtes-vous sûr de vouloir supprimer cet chauffeur ?</p>
            <div className="mt-4 flex justify-end">
              <Button
                className="btn-outline-danger mr-2"
                onClick={handleConfirmDelete}
              >
                Oui
              </Button>
              <Button
                className="btn-outline-secondary"
                onClick={handleCancelDelete}
              >
                Non
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListChauffeurs;
