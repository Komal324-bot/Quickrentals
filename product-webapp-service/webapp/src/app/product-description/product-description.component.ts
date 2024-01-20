import { Component, OnInit } from '@angular/core';
import { ElementRef, HostListener, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Pipe, PipeTransform } from '@angular/core';
import { ChunkPipe } from '../chunk.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Product';
import Swal from 'sweetalert2';

declare var Razorpay: any;
@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  
  productData: any;
  Data: any;

  constructor(private activeRoute: ActivatedRoute,
    private productService:ProductService,
    private router: Router) { }

  ngOnInit(): void {
      let productId = this.activeRoute.snapshot.paramMap.get('productId');
      console.warn(productId);

      productId && this.productService.getOneProductById(productId).subscribe((result)=>{
        console.warn(result);
        this.productData = result;
      })

      this.productService.getProduct().subscribe((data)=>
      {
        console.log(data);
        this.Data=data;
      }
    )}


     showParticularproduct()
     {
      let productId = this.activeRoute.snapshot.paramMap.get('productId');
      console.warn(productId);

      productId && this.productService.getOneProductById(productId).subscribe((result)=>{
        console.warn(result);
        this.productData = result;
      })

      this.productService.getProduct().subscribe((data)=>
      {
        console.log(data);
        this.Data=data;
      }
      )

     }


    showProductDetails(productID: String ) {
      this.router.navigate(['/productDescription',{productID: productID}]);
    }

    payNow() {
      const RozarpayOptions = {
        description: 'Quickrentals',
        currency: 'INR',
        amount: this.productData.price * 100,
        name: 'Quickrentals',
        key: 'rzp_test_FI8eUPlt5w3p5p',
        image: '',
        prefill: {
          name: 'Pranjali' ,
          email: 'pranjalisha0604@gmail.com',
          phone: '7519512822'
        },
        "handler": function (response:any){
        Swal.fire({
          icon: 'success',
          title: 'Payment successful',
          text: 'Thank you for shopping with us! Your order will be delivered soon.',
        })
    },
        theme: {
          color: '#6466e3' 
        },
        modal: {
          ondismiss:  () => {
            console.log('dismissed')
          }
        }
      }
  
      const successCallback = (paymentid: any) => {
        console.log("paymentid");
        Swal.fire({
          icon: 'success',
          title: 'Payment successful',
          text: 'Thank you for shopping with us! Your order will be delivered soon.',
        })
      }
  
      const failureCallback = (e: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
  
      Razorpay.open(RozarpayOptions,successCallback, failureCallback)
    }
    }

  


