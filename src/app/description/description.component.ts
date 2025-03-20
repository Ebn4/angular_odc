import { Component } from '@angular/core';
import { ListArticleComponent } from '../list-article/list-article.component';

@Component({
  selector: 'app-description',
  imports: [ListArticleComponent],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
article: any;

}
