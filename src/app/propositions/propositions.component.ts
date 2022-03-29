import { Component, OnInit } from '@angular/core';
import { PropositionsService } from '../services/propositions.service';

@Component({
  selector: 'app-propositions',
  templateUrl: './propositions.component.html',
  styleUrls: ['./propositions.component.scss']
})
export class PropositionsComponent implements OnInit {

  RandomProposition : any;


  constructor(private PropositionsService: PropositionsService) {}

  ngOnInit() {
    this.PropositionsService
      .getRandomProposition()
      .subscribe((RandomProposition) => {
        this.RandomProposition = RandomProposition;
      });
      
      
  }

}
