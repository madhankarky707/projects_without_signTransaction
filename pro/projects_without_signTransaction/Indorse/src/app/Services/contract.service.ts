import { Injectable } from '@angular/core';
import * as Web3 from 'web3';  
import { Routes, Router } from '@angular/router';
declare let require: any;
declare let window: any;
import { NgxSpinnerService } from 'ngx-spinner';

let contractAbi= require('./contract.json');

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  public account: string = null;
  public balance:number;
  public  _web3: any;
  public acc:string =null;

  public _LogicContract: any;
  public _LogicContractAddress: string = "0xc9de0da933af20ecb53bd50814f21005e37a8f87";

  constructor(private route:Router,private spin:NgxSpinnerService) {
    if (typeof window.web3 !== 'undefined') {
      this._web3 = new Web3(window.web3.currentProvider);
      this._LogicContract = this._web3.eth.contract(contractAbi).at(this._LogicContractAddress);

   }
}

public async getAccount(): Promise<string> {
  if (this.account == null) {
    this.account = await new Promise((resolve, reject) => {
      this._web3.eth.getAccounts((err, accs) => {
        if (err != null) {
          this.route.navigate(['metamask']);
          return;
        }
        if (accs.length === 0) {
          this.route.navigate(['metamask']);
          return;
        }
        resolve(accs[0]);
      })
    }) as string;
    this._web3.eth.defaultAccount = this.account;
  }
  return Promise.resolve(this.account);
}

public async getUserBalance(account): Promise<number> {
  return new Promise((resolve, reject) => {
    let _web3 = this._web3;
    this._web3.eth.getBalance(account,function(err,result){
        if(err != null) {
          reject(err);
        }
        resolve(_web3.fromWei(result));
    })
  }) as Promise<number>;
}

//purchase token
public async buy_token(address,Indtoken_in_ether,ether_for_total_tokens): Promise<number> {
  let meta=this;
  return new Promise((resolve, reject) => { 
    var arg1= this._web3.toWei(Indtoken_in_ether,'ether').split(".")[0]
    var msgvalue = this._web3.toWei(ether_for_total_tokens,'ether').split(".")[0]
    console.log(arg1);
    console.log(msgvalue);    
    meta.spin.show();  
    
    meta._LogicContract.buy_token.sendTransaction(arg1,{from:address,value:msgvalue,gas: 600000},function(err,result) 
   {
   
    if(err!=null) 
    {
      console.log(err);
      // (document.getElementById('ether') as HTMLInputElement ).value= '';
      // (document.getElementById('dollar') as HTMLInputElement ).value= '';
      // (document.getElementById("t1") as HTMLInputElement).value ='';
      // (document.getElementById('verify') as HTMLInputElement).checked =false;
      // document.getElementById("p2").innerHTML = "Transaction Rejected...";
      resolve(0);
        //meta.spin.hide();  
    }
    else {
      meta.hash(result).then(res =>{
          if(res ==true)
          {
            resolve(1)
          }
          else if(res ==false){
            resolve(2)
          }
      })
    }
    
   });
 }) as Promise<number>;
}

//withdraw token
public async withdraw(address,amount): Promise<number> {
  let meta =this;

  return new Promise((resolve, reject) => {      
  
    meta._LogicContract.withdraw.sendTransaction(this._web3.toWei(amount,'ether'),{from:address,gas: 600000},function(err,result) 
   {
    
    //(document.getElementById('with_amt')  as HTMLInputElement).value='';
    if(err!=null) 
    {
      console.log(err);
     
      resolve(0);
 
    }
    else {
      meta.hash(result).then(res =>{
          if(res ==true)
          {
     
            resolve(1)
          }
          else if(res == false)
          {
        
            resolve(2)
          }
      })
    }
   });
 }) as Promise<number>;
}



//token balance
public async token_contract_balance(): Promise<number> {
  let meta =this;
  let acc = '';
  this.getAccount().then(address=>acc= address)   
  return new Promise((resolve, reject) => {  
    meta._LogicContract.token_contract_balance(function(err,result) 
   {
    if(err) 
    {
      console.log(err);
      
      reject(err);
    }
    else
    {   
      var out=result/1000000000000000000;
  resolve(out)
     }        
    
   });
 }) as Promise<number>;
}

