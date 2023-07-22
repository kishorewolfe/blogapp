import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsFormComponent } from './comments/comments-form/comments-form.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'single-category',component:SingleCategoryComponent},
  {path:'single-post',component:SinglePostComponent},
  {path:'terms-and-conditions',component:TermsAndConditionsComponent},
  {path:'about',component:AboutComponent},
  {path:'contact-us',component:ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
