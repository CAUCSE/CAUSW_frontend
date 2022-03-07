import { CircleModel } from './CircleModel';
import { UserModel } from './UserModel';

export class CircleUserModel {
  applicationId: string;
  status: Circle.Status;
  user: Model.User;
  circle: Model.Circle;

  constructor(props: Circle.CircleUser) {
    this.applicationId = props.id;
    this.status = props.status;
    this.user = new UserModel(props.user);
    this.circle = new CircleModel(props.circle);
  }

  get nameWithAdmission(): string {
    return `${this.user.name} (${this.user.admissionYear % 100})`;
  }
}
