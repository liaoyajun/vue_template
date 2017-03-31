import Axios from './resources'
// import App from '../common/app'
// const mainPre = App.isProd ? 'prodPre' : 'not_prodPre'

export default {
  test: () => Axios.get(`blog/1/show`)
  // addScore: (score, check) => Axios.post(
  //   `${mainPre}index/add-score`, JSON.stringify(score), { params: check }
  // )
}
