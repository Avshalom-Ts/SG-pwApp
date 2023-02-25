import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  button = 'Generate!';
  length = 0;
  useSymbols = false;
  useNumbers = false;
  useLetters = false;
  password = '';

  onChangeLength(value: any) {
    // console.log(value.target.value);
    const parseValue = parseInt(value.target.value);
    if (!isNaN(parseValue)) {
      this.length = parseValue;
    }
    console.log(this.length);
  }
  onCheckValue(value: any) {
    const isEmpty = parseInt(value.target.value);
    if (!isEmpty) {
      this.length = 0;
    }
  }

  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  onChangeUseLetter() {
    this.useLetters = !this.useLetters;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwx';
    const symbols = '!@#$%^&*()_+-$~?":;{}[]|';
    let validChars = '';

    if (this.useLetters) {
      validChars += letters;
    }
    if (this.useNumbers) {
      validChars += numbers;
    }
    if (this.useSymbols) {
      validChars += symbols;
    }
    let generatePassWord = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatePassWord += validChars[index];
    }
    this.password = generatePassWord;
    this.button = 'OR Re Generate!';

    setTimeout((value: string) => {
      value = '';
      this.password = value;
    }, 10000);
  }
}
