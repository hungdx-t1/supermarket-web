import { Component, OnInit } from '@angular/core';
import { HTTPServiceService } from '../../services/HTTPService';
import { Stock } from '../../models/stock';

@Component({
  selector: 'app-post-data',
  imports: [],
  templateUrl: './post-data.component.html',
  styleUrl: './post-data.component.css',
})
export class PostDataComponent implements OnInit {
  constructor(private hSSS: HTTPServiceService) {}

  ngOnInit(): void {
    const body = {
      name: 'Last Stock Company',
      code: 'LSCX',
      price: '876',
      previousPrice: '765',
      exchange: 'NYSE',
      favorite: 'false',
      id: '5',
    };
    this.hSSS.postStock(body).subscribe((data) => {
      console.log('postStock ', data);
    });
  }
}
