import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private productService:ProductService){};
  jsonData:any;

  ngOnInit(): void {
  //   this.productService.getNotes().subscribe((data)=>
  //  {
  //   console.log(data);
  //   this.jsonData=data;

  // }
  //  );

    
  }

}
