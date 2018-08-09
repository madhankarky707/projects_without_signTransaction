import { Component, OnInit } from '@angular/core';
import { ChainServiceService } from '../service/chain-service.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
import swal from 'sweetalert';
import * as Web3 from 'web3';
declare let window: any;


@Component({
  selector: 'app-former-reg',
  templateUrl: './former-reg.component.html',
  styleUrls: ['./former-reg.component.css']
})
export class FormerRegComponent implements OnInit {
  public id1;
  public account:string;
  public _web3: any;


  constructor(private cs:ChainServiceService,private router:Router,private spinner:NgxSpinnerService) { }

 
  farmer_registeration(name)
  {
    this.spinner.show();
    this.cs.getAccount().then(address=>{
      this.cs.farmer_registeration(name,address).then(res =>{
        this.spinner.hide();
        
        if(res == 1) {
          (document.getElementById("id1") as HTMLInputElement).value = "";
          swal("Successfully Registered...!");
          this.router.navigate(["Former"]);
        }
        else if( res == 0){
          (document.getElementById("id1") as HTMLInputElement).value = "";
          swal("You Rejected this transaction...!");
        }
        else if(res == 2){
          (document.getElementById("id1") as HTMLInputElement).value = "";
          swal("Transaction Failed...!");
        }
   
      })
    })
  }
  ngOnInit() {

    let meta = this;
         meta.cs.getAccount().then(acc => {
             this.account = acc;
             meta.id1 = setInterval(function() {
              if (typeof window.web3 !== 'undefined') {
                  meta._web3 = new Web3(window.web3.currentProvider);
                  if (meta._web3.eth.accounts[0] !== meta.account) {
                      meta.account = meta._web3.eth.accounts[0];
                      if (meta._web3.eth.accounts[0] === undefined) {
                          meta.router.navigate(['metamask']);
                          clearInterval(this.interval);
                      } else {
                          window.location.reload(true);             
                               }
                  }
              } else {
                  meta.router.navigate(['metamask']);
              }
             }, 200);
          });
   
  }
  ngOnDestroy() {
    if (this.id1) {
      clearInterval(this.id1);
    }

  }

}
