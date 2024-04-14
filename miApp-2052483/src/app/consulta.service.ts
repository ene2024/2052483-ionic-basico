import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http:HttpClient) { }

  getProductos() {
    return this.http.get('https://fakestoreapi.com/products');
  }

}