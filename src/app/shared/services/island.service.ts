import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IslandService {
  //Serviço paga armazenar os status das ilhas

  public archipelago =  {
    name: 'Primeiro Arquipelogo',
    islands: [
      {
        id: 0,
        isLocked: false,
        isComplete: false,
        question: 'Quanto é 1 + 3',
        correctAnswer: '4',
        textContent: 'Ilha 1',
        necessaryToUnlocked: []
      },
      {
        id: 1,
        isLocked: false,
        isComplete: false,
        question: 'Quanto é 4 + 3',
        correctAnswer: '7',
        textContent: 'Ilha 2',
        necessaryToUnlocked: ['0']
      },
      {
        id: 2,
        isLocked: false,
        isComplete: false,
        question: 'Quanto é 4 x 3',
        correctAnswer: '12',
        textContent: 'Ilha 3',
        necessaryToUnlocked: ['1']
      }
    ]
  }

  constructor() { }

  public getArchipelagoInfo() {
    return this.archipelago;
  }

}
