import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Member } from "../../../types/member";


@Component({
selector: 'app-member-card'
imports: [RouterLink],
templateUrl: './member-card.html',
styleUrls: './member-card.css'

})

export class MemberCard {
  member = input.requierd<Member>();
}