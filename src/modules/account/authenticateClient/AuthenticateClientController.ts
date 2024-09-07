import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";

export class AuthencateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;
    const authenticateClienteUseCase = new AuthencateClientController();
    const result = await authenticateClienteUseCase.execute()
  }
}
