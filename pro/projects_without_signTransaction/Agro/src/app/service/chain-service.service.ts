  import { Injectable } from '@angular/core';
  import {HttpClient} from '@angular/common/http';
  import * as Web3 from 'web3';
  declare let require: any;
  declare let window: any;
  
  let contractAbi= require('./contract.json');
  @Injectable({
    providedIn: 'root'
  })
  export class  ChainServiceService {
    public account: string = null; 
    public balance:number;
    public  _web3: any;
    public acc:string =null;
    public supply_contract: any;
    public supply_contract_address: string = "0x99fb450cb43fdc7a5c97e11fbae23c3b03e77084";

    constructor(private httpclient:HttpClient) {
      if (typeof window.web3 !== 'undefined') {
        this._web3 = new Web3(window.web3.currentProvider);
        this.supply_contract = this._web3.eth.contract(contractAbi).at(this.supply_contract_address);
    }  
  } 

  public async getAccount(): Promise<string> {
    if (this.account == null) {
      this.account = await new Promise((resolve, reject) => {
        this._web3.eth.getAccounts((err, accs) => {
          
          if (err != null) {
            // this.router.navigate(['metamask']);
            return;
          }
          if (accs.length === 0) {
            // this.router.navigate(['metamask']);
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

  public async hash(a): Promise<boolean> {
    let meta = this;
    return new Promise((resolve, reject) => {

      var accountInterval = setInterval(function()
      {
        meta._web3.eth.getTransactionReceipt(a,function(err,result){
          if(err != null) {
          reject(err);
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
  public async  check_admin(): Promise<string> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.admin.call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else 
        {
          resolve(result)
        }
      });
    }) as Promise<string>;
  }


    public async product_detail_map(id): Promise<object> {
      let instance = this;
      return new Promise((resolve,reject) => {
        instance.supply_contract.product_detail_map.call(id,function(err,result) {
          if(err != null){
            reject(err);
          }
          else{
            resolve(result)
          }
        })
      }) as Promise<object>;
    } 

  public async produt_ids(): Promise<number[]> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.produt_ids.call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else{
          const arr:number[] = [];
          for(var i=1;i<=result.toNumber();i++){
          arr.push(i);
        }
        resolve(arr)
      }
      
      });
    }) as Promise<number[]>;
  }

  public async  farmer_id_by_address(farmer_address): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.farmer_id_by_address.call(farmer_address,function(err,result) {
        if(err != null) {
          reject(err);
        }
        else 
        {
          resolve(result.toNumber() )
        }
      });
    }) as Promise<number>;
  }


  public async farmer_name(farmer_id): Promise<string> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.farmer_name.call(farmer_id,function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          resolve(result)
        }
      });
    }) as Promise<string>;
  }

  public async farmer_by_id(farmer_id): Promise<string> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.farmer_by_id.call(farmer_id,function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          resolve(result)
        }
      });
    }) as Promise<string>;
  }
                        
  public async farmer_ids(): Promise<number[]> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.farmer_ids.call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else{
          const arr:number[] = [];
          for(var i=1;i<=result.toNumber();i++){
          arr.push(i);
        }
        resolve(arr)
      }
      
      });
    }) as Promise<number[]>;   
  }             

  public async farmer_registeration(farmer_name,address): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.farmer_registeration.sendTransaction(farmer_name,{from:address,gas: 600000},function(err,result) {
        if(err != null) {
          // instance.spinner.hide()
          resolve(0);
        }
        else {
          instance.hash(result).then(res =>{
            if(res == true)
            {
              resolve(1)
            }
            else if(res == false){
              resolve(2)
            }
          })
        }
      }); 
    }) as Promise<number>;
  }

              
  public async farmer_add_product(product_name,product_price,product_quantity,address): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.farmer_add_product.sendTransaction(product_name,instance._web3.toWei(product_price,'ether'),product_quantity,{from:address,gas: 600000},function(err,result) {
        if(err != null) {
          // instance.spinner.hide()
          resolve(0);
        }
        else {
          instance.hash(result).then(res =>{
            if(res == true)
            {
              resolve(1)
            }
            else if(res == false){
              resolve(2)
            }
          })
        }
      });
    }) as Promise<number>;
  }

  public async farmer_balance(farmer_id): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.farmer_balance.call(farmer_id,function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          resolve(result)
        }
      });
    }) as Promise<number>;
  }


  public async former_withdraw(ether,address): Promise<number> {
    let instance=this;
    return new Promise((resolve, reject) => {
    instance.supply_contract.farmer_widthdraw.sendTransaction(ether,{from:address,gas: 600000},function(err,result){
    if(err != null) {
      // instance.spinner.hide()
      resolve(0);
    }
    else {
      instance.hash(result).then(res =>{
        if(res == true)
        {
          resolve(1)
        }
        else if(res == false){
          resolve(2)
        }
      })
    }
  })
}) as Promise<number>;
}


