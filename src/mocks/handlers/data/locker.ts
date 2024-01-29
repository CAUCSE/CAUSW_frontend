export const lockerAllLocationsList: Locker.FindAllLocationResponseDto = {
  lockerLocations: [
    //problem: Swagger API와 아예 다름
    {
      id: '3',
      name: 'locker_location',
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
  locationName: 'locker_location',
  lockerList: [
    {
      id: '1',
      lockerNumber: '1_locker',
      lockerLocationName: 'lockerLocationName',
      updatedAt: '2024-01-22T17:41:50.213Z',
      expireAt: '2024-01-22T17:41:50.213Z',
      isActive: true,
      isMine: true,
    },
    {
      id: '2',
      lockerNumber: '2_locker',
      lockerLocationName: 'string',
      updatedAt: 'string',
      expireAt: 'string',
      isActive: false,
      isMine: false,
    },
    {
      id: '3',
      lockerNumber: '3_locker',
      lockerLocationName: 'string',
      updatedAt: 'string',
      expireAt: 'string',
      isActive: true,
      isMine: false,
    },
    {
      id: '4',
      lockerNumber: '4_locker',
      lockerLocationName: 'string',
      updatedAt: 'string',
      expireAt: 'string',
      isActive: false,
      isMine: false,
    },
    {
      id: '1',
      lockerNumber: '1_locker',
      lockerLocationName: 'lockerLocationName',
      updatedAt: '2024-01-22T17:41:50.213Z',
      expireAt: '2024-01-22T17:41:50.213Z',
      isActive: true,
      isMine: true,
    },
    {
      id: '2',
      lockerNumber: '2_locker',
      lockerLocationName: 'string',
      updatedAt: 'string',
      expireAt: 'string',
      isActive: false,
      isMine: false,
    },
    {
      id: '3',
      lockerNumber: '3_locker',
      lockerLocationName: 'string',
      updatedAt: 'string',
      expireAt: 'string',
      isActive: true,
      isMine: false,
    },
    {
      id: '4',
      lockerNumber: '4_locker',
      lockerLocationName: 'string',
      updatedAt: 'string',
      expireAt: 'string',
      isActive: false,
      isMine: false,
    },
  ],
};
