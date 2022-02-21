import { generatePath } from 'react-router-dom';

import { PAGE_URL } from '@/configs/path';

export class LockerModel implements Locker.Dto {
  id: string;
  name: string;
  description: string;
  enableLockerCount: number;
  totalLockerCount: number;

  constructor(props: Locker.Dto) {
    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
    this.enableLockerCount = props.enableLockerCount;
    this.totalLockerCount = props.totalLockerCount;
  }

  get to(): string {
    return generatePath(PAGE_URL.LockerLocation, { locationId: this.id });
  }
}
