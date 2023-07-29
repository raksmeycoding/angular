import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'udemy-angular';
  password: string = ""
  passwordLenght: number = 0
  disableGenerateButton: boolean = false

  includeLetters = true
  inCludeNumbers = true
  includeSymbols = true

  constructor() { }
  onButtonClick = (): void => {
    console.log(`
    About to get generated password: 
    Inlcude numbers: ${this.inCludeNumbers}
    Inlcude letters: ${this.includeLetters}
    Inlcude symbols: ${this.includeSymbols}
    `)
    this.password = this.getRandomPasswrod()

    console.log(this.passwordLenght)
  }

  onChangeUseLetters(): void {
    this.includeLetters = !this.includeLetters
    if ((this.includeSymbols === true || this.inCludeNumbers === true || this.includeLetters === true)) {
      this.disableGenerateButton = false
    } else {
      this.disableGenerateButton = true
    }
  }

  onChangeUseNumber(): void {
    this.inCludeNumbers = !this.inCludeNumbers
    if ((this.includeSymbols === true || this.inCludeNumbers === true || this.includeLetters === true)) {
      this.disableGenerateButton = false
    } else {
      this.disableGenerateButton = true
    }
  }

  onChangeUserSymbol(): void {
    this.includeSymbols = !this.includeSymbols
    if ((this.includeSymbols === true || this.inCludeNumbers === true || this.includeLetters === true)) {
      this.disableGenerateButton = false
    } else {
      this.disableGenerateButton = true
    }
  }


  onChangeLength(event: Event | null): void {
    if (event instanceof Event && event.target !== null) {
      const inputEvent = event as Event & { target: HTMLInputElement };
      if (!isNaN(parseInt(inputEvent.target.value))) {
        this.passwordLenght = parseInt(inputEvent.target.value)
        return
      }
      this.passwordLenght = 0
    }
  }







  getRandomPasswrod(): string {
    const number = "0123456789"
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const symbols = "!@#$%^&*()_+{}:<>?/.,';][=-"
    var chars: string = "";


    if (this.includeLetters) {
      chars += letters
    }

    if (this.inCludeNumbers) {
      chars += number
    }

    if (this.includeSymbols) {
      chars += symbols
    }

    var string_length: number = this.passwordLenght;
    var randomstring: string = '';
    for (var i = 0; i < string_length; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    return randomstring
  }
}