//Event reading
public async add_product_event(): Promise<any> {
  let instance = this;
  return new Promise((resolve,reject) => {
    instance.supply_contract.add_product({}, { fromBlock: 0, toBlock: 'latest' }).get((error, eventResult)=> {
      if(error != null){
        reject(error);
      }
      else{
        resolve(eventResult)
      }
    })
  }) as Promise<any>;
}

//supplier event
public async Supplier_event(): Promise<any> {
  let instance = this;
  return new Promise((resolve,reject) => {
    instance.supply_contract.farmer_to_supplier_transfer({}, { fromBlock: 0, toBlock: 'latest' }).get((error, Sipp_eventResult)=> {
      if(error != null){
        reject(error);
      }
      else{
        resolve(Sipp_eventResult)
      }
    })
  }) as Promise<any>;
}
//Distributor event
public async Distributor_event(): Promise<any> {
  let instance = this;
  return new Promise((resolve,reject) => {
    instance.supply_contract.supplier_to_distributor_transfer({}, { fromBlock: 0, toBlock: 'latest' }).get((error, Dis_eventResult)=> {
      if(error != null){
        reject(error);
      }
      else{
        resolve(Dis_eventResult)
      }
    })
  }) as Promise<any>;
}
//Retailer event
public async Retailer_event(): Promise<any> {
  let instance = this;
  return new Promise((resolve,reject) => {
    instance.supply_contract.distributor_to_retailer_transfer({}, { fromBlock: 0, toBlock: 'latest' }).get((error, Re_eventResult)=> {
      if(error != null){
        reject(error);
      }
      else{
        resolve(Re_eventResult)
      }
    })
  }) as Promise<any>;
}



  public async product_detail_map_supplier(id1,id2): Promise<object> {
    let instance = this;
    return new Promise((resolve,reject) => {
      instance.supply_contract.product_detail_map_supplier.call(id1,id2,function(err,result) {
        if(err != null){
          reject(err);
        }
        else{
          resolve(result)
        }
      })
    }) as Promise<object>;
  }

  public async supplier_ids(): Promise<number[]> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.supplier_ids.call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else{
          const arr:number[] = [];
          for(var i=1;i<=result.toNumber();i++){
          arr.push(i);
        }
        resolve(arr)
      }
      
      });
    }) as Promise<number[]>;
  }

  public async  supplier_id_by_address(supplier_address): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.supplier_id_by_address.call(supplier_address,function(err,result) {
        if(err != null) {
          reject(err);
        }
        else  
        {
          resolve(result)
        }
      });
    }) as Promise<number>;
  }


  public async supplier_by_id(supplier_id): Promise<string> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.supplier_by_id.call(supplier_id,function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          resolve(result)
        }
      });
    }) as Promise<string>;
  }

  public async supplier_registeration(supplier_name,address): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.supplier_registeration.sendTransaction(supplier_name,{from:address,gas: 600000},function(err,result) {
        if(err != null) {
          // instance.spinner.hide()
          resolve(0);
        }
        else {
          instance.hash(result).then(res =>{
            if(res == true)
            {
              resolve(1)
            }
            else if(res == false){
              resolve(2)
            }
          })
        }
      });
    }) as Promise<number>;
  }

  
  public async supplier_name(supplier_id): Promise<string> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.supplier_name.call(supplier_id,function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          resolve(result)
        }
      });
    }) as Promise<string>;
  }
  // product_id,product_quantity,new_price*1000000000000000000,address,(p_d[1].toNumber() *product_quantity)
  public async supplier_buy_product(product_id,product_quantity,new_price,address,amount): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.supplier_buy_product.sendTransaction(product_id,product_quantity,new_price,{from:address,value:amount,gas: 600000},function(err,result) {
        if(err != null) {
          // instance.spinner.hide()
          resolve(0);
        }
        else {
          instance.hash(result).then(res =>{
            if(res == true)
            {
              resolve(1)
            }
            else if(res == false){
              resolve(2)
            }
          })
        }
      });
    }) as Promise<number>;
  }

  public async supplier_balance(supplier_id): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.supplier_balance.call(supplier_id,function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          resolve(result)
        }
      });
    }) as Promise<number>;
  }
  public async product_detail_map_shop(id1,id2): Promise<object> {
    let instance = this;
    return new Promise((resolve,reject) => {
      instance.supply_contract.product_detail_map_shop.call(id1,id2,function(err,result) {
        if(err != null){
          reject(err);
        }
        else{
          resolve(result) 
        }
      })
    }) as Promise<object>;
  }

  public async shop_ids(): Promise<number[]> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.shop_ids.call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else{
          const arr:number[] = [];
          for(var i=1;i<=result.toNumber();i++){
          arr.push(i);
        }
        resolve(arr)
      }
      
      });
    }) as Promise<number[]>;   
  }            
  
  public async shop_balance(shop_id): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.shop_balance.call(shop_id,function(err,result) {
        if(err != null) {
          reject(err);
        }
        else  
        {
          resolve(result)
        }
      });
    }) as Promise<number>;
  }  

  public async supplier_widthdraw(amount,address): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.supplier_widthdraw.sendTransaction(amount,{from:address,gas: 600000},function(err,result) {
        if(err != null) {
          // instance.spinner.hide()
          resolve(0);
        }
        else {
          instance.hash(result).then(res =>{
            if(res == true)
            {
              resolve(1)
            }
            else if(res == false){
              resolve(2)
            }
          })
        }
      });
    }) as Promise<number>;
  }

  public async shop_widthdraw(amount,address): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.shop_widthdraw.sendTransaction(amount,{from:address,gas: 600000},function(err,result) {
        if(err != null) {
          // instance.spinner.hide()
          resolve(0);
        }
        else {
          instance.hash(result).then(res =>{
            if(res == true)
            {
              resolve(1)
            }
            else if(res == false){
              resolve(2)
            }
          })
        }
      });
    }) as Promise<number>;
  }


  public async product_ids(): Promise<number[]> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.produt_ids.call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else{
          const arr:number[] = [];
          for(var i=1;i<=result.toNumber();i++){
          arr.push(i);
        }
        resolve(arr)
      }
      
      });
    }) as Promise<number[]>;   
  }            
  public async shop_id_by_address(supplier_address): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.shop_id_by_address.call(supplier_address,function(err,result) {
        if(err != null) {
          reject(err);
        }
        else  
        {
          resolve(result)
        }
      });
    }) as Promise<number>;
  }                                  


  public async shop_by_id(supplier_id): Promise<string> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.shop_by_id.call(supplier_id,function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          resolve(result)
        }
      });
    }) as Promise<string>;
  }

  public async shop_name(shop_id): Promise<string> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.shop_name.call(shop_id,function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          resolve(result)
        }
      });
    }) as Promise<string>;
  }
   
  public async  shop_registeration(shop_name,address): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.shop_registeration.sendTransaction(shop_name,{from:address,gas: 600000},function(err,result) {
        if(err != null) {
          // instance.spinner.hide()
          resolve(0);
        }
        else {
          instance.hash(result).then(res =>{
            if(res == true)
            {
              resolve(1)
            }
            else if(res == false){
              resolve(2)
            }
          })
        }
      });
    }) as Promise<number>;
  }


  public async shop_buy_product(product_id,product_quantity,new_price,su_i,address,amount): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.shop_buy_product.sendTransaction(product_id,product_quantity,instance._web3.toWei(new_price,'ether'),su_i,{from:address,value:amount,gas: 600000},function(err,result) {
        if(err != null) {
          // instance.spinner.hide()
          resolve(0);
        }
        else {
          instance.hash(result).then(res =>{
            if(res == true)  
            {
              resolve(1)
            }
            else if(res == false){
              resolve(2)
            }
          })
        }
      });
    }) as Promise<number>;
  }
    
  public async consumer_ids(): Promise<number[]> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.consumer_ids.call(function(err,result) {
        if(err != null) {
          reject(err);
        }
        else{
          const arr:number[] = [];
          for(var i=1;i<=result.toNumber();i++){
          arr.push(i);
        }
        resolve(arr)
      }
      
      });
    }) as Promise<number[]>;   
  }           

  public async check_farmer(): Promise<number> {                                       
    let instance = this;
    // let account_adddress:string;
    return new Promise((resolve, reject) => {
      instance.getAccount().then(account_adddress=>{
      instance.supply_contract.farmer_id_by_address.call(account_adddress,function(err,result) {
        if(err != null) {
          reject(err);
        }
        else 
        {
          resolve(result)
        }
      });
    })
    }) as Promise<number>;
  }
  public async check_supplier(): Promise<number> {                                       
    let instance = this;
    // let account_adddress:string;
    return new Promise((resolve, reject) => {
      instance.getAccount().then(account_adddress=>{
      instance.supply_contract.supplier_id_by_address.call(account_adddress,function(err,result) {
        if(err != null) {
          reject(err);
        }
        else 
        {
          resolve(result)
        }
      });
    })
    }) as Promise<number>;
  }

