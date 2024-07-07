import { Component, Input, OnInit, inject, signal } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { IslandDialogComponent } from '../island-dialog/island-dialog.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-island',
  standalone: true,
  imports: [MatDialogModule, IslandDialogComponent, NgClass],
  templateUrl: './island.component.html',
  styleUrl: './island.component.scss'
})
export class IslandComponent implements OnInit{
  readonly dialog = inject(MatDialog)

  @Input()
  isLocked: boolean = false;

  @Input()
  isComplete: boolean = false;

  @Input()
  question : string = '';

  @Input()
  correctAnswer : any = '4';

  @Input()
  textContent: string = 'Ilha 0'

  //1: declara answer como um signal
  readonly answer = signal('');

  ngOnInit(): void {

  }

  public handleClick() {
    if(this.isLocked) {
      console.log("fase bloqueada");
      return
    }

    this.callIslandQuestion()
  }

  public callIslandQuestion() {
    //2 passa o signal como parametro pro modal,
    //signal é passado como se fosse uma função this.signalName()
    let dialogRef = this.dialog.open(IslandDialogComponent, {
      data: {answer: this.answer()}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        //3:pega o resultado e define answer (.set) como o valor de resut
         this.answer.set(result);

         //verifica se a resposta está correta
        if(this.answer() === this.correctAnswer) {
          this.isComplete = true;
          console.log(this.isComplete);
        }
      }
    });


  }
}
