import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibreriaService {
  constructor(
    private http: HttpClient
  ) { }

  getBooks () {
    return this.http.get('/api/libros');
  }

  //entre parentesis el parametro que va a recibir - biene de la busqueda que se guardo en termino en las rutas
  findBooks (termino: string) {
    return this.http.get(`/api/buscar?termino=${termino}`);
  }

}