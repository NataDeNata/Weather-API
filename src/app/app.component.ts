<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { PH_CITIES } from './ph-cities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ngipol_midterm_exam';
  loading = false;
  searchedWeather: { city: string, data: any } | null = null;
  savedCities: string[] = [];
  showingSavedCities = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.loading = false;
  }

  onSearch(city: string) {
    city = city.trim();
    if (!city) {
      this.searchedWeather = null;
      return;
    }
    this.loading = true;
    this.weatherService.getWeather(city).subscribe({
      next: (data) => {
        this.searchedWeather = { city, data };
        this.loading = false;
      },
      error: () => {
        this.searchedWeather = { city, data: null };
        this.loading = false;
      }
    });
  }

  onSaveCity(city: string) {
    city = city.trim();
    if (!city || this.savedCities.includes(city)) return;
    this.savedCities.push(city);
  }

  showSavedCities() {
    this.showingSavedCities = true;
  }

  hideSavedCities() {
    this.showingSavedCities = false;
  }

  onRemoveCity(city: string) {
    this.savedCities = this.savedCities.filter(c => c !== city);
  }
}
=======
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngipol_midterm_exam';
}
>>>>>>> b22d6bf13d80cda55ec68ce65c9b74631ada1596
