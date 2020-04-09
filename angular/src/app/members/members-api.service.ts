import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { MemberEntity } from "./models/member.model";

@Injectable({
  providedIn: "root",
})
export class MembersApiService {
  constructor(private http: HttpClient) {}

  getAllMembers(organizationName: string): Observable<MemberEntity[]> {
    const gitHubMembersUrl = `https://api.github.com/orgs/${organizationName}/members`;
    const a = this.http.get<MemberEntity[]>(gitHubMembersUrl);
    console.log(a);
    return a;
  }
}
