import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Pipe, PipeTransform } from '@angular/core';
import { ChunkPipe } from '../chunk.pipe';

@Component({
  selector: 'app-industrial',
  templateUrl: './industrial.component.html',
  styleUrls: ['./industrial.component.css']
})
export class IndustrialComponent  implements OnInit{
  constructor(private productService:ProductService){};
  jsonData:any;
  ngOnInit(): void {
    this.productService.getProducts('Industrial').subscribe((data)=>
    {
     console.log(data);
     this.jsonData=data;
 
   }
    );
  }
  chunk:any;


}
