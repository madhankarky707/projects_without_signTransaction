import { Routes } from '@angular/router';
import { SpvComponent } from '../spv/spv.component';
import { InvestorComponent } from '../investor/investor.component';
import {CreatepackComponent} from '../createpack/createpack.component';
import {UpdateloanComponent} from '../updateloan/updateloan.component';
import { AddspvComponent } from '../addspv/addspv.component';
import { SpvGuard } from '../guard/spv.guard';
import { InvestorGuard } from '../guard/investor.guard';
import { AddinvestorComponent } from '../addinvestor/addinvestor.component';
import { IssuerGuard } from '../guard/issuer.guard';
import { WelcomeComponent } from '../welcome/welcome.component';
import { AddloanComponent } from '../addloan/addloan.component';
import { AddbankComponent } from '../add bank/addbank.component';
import { AddborrowerComponent } from '../addborrower/addborrower.component';
import { WithdrawComponent } from '../withdraw/withdraw.component';
import { MetamaskErrorComponent } from "../metamask-error/metamask-error.component";





export  const  routes: Routes = [
  { 
    path: 'WelcomeComponent',
    component: WelcomeComponent,

  },
    { 
      path: 'addbank',
      component: AddbankComponent,
      canActivate : [IssuerGuard]

    },
    { 
      path: 'addborrower',
      component: AddborrowerComponent,
      canActivate : [IssuerGuard]

    },
    { 
      path: 'addloan',
      component: AddloanComponent,
      canActivate : [IssuerGuard]

    },
    { 
      path: 'spv',
      component:SpvComponent,
      canActivate : [SpvGuard]

    },
    { 
      path: 'addspv',
      component:AddspvComponent,
    },
    { 
      path: 'investor',
      component: InvestorComponent,
      canActivate : [InvestorGuard]

    },
    { 
      path: 'addinvestor',
      component: AddinvestorComponent,
    },
    { 
      path: 'createpack',
      component: CreatepackComponent,
      canActivate : [IssuerGuard]

    },
    { 
      path: 'updateloan',
      component: UpdateloanComponent,
      canActivate : [IssuerGuard]

    },
    { 
      path: 'withdraw',
      component: WithdrawComponent,
      canActivate : [IssuerGuard]

    },
    { 
      path: 'metamask',
      component: MetamaskErrorComponent,
  
    },
   
     { 
      path: '',
      redirectTo: '/addbank',
      pathMatch: 'full'
    }
  ];