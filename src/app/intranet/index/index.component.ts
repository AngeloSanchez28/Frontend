import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent  {

  habitoPersonal2: HTMLFormElement | null;
  formuPersonal2: HTMLFormElement | null;
  habitoPersonal3: HTMLFormElement | null;
  formuPersonal3: HTMLFormElement | null;

  constructor() {
    this.habitoPersonal2 = null;
    this.formuPersonal2 = null;
    this.habitoPersonal3 = null;
    this.formuPersonal3 = null;
  }

  ngOnInit(): void {
    this.habitoPersonal2 = document.querySelector('#habitoPersonal2') as HTMLFormElement;
    this.formuPersonal2 = document.querySelector('#formuPersonal2') as HTMLFormElement;
    this.habitoPersonal3 = document.querySelector('#habitoPersonal3') as HTMLFormElement;
    this.formuPersonal3 = document.querySelector('#formuPersonal3') as HTMLFormElement;
  }

  habito2(): void {
    const minicontenedor2 = document.getElementById('minicontenedor2');
    const minicontenedor1 = document.getElementById('minicontenedor1');
    const minicontenedor3 = document.getElementById('minicontenedor3');
    if (minicontenedor2 && minicontenedor1 && minicontenedor3) {
      minicontenedor2.style.display = 'block';
      minicontenedor1.style.display = 'none';
      minicontenedor3.style.display = 'none';
    }
  }

  habito1(): void {
    const minicontenedor2 = document.getElementById('minicontenedor2');
    const minicontenedor1 = document.getElementById('minicontenedor1');
    const minicontenedor3 = document.getElementById('minicontenedor3');
    if (minicontenedor2 && minicontenedor1 && minicontenedor3) {
      minicontenedor2.style.display = 'none';
      minicontenedor1.style.display = 'block';
      minicontenedor3.style.display = 'none';
    }
  }

  habito3(): void {
    const minicontenedor2 = document.getElementById('minicontenedor2');
    const minicontenedor1 = document.getElementById('minicontenedor1');
    const minicontenedor3 = document.getElementById('minicontenedor3');
    if (minicontenedor2 && minicontenedor1 && minicontenedor3) {
      minicontenedor2.style.display = 'none';
      minicontenedor1.style.display = 'none';
      minicontenedor3.style.display = 'block';
    }
  }

  onSubmitPersonal2(): void {
    // Lógica para procesar el formulario del minicontenedor 2
    if (this.habitoPersonal2 && this.formuPersonal2) {
      const habitoPersonal2Value = this.habitoPersonal2['value'] as string;
      const transaction: TransactionInterface = {
        habitoPersonal: habitoPersonal2Value,
      };
      this.renderTransaction(transaction);
    }
  }

  onSubmitPersonal3(): void {
    // Lógica para procesar el formulario del minicontenedor 3
    if (this.habitoPersonal3 && this.formuPersonal3) {
      const habitoPersonal3Value = this.habitoPersonal3['value'] as string;
      const transaction: TransactionInterface = {
        habitoPersonal: habitoPersonal3Value,
      };
      this.renderTransaction(transaction);
    }
  }


  renderTransaction(transaction: TransactionInterface): void {
    const tableRow = document.createElement('tr');
    const tableDataHabito = document.createElement('td');
    tableDataHabito.textContent = transaction.habitoPersonal;
    tableRow.appendChild(tableDataHabito);
    const tBody = document.querySelector('tbody');
    if (tBody) {
      tBody.prepend(tableRow);
    }
  }
}

interface TransactionInterface {
  habitoPersonal: string;
}
