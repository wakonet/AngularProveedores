import { Component, OnInit, ViewChild  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Services } from '../services';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import {  FormControl, FormGroup, Validators } from '@angular/forms';





@Component({
  selector: 'app-listaproveedores',
  templateUrl: './listaproveedores.component.html',
  styleUrls: ['./listaproveedores.component.css']
})
export class ListaproveedoresComponent implements OnInit {


  modalAbierto = false;

  saludo: string;
  version:string;
  proveedores: any[]=[];
  muestraModal=false;
  nombre="";
  direccion="";
  telefono="";

  proveedor: any = {
    nombre: '',
    direccion: '',
    telefono: ''
  };
  // formContacto: FormGroup;



  constructor(private service: Services,) {
    this.saludo="";
    this.version="";
    // this.formContacto = this.fb.group({
    //   nombre: [''],
    //   direccion: [''],
    //   telefono: [''],

    // });
    
  }


 


  ngOnInit() {



    this.service.getSaludo().subscribe((response) => {
      console.log(response.mensaje);
      this.saludo = response.mensaje;
    });

    this.service.getVersion().subscribe((response) => {
      console.log(response.mensaje);
      this.version = response.mensaje;
    });

    this.service.getProveedores().subscribe((response) => {
      console.log(response);
      this.proveedores = response;
    });
  }

  
  abrirModal() {
    this.muestraModal=true;
  }

  cerrarModal() {
    this.muestraModal=false;
  }


  agregarProveedor() {
    this.proveedor.nombre=this.nombre;
    this.proveedor.direccion=this.direccion;
    this.proveedor.telefono=this.telefono;
    console.log(this.nombre);
    console.log(this.proveedor)
    this.service.agregarProveedor(this.proveedor).subscribe((response: any) => {
      console.log(response);
     
    });
  }
}
