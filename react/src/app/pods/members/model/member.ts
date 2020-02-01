export interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}

export interface MemberColumn {
  id: string;
  label: string;
}

export const createDefaultMemberEntity = () => ({
  id: -1,
  login: '',
  avatar_url: '',
});
