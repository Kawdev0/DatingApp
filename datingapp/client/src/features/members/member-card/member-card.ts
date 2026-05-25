import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Member } from "../../../types/member";
import { AgePipe } from "../../../app/age-pipe";


@Component({
selector: 'app-member-card'
imports: [RouterLink, AgePipe],
templateUrl: './member-card.html',
styleUrls: './member-card.css'

})

export class MemberCard {
  member = input.requierd<Member>();
}