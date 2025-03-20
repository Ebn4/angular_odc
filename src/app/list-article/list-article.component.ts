import { Component, inject } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { Article } from '../models/article';
import { NgFor } from '@angular/common';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-list-article',
  imports: [ ArticleComponent,NgFor],
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.css'
})
export class ListArticleComponent {
  articles!: Article[];
  service : ArticleService = inject(ArticleService);
  ngOnInit():void {
    this.articles = this.service.getarticles();
  }
}
