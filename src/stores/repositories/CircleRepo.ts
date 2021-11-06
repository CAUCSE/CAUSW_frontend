import { API } from 'configs/axios';

class CircleRepo {
  URI = '/api/v1/circles';

  fetch = async (): Promise<any> => {
    const { data } = await API.get(this.URI);

    console.debug(data);

    return data;
  };
}

export const CircleRepoImpl = new CircleRepo();
