import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Peliculas } from "../pages/peliculas/Peliculas";
import { Layout } from "../pages/shared/Layout";
import { CrearGenero } from "../pages/generos/CrearGenero";
import { EditarGenero } from "../pages/generos/EditarGenero";
import { IndiceGeneros } from "../pages/generos/IndiceGeneros";
import { CrearActores } from "../pages/actores/CrearActores";
import { EditarActores } from "../pages/actores/EditarActores";
import { IndiceActores } from "../pages/actores/IndiceActores";
import { CrearCines } from "../pages/cines/CrearCines";
import { EditarCines } from "../pages/cines/EditarCines";
import { IndiceCines } from "../pages/cines/IndiceCines";
import { CrearPeliculas } from "../pages/peliculas/CrearPeliculas";
import { EditarPeliculas } from "../pages/peliculas/EditarPeliculas";
import { IndicePeliculas } from "../pages/peliculas/IndicePeliculas";
import { FiltroPeliculas } from "../pages/peliculas/FiltroPeliculas";
import { validations } from "../helpers/validations";
import { IClaim } from "../interface/IAuth";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

validations();

const Router = () => {
  const [claims, setClaims] = useState<IClaim[]>([{'nombre':'role',valor:'admin'}]);

  const actualizar = (claims: IClaim[]) => {
    setClaims(claims);
  };

  const rutasPeliculas = [
    {
      path: "/peliculas/crear",
      element: <CrearPeliculas />,
    },
    {
      path: "/peliculas/editar/:id",
      element: <EditarPeliculas />,
    },
    {
      path: "/peliculas",
      element: <IndicePeliculas />,
    },
  ];

  const rutasCines = [
    {
      path: "/cines/crear",
      element: <CrearCines />,
    },
    {
      path: "/cines/editar/:id",
      element: <EditarCines />,
    },
    {
      path: "/cines",
      element: <IndiceCines />,
    },
  ];

  const rutasActores = [
    {
      path: "/actores/crear",
      element: <CrearActores />,
    },
    {
      path: "/actores/editar/:id",
      element: <EditarActores />,
    },
    {
      path: "/actores",
      element: <IndiceActores />,
    },
  ];

  const rutasGeneros = [
    {
      path: "/generos/crear",
      element: <CrearGenero />,
    },
    {
      path: "/generos/editar/:id",
      element: <EditarGenero />,
    },
    {
      path: "/generos",
      element: <IndiceGeneros />,

    },
    {
      path: "/peliculas/filtrar",
      element: <FiltroPeliculas />,
    },
  ];

  const rutasCompartidas: any = [
    {
      path: "/",
      element: <Peliculas />,
    },
    {
      path: "*",
      element: <Navigate to={"/"} />,
    },
  ];
  const esAdmin = () => {
    return (
      claims.findIndex(
        (claim) => claim.nombre === "role" && claim.valor === "admin"
      ) > -1
    );
  };

  const allRoutes = rutasCompartidas.concat(
    rutasGeneros,
    rutasActores,
    rutasCines,
    rutasPeliculas
  );
  const filterRoutesByAuthorization = allRoutes.map((ruta: any) => {
    if (ruta.esAdmin && !esAdmin()) {
      return { path: "*", element: <Navigate to={"/"} /> };
    } else {
      return ruta;
    }
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: filterRoutesByAuthorization,
    },
  ]);

  return (
    <>
      <AuthContext.Provider value={{ claims, actualizar }}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </>
  );
};

export default Router;
