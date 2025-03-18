import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  imports: [],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.css'
})
export class Test1Component {
  
  // Text
  text = "Hello world";

  // Properties
  isDisable = true;

  // Attributes
  textAttribute = "MinoMC_YTB's Page";

}
