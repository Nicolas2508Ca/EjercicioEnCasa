import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EjercicioEnCasa';
  nombre = 'Google';
  url = 'https://www.google.com';
  meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
  ventas = [10000, 20000, 30000, 40000, 50000, 60000];
  tipo = 'Multinacional';

  ventasPrimerSemestre() {
    let suma=0;
    for (let i = 0; i < this.ventas.length; i++) 
      suma += this.ventas[i];
    return suma;
  }

  mesMayorVentas() {
    let indiceMayor = 0;
    let ventasMayor = this.ventas[0];
  
    for (let i = 1; i < this.ventas.length; i++) {
      if (this.ventas[i] > ventasMayor) {
        ventasMayor = this.ventas[i];
        indiceMayor = i;
      }
    }
  
    return { mes: this.meses[indiceMayor], ventas: ventasMayor };
  }

  mesMenorVentas() {
    let indiceMayor = 0;
    let ventasMenor = this.ventas[0];
  
    for (let i = 1; i < this.ventas.length; i++) {
      if (this.ventas[i] < ventasMenor) {
        ventasMenor = this.ventas[i];
        indiceMayor = i;
      }
    }
  
    return { mes: this.meses[indiceMayor], ventas: ventasMenor };
  }

  PromedioVentasPrimerSemestre() {
    let suma=0;
    for (let i = 0; i < this.ventas.length; i++) 
      suma += this.ventas[i];
    return Math.round(suma/this.ventas.length);
  }
}
