import { CommentsIdComponent } from './comments-id/comments-id.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'comment-list', component: CommentsListComponent},
  {path: 'comment-id', component: CommentsIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
