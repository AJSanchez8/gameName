import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  selectedGenre: string = '';

  genres: string[] = [
    'Acción',
    'Aventura',
    'Estrategia',
    'Rol (RPG)',
    'Disparos (Shooter)',
    'Deportes',
    'Carreras',
    'Puzzle',
    'Mundo Abierto',
    'Simulación',
    'Indi'
  ];

  minutosJugados: number | null = null;
  precioCompra: number | null = null;
  precioPorHora: number | null = null;
  mostrarResultado: boolean = false;
  minutosPlaceholder: string = "Tiempo jugado (en minutos)";
  precioPlaceholder: string = "Precio de compra (€)"

  calcularPrecioHora(): void {
    if (this.minutosJugados !== null && this.minutosJugados > 0) {
      if (this.precioCompra !== null && this.precioCompra > 0) {
        this.precioPorHora = this.precioCompra / (this.minutosJugados / 60);
        console.log(this.precioPorHora);
      } else {
        console.log("El precio de compra debe ser mayor que cero.");
      }
    } else {
      console.log("Los minutos jugados deben ser mayores que cero.");
    }
  
    this.mostrarResultado = true;
  }
  
  
  
}
