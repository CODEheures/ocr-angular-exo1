import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  public posts: Post[] = []
  public postsSubscription: Subscription
  public msgError: string

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe((posts) => {
      this.posts = posts
    })
    this.postService.getPosts()
    .then()
    .catch((error: string) => { this.msgError = error })
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe()
  }

  onPostUpdateError(message: string) {
    this.msgError = message
  }
}
