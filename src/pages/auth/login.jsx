import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Illustration from "@/assets/images/auth/login.png";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    axios
      .post("http://localhost:8081/loginUser", credentials)
      .then((res) => {
        if (res.data.id && res.data.token && res.data.role) {
          // Succès de la connexion
          localStorage.setItem("token", res.data.token); // Stockage du token JWT dans le localStorage
          localStorage.setItem("userId", res.data.id); // Stockage de l'ID de l'utilisateur dans le localStorage
          localStorage.setItem("role", res.data.role); // Stockage du rôle de l'utilisateur dans le localStorage
          navigate("/admin/dashboard"); // Redirection vers la page dashboard
        } else {
          setError("Email ou mot de passe invalide");
          toast.error("Email ou mot de passe invalide");
        }
        setIsPending(false);
      })
      .catch((err) => {
        setError("Une erreur s'est produite lors de la connexion.");
        toast.error("Une erreur s'est produite lors de la connexion.");
        setIsPending(false);
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="loginwrapper">
        <div className="lg-inner-column">
          <div className="left-column relative z-[1]">
            <div className="max-w-[520px] pt-10 ltr:pl-20 rtl:pr-20">
              <h4>
                Bienvenue <br></br>
                <span className="text-slate-800 dark:text-slate-400 font-bold">
                  SOS Remorquage
                </span>
              </h4>
            </div>
            <div className="absolute left-0 2xl:bottom-[-20px] bottom-[-130px] h-full w-full z-[-1]">
              <img
                src={Illustration}
                alt=""
                className="h-full w-full object-contain bg-cover"
              />
            </div>
          </div>
          <div className="right-column relative">
            <div className="inner-content h-full flex flex-col bg-white dark:bg-slate-800">
              <div className="auth-box h-full flex flex-col justify-center">
                <div className="mobile-logo text-center mb-6 lg:hidden block"></div>
                <div className="text-center 2xl:mb-10 mb-4">
                  <h4 className="font-medium">Connectez-vous à votre compte</h4>
                  <div className="text-slate-500 text-base"></div>
                </div>
                <form onSubmit={onSubmit} className="space-y-4 ">
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
                      name="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="email"
                      value={credentials.email}
                      onChange={onChange}
                    />
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
                      name="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Mot de Passe"
                      value={credentials.password}
                      onChange={onChange}
                    />
                  </div>
                  {error && <div className="text-red-500">{error}</div>}
                  <button className="btn btn-dark block w-full text-center">
                    {isPending ? "Chargement en cours" : "Connecter"}
                  </button>
                </form>
              </div>
              <div className="auth-footer text-center mb-8">
                <p className="text-gray-500 mt-2">Copyright 2024, All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
