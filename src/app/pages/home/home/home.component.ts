import { Component, OnInit } from '@angular/core';
import { IslandComponent } from '../component/island/island.component';
import { IslandService } from '../../../shared/services/island.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IslandComponent, CommonModule],
  providers:[IslandService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  public archipelago: any = {};

  constructor(private islandService: IslandService){}

  ngOnInit() {
    this.archipelago = this.islandService.getArchipelagoInfo();
    console.log(this.archipelago);

  }
}
