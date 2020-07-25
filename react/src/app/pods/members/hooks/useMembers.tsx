import * as React from 'react';
import { memberAPI } from '../api';
import { MemberEntity } from '../model';
import { mapMembersFromDomainToViewModel } from '../mappers';

export const useMembers = () => {
    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const loadMembers = React.useCallback(
      (organizationName: string) => () => {
        memberAPI.getAllMembers(organizationName).then((members) => setMembers(mapMembersFromDomainToViewModel(members)));
      },
      [],
    );
  
    return { loadMembers, members };
  };