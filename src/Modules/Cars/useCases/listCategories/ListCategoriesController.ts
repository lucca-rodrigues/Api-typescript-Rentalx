import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase){}

  handle(request: Request, response: Request): Response{
    const all = this.listCategoriesUseCase.execute();

    return response.json(all);
  }
}

export {ListCategoriesController}
