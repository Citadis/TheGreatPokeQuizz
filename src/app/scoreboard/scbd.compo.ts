import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScoreboardService } from '../services/scbd.service';

@Component({
    selector: 'scoreboard',
    templateUrl: './scbd.compo.html',
    styleUrls: ['./scbd.compo.scss']
})
export class Scoreboard implements OnInit {
    playerSCBD:any[] = [];
    
    constructor(
        private ScoreboardService: ScoreboardService,
        ) {}
    
    ngOnInit(): void {
        this.ScoreboardService.getScoreboardData()
        .subscribe((data:any[])=>{
            console.log(data)
            this.playerSCBD = data
            // var tabInsert = document.querySelector("#scoreSpace")!.innerHTML
            // data.forEach(function(line: { name: string; score: string; date: string; }){
            //      var str = "<tr><td>" + line.name + "</td><td>" + line.score + "</td><td>" + line.date + "</td></tr>"
            //      tabInsert += str
            // })
        })
    }
    
}
