// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import {get} from '@loopback/rest';


export class AlquilerController {
  constructor() {}

  //router.get('/alquilar')
  @get('/alquilar')
  alquilar():String{
    return ('hola desde mi primer servicio REST - Loopback');
  }
}
