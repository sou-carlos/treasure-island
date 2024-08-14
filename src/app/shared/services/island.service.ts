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
        question: 'Quanto é 1 + 3',
        correctAnswer: '4',
        textContent: 'Ilha 1',
        requiredToUnlock: []
      },
      {
        id: 1,
        isComplete: false,
        question: 'Quanto é 4 + 3',
        correctAnswer: '7',
        textContent: 'Ilha 2',
        requiredToUnlock: [0]
      },
      {
        id: 2,
        isComplete: false,
        question: 'Quanto é 4 x 3',
        correctAnswer: '12',
        textContent: 'Ilha 3',
        requiredToUnlock: [1]
      }
    ]
  }

  test$ = new BehaviorSubject<Archipelago>(this.archipelago)

  //TO DO: implements
  public getArchipelago () {

  }

  public postCompletedIsland(islandId: number) {
    this.archipelago.completedIsland.push(islandId);
    this.updateArchipelagoObject()
  }

  public updateArchipelagoObject() {
    this.archipelago.islands[0].isComplete = true;
    this.archipelago.islands[1].isComplete = true;
    this.test$.next(this.archipelago)
  }

  public getArchipelagoInfo() {
    return this.archipelago;
  }

  //TO DO: Refatorar, fazer novas funções
  public isIslandLocked (islandId: number): boolean {
    let quantityToUnlock: any;
    let completeIslands: any;

    this.archipelago.islands.forEach(island => {
      //peguei a ilha com o ID que recebi
      if(islandId === island.id){
        quantityToUnlock = island.requiredToUnlock.length

        //pega o array de ilhas completas
        this.archipelago.completedIsland.forEach(complete => {
          //verifica se as ilhas necessaria para desbloquear já está completa
          if(island.requiredToUnlock[0] === complete){
            completeIslands++;
          }
        });
      }
    });

    //se a ilha não precisar de nada para ser desbloqueada
    if(quantityToUnlock === 0) {
      return false;
    }

    if(quantityToUnlock === completeIslands){
      return false;
    }

    return true;
  }
}
