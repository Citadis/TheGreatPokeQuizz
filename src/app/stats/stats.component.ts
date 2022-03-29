import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

    ngOnInit(): void {
        console.group("Component Stats")
        console.log("Component created")
        console.groupEnd()
    }
}