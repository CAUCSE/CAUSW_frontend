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
