import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _currentTheme: BehaviorSubject<string>;

  constructor() {
    const savedTheme = localStorage.getItem('selectedTheme');
    this._currentTheme = new BehaviorSubject<string>(savedTheme || 'style.css');
  }

  get currentTheme$() {
    return this._currentTheme.asObservable();
  }

  toggleTheme() {
    const newTheme = this._currentTheme.value === 'style.css' ? 'claro.css' : 'style.css';
    this._currentTheme.next(newTheme);
    localStorage.setItem('selectedTheme', newTheme); // Guarda en localStorage
  }
}
