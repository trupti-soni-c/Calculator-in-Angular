import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
currentNumber='0'; //currentNumber variable holds the string that will be displayed in the result input element
secondNumber=false; //no2 variable holds a boolean value indicating if the user has finished typing the first operand and ready to enter the second operand of the operation.
result;
firstop=null; //firstop variable holds the value of the first operand of the operation.
operator=null; //operator variable holds the operation.

presskey(number:string) //when user click on 0 to 9 number button.presskey() method that will be used to get the current number:
{ 
       if(this.secondNumber) //by default no2=false
       {
           this.currentNumber=number;  //display number into textbox
           this.secondNumber=false;  
       }
       else
       {
          this.currentNumber==='0'?this.currentNumber=number:this.currentNumber+=number; //currentNumber variable holds '0' then first condition true otherwise second condition
       }    
}   
getDecimal() // getDecimal() method which appends the decimal point to the current number
{
   if(!this.currentNumber.includes('.'))
   {
     this.currentNumber += '.'; 
   }
}

operation(op:string)	
{
      console.log(op);  
      
      if(this.firstop===null)
      {
        this.firstop=Number(this.currentNumber);  //textbox value into firstop
      }
      else if(this.operator)
      {
        if(this.operator==='+')
        {
          this.result=this.firstop + Number(this.currentNumber);  
          this.currentNumber=String(this.result);
          this.firstop=this.result;
        }
        else if(this.operator==='-')
        {
          this.result=this.firstop - Number(this.currentNumber);
          this.currentNumber=String(this.result);
          this.firstop=this.result;
        }
        else if(this.operator==='*')
        {
          this.result=this.firstop * Number(this.currentNumber);
          this.currentNumber=String(this.result);
          this.firstop=this.result;
        }
        else if(this.operator==='/')
        {
          this.result=this.firstop / Number(this.currentNumber);
          this.currentNumber=String(this.result);
          this.firstop=this.result;
        }
        else if (this.operator==='=')
        {
          this.result=Number(this.currentNumber);
          this.currentNumber=String(this.result);
          this.firstop=this.result;
        }
      }
      this.operator=op;
      this.secondNumber=true;
      console.log(this.firstop);
   }
   public clear() //the clear() method that will be used to clear the result area and reset the calculations:
   {
     this.currentNumber = '0';
     this.firstop = null;
     this.operator = null;
     this.secondNumber = false;
   }
}
