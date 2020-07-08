<template>
	<div>
		<Top></Top>
		<div class="display">
			<div class="content">
				<div class="content_list clearfix">
					<ul class="tab-tilte clearfix">
						<li @click="cur=0" :class="{active:cur==0}">室内装修</li>
						<span></span>
						<li @click="cur=1" :class="{active:cur==1}">广告设计</li>
						<span></span>
						<li @click="cur=2" :class="{active:cur==2}">产品批发</li>
						<span></span>
						<li @click="cur=3" :class="{active:cur==3}">人工智能</li>
					</ul>
					<div class="tab-content">
						<div class="tab-div tab_div_list" v-show="cur==0">
							<div class="tab_label clearfix" >
								<div   style="width: 871px; margin: 0 auto;" v-for="(item,index) in typeLists" :key="index">
									<p :class="isactive == index ? 'addclass' : '' " @click='onclick(index)' class="tab_label_text">{{item.title}}</p>
								</div>
							</div>
							
							<div class="tab_label on  clearfix" >
								<p class="fl">分类 :</p>
								<ul class="fl clearfix">
									<li  v-for="(item,index) in typeLists" :key="index" :class="isactive == index ? 'addclass' : '' " @click='onclick(index)'>{{item.title}}</li>
								</ul>
							</div>
							
							<div class="goods clearfix">
								<div class="goods_lsit" v-for="item in goodslist.slice((currentPage- 1)*pagesize,currentPage*pagesize)" :key="item.index">
									<img :src="item.img" />
								</div>
								<div class="goods_lsit on margin-15-button" v-for="item in goodslist" :key="item.index">
									<div style="width: 100%; height: 150px;">
										<img style="height: 100%;" :src="item.img" />
									</div>
									<div>
										<p class="text-center margin-5-top text-bolder font-14">文艺风范</p>
										<p class="overflow-1">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
									</div>
								</div>
							</div>
							<div class="turn_page active">
								<el-pagination
									layout="prev, pager, next"
									:page-size="pagesize"
									 @current-change="current_change"
									 :current-page.sync="currentPage"
									 :pager-count="5"
									 :total="goodslist.length">
								</el-pagination>
							</div>
						
						</div>
						<div class="tab-div tab_div_list " v-show="cur==1">
							<div class="tab_label clearfix" >
								<div   style="width: 871px; margin: 0 auto;" v-for="(item,index) in typeLists" :key="index">
									<p :class="isactive == index ? 'addclass' : '' " @click='onclick(index)' class="tab_label_text">{{item.title1}}</p>
								</div>
							</div>
							
							<div class="tab_label on  clearfix" >
								<p class="fl">分类 :</p>
								<ul class="fl clearfix">
									<li  v-for="(item,index) in typeLists" :key="index" :class="isactive == index ? 'addclass' : '' " @click='onclick(index)'>{{item.title1}}</li>
								</ul>
							</div>
							
							<div class="goods clearfix">
								<div class="goods_lsit" v-for="item in goodslist.slice((currentPage- 1)*pagesize,currentPage*pagesize)" :key="item.index">
									<img :src="item.img" />
								</div>
								<div class="goods_lsit on margin-15-button" v-for="item in goodslist" :key="item.index">
									<div style="width: 100%; height: 150px;">
										<img style="height: 100%;" :src="item.img" />
									</div>
									<div>
										<p class="text-center margin-5-top text-bolder font-14">文艺风范</p>
										<p class="overflow-1">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
									</div>
								</div>
							</div>
							<div class="turn_page active">
								<el-pagination
									layout="prev, pager, next"
									:page-size="pagesize"
									 @current-change="current_change"
									 :current-page.sync="currentPage"
									 :pager-count="5"
									 :total="goodslist.length">
								</el-pagination>
							</div>
													
						</div>
						<div class="tab-div" v-show="cur==2">
							<div class="null">主人正在开发中~</div>
						</div>
						<div class="tab-div" v-show="cur==3">
							<div class="null">主人正在开发中~</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Bottom></Bottom>
	</div>
</template>

<script>
import {goods ,typeList} from '../../js/list.js'
import Bottom from '../assembly/bottom.vue'
import Top from '../assembly/navigation.vue'
export default {
	data () {
		return {
			typeLists: typeList,
			goodslist: goods,
			cur: 0,
			info:[],//数据
			pagesize:12,//每页多少数据
			currentPage:1  ,//默认当前页为第一页
			isactive: false
		}
	},
	methods:{
         current_change(currentPage){  //改变当前页
             this.currentPage = currentPage
         },
		 onclick(index) {
                console.log(index)
                this.isactive = index
            }
    },
	components:{
		Bottom,
		Top
	}
}
</script>

<style>
@import url("index.css");
.tab_label {
	width: 100%;
	margin-bottom: 35px;
	text-align: center;
}
.tab_label .tab_label_text{
	width: 88px;
	height: 30px;
	line-height: 30px;
	border-radius: 20px;
	font-size: 14px;
	margin: 0 auto;
	margin-right: 17px;
	float: left;
	text-align: center;
	border: 1px solid #666666;
}
.addclass{
	border-color: #1293a6;
	background: #1293a6;
	color: #fff;
}
.tab-div .null{
	width: 100%;
	height: 1120px;
	text-align: center;
	margin-top: 300px;
	font-size: 80px;
}
.display{
	width: 100%;
	margin-top: 50px;
	margin-bottom: 156px;
}
/* tab切换*/
.display .content_list .tab-tilte li {
	list-style: none;
	font-size: 22px;
}
.display .tab-tilte{
	width: 520px;
	margin: 0 auto;
}
.display .tab-tilte li{
	float: left;
	width: 90px;
	padding: 10px 0;
	text-align: center;
	cursor: pointer;
}
.display .tab-tilte .active{
	border-bottom: 2px solid #1293a6;
	color: #1293a6;
}
.display .tab-content .tab-div{
	float: left;
	width: 100%;
	margin-top: 25px;
}
.display .tab-tilte span{
	display: inline-block;
	width: 5px;
	height: 5px;
	background-color: #999;
	border-radius: 50%;
	float: left;
	margin: 0 10px;
	margin-top: 24px;
}
.tab_div_list {
	width: 100%;
}
.tab_div_list .goods .goods_lsit {
	width: 288px;
	height: 360px;
	float: left;
	margin-left: 10px;
	background: #cdc4bf;
	margin-top: 10px;
}
.tab_div_list .goods .goods_lsit img{
	width: 100%;
	height: 100%;
}
.el-pagination{
	margin-top: 60px;
	font-size: 16px;
	text-align: center;
}
</style>
