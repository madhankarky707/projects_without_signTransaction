import { Component, OnInit } from '@angular/core';
import { ContractService } from '../services/contract.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import * as Web3 from 'web3';
declare let window: any;
import { FormGroup, FormBuilder ,Validators } from '@angular/forms';
import swal from "sweetalert";

@Component({
  selector: 'app-create_service',
  templateUrl: './create_service.component.html',
  styleUrls: ['./create_service.component.css']
})
export class create_serviceComponent implements OnInit {
  public account;
  public _web3:any;
  public id1;
  public id2;
  public token_balance:number = null;
   public servicename = ' ';
   public serviceprice = ' ';
  public withdrawamt=null;
  angForm:FormGroup;

  constructor(private cs:ContractService,private route:Router,private spin:NgxSpinnerService) {
    
    }
    
    public create(name,price)
    {
      if (name=="")
      {
        swal("Please Enter Service Name"); 
        return;
      }
      else if (price =="")
      {
        swal("Please Enter Native Token Value");
        return;
      }
      else 
      {
        this.spin.show();
        this.cs.add_service(this.account,name,price).then(res =>{
       
          if(res==0)
          {
            this.spin.hide();
            swal("You Rejected this transaction..!");
            (document.getElementById('n')  as HTMLInputElement).value='';
            (document.getElementById('p')  as HTMLInputElement).value='';
          }
          else if(res==2)
          {
            this.spin.hide();
            swal("Tranaction failed..!");
            (document.getElementById('n')  as HTMLInputElement).value='';
            (document.getElementById('p')  as HTMLInputElement).value='';
          } 
          else if(res == 1)
          {
            swal("Service created Successfully");
            this.spin.hide();
            (document.getElementById('n')  as HTMLInputElement).value='';
            (document.getElementById('p')  as HTMLInputElement).value='';
          
          }  
         
        }); 
      }
    }

  withdraw(amount)
   {
       if (amount =="")
       {
        document.getElementById("p2").innerHTML = "";
        document.getElementById("p1").innerHTML = "Please enter amount to Withdraw";
       }
       else
       {
        document.getElementById("p2").innerHTML = "Request in Progress";
        document.getElementById("p1").innerHTML = "";
        //this.spin.show();
        this.cs.withdraw(this.account,amount).then(res =>{
        this.spin.show();
        if(res==1)
        {
          (document.getElementById('with_amt')  as HTMLInputElement).value='';
          this.spin.hide();
          swal("Amount Withdrew Successfully...!")
        }
        else if(res==0)
        {
          (document.getElementById('with_amt')  as HTMLInputElement).value='';
          this.spin.hide();
          swal("You Rejected this transaction..!");
        }
        else if(res == 1)
        {
          (document.getElementById('with_amt')  as HTMLInputElement).value='';
          this.spin.hide();  
          swal("Service created Successfully");
        }  
        //document.getElementById("p2").innerHTML = " ";
        //this.spin.hide();
       
      })
      
       amount='';
       }
      
    } 

    ngOnInit() 
    {    
      let meta = this;
      meta.cs.getAccount().then(acc => { 
          this.account = acc;
          meta.id1 = setInterval(function() {
            // swal("intrval")
            if (typeof window.web3 !== 'undefined') {
                meta._web3 = new Web3(window.web3.currentProvider);
                if (meta._web3.eth.accounts[0] !== meta.account) {
                    meta.account = meta._web3.eth.accounts[0];
                    if (meta._web3.eth.accounts[0] === undefined) {
                        meta.route.navigate(['metamask']);
                        clearInterval(this.interval);
                    } else {
                        window.location.reload(true);                   }
                }
            } else {
                meta.route.navigate(['metamask']);
            }
           }, 50);
       }); 
       meta.id2 =setInterval(function(){
         meta.cs.token_contract_balance().then(result =>meta.token_balance =result)
       },200)
     
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
