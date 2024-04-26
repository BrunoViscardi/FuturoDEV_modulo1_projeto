import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import PaginaCadastroExercicio from "../pages/cadastroExercicio/cadastroExercicio";
import PaginaCadastroUsuario from "../pages/cadastroUsuario/cadastroUsuario";
import PaginaDashboard from "../pages/dashboard/dashboard";
import PaginaListagemExercicio from "../pages/listagemExercicio/listagemExercicio";
import PaginaLogin from "../pages/login/login";





const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <PaginaLogin />
            },
            {
                path: "cadastro-usuario",
                element: <PaginaCadastroUsuario />
            },
            {
                path: "dashboard",
                element: <PaginaDashboard />
            },
            {
                path: "listagem-exercicio",
                element: <PaginaListagemExercicio />
            },
            {
                path: "cadastro-exercicio",
                element: <PaginaCadastroExercicio />
            }
        ]
    }
]);


export default routes;






