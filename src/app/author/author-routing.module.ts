import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthorListComponent } from "./author-list/author-list.component";
import { AuthorDetailComponent } from "./author-detail/author-detail.component";

const routes: Routes = [
    {path: 'list', component: AuthorListComponent},
    {path: ':id', component: AuthorDetailComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthorRoutingModule { }