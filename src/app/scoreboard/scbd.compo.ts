import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScoreboardService } from '../services/scbd.service';

@Component({
    selector: 'scoreboard',
    templateUrl: './scbd.compo.html',
    styleUrls: ['./scbd.compo.scss']
})
export class Scoreboard implements OnInit {
    
    constructor(
        private ScoreboardService: ScoreboardService,
        ) {}
    
    ngOnInit(): void {
        this.ScoreboardService.getScoreboardData()
        .subscribe(function(data){
            console.log(data)
            var tabInsert = document.querySelector("#scoreSpace")!.innerHTML
            data.foreach(function(line: { name: string; score: string; date: string; }){
                tabInsert += "<tr><td>" + line.name + "</td><td>" + line.score + "</td><td>" + line.date + "</td></tr>" 
            })
        })
    }
    
}
