import { BoardDto } from '@/stores/repositories/BoardRepo';

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
    updatable: true,
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
  {
    id: '1',
    mainImage: '0 | null',
    name: 'circle_name2',
    description: 'circle_description2',
    isJoined: false,
    joinedAt: '2023-12-31',
    leaderId: '123',
    leaderName: 'circle_leaderName2',
    createdAt: '2019-01-01',
    numMember: 100,
  },
];

export const circleBoardList: Circle.Board[] = [
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

export const boardList: BoardDto[] = [
  { id: '0', category: '공지게시판', name: '학생회 공지게시판' },
  { id: '1', category: '공지게시판', name: '1학년 공지게시판' },
  { id: '2', category: '자유게시판', name: '질문게시판' },
  { id: '3', category: '자유게시판', name: '코딩게시판' },
];

//locker
export const lockerAllLocationsList: Locker.FindAllLocationResponseDto = {
  lockerLocations: [
    //problem: Swagger API와 아예 다름
    {
      id: '3',
      name: 'name',
      description: 'description',
      enableLockerCount: 0,
      totalLockerCount: 0,
    },
  ],
  myLocker: {
    expireAt: 'expireAt',
    id: 'id',
    isActive: true,
    isMine: true,
    lockerNumber: 1,
    updatedAt: '2024-01-22T09:50:43.175Z',
    lockerLocationName: 'lockerLocationName', //problem: Swagger API에 없음
  },
};

export const lockerLocationsList: Locker.FindByLocationResponseDto = {
  locationName: '3층 사물함',
  lockerList: [
    {
      id: '1',
      lockerNumber: '1',
      lockerLocationName: 'lockerLocationName',
      updatedAt: '2024-01-22T17:41:50.213Z',
      expireAt: '2024-01-22T17:41:50.213Z',
      isActive: true,
      isMine: true,
    },
    {
      id: '2',
      lockerNumber: '2',
      lockerLocationName: 'string',
      updatedAt: 'string',
      expireAt: 'string',
      isActive: false,
      isMine: true,
    },
    {
      id: '3',
      lockerNumber: '3',
      lockerLocationName: 'string',
      updatedAt: 'string',
      expireAt: 'string',
      isActive: true,
      isMine: false,
    },
    {
      id: '4',
      lockerNumber: '4',
      lockerLocationName: 'string',
      updatedAt: 'string',
      expireAt: 'string',
      isActive: false,
      isMine: false,
    },
  ],
};

//history
export const historyCommentList: User.FindCommentsResponseDto = {
  comment: {
    content: [
      {
        boardId: '1',
        postId: '1',
        parentCommentId: null,
        circleName: 'circleName',
        boardName: 'boardName',
        postName: 'postName',
        id: '1',
        content: 'content',
        tagUserName: 'tagUserName',
        createdAt: '2024-01-22T17:41:50.213Z',
        updatedAt: '2024-01-22T17:41:50.213Z',
      },
    ],
    last: true, //problem: false하면 반복 생성됨.
  },
};

export const historyPostList: User.FindPostsResponseDto = {
  post: {
    content: [
      {
        boardId: '1',
        title: 'title',
        circleName: 'circleName',
        boardName: 'boardName',
        numComment: 0,
        id: '1',
        createdAt: '2024-01-22T17:41:50.213Z',
        updatedAt: '2024-01-22T17:41:50.213Z',
      },
    ],
    last: true, //problem: false하면 반복 생성됨.
  },
};