//transfer
public async transfer(address,tokens): Promise<number> {
  let meta =this;
  
  return new Promise((resolve, reject) => {  
    var tkn_address=0x88b9cf7bea8f50847e300034b3e28f6279b5829e;
    meta._LogicContract.transfer(tkn_address,tokens,{from:address,gas: 600000},function(err,result) 
   {
    if(err!=null) 
    {
      console.log(err);
      
      reject(err);
    }
   
    else
    {
     resolve(result);
     }        
   });
 }) as Promise<number>;
}


 //create_service 
  public async add_service(address,name,price): Promise<number> {                             
    let indor = this;      
    return new Promise((resolve, reject) => {
      console.log("ADDRESs"+address)
      //indor.spin.show();
      indor._LogicContract.add_service.sendTransaction(name,this._web3.toWei(price,'ether'),{from:address,gas: 600000},function(err,result) 
      {  
        // (document.getElementById('n')  as HTMLInputElement).value='';
        // (document.getElementById('p')  as HTMLInputElement).value='';
        if(err!=null) 
        {
          // resolve(result)
        resolve(0);
          //indor.spin.hide();
          return;
        }
      else {
          indor.hash(result).then(res =>{
              if(res ==true)
              {
                resolve(1)
              }
              else if(res ==false){
                resolve(2)
              }
          })
        }
      });
    }) as Promise<number>;
  }
 
 //get service id
 public async service_id(): Promise<any> {                             
  let indor = this;    
  return new Promise((resolve, reject) => {
  indor._LogicContract.service_id.call(function(err,result) 
  {  
  if(err!=null) 
  {
    // resolve(result)
    reject(err);
    
  }
   else
   {
     var array=[];
     for(var i=1;i<=result;i++)
     {
       array.push(i);
     }
      resolve(array)
      console.log("RESULT"+result);
      
   }   
  });
  }) as Promise<any>;
}

//get service details
public async service_details(address,id): Promise<object> {                             
  let indor = this;
  
  return new Promise((resolve, reject) => {
  indor._LogicContract.service_details.call(id,{from:address,gas: 600000},function(err,result) 
  {  
  if(err) 
  {
    // resolve(result)
    reject(err);
    
  }
   else
   {
      resolve(result)      
   }   
  });
  }) as Promise<object>;
}
 
//buy_service
public async buy_service(address,id): Promise<number> {                             
  let indor = this;     
  return new Promise((resolve, reject) => {
  //indor.spin.show();
  indor._LogicContract.buy_service.sendTransaction(id,{from:address,gas: 600000},function(err,result) 
  
  {  
  if(err!=null) 
  {
    // resolve(result)
      resolve(0);
    //indor.spin.hide();
  }
 
  else {
    indor.hash(result).then(res =>{
        if(res == true)
        {
          resolve(1)
        }
        else if(res ==false){
          resolve(2)
          //indor.spin.hide();
        }
    })
  }
  });
  }) as Promise<number>;
}

//hashing
public async hash(a): Promise<boolean> {
  let meta = this;
  return new Promise((resolve, reject) => {

    var accountInterval = setInterval(function()
    {
      meta._web3.eth.getTransactionReceipt(a,function(err,result){
        if(err != null) {
        resolve(err);
        }

        if(result !== null)
        {
          clearInterval(accountInterval);
          if(result.status == 0x1)
          {
            resolve(true);
          }
          else
          {           
            resolve(false);
          }
        }
      })
    },100)
  }) as Promise<boolean>;
}
//check admin
public async check_admin(address): Promise<boolean> {                             
  let indor = this;
     
  return new Promise((resolve, reject) => {
  indor._LogicContract.admin.call({from:address,gas: 600000},function(err,result) 
  {  
  if(err) 
  {
    reject(err);    
  }
   else
   {     
    
    console.log((indor.account == result));
     if(indor.account == result)
     {
       
      resolve(true)      
     }
     else
     {
      resolve(false)      

     }
   }   
  });
  }) as Promise<boolean>;
}

//user_services
public async user_services(address,id): Promise<object> {                             
  let indor = this;
     
  return new Promise((resolve, reject) => {
  indor._LogicContract.user_services.call(indor.account,id,{from:address,gas: 600000},function(err,result) 
  {  
  if(err) 
  {
    // resolve(result)
    reject(err);
    
  }
   else
   {
      resolve(result)      
   }   
  });
  }) as Promise<object>;
}
 

public async balanceOf(address): Promise<number> {                             
  let indor = this;
     
  return new Promise((resolve, reject) => {
  indor._LogicContract.balanceOf.call(address,{from:address,gas: 600000},function(err,result) 
  {  
  if(err) 
  {
    reject(err);    
  }
   else
   {     
     var tkns=result/1000000000000000000; 
  
    resolve(tkns)
   }   
  });
  }) as Promise<number>;
}
}