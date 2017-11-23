import * as Constants from '../assets/js/Constants';

let page = {};
page[Constants.PageName.template] = resolve => require(['./template.vue'], resolve);
page[Constants.PageName.main] = resolve => require(['./main.vue'], resolve);
page[Constants.PageName.qaIndex] = resolve => require(['./qaIndex.vue'], resolve);
page[Constants.PageName.qaDetail] = resolve => require(['./qaDetail.vue'], resolve);
page[Constants.PageName.qaAsk] = resolve => require(['./qaAsk.vue'], resolve);

export default page;
