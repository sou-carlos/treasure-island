export interface Island {
  id: number;
  isComplete: boolean;
  isUnlocked: boolean;
  question : string;
  correctAnswer : any;
  textContent: string;
}

export interface Archipelago {
  name: string;
  completedIsland: Array<number>;
  islands: Array<Island>
}

