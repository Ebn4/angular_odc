import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { CategorieComponent } from './categorie/categorie.component';
import { SingleComponent } from './single/single.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: ListArticleComponent},
    {path: 'about', component:DescriptionComponent},
    {path: 'categories', component:CategorieComponent},
    {path: 'article/:id', component:SingleComponent}
];
