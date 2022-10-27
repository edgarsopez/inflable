import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Producto,
  Administrador,
} from '../models';
import {ProductoRepository} from '../repositories';

export class ProductoAdministradorController {
  constructor(
    @repository(ProductoRepository)
    public productoRepository: ProductoRepository,
  ) { }

  @get('/productos/{id}/administrador', {
    responses: {
      '200': {
        description: 'Administrador belonging to Producto',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Administrador)},
          },
        },
      },
    },
  })
  async getAdministrador(
    @param.path.string('id') id: typeof Producto.prototype.id,
  ): Promise<Administrador> {
    return this.productoRepository.administrador(id);
  }
}
