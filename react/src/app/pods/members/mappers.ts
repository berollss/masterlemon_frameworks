import { MemberDomainModel, MemberDetailsDomainModel } from './api/model';
import { MemberEntity, MemberDetailsVM } from './model';

export const mapMembersFromDomainToViewModel = (members: MemberDomainModel[]): MemberEntity[] =>
  members.map(member => mapMemberFromDomainToViewModel(member));

const mapMemberFromDomainToViewModel = (member: MemberDomainModel): MemberEntity => ({
  id: member.id,
  login: member.login,
  avatar_url: member.avatar_url,
});

export const mapMemberDetailsFromDomainToViewModel = (memberDetails: MemberDetailsDomainModel): MemberDetailsVM => ({
  id: memberDetails.id,
  login: memberDetails.login,
  name: memberDetails.name,
  avatar_url: memberDetails.avatar_url,
});
