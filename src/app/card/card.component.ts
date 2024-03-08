import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

 
  cardNum :any = "";
  getInput = true;
  counter = 0;
  count = 0;
  cardName ='';
  @ViewChild('name') name ?: string;
  keyArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    ['↻',0,'←']
  ]
  lastNum:number;
  numDisplay(key:any){
    
    if(typeof key === "number")
    {
      this.lastNum = key;
      if(this.counter < 16){
        this.cardNum += '' + key;
        this.count = this.count + 1;
        this.counter += 1; 
        if(this.count === 4)
        {
          this.cardNum = this.cardNum + ' ' ;
          
          this.count = 0;
        }
      }

    }
    if(key==='↻')
    {
        this.cardNum ='';
        this.count =0;
        this.counter =0;
    }
    if (key === '←')
    {
      if(this.count >= 0)
      { 
        if(this.count === 0)
        {
          this.count = 4;
          this.cardNum = this.cardNum.trim();
        }
        this.cardNum = this.cardNum.slice(0,-1);
        this.count -=1;
        this.counter -=1;
        
      } 
      // else{
      //   this.cardNum = this.cardNum.slice(0,-1); 
      //   this.count -= 1;
      //   this.counter -=1;
      // }
      
    }
  }
  onkey(cardName:string){
      this.cardName   = cardName ;
  }

}
