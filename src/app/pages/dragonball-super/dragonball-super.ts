import { Component, inject } from '@angular/core';
import { DragonballService } from '../../services/dragonball.service';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add';

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super.html',
  styleUrl: './dragonball-super.css',
})
export class DragonballSuperComponent {
  public dragonballService = inject(DragonballService);
}
