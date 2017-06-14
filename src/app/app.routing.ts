import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';


import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import { CrudComponent } from "app/components/crud/crud.component";

import { CronometroComponent } from "app/components/cronometro/cronometro.component";
import { PruebasComponent } from "app/components/pruebas/pruebas.component";

const appRoutes: Routes = [
    //full : makes sure the path is absolute path
    {   path:'',
        component: HomeComponent

    },
    {   path:'profile',
        component: ProfileComponent
    },

    {   path:'crud',
        component: CrudComponent
    },

        {   path:'cronometro',
        component: CronometroComponent
    },

            {   path:'pruebas',
        component: PruebasComponent
    }




];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
export const appRoutingProviders:any[]=[];
