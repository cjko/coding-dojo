import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { CommunicateService } from './communicate.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { TopicComponent } from './topic/topic.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    AddTopicComponent,
    AddCommentComponent,
    UserInfoComponent,
    TopicComponent,
    AddPostComponent,
    PostComponent,
    CommentComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [HttpService, CommunicateService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
