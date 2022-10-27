import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Administrador} from './administrador.model';
import {Cliente} from './cliente.model';

@model()
export class Producto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  barrio: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @belongsTo(() => Administrador)
  administradorId: string;

  @hasMany(() => Cliente)
  clientes: Cliente[];

  @property({
    type: 'string',
  })
  clienteId?: string;

  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;
