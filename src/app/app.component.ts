import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDarkMode = false
  constructor() {
    // const document = document.getElementsByTagName('html')[0]
    this.getDarkMode();
  }
  onChange() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      localStorage.setItem('theme', 'dark')
    } else {
      localStorage.setItem('theme', 'light')
    }
    this.getDarkMode();
  }
  getDarkMode() {
    if (localStorage['theme'] === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      this.isDarkMode = true
    } else {
      document.documentElement.classList.remove('dark')
      this.isDarkMode = false
    }
  }

}
