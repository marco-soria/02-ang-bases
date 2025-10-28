import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class CounterComponent {
  counter = 10;
  counterSignal = signal(10);

  increaseBy(value: number): void {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  decreaseBy(value: number): void {
    this.counter -= value;
    this.counterSignal.update((current) => current - value);
  }

  reset(): void {
    this.counter = 10;
    this.counterSignal.set(10);
  }
}
