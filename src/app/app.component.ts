import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'Les gens méchants codent comme des glands',
      content: 'Pour et mes aux criards rythmes, de tremblais genoux et ivre sourd, folle les de un des n\'auraient flache, des.',
      loveIts: 0,
      created_at: new Date()
    },
    { title: 'Les gens heureux codent mieux',
      content: 'Déplore moqueur excitant vivre yeux la comme et voluptueux. Souris.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Les gens gentils codent bien aussi',
      // tslint:disable-next-line:max-line-length
      content: 'Amour gouvernail l\'aube des pas d\'hommes faisait amer des ou. Sentant navrantes noirs tohu-bohus tapages au leurs soleils flots revé, l\'éveil d\'ineffables regretter est illuminant.',
      loveIts: 0,
      created_at: new Date()
    }
  ]
}
