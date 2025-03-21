import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ProductItems } from '../type/productItem';
import { BlogService } from '../services/BlogService';
import { map } from 'rxjs';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {

  id = '';

  productItem: ProductItems = {
    id: 0,
    name: '',
    price: 0,
    isActive: true,
    img: ''
  }

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
    this.id = String(route.snapshot.paramMap.get('id'));
  }

  // this.id được xem trong khởi tạo là 1 string, thêm dấu + đằng trước để nó được xem là number
  ngOnInit(): void {
    this.blogService.getDetailProduct(+this.id)
    .subscribe(({ data } : any) => {
      this.productItem.id = data.id;
      this.productItem.name = data.title;
      this.productItem.price = data.body;
      this.productItem.img = "assets/images/pngtree-old-television-red-png-image_8876940.png";
      this.productItem.isActive = true;
    });
  }

}
