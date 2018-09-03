import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostNewComponent } from './post-new/post-new.component';
import { Routes } from '@angular/router'

const routes: Routes = [
  {path: 'posts', component: PostListComponent},
  {path: 'new', component: PostNewComponent},
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: '**', redirectTo: '/posts'}
]
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    PostNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
