import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  useSymbols = false;
  useNumbers = false;
  useLetters = false;
  password = '';

  onChangeLength(value: string) {
    console.log(value);
    const parseValue = parseInt(value);
    if (!isNaN(parseValue)) {
      this.length = parseValue;
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
    this.password = 'My Password';
    console.log(`
    useSymbols : ${this.useSymbols}
    useNumbers : ${this.useNumbers}
    useLetters : ${this.useLetters}
    `);
  }
}
