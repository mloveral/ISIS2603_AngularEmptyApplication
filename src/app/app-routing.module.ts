import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book/book-list/book-list.component';

const routes: Routes = [
  {path: '', component: BookListComponent},
  {path: 'books', loadChildren: () => import('./book/book.module').then(m => m.BookModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
