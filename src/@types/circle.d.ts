declare namespace Circle {
  export interface Dto {
    id: string;
    mainImage: string | null;
    name: string;
    description: string;
    isJoined: boolean;
    joinedAt: string | null;
    leaderId: string;
    leaderName: string;
    createdAt: string;
    numMember: number;
  }
}
