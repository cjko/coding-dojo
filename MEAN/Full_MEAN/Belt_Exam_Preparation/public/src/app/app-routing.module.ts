import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardComponent } from './board/board.component';
import { TopicComponent } from './topic/topic.component';
import { CommentComponent } from './comment/comment.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { AddPostComponent } from './add-post/add-post.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', component: DashboardComponent },
  { path: '', component: DashboardComponent, children: [
  	{ path: 'dashboard', component: BoardComponent},
  	{ path: 'topic/:id', component: TopicComponent },
  	{ path: 'user/:id', component: UserInfoComponent },
  ]},
  { path: 'login', component: LoginComponent },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
