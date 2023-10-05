// src/app/saludo.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Services {
  private apiUrl = 'http://localhost:8080/'; // URL del servicio REST
  proveedores: any[] =[]; 

  constructor(private http: HttpClient) {}

  getSaludo(): Observable<{ mensaje: string }> {
    return this.http.get<{ mensaje: string }>(this.apiUrl+"backend/saludo");
  }

  getVersion(): Observable<{ mensaje: string }> {
    return this.http.get<{ mensaje: string }>(this.apiUrl+"backend/version");
  }

  getProveedores(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'proveedores');
  }

  agregarProveedor(objectRequest: any):any {
    // Realiza la solicitud POST al servicio web
    this.http.post(this.apiUrl+'proveedores/agregarProveedor', objectRequest)
      .subscribe((response) => {
        console.log('Proveedor agregado con éxito:', response);
        // Puedes realizar otras acciones después de agregar el proveedor, como redirigir o mostrar un mensaje de éxito.
      });
  }
  
}
