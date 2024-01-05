import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { DataService } from './services/data.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  constructor(private dataService: DataService) { }

  title = 'Tesodev Search App';

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    this.dataService.getDatas().subscribe(response => {
      this.dataService.transformData(response);
    });
  }
}
