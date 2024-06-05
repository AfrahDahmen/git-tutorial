import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer.js";
import { UserApi } from "../hooks/apis/UserApi.js";
import { ChauffeurApi } from "../hooks/apis/ChauffeurApi.js";
import { ClientApi } from "../hooks/apis/ClientApi.js";
import { DemandeApi } from "../hooks/apis/DemandeApi.js";
import { OffreApi } from "../hooks/apis/OffreApi.js";


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([

      UserApi.middleware,
      ChauffeurApi.middleware,
      ClientApi.middleware,
      DemandeApi.middleware,
      OffreApi.middleware,


    ]),
});

export default store;
