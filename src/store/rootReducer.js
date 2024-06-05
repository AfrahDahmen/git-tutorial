import layout from "./layout";
import { combineReducers } from "@reduxjs/toolkit";
import { UserApi } from "../hooks/apis/UserApi";
import { ChauffeurApi } from "../hooks/apis/ChauffeurApi";
import { ClientApi } from "../hooks/apis/ClientApi";
import { DemandeApi } from "../hooks/apis/DemandeApi";
import { OffreApi } from "../hooks/apis/OffreApi";




const rootReducer = combineReducers({
  layout,
  [UserApi.reducerPath]: UserApi.reducer,
  [ChauffeurApi.reducerPath]: ChauffeurApi.reducer,
  [ClientApi.reducerPath]: ClientApi.reducer,
  [DemandeApi.reducerPath]: DemandeApi.reducer,
  [OffreApi.reducerPath]: OffreApi.reducer,
});
export default rootReducer;
