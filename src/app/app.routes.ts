import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Blog } from './components/blog/blog';
import { Arewe } from './components/arewe/arewe';
import { Nested } from './nested/nested';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'blog',component:Blog},
    {path:'arewe',component:Arewe},
    {path:'blog/:slug',component:Nested},
    {path:'**',component:Notfound}
];
