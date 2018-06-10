import createHistory from 'history/createHashHistory';

let historyConfig = {};
if (process.env.NODE_ENV === 'production') {
  historyConfig.basename = '/the-league';
}
export const history = createHistory(historyConfig);
