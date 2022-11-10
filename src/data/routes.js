import { Route } from "../model/Route";
import NotFoundPage from "../pages/404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const routes = [
    new Route("/", <Home />),
    new Route("/login",<Login/>),
    new Route("/register",<Register/>),
    new Route("*",<NotFoundPage/>),
    // new Route("/",</>),

]
export default routes;