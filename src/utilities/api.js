import serverApi from './serverApi';
import devApi from './devApi';

const Api = (process.env.NODE_ENV === 'development') ? devApi : serverApi;

export default Api;
