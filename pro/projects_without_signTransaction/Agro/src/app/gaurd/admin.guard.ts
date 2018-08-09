import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ChainServiceService } from '../service/chain-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
public address:string;

  constructor(private cs:ChainServiceService,private route:Router){
    this.cs.getAccount().then(address=>this.address=address)
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.cs.check_admin().then(result => {
        if (this.address===result)
        {
          // alert("admin")
          return true;
         
        }
        else
        {
          // alert('You dont have admin access')
          this.route.navigate(["user"]);
          return false;
        }
      })
  }
}
