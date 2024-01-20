
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()


export class RouterService {

    constructor(private routerService:Router){}

    routeToHome()
    {

        this.routerService.navigate(['']);
    }

    routeToLogin()
    {
        this.routerService.navigate(['login']);
    }

    routeToRegister()
    {
        this.routerService.navigate(['register']);
    }

    routeToProductList(){
        this.routerService.navigate(['product-list']);
      }


}


