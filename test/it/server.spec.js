import {expect} from 'chai';
import axios from 'axios';
import {beforeAndAfter, app} from '../environment';
import {getTestBaseUrl} from '../test-common';

const axiosInstance = axios.create({
  baseURL: getTestBaseUrl(),
  adapter: require('axios/lib/adapters/http')
});

describe('When rendering', () => {
  beforeAndAfter();

  it('should display a title', async () => {
    const url = app.getUrl('/');
    const response = await axiosInstance.get(url);

    expect(response.data).to.contain('Wix Full Stack Project Boilerplate');
  });
});
