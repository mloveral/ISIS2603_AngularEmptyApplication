import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditorialListComponent } from "./editorial-list/editorial-list.component";
import { EditorialDetail } from "./editorial-detail";

const routes: Routes = [
    {path: 'list', component: EditorialListComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EditorialRoutingModule { }