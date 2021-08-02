import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NestedTreeComponent} from "./nested-tree/nested-tree.component";
import {NotFoundComponentComponent} from "./not-found-component/not-found-component.component";
import {HomeComponentComponent} from "./home-component/home-component.component";

const routes: Routes = [{
  path: 'book',
  loadChildren: () => import('./book/book.module').then(m => m.BookModule)
}, {path: "**", component: NotFoundComponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
