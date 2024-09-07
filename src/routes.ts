import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/creatClient.ts/CreteClientController";
import { AuthencateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";

const creatClientController = new CreateClientController();

const authenticateClientController = new AuthencateClientController();

const routes = Router();

routes.post("/client/", creatClientController.handle);

routes.post("/authenticate",authenticateClientController.handle);

export { routes };
