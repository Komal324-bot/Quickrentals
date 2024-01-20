import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Pipe, PipeTransform } from '@angular/core';
import { ChunkPipe } from '../chunk.pipe';

@Component({
  selector: 'app-pharma',
  templateUrl: './pharma.component.html',
  styleUrls: ['./pharma.component.css']
})
export class PharmaComponent implements OnInit{
  constructor(private productService:ProductService){};
  jsonData:any;
  ngOnInit(): void {
    this.productService.getProducts('Pharma').subscribe((data)=>
    {
     console.log(data);
     this.jsonData=data;
 
   }
    );
  }
  chunk:any;

}
