import { Injectable } from '@angular/core';
import { Archipelago } from '../interfaces/island';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IslandService {
  //Serviço paga armazenar os status das ilhas

  //isLocked: false, será uma propriedade do componente de ilha, o componente definira isso a partir do atributo
  //@requiredToUnlock

  public archipelago: Archipelago =  {
    name: 'Primeiro Arquipelogo',
    completedIsland: [],
    islands: [
      {
        id: 0,
        isComplete: false,
        isUnlocked: true,
        question: 'Quanto é 1 + 3',
        correctAnswer: '4',
        textContent: 'Ilha 1',
      },
      {
        id: 1,
        isComplete: false,
        isUnlocked: false,
        question: 'Quanto é 4 + 3',
        correctAnswer: '7',
        textContent: 'Ilha 2',
      },
      {
        id: 2,
        isComplete: false,
        isUnlocked: false,
        question: 'Quanto é 4 x 3',
        correctAnswer: '12',
        textContent: 'Ilha 3',
      }
    ]
  }

  test$ = new BehaviorSubject<Archipelago>(this.archipelago)

  //TO DO: implements
  public getArchipelago () {

  }

  public postCompletedIsland(islandId: number) {
    //Aqui eu tenho que fazer um post pra API e verificar se a resposta está correta
    this.archipelago.completedIsland.push(islandId);
    this.updateArchipelagoObject(islandId)
  }

  public updateArchipelagoObject(island: number) {

    switch(island) {
      case 0:
        this.archipelago.islands[0].isComplete = true;
        this.archipelago.islands[1].isUnlocked = true;
        break
      case 1:
        this.archipelago.islands[1].isComplete = true;
        this.archipelago.islands[2].isUnlocked = true;
        break;
      case 2:
        this.archipelago.islands[2].isComplete = true;
        break;
    }

    this.test$.next(this.archipelago)
  }

  public getArchipelagoInfo() {
    return this.archipelago;
  }
}
