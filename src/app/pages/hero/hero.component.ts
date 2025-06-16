import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [UpperCasePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  name = signal('Ironman');
  age = signal(45);

  getHeroDescription() {
    return `${this.name()}  - ${this.age()}`;
  }

  heroDescription = computed(() => {
    return `${this.name()} - ${this.age()}`;
  });

  capitalizedName = computed(() => {
    return this.name().toUpperCase();
  });

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }
}
