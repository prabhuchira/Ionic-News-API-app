import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.page.html',
  styleUrls: ['./dogs.page.scss'],
})
export class DogsPage implements OnInit {

  constructor(private dogsService : NewsService) { }
  dogImage;
  ngOnInit() {
      this.dogsService.getDogs().subscribe(data=>{
        this.dogImage = data;
      });
  }



}
