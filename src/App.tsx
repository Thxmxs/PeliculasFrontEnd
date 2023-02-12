import './App.css'
import { Menu } from './utils/Menu';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import {  RouterProvider } from 'react-router'
import { IndiceGeneros } from './generos/IndiceGeneros';
import { LandingPage } from './LandingPage';
import { CrearGenero } from './generos/CrearGenero';
import { EditarGenero } from './generos/EditarGenero';
import { IndiceActores } from './actores/IndiceActores';
import { CrearActores } from './actores/CrearActores';
import { EditarActores } from './actores/EditarActores';
import { IndiceCines } from './cines/IndiceCines';
import { CrearCines } from './cines/CrearCines';
import { EditarCines } from './cines/EditarCines';
import { CrearPeliculas } from './peliculas/CrearPeliculas';
import { EditarPeliculas } from './peliculas/EditarPeliculas';
import { FiltroPeliculas } from './peliculas/FiltroPeliculas';
import { configurarValidaciones } from './utils/validaciones';

configurarValidaciones();

function App() {

  const rutasGeneros=[
    {
      path: "/generos",
      element: <IndiceGeneros/>,
    },
    {
      path:"generos/crear",
      element:<CrearGenero/>
    },
    {
      path:"generos/editar/:id",
      element:<EditarGenero/>
    }
  ];

  const rutasActores=[
    {
      path: "/actores",
      element: <IndiceActores/>,
    },
    {
      path:"actores/crear",
      element:<CrearActores/>
    },
    {
      path:"actores/editar/:id",
      element:<EditarActores/>
    }
  ]

  const rutasCines=[
    {
      path: "/cines",
      element: <IndiceCines/>,
    },
    {
      path:"cines/crear",
      element:<CrearCines/>
    },
    {
      path:"cines/editar/:id",
      element:<EditarCines/>
    }
  ]

  const rutasPeliculas=[
    {
      path: "/peliculas/crear",
      element: <CrearPeliculas/>,
    },
    {
      path:"/peliculas/editar/:id",
      element:<EditarPeliculas/>
    },
    {
      path:"peliculas/filtrar",
      element:<FiltroPeliculas/>
    }
  ];
  

  const rutasCompartidas=[
    {
      path: "/",
      element: <LandingPage/>,
    },
    {
      path:"*",
      element:<Navigate to={"/"}/>
    }
  ];

  const allroutes=rutasCompartidas.concat(rutasActores,rutasCines,rutasGeneros,rutasPeliculas);

  const router=createBrowserRouter([
    {
      path: "/",
      element: <Menu/>,
      children:allroutes
    }
  ]);


  return (
    <>
    <RouterProvider router={router}/>
    </>  
  )
}

export default App
