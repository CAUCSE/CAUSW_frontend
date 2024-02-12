export const circleList: Circle.FindByIdDto[] = [
  {
    id: '0',
    mainImage: '0 | null',
    name: 'circle_name',
    description: 'circle_description',
    isJoined: true,
    joinedAt: new Date('2023-12-31'),
    leaderId: '123',
    leaderName: 'circle_leaderName',
    createdAt: new Date('2019-01-01'),
    numMember: 999,
  },
  {
    id: '1',
    mainImage: '0 | null',
    name: 'circle_name2',
    description: 'circle_description2',
    isJoined: false,
    joinedAt: new Date('2023-12-31'),
    leaderId: '123',
    leaderName: 'circle_leaderName2',
    createdAt: new Date('2019-01-01'),
    numMember: 100,
  },
];

export const circleBoardList: Circle.Board[] = [
  {
    id: '0',
    name: 'board_name',
    postId: '0',
    postTitle: 'board_postTitle',
    postCreatedAt: new Date('2023-12-31'),
    postNumComment: 3,
    postWriterName: 'board_postWriterName',
    postWriterStudentId: 'board_postWriterStudentId',
  },
];
