import { Component, OnInit } from '@angular/core';
import { AdviceService } from '../advice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advice-page',
  templateUrl: './advice-page.page.html',
  styleUrls: ['./advice-page.page.scss'],
})
export class AdvicePagePage implements OnInit {
  advice;
  constructor(private adviceService: AdviceService,private router: Router) { }

  ngOnInit() {
    this.advice = this.adviceService.currentAdvice  ;
  }

    back(){
      this.router.navigate(['/advice'])
    }
}
