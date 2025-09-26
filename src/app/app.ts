import { Component } from '@angular/core';
import { TextAnalyzerComponent } from './text-analyzer/text-analyzer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TextAnalyzerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'analizador-texto';
}