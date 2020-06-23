import { Request, Response } from 'express';

import CreateProductService from '@modules/products/services/CreateProductService';

import { container } from 'tsyringe';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;

    const createProduct = await container.resolve(CreateProductService);

    const product = await createProduct.execute({
      name,
      price,
      quantity,
    });

    return response.status(200).json(product);
  }
}
