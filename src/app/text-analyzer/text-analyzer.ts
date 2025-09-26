import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-analyzer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './text-analyzer.html',
  styleUrls: ['./text-analyzer.css']
})
export class TextAnalyzerComponent {
  nombreCompleto = 'Selvin Ignacio Pelicó Tiul';
  numeroCarne = '0902-21-10254';
  
  texto = '';
  totalPalabras = 0;
  palabraMasLarga = '';
  palabraMasCorta = '';
  mostrarResultados = false;

  analizarTexto() {
    if (!this.texto.trim()) {
      alert('¡Por favor escribe algo primero!');
      return;
    }

    const palabras = this.texto
      .trim()
      .toLowerCase()
      .replace(/[.,;:!?]/g, ' ')
      .split(/\s+/)
      .filter(p => p.length > 0);

    if (palabras.length === 0) {
      alert('No se encontraron palabras válidas');
      return;
    }

    this.totalPalabras = palabras.length;
    this.palabraMasLarga = palabras[0];
    this.palabraMasCorta = palabras[0];

    for (let palabra of palabras) {
      if (palabra.length > this.palabraMasLarga.length) {
        this.palabraMasLarga = palabra;
      }
      if (palabra.length < this.palabraMasCorta.length) {
        this.palabraMasCorta = palabra;
      }
    }

    this.mostrarResultados = true;
  }

  limpiarTodo() {
    this.texto = '';
    this.mostrarResultados = false;
    this.totalPalabras = 0;
    this.palabraMasLarga = '';
    this.palabraMasCorta = '';
  }

}