import { Component, OnInit } from '@angular/core';
import { AdviceService } from '../advice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.page.html',
  styleUrls: ['./advice.page.scss'],
})
export class AdvicePage implements OnInit {
  messages:any;
  data:any;
  constructor(private adviceService:AdviceService,private router:Router) { }
  
  a:any;
  arr: any = [ ];
  
  
  ngOnInit() {
    

    this.a = this.loadingData();

   console.log(this.arr)
    

     
  }


  loadingData(){
    for(let i=1;i<10;i++){
      this.adviceService.getAdvice(i).subscribe(data=>{
       this.messages = data ;
        this.arr.push(this.messages);

      });  
    }

    
  }

  
  gotopage(advice){
    this.adviceService.currentAdvice = advice;
    this.router.navigate(['/advice-page']) ;

    console.log(this.adviceService.currentAdvice);
  }


}
