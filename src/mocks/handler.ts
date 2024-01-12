import { http, HttpResponse } from 'msw';

const handlers = [
  http.get('/api/test', () => {
    return HttpResponse.json({ id: 'abc', name: 'Gyu' });
  }),
  http.get('/api/v1/home', () => {
    return HttpResponse.json<Home.GetHomePageResponseDto>([
      {
        board: { id: '0', category: 'board_category', name: '학생회 공지게시판' },
        posts: {
          content: [
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
              id: 'content_id2',
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
          ],
        },
      },
    ]);
  }),
];

export default handlers;
