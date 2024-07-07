interface Island {
  id: string,
  isLocked: boolean;
  isComplete: boolean;
  question : string;
  correctAnswer : any;
  textContent: string;
  necessaryToUnlocked: [];
}

// necessaryToUnlocked Array com id das ilhas necessarias para desbloquear essa ilha
