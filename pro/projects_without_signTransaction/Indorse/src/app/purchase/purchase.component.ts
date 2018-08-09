import { Component, OnInit, OnDestroy } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ContractService } from '../services/contract.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import swal from "sweetalert";

import * as Web3 from 'web3';
declare let window: any;


@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit, OnDestroy  {
  public eth:any;
  public doll:any;
  public result;
  public resul;
  public usd_price;
  public tot_supply;
  public id1;
  public id2;
  public Indtoken_in_ether;
  public ether_for_total_tokens;
  public ethereum_price;
  public i="1027";
  public account; 
  public  _web3: any;
constructor(private cs:ContractService,private http:HttpClient,private route:Router,private spin:NgxSpinnerService) { 
    this.Fetch_values()
   }

set(count){
  this.Fetch_values()
  
  if(this.Indtoken_in_ether == "NaN")
  {
   this.set(count)
  }
   this.eth=count*this.Indtoken_in_ether;
   this.doll=count*this.usd_price;
  (document.getElementById('ether') as HTMLInputElement ).value= this.eth;
  (document.getElementById('dollar') as HTMLInputElement ).value= this.doll;
  
  if((document.getElementById('ether') as HTMLInputElement ).value == "NaN")
  {
     swal("Please Re-enter the value")
  }

}


Purchase(tokens){
  // this.spin.show();
  if(tokens != '')
  {
  if((document.getElementById('verify') as HTMLInputElement).checked == true)
  {
    document.getElementById("p2").innerHTML = "Transaction in Progress...";
    document.getElementById("p1").innerHTML = "";
    this.ether_for_total_tokens=tokens*this.Indtoken_in_ether;
    // console.log("ONE TKN ETH",this.Indtoken_in_ether)
    // console.log("TOTA ETH FOR TKN",this.ether_for_total_tokens)
    this.spin.show();
    this.cs.buy_token(this.account,this.Indtoken_in_ether,this.ether_for_total_tokens).then(result =>{
      this.spin.hide();   
      if(result == 1)
      {
      swal("Tokens Purchased Successfully...!")
      document.getElementById("p2").innerHTML = " ";
      
      (document.getElementById("t1") as HTMLInputElement).value ='';
      (document.getElementById('verify') as HTMLInputElement).checked == false
  
      this.route.navigate(['service'])
      }
      
      else if(result==0)
      {
        swal("You Rejected this Transaction...!");
        (document.getElementById("t1") as HTMLInputElement).value ='';
        (document.getElementById('verify') as HTMLInputElement).checked == false
        
      }
      else if(result==2)
      {
        swal("Transaction failed...!");
        (document.getElementById("t1") as HTMLInputElement).value ='';
        (document.getElementById('verify') as HTMLInputElement).checked == false
       
      }
    });
    
  }
  else
    {
      document.getElementById("p2").innerHTML = "";
      document.getElementById("p1").innerHTML = "Please confirm your transaction";
    }
  }
  else
  {
   swal('Please Enter a Value')
  }
}

Fetch_values()
    {
      
      this.http.get('https://api.coinmarketcap.com/v2/ticker/1027/')
      .subscribe(
        (resp:Response)=>{
          this.resul=resp;
          this.ethereum_price=this.resul.data.quotes.USD.price;

        }
      )
      this.http.get('https://api.coinmarketcap.com/v2/ticker/1967/')
      .subscribe(
        (res:Response)=>{
         this.result=res;
        this.usd_price=this.result.data.quotes.USD.price;
        this.tot_supply=this.result.data.total_supply;

            this.Indtoken_in_ether=(this.usd_price*(1/this.ethereum_price));
            
          
        }  
      )
    }
    ngOnInit() 
    {    
      let meta = this;
      meta.cs.getAccount().then(acc => {
          this.account = acc;
          meta.id1 = setInterval(function() {
           if (typeof window.web3 !== 'undefined') {
               meta._web3 = new Web3(window.web3.currentProvider);
               if (meta._web3.eth.accounts[0] !== meta.account) {
                   meta.account = meta._web3.eth.accounts[0];
                   if (meta._web3.eth.accounts[0] === undefined) {
                       meta.route.navigate(['metamask']);
                       clearInterval(this.interval);
                   }
                    else 
                   {
                    window.location.reload(true);
                   }
               }
           } else {
               meta.route.navigate(['metamask']);
           }
          }, 200);
       });
         }
         ngOnDestroy() {
             if (this.id1) { 
               clearInterval(this.id1);
             }
             if (this.id2) { 
              clearInterval(this.id2);
            }
            
    }

}
