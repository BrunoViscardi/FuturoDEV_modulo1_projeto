import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";

import App from "../App";
import PaginaCadastroExercicio from "../pages/cadastroExercicio/cadastroExercicio";
import PaginaCadastroUsuario from "../pages/cadastroUsuario/cadastroUsuario";
import PaginaDashboard from "../pages/dashboard/dashboard";
import PaginaListagemExercicio from "../pages/listagemExercicio/listagemExercicio";
import PaginaLogin from "../pages/login/login";


let isAutenticado = JSON.parse(localStorage.getItem("isAutenticado")) || false
const PrivateRoute = ({ children }) => {
    return isAutenticado ? [children] : <Navigate to="/login" />
}





const routes = createBrowserRouter([
    {
        path: "/login",
        element: <PaginaLogin />
    },
    {
        path: "cadastro-usuario",
        element: <PaginaCadastroUsuario />
    },
    {
        path: "/:idUser",
        element: (
            <PrivateRoute>
                <App />
            </PrivateRoute>
        ),
        children: [
            {
                path: "/:idUser",
                element: <PaginaDashboard />
            },
            {
                path: "/:idUser/listagem-exercicio",
                element: <PaginaListagemExercicio />
            },
            {
                path: "/:idUser/cadastro-exercicio",
                element: <PaginaCadastroExercicio />
            }
        ]
    }
]);


export default routes;






