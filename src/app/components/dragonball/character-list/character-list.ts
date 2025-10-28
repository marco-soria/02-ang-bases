import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-character-list',
  imports: [],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
})
export class CharacterListComponent {
  characters = input.required<Character[]>();
  listName = input.required<string>();
}
