// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

import {get} from '@loopback/rest';

export class Alquiler2Controller {
  constructor() {}
  
//router.get('/alquilar')
  @get('/alquilar2')
  alquilarw():String{
    return ('hola desde mi primer servicio REST - Loopback');
  }
}
