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

export interface MemberDetailsVM {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
  company: string;
  blog: string;
  email: string;
}

export const createEmptyMemberDetails = (): MemberDetailsVM => ({
  id: null,
  login: '',
  name: '',
  avatar_url: '',
  company: '',
  blog: '',
  email: '',
});
