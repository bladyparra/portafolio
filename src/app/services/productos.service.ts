import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Promise } from 'q';

@Injectable()
export class ProductosService {

  productos:any[] = [];
  productos_filtardo:any[] = [];
  cargando_productos = false;

  constructor( private http:Http ) { 
    this.cargar_productos ();
  }

  public buscar_producto( termino:string ){
    // console.log( "Buscando producto" );
    // console.log( this.productos.length );

    if (this.productos.length === 0) {
      this.cargar_productos().then( () => {
        // termino la carga
        this.filtrar_productos( termino );
      });
    } else {
      this.filtrar_productos( termino );
    }
  }

  private filtrar_productos( termino:string ){
    this.productos_filtardo = [];
    termino = termino.toLowerCase();
    this.productos.forEach( prod => {
      if ( prod.categoria.indexOf( termino ) >= 0 || prod.titulo.toLowerCase().indexOf( termino ) >= 0 ) {
        this.productos_filtardo.push( prod );
        // console.log( prod );
      }
      // console.log(prod);
    })
  }

  public cargar_producto ( cod:string ) {
    return this.http.get(`https://portafolioweb-a486f.firebaseio.com/productos/${ cod }.json`)
  }

  public cargar_productos () {
    this.cargando_productos = true;
    
    let promesa =  Promise ( ( resolve, reject ) => {
      this.http.get('https://portafolioweb-a486f.firebaseio.com/productos_idx.json')
                .subscribe ( res => {
                  // console.log( res.json() );
                  setTimeout( () => {
                    this.cargando_productos = false;
                    this.productos = res.json();
                    // resolve();
                  }, 1500);
                });
    });
    
    return promesa;
      
  }
}
