export const lockerAllLocationsList: Locker.FindAllLocationResponseDto = {
  lockerLocations: [
    //problem: Swagger API와 아예 다름
    {
      id: '3',
      name: 'locker_location',
      //description: 'description',
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
    //lockerLocationName: 'lockerLocationName', //problem: Swagger API에 없음
  },
};

export const lockerLocationsList: Locker.FindByLocationResponseDto = {
  locationName: 'locker_location',
  lockerList: [
    {
      id: '1',
      lockerNumber: '101',
      lockerLocationName: 'lockerLocationName',
      updatedAt: '2024-01-22T17:41:50.213Z',
      expireAt: '2024-01-22T17:41:50.213Z',
      isActive: true,
      isMine: true,
    },
    {
      id: '2',
      lockerNumber: '102',
      lockerLocationName: 'string',
      updatedAt: 'string',
      expireAt: 'string',
      isActive: false,
      isMine: false,
    },
    {
      id: '3',
      lockerNumber: '103',
      lockerLocationName: 'string',
      updatedAt: 'string',
      expireAt: 'string',
      isActive: true,
      isMine: false,
    },
    {
      id: '4',
      lockerNumber: '104',
      lockerLocationName: 'string',
      updatedAt: 'string',
      expireAt: 'string',
      isActive: false,
      isMine: false,
    },
    {
      id: '5',
      lockerNumber: '105',
      lockerLocationName: 'lockerLocationName',
      updatedAt: '2024-01-22T17:41:50.213Z',
      expireAt: '2024-01-22T17:41:50.213Z',
      isActive: true,
      isMine: false,
    },
    {
      id: '6',
      lockerNumber: '106',
      lockerLocationName: 'string',
      updatedAt: 'string',
      expireAt: 'string',
      isActive: false,
      isMine: false,
    },
    {
      id: '7',
      lockerNumber: '107',
      lockerLocationName: 'string',
      updatedAt: 'string',
      expireAt: 'string',
      isActive: true,
      isMine: false,
    },
    {
      id: '8',
      lockerNumber: '108',
      lockerLocationName: 'string',
      updatedAt: 'string',
      expireAt: 'string',
      isActive: false,
      isMine: false,
    },
  ],
};
