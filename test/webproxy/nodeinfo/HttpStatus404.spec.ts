import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import data from './data/http_status_404.json';
import { getEnv } from '../bootstrap';

const env = getEnv();
const baseUrl = env.protocol + '://' + env.host + ':' + env.port + '/api/' + env.version;
const endpoint = '/nodeinfo';

describe(baseUrl + endpoint, () => {
  chai.use(chaiHttp);

  data.parameters.forEach(function(parameters) {
    it(`GET ${parameters.node_pub_key} responds with http status 404`, () => {
      return chai.request(baseUrl)
        .get(`${endpoint}/${parameters.node_pub_key}`)
        .then((res: ChaiHttp.Response) => {
          expect(res.status).to.equal(404);
          expect(res).to.be.json;
          let text = JSON.parse(res.text);
          expect(text.message).to.equal('Not Found');
        }, (err: any) => {
          throw err;
        });
    });
  });
});
