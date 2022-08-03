import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { GeneratorComponent } from './generator/generator.component';

const routes: Routes = [{path: 'categories', component: CategoriesComponent},
  {path: 'generator', component: GeneratorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
