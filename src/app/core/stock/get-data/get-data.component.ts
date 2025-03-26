import { Component, OnInit } from '@angular/core';
import { HTTPServiceService } from '../../services/HTTPService';

@Component({
  selector: 'app-get-data',
  imports: [],
  templateUrl: './get-data.component.html',
  styleUrl: './get-data.component.css'
})
export class GetDataComponent implements OnInit{

  constructor(private hSSS: HTTPServiceService) {}

  ngOnInit(): void {
    this.hSSS.getStocks().subscribe((data) => {
      console.log('Data: ', data);
    })
  }
}
