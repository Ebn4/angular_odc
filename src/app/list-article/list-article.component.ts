import { Component, inject } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { Article } from '../models/article';
import { NgFor, NgForOf } from '@angular/common';
import { ArticleService } from '../service/article.service';


@Component({
  selector: 'app-list-article',
  imports: [ ArticleComponent,NgForOf],
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.css'
})
export class ListArticleComponent {
  articles!: Promise<Article[]> | any;
  service : ArticleService = inject(ArticleService);
  ngOnInit():void {
    // this.articles = this.service.getarticles();
    this.service.getArticles().then((articles) => {
      this.articles = articles.data;
      // console.log('Articles fetched:', articles);
    }).catch((error) => {
      console.error('Error fetching articles:', error);
    });
  }
}
