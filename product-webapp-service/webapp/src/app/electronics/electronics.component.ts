import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Pipe, PipeTransform } from '@angular/core';
import { ChunkPipe } from '../chunk.pipe';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  constructor(private productService:ProductService){};
  jsonData:any;
  ngOnInit(): void {
    this.productService.getProducts('Electronics').subscribe((data)=>
    {
     console.log(data);
     this.jsonData=data;
 
   }
    );
  }
  chunk:any;


}
