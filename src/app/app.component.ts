import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./core/layout/footer/footer.component";
import { HeaderComponent } from "./core/layout/header/header.component";
import { Test1Component } from "./components/test1/test1.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, Test1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Supermarket-Web';
}