public async check_shop(): Promise<number> {                                       
    let instance = this;
    // let account_adddress:string;
    return new Promise((resolve, reject) => {
      instance.getAccount().then(account_adddress=>{
      instance.supply_contract.shop_id_by_address.call(account_adddress,function(err,result) {
        if(err != null) {
          reject(err);
        }
        else 
        {
          resolve(result)
        }
      });
    })
    }) as Promise<number>;
  }


  public async check_consumer(): Promise<number> {                                       
    let instance = this;
    // let account_adddress:string;
    return new Promise((resolve, reject) => {
      instance.getAccount().then(account_adddress=>{
      instance.supply_contract.consumer_id_by_address.call(account_adddress,function(err,result) {
        if(err != null) {
          reject(err);
        }
        else 
        {
          resolve(result)
        }
      });
    })
    }) as Promise<number>;
  }


  public async  consumer_id_by_address(consumer_adderss): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.consumer_id_by_address.call(consumer_adderss,function(err,result) {
        if(err != null) {
          reject(err);
        }
        else 
        {
          resolve(result)
        }
      });
    }) as Promise<number>;
  }
  
  public async consumer_by_id(consumer_id): Promise<string> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.consumer_by_id.call(consumer_id,function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          resolve(result)
        }
      });
    }) as Promise<string>;
  }


  public async order_id(consumer_id): Promise<number[]> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.order_id.call(consumer_id,function(err,result) {
        if(err != null) {
          reject(err);
        }
        else{
          const arr:number[] = [];
          for(var i=1;i<=result.toNumber();i++){
          arr.push(i);
        }
        resolve(arr)
      }
      });
    }) as Promise<number[]>;
  }

  
  public async consumer_map(consumer_id,order_id): Promise<object> {
    let instance = this;
    return new Promise((resolve,reject) => {
      instance.supply_contract.consumer_map.call(consumer_id,order_id,function(err,result) {
        if(err != null){
          reject(err);
        }
        else{
          resolve(result)
        }
      })
    }) as Promise<object>;
  } 
  
  
  
  public async consumer_name(consumer_id): Promise<string> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.consumer_name.call(consumer_id,function(err,result) {
        if(err != null) {
          reject(err);
        }
        else
        {
          resolve(result)
        }
      });
    }) as Promise<string>;
  }

  public async consumer_registeration(name,address): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.consumer_registeration.sendTransaction(name,{from:address,gas: 600000},function(err,result) {
        if(err != null) {
          // instance.spinner.hide()
          resolve(0);
        }
        else {
          instance.hash(result).then(res =>{
            if(res == true)
            {
              resolve(1)
            }
            else if(res == false){
              resolve(2)
            }
          })
        }
      }); 
    }) as Promise<number>;
  }
  
  
  public async consumer_buy_product(product_id,product_quantity,shop_id,address,amount): Promise<number> {                                       
    let instance = this;
    return new Promise((resolve, reject) => {
      instance.supply_contract.consumer_buy_product.sendTransaction(product_id,product_quantity,shop_id,{from:address,value:instance._web3.toWei(amount,'ether'),gas: 600000},function(err,result) {
        if(err != null) {
          // instance.spinner.hide()
          resolve(0);
        }
        else {
          instance.hash(result).then(res =>{
            if(res == true)
            {
              resolve(1)
            }
            else if(res == false){
              resolve(2)
            }
          })
        }
      });
    }) as Promise<number>;
  }
           
  }
    