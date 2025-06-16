import { Component, inject } from '@angular/core';
import { DragonballService } from '../../services/dragonball.service';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super.component.html',
  styleUrl: './dragonball-super.component.css',
})
export class DragonballSuperComponent {
  public dragonballService = inject(DragonballService);
}
