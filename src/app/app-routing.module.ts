import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NestedTreeComponent} from "./nested-tree/nested-tree.component";
import {NotFoundComponentComponent} from "./not-found-component/not-found-component.component";
import {HomeComponentComponent} from "./home-component/home-component.component";

const routes: Routes = [{
  path: 'book',
  loadChildren: () => import('./book/book.module').then(m => m.BookModule)
},{
  path: 'journal',
  loadChildren: () => import('./journal/journal.module').then(m => m.JournalModule)
},
  {
    path:'task',
    loadChildren: () => import("./task/task.module").then(m => m.TaskModule)
  },
  {path:'goal', loadChildren: () => import("./okr/okr.module").then(m => m.OkrModule)},
  {path:'note', loadChildren: () => import("./note/note.module").then(m => m.NoteModule)},
  {path:'habit', loadChildren: () => import("./habit/habit.module").then(m => m.HabitModule)},
  {path: "**", component: NotFoundComponentComponent}];

@NgModule({
  imports: [  RouterModule.forRoot(routes, {
    paramsInheritanceStrategy: 'always',
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
