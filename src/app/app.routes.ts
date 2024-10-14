import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SelectComponent } from './pages/select/select.component';
import { LoginComponent } from './pages/login/login.component';
import { BookComponent } from './pages/book/book.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"movies",component:MoviesComponent},
    {path:"contact_us",component:ContactUsComponent},
    {path:"movies/:id",component:SelectComponent},
    {path:"login",component:LoginComponent},
    {path:"bookTicket",component:BookComponent},
    {path:"bookTicket1",component:BookComponent},

];
