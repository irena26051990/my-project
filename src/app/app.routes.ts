import {Routes} from "@angular/router";
import { ListItemsComponent } from "./list-items/list-items.component";
import { BagComponent } from "./bag/bag.component";

export const ROUTES:Routes = [
    // Main redirect
    {path: '', redirectTo: 'login', pathMatch: 'full'},
  
    // App views
    {path: 'main', component: ListItemsComponent},
    {path: 'bag', component: BagComponent},
  
    // Handle all other routes
    {path: '**',    component: ListItemsComponent }
  ];
  