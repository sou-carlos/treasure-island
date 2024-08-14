export interface Island {
  id: number;
  isComplete: boolean;
  question : string;
  correctAnswer : any;
  textContent: string;
  requiredToUnlock: Array<number>;
}

export interface Archipelago {
  name: string;
  completedIsland: Array<number>;
  islands: Array<Island>
}

// necessaryToUnlocked Array com id das ilhas necessarias para desbloquear essa ilha
