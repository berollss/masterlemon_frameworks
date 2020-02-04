import { MemberEntity, createDefaultMemberEntity } from '../model';
import { MemberDomainModel, MemberDetailsDomainModel } from './model';

class MemberAPI {
  // Just return a copy of the mock data
  getAllMembers(organizationName: string): Promise<MemberDomainModel[]> {
    const gitHubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members`;

    return fetch(gitHubMembersUrl)
      .then(response => this.checkStatus(response))
      .then(response => this.parseJSON(response));
    //.then(data => this.resolveMembers(data));
  }

  private checkStatus(response: Response): Promise<Response> {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      let error = new Error(response.statusText);
      throw error;
    }
  }

  private parseJSON(response: Response): any {
    return response.json();
  }

  getMemberDetails(memberLogin: string): Promise<MemberDetailsDomainModel> {
    const gitHubMemberDetailsUrl: string = `https://api.github.com/users/${memberLogin}`;

    return fetch(gitHubMemberDetailsUrl)
      .then(response => this.checkStatus(response))
      .then(response => {
        return this.parseJSON(response);
      });
  }
}

export const memberAPI = new MemberAPI();
