import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
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

validations();

const Router = () => {

  const rutasPeliculas=[
    {
      path:"/peliculas/crear",
      element:<CrearPeliculas/>
    },
    {
      path:"/peliculas/editar/:id",
      element:<EditarPeliculas/>
    },
    {
      path: "/peliculas",
      element: <IndicePeliculas/>,
    }
  ];

  const rutasCines=[
    {
      path:"/cines/crear",
      element:<CrearCines/>
    },
    {
      path:"/cines/editar/:id",
      element:<EditarCines/>
    },
    {
      path: "/cines",
      element: <IndiceCines/>,
    }
  ];

  const rutasActores=[
    {
      path:"/actores/crear",
      element:<CrearActores/>
    },
    {
      path:"/actores/editar/:id",
      element:<EditarActores/>
    },
    {
      path: "/actores",
      element: <IndiceActores/>,
    }
  ];
  

    const rutasGeneros=[
        {
          path:"/generos/crear",
          element:<CrearGenero/>
        },
        {
          path:"/generos/editar/:id",
          element:<EditarGenero/>
        },
        {
          path: "/generos",
          element: <IndiceGeneros/>,
        },
        {
          path:"/peliculas/filtrar",
          element:<FiltroPeliculas/>
        }
      ];
      
    
      const rutasCompartidas=[
        {
          path: "/",
          element: <Peliculas/>,
        },
        {
          path:"*",
          element:<Navigate to={"/"}/>
        }
      ];
    
      const allRoutes=rutasCompartidas.concat(rutasGeneros,rutasActores,rutasCines,rutasPeliculas);

    const router=createBrowserRouter([
        {
          path: "/",
          element: <Layout/>,
          children:allRoutes
        }
      ]);

  return (
    <>
        <RouterProvider router={router}/>
    </>  
  )
}

export default Router;
