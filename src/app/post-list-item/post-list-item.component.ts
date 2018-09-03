import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post
  @Input() index: number
  @Output() postUpdateError = new EventEmitter<string>()


  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onIncrementLove() {
    this.post.loveIts++
    this.updatePost()
  }

  onDecrementLove() {
    this.post.loveIts--
    this.updatePost()
  }

  updatePost() {
    this.postService.updatePosts(this.index, this.post)
    .then()
    .catch((error: string) => { this.postUpdateError.emit(error) })
  }

  onDeletePost() {
    this.postService.deletePost(this.index)
    .then()
    .catch((error: string) => { this.postUpdateError.emit(error) })
  }
}
