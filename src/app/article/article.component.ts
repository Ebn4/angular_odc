import { Component, Input, input } from '@angular/core';
import { Article } from '../models/article';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-article',
  imports: [ArticleComponent, RouterLink, NgFor],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {


  // @Input() article!: Article;
  @Input() article!: Article;
}
