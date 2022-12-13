import { Component, OnInit } from '@angular/core';
import { BBB } from 'src/app/bbb';
import { ClubService } from 'src/app/Services/club.service';

@Component({
  selector: 'app-technical-team',
  templateUrl: './technical-team.component.html',
  styleUrls: ['./technical-team.component.css']
})
export class TechnicalTeamComponent implements OnInit {
  public members: BBB.POLE[]
  constructor(
    private clubService : ClubService
  ) { }

  ngOnInit(): void {
    this.getMembers()
  }

  public getMembers(){
    this.clubService.getTeamMembers()
    .subscribe((r:[])=>{
      this.members = r
    })
  }
}
