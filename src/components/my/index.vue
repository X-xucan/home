<template>
	<div>
		<Top></Top>
		<div class="content">
			<div class="my">
				<div class="clearfix">
					<div class="my_haed fl">
						<img src="../../img/my.jpg" />
					</div>
					<div class="my_title fl">
						<div class="clearfix">
							<p class="font-30 text-white fl">叮当猫</p>
							<p class="works">发作品</p>
						</div>
						<div class="font-16 margin-30-top clearfix">
							<span class="iconfont icon-nan fl"></span>
							<span class="fl margin-5-left">21</span>
							<span class="fl margin-5-left">|</span>
							<span class="fl margin-5-left">软件设计师</span>
						</div>
						<div class="font-18 margin-30-top">这个人很懒没有写个性签名~</div>
					</div>
				</div>
				<div class="my_nub">
					<span>粉丝&nbsp;&nbsp;&nbsp;112
							&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;关注&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;1450&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
							作品&nbsp;&nbsp;&nbsp;1454</span>
				</div>
			</div>
			<div class="my_list">
				<div class="project_list">
						<ul class="clearfix">
								<li class="add_img">
									<img  src="../../img/add.png"/>
								</li>
								<li :key="index"  v-for="(item,index) in Lists[cIndex].goods.slice((currentPage- 1)*pagesize,currentPage*pagesize)">
									<div class="project_img">
										<img :src="item.img" />
									</div>
									<div class="project_cont">
										<p class="font-16 text-black">{{item.title}}</p>
										<div class="margin-15-top text-gray clearfix">
											<div class="fl clearfix">
												<span class="iconfont icon-yanjing fl"></span>
												<span class="fl margin-5-left">{{item.see}}</span>
											</div>
											
											<div class="fl clearfix">
												<span class="iconfont icon-xihuan margin-20-left fl"></span>
												<span class="fl margin-5-left">{{item.like}}</span>
											</div>
											
											<div class="fl clearfix">
												<span class="iconfont icon-xinxi margin-20-left fl"></span>
												<span class="fl margin-5-left">{{item.info}}</span>
											</div>
										</div>
									</div>
									<div class="project_name clearfix">
										<div class="project_name_title fl">
											<img :src="item.head" />
										</div>
										<p class="fl margin-5-top margin-5-left text-black">{{item.name}}</p>
										<p class="fr margin-5-top text-gray">{{item.data}}</p>
									</div>
								</li>
						</ul>
				</div>
				<!-- 分页  -->
				<div class="turn_page">
					<el-pagination
						layout="prev, pager, next"
						:page-size="pagesize"
						 @current-change="current_change"
						 :current-page.sync="currentPage"
						 :pager-count="5"
						 :total="Lists[cIndex].goods.length">
					</el-pagination>
				</div>
							
			</div>
		</div>
		<Bottom></Bottom>
	</div>
</template>

<script>
import Bottom from '../assembly/bottom.vue'
import Top from '../assembly/navigation.vue'
import {list} from '../../js/list.js'
export default {
	data () {
		return {
			cIndex: 0,
			carArr: [],
			Lists: list,
			appearCar: false,
			info:[],//数据
			pagesize:11,//每页多少数据
			currentPage:1  ,
		}
	},
	components:{
		Bottom,
		Top
	},methods: {
	    leftTap: function (index) {
	        this.cIndex = index
	    },
	    showCar: function () {
	        if (this.carArr.length == 0) {
	            this.appearCar = false
	        } else {
	            this.appearCar = !this.appearCar
	        }
	    },
		current_change(currentPage){  //改变当前页
		    this.currentPage = currentPage
		}
	}
}
</script>

<style>
.add_img img{
	width: 260px;
	height: 355px;
	padding: 10px;
}
.project_list {
	margin-top: 50px;
}
.project_name_title{
	width: 30px;
	height: 30px;
	background-color: red;
	border-radius: 50%;
}
.project_name_title img{
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
.project_name{
	width: 100%;
	height: 55px;
	padding: 10px;
	box-sizing: border-box;
}
.project_cont {
	padding: 10px;
	padding-bottom: 15px;
	box-sizing: border-box;
	border-bottom: 1px solid #F1F1F1;
}
.turn_page {
	text-align: center;
	margin-bottom: 100px;
	margin-top: 50px;
}
.boxlb_inner_cheak{
	color: #000;
	background: #fff;
}
.boxlb_inner{
	margin-right: 20px;
	width: 60px;
	height: 20px;
	display: inline-block;
	text-align: center;
	line-height: 20px;
	cursor:pointer
}
.boxlb_text{
	width: 60px;
	height: 20px;
	display: inline-block;
	text-align: center;
	line-height: 20px;
}
.project{
	width: 100%;
}
.project_title{
	width: 100%;
	height: 63px;
	background: #1293a6;
	padding: 25px 18px;
	box-sizing: border-box;
	margin-bottom: 15px;
}
.project_list {
	width: 100%;
	padding-left: 17px;
	box-sizing: border-box;
}
.project_list ul li {
	width: 280px;
	height: 375px;
	float: left;
	margin-right: 13px;
	margin-bottom: 35px;
	border: 1px solid #999999;
}
.project_img img{
	width: 100%;
	height: 238px;
}

.forum {
	width: 100%;
	height: 300px;
	margin-bottom: 30px;
}
.forum ul li {
	width: 285px;
	height: 300px;
	float: left;
	margin-right: 20px;
}
.forum ul li img{
	width: 100%;
	height: 100%;
}

.my_list {
	width: 100%;
}
.my {
	width: 100%;
	height: 320px;
	background-image: url(../../img/back1.jpg);
	padding: 30px 58px;
	box-sizing: border-box;
}
.my_haed {
	width: 175px;
	height: 175px;
	border-radius: 50%;
	float: left;
}
.my_haed img {
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
.my_title{
	width: 270px;
	height: 180px;
	float: left;
	margin-left: 40px;
	color: #fff;
}
.works{
	width: 75px;
	height: 45px;
	background: #ffe300;
	float: left;
	color: #999;
	text-align: center;
	line-height: 45px;
	margin-left: 35px;
}
.iconfont {
	font-size: 18px;
}
.my_nub{
	color: #fff;
	margin-top: 35px;
}
.my_nub span{
	font-size: 18px;
}
</style>
