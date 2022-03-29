import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScoreboardService } from '../services/scbd.service';

@Component({
    selector: 'scorebord',
    templateUrl: './scbd.compo.html',
    styleUrls: ['./scbd.compo.scss']
})
export class scorebord implements OnInit {
    
    constructor() { }
    
    ngOnInit(): void {
        this.ScoreboardService.getScorebordData()
        .then(function(data){
            console.log(data)
            tabInsert = document.querySelector("#scoreSpace").innerHTML
            data.foreach(function(line){
                tabInsert += "<tr><td>" + line.name + "</td><td>" + line.score + "</td><td>" + line.date + "</td></tr>" 
            })
        }, console.warn("Erreur dans le transfert de données"))
    }
    
}
