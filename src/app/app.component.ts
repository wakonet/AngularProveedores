import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(private router: Router) {}
  


  irProveedores() {
    // Haz aquí la lógica necesaria para redirigir al otro componente
    console.log("Entra");
    this.router.navigate(['/listaproveedores']);
  }
}
