import React from "react";
import { IClaim } from "../interface/IAuth";

export const AuthContext = React.createContext<{claims: IClaim[],actualizar(claims: IClaim[]): void}>({ claims: [], actualizar: () => {} });
