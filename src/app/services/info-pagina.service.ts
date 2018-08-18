import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: "root"
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http
      .get("assets/data/info.pagina.json")
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        // console.log(resp);
      });
  }

  private cargarEquipo() {
    this.http
      .get("https://portafolioweb-a486f.firebaseio.com/equipo.json")
      .subscribe((resp: any[]) => {
        // console.log(data.json());
        // this.cargarEquipo = true;
        this.equipo = resp;
      });
  }
}
