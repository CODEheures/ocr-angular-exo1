import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from '../post';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.scss']
})
export class PostNewComponent implements OnInit {

  public postFromGroup: FormGroup
  public msgError: string

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.postFromGroup = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    })
  }

  onSubmit() {
    const post: Post = {
      title: this.postFromGroup.value['title'],
      content: this.postFromGroup.value['content'],
      loveIts: 0,
      created_at: new Date()
    }

    this.postService.createPost(post)
      .then(() => { this.router.navigate(['/posts']) })
      .catch((error) => { this.msgError = error })
  }

}
