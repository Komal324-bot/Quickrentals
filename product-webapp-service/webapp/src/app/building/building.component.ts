import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Pipe, PipeTransform } from '@angular/core';
import { ChunkPipe } from '../chunk.pipe';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

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
