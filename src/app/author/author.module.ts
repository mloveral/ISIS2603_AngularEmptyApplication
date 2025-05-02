import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { RouterModule } from '@angular/router';
import { AuthorRoutingModule } from './author-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthorRoutingModule
  ],
  declarations: [AuthorDetailComponent, AuthorListComponent]
})
export class AuthorModule { }
