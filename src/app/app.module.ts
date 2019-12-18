import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentsIdComponent } from './comments-id/comments-id.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CommentsListComponent,
    CommentsIdComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
