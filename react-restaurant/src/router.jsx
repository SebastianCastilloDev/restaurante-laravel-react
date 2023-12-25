import { createBrowserRouter } from "react-router-dom"
import Layout from './layouts/Layout'
import AuthLayout from "./layouts/AuthLayout"
import Inicio from "./views/Inicio"
import Login from "./views/Login"
import Registro from "./views/Registro"
import AdminLayout from "./layouts/AdminLayout"
import Ordenes from "./layouts/Ordenes"
import Productos from "./views/Productos"

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [// los hijos utilizaran Layout
        {
          index: true,// Cuando yo visite auth, carga el componente Inicio
          element: <Inicio />
        }
      ]
    },
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        {
          path: '/auth/login',
          element: <Login />
        },
        {
          path: '/auth/registro',
          element: <Registro />
        }
      ]
    },
    {
      path: '/admin',
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <Ordenes />
        },
        {
          path: '/admin/productos',
          element: <Productos />
        }
      ]
    }
  ]
)

export default router