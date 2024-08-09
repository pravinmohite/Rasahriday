import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs.component';
import { BlogsByCategoryComponent } from './blogs-by-category/blogs-by-category.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';


const routes: Routes = [
  { path: '', component: BlogsComponent },
  { path: 'category', component: BlogsByCategoryComponent },
  { path: ':blogId/:blogSlug', component: BlogDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
