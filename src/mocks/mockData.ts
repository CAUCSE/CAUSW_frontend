export const contentList: Post.Dto[] = [
  {
    id: '0',
    title: 'post_title',
    writerName: 'post_writerName',
    writerAdmissionYear: 19,
    writerProfileImage: 'content_writerProfileImage | null',
    content: 'content',
    createdAt: new Date('2024-01-11T15:34'),
    updatedAt: new Date(),
    numComment: 0,
    updatable: false,
    deletable: false,
    isDeleted: false,
  },
  {
    id: '1',
    title: 'post_title2',
    writerName: 'post_writerName2',
    writerAdmissionYear: 20,
    writerProfileImage: 'content_writerProfileImage2 | null',
    content: 'content2',
    createdAt: new Date('2024-01-12T15:34'),
    updatedAt: new Date(),
    numComment: 2,
    updatable: false,
    deletable: false,
    isDeleted: false,
  },
];

export const commentList: PostComment.GetResponseDto = {
  last: false,
  content: [
    {
      postId: '0',
      id: '0',
      writerAdmissionYear: 19,
      writerName: 'writer_name',
      writerProfileImage: 'writerProfileImage | null',
      content: 'comment_content',
      createdAt: '2024-01-12T15:34',
      updatedAt: '2024-01-13T15:34',
      numChildComment: 1,
      updatable: false,
      deletable: false,
      isDeleted: false,
    },
    {
      postId: '0',
      id: '1',
      writerAdmissionYear: 19,
      writerName: 'writer_name',
      writerProfileImage: 'writerProfileImage | null',
      content: 'comment_content',
      createdAt: '2024-01-12T15:34',
      updatedAt: '2024-01-13T15:34',
      numChildComment: 1,
      updatable: false,
      deletable: false,
      isDeleted: false,
    },
  ],
};

export const circleList: Circle.FindByIdDto[] = [
  {
    id: '0',
    mainImage: '0 | null',
    name: 'circle_name',
    description: 'circle_description',
    isJoined: true,
    joinedAt: '2023-12-31',
    leaderId: '123',
    leaderName: 'circle_leaderName',
    createdAt: '2019-01-01',
    numMember: 999,
  },
];

export const boardList: Circle.Board[] = [
  {
    id: '0',
    name: 'board_name',
    postId: '0',
    postTitle: 'board_postTitle',
    postCreatedAt: '2023-12-31',
    postNumComment: 3,
    postWriterName: 'board_postWriterName',
    postWriterStudentId: 'board_postWriterStudentId',
  },
];

export const lockerAllLocationsList: Locker.FindAllLocationResponseDto = {
  lockerLocations: [
    //problem: Swagger API와 아예 다름
    {
      id: '3',
      name: '3층 사물함',
      description: 'string',
      enableLockerCount: 0,
      totalLockerCount: 0,
    },
  ],
  myLocker: {
    expireAt: 'string',
    id: 'string',
    isActive: true,
    isMine: true,
    lockerNumber: 1,
    updatedAt: '2024-01-22T09:50:43.175Z',
    lockerLocationName: 'string', //problem: Swagger API에 없음
  },
};

export const lockerLocationsList: Locker.FindByLocationResponseDto = {
  locationName: '3층 사물함',
  lockerList: [
    {
      id: '1',
      lockerNumber: 'number',
      lockerLocationName: 'string',
      updatedAt: 'string',
      expireAt: 'string',
      isActive: true,
      isMine: true,
    },
    {
      id: '2',
      lockerNumber: 'number',
      lockerLocationName: 'string',
      updatedAt: 'string',
      expireAt: 'string',
      isActive: false,
      isMine: true,
    },
    {
      id: '3',
      lockerNumber: 'number',
      lockerLocationName: 'string',
      updatedAt: 'string',
      expireAt: 'string',
      isActive: true,
      isMine: false,
    },
    {
      id: '4',
      lockerNumber: 'number',
      lockerLocationName: 'string',
      updatedAt: 'string',
      expireAt: 'string',
      isActive: false,
      isMine: false,
    },
  ],
};
