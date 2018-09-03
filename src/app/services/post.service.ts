import { Injectable } from '@angular/core';
import { Post } from '../post';
import { Subject } from 'rxjs';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = []

  public postsSubject: Subject<Post[]>

  constructor() {
    this.postsSubject = new Subject()
  }

  // use only by getPosts
  publishPost() {
    this.postsSubject.next(this.posts.slice())
  }

  // get posts from firebase and update when value change
  getPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      firebase.database().ref('posts/').on('value',
        (snapshot: firebase.database.DataSnapshot) => {
          this.posts = snapshot.val() || []
          this.publishPost()
          resolve()
        },
        (error: firebase.FirebaseError) => {
          reject(error.message)
        }
      )
    })
  }

  createPost(post: Post): Promise<boolean> {
    this.posts.push(post)
    return new Promise((resolve, reject) => {
      firebase.database().ref('posts/').set(this.posts)
      .then(() => { resolve(true) })
      .catch((error: firebase.FirebaseError) => { reject(error.message) })
    })
  }

  deletePost(index: number) {
    this.posts.splice(index, 1)
    return new Promise((resolve, reject) => {
      firebase.database().ref('posts/').set(this.posts)
      .then(() => { resolve(true) })
      .catch((error: firebase.FirebaseError) => { reject(error.message) })
    })
  }

  updatePosts(index: number, post: Post) {
    return new Promise((resolve, reject) => {
      firebase.database().ref('posts/' + index).set(post)
      .then(() => { resolve(true) })
      .catch((error: firebase.FirebaseError) => { reject(error.message) })
    })
  }
}
