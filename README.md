# Calculator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

![Screenshot](Capture.PNG)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## create calculator 
Open the src/app/app.component.ts file and start by defining the following member variables of the component:
```javascript
currentNumber='0'; 
firstop=null;
operator=null;
secondNumber=false; 
result; 
```
* The currentNumber variable holds the string that will be displayed in the result input element.
* The firstop variable holds the value of the first operand of the operation.
* The operator variable holds the operation.
* The secondNumber variable holds a boolean value indicating if the user has finished typing the first operand and ready to enter the second operand of the operation.

Next, define the presskey() method that will be used to get the current number:
```javascript
presskey(number:string) 
{ 
       if(this.secondNumber) 
       {
           this.currentNumber=number;  
           this.secondNumber=false;  
       }
       else
       {
          this.currentNumber==='0'?this.currentNumber=number:this.currentNumber+=number; 
       }    
}   
```
Next, define the getDecimal() method which appends the decimal point to the current number

```javascript
getDecimal()
   {
      if(!this.currentNumber.includes('.'))
      {
        this.currentNumber += '.'; 
      }
  }
  ```
  Next, define the getOperation() that will be used to get the performed operation:
  
  ```javascript

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

   ```

Finally, define the clear() method that will be used to clear the result area and reset the calculations:
```javascript
public clear() 
   {
     this.currentNumber = '0';
     this.firstop = null;
     this.operator = null;
     this.secondNumber = false;
   }
```
Now, you need to use data binding to bind these methods to the template.
We have defined variables and methods in the component. Now, we'll need to bind them to the template.

Let's start with the currentNumber variable which holds the value of the currently typed number. Let's use property binding to bind currentNumber to the value attribute of the <input> element as follows:
   ```javascript
    <div class="calculator">

  <input type="text" class="calculator-screen" [value]="currentNumber" disabled />

  <!-- [...] -->
  ```
We use brackets around the value attribute to create a property binding.Now, our current number will be displayed in our calculator and when the value of the currentNumber variable changes, the displayed value will change accordingly without having to manually add any code to update the DOM.

Next, when a digit button is clicked we need to call the presskey() method to append the digit to the current number string. For this, we can use Angular event binding to bind the presskey() method to the click event of buttons displaying the digits. Changte your component template as follows:
```javascript

<div class="calculator">
    <h1>Calculator</h1>
    <input type="text" [value]="currentNumber" class="calculator-screen" disabled><br>
    <div class="calculator-keys">
    <button type="button" class="operator"  (click)="operation('+')" value="+">+</button>
    <button type="button" class="operator"  (click)="operation('-')" value="-">-</button>
    <button type="button" class="operator"  (click)="operation('*')" value="*">&times;</button>
    <button type="button" class="operator"  (click)="operation('/')" value="/">&divide;</button>

    <button type="button" (click)="presskey('7')" value="7">7</button>
    <button type="button" (click)="presskey('8')" value="8">8</button>
    <button type="button" (click)="presskey('9')" value="9">9</button>


    <button type="button" (click)="presskey('4')" value="4">4</button>
    <button type="button" (click)="presskey('5')" value="5">5</button>
    <button type="button" (click)="presskey('6')" value="6">6</button>


    <button type="button" (click)="presskey('1')" value="1">1</button>
    <button type="button" (click)="presskey('2')" value="2">2</button>
    <button type="button" (click)="presskey('3')" value="3">3</button>


    <button type="button"  (click)="presskey('0')" value="0">0</button>
    <button type="button"  (click)="presskey('.')" class="decimal" value=".">.</button>
    <button type="button" class="all-clear" value="all-clear" (click) = "clear()">AC</button>

    <button type="button"  (click)="operation('=')" class="equal-sign" value="=">=</button>
    </div>  
</div>

```
We use the parentheses around the click event to create an event binding.

Next, let's bind the operation(), getDecimal() and clear() methods to the click event of their respective buttons

```javascript
<div class="calculator-keys">

    <button type="button" class="operator"  (click)="operation('+')" value="+">+</button>
    <button type="button" class="operator"  (click)="operation('-')" value="-">-</button>
    <button type="button" class="operator"  (click)="operation('*')" value="*">&times;</button>
    <button type="button" class="operator"  (click)="operation('/')" value="/">&divide;</button>

    <!-- [...] -->

    <button type="button" (click) = "getDecimal()" class="decimal" value=".">.</button>
    <button type="button" (click) = "clear()"  class="all-clear" value="all-clear">AC</button>

    <button type="button" (click) = "getOperation('=')" class="equal-sign" value="=">=</button>

  </div>
</div>    
```

