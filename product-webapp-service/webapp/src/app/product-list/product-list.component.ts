
//main code
import { Component, OnInit } from '@angular/core';
import { Product } from './model/Product';
import { ProductListService } from './service/product-list.service';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  search: string | null = localStorage.getItem('search');
  address: string | null = localStorage.getItem('address');
  product: Product[] = [];
  filteredProducts: Product[] = [];



  constructor(private productListService: ProductListService, private rs : RouterService) {}

  ngOnInit() {
    this.productListService.getAllProducts().subscribe(
      (data) => {
        this.product = data;
        this.applySearchFilter(); // Apply the initial filter on component initialization
        console.log("Products fetched:", this.product);
        console.log("Filter Products fetched:", this.filteredProducts);
      },
      (error) => {
        console.error("Error fetching products:", error);
      }
    );
  }

  // applySearchFilter() {
  //   if (this.search) {
  //     this.filteredProducts = this.product.filter((p) =>
  //       // p.productName.toLowerCase().includes(this.search!.toLowerCase())
  //       p.address.toLowerCase().includes(this.search!.toLowerCase())
        
  //     );
  //   } else {
  //     this.filteredProducts = this.product; // Show all products when search is empty
  //   }
  // }

  applySearchFilter() {
    if (this.search) {
      this.filteredProducts = this.product.filter((p) =>
      p.productName.toLowerCase().includes(this.search!.toLowerCase()) ||
      p.address.toLowerCase().includes(this.search!.toLowerCase()) ||
      p.category.toLowerCase().includes(this.search!.toLowerCase()) ||
      p.sellerName.toLowerCase().includes(this.search!.toLowerCase())
      // || p.price.toString().includes(this.search!.toLowerCase()

      );

      if (this.filteredProducts.length === 0) {
        // No results found, display an alert
        alert("No results found for the search. Redirecting to home page.");
        this.rs.routeToHome();
      }

    } else {
      this.filteredProducts = this.product; // Show all products when search is empty
    }
  }

  // Call this function whenever the search input changes, e.g., in response to user input
  onSearchInputChange() {
    this.applySearchFilter();
  }
}
















// import { Component } from '@angular/core';
// import { Product } from './model/Product';
// import { ProductListService } from './service/product-list.service';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent {
//   search:string |null= localStorage.getItem('search');
//   address : string | null = localStorage.getItem('address');
//   product:Product[] = [];
//   filteredProducts: Product[] = [];


//   constructor(private productListService:ProductListService){}
// filterProducts() {
//   this.filteredProducts = this.product.filter(product =>
//     product.productName.toLowerCase().includes(this.search!.toLowerCase())
//   );
// }


// searchlist() {
//   if (this.search) {
//     this.filteredProducts = this.product.filter((p) =>
//       p.productName.toLowerCase().includes(this.search!.toLowerCase())
//     );
//   } else {
//     this.filteredProducts = this.product; // If search query is empty, show all products
//   }
// }


// filterProducts2() {
//   this.filteredProducts = this.product.filter(product =>
//     product.address.toLowerCase().includes(this.address!.toLowerCase())
//   );
// }

// ngOnInit(){ //fetch all data of product list
//   const temp = localStorage.getItem('search')
//   console.log(temp);
//   this.productListService.getAllProducts().subscribe((data)=>{
//     this.product = data;
//     this.filteredProducts=this.product;
//     console.log("[rpduct - ",this.product);
//   },

//   (error)=>{
//     console.error("error occ");
    
//   })
//   this.searchlist();
// }
// }
