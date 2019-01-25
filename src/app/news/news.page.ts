import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  article;
  data:any;
  constructor(private newsService : NewsService,private route:Router) { }

  ngOnInit() {
    this.newsService.getData('everything?q=bitcoin&from=2018-12-25&sortBy=publishedAt').subscribe(data => { this.data = data})
  }

  goToPage(article){
    this.newsService.currentArticle = article;
    this.route.navigate(['/news-single']);
  }

  displayThis(){
    this.article.urlToImage = 'https://cdn.pixabay.com/photo/2018/01/16/10/36/mistake-3085712_960_720.jpg'
  }



}
