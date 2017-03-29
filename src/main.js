// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
Vue.config.productionTip = false;
// 引入组件
import Goods from './components/goods/goods.vue';
import Ratings from './components/ratings/ratings.vue';
import Seller from './components/seller/seller.vue';
// import './common/scss/index.scss';
import VueResource from 'vue-resource';
Vue.use(VueResource);
const router = new VueRouter({
	routes: [
	{
		path: '/goods',
		name: 'goods',
		component: Goods
	},
	{
		path: '/seller',
		name: 'seller',
		component: Seller
	},
	{
		path: '/ratings',
		name: 'ratings',
		component: Ratings
	},
	{
		path: '*',
		redirect: '/goods'
	}
	],
	linkActiveClass: 'active'
});
/* eslint-disable no-new */
new Vue({
	router: router,
	el: '#app',
	template: '<App/>',
	components: { App }
});
// eslint-disable-next-line

