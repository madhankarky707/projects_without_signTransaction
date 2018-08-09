import { Component, OnInit } from '@angular/core';
import { ContractService } from '../services/contract.service';
import { Router } from '@angular/router';
import * as Web3 from 'web3';  
declare let window: any;



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public tokens;
public ether_balance;
public account;
public  _web3;
public id1;
public id2;
constructor(private cs:ContractService,private route:Router) {
  this.fetch_balances()
}

fetch_balance()
{
  let _web3 = this._web3;
  this._web3.eth.getBalance(this.account,function(err,result){

     this.ether_balance=(_web3.fromWei(result));
})
}

 


fetch_balances() {
    this.cs.getAccount().then(acc=>{
      this.cs.balanceOf(acc).then(tkns =>{
    if(tkns>0 && tkns<0.1)
    {
       //this.tokens = tkns;
      this.tokens= "<" + 0.1;
    }
    else{
      this.tokens = tkns;
    }
  })
      this.cs.getUserBalance(acc).then(amt=>{ this.ether_balance=amt})
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
                meta.fetch_balance();
                meta.fetch_balances();
                if (meta._web3.eth.accounts[0] === undefined) {
                    window.location.reload()
                    meta.route.navigate(['metamask']);
                    clearInterval(this.interval);
                } else {
                    window.location.reload(true);
                        }
            }
        } else {
            meta.route.navigate(['metamask']);
        }       
       }, 50);
      //  this.cs.balanceOf(meta.account).then(tkns =>this.tokens =tkns)
        this.cs.getUserBalance(meta.account).then(amt=>{ this.ether_balance=amt})
   }); 

     }
     ngOnDestroy() {
         if (this.id1) { 
           clearInterval(this.id1);
         }
         if (this.id2) { 
            clearInterval(this.id1);
          }
        
        
}

    
      

}
