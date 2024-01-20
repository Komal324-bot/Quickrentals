import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Pipe, PipeTransform } from '@angular/core';
import { ChunkPipe } from '../chunk.pipe';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit{

  constructor(private productService:ProductService){};
  jsonData:any;
  ngOnInit(): void {
    this.productService.getProducts('Medical Equipment').subscribe((data)=>
    {
     console.log(data);
     this.jsonData=data;
 
   }
    );
  }
  chunk:any;
  
 


}
