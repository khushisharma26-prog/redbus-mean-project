import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './app.html'
})
export class AppComponent {

  isDarkMode = false;   // ✅ ADD THIS

  constructor(
    public lang: LanguageService,
    private router: Router
  ) {}


  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;   // ✅ UPDATE
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  toggleLanguage() {
    this.lang.toggleLanguage();
  }
}



