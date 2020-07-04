<template>
	<div>
		<Top></Top>
		<div class="content">
			<!-- 轮播图 -->
			<div class="banner">
				<el-carousel :interval="3000" height="490px" arrow="always">
				  <el-carousel-item >
					<img src="../../img/Fbanner1.jpg" />
				  </el-carousel-item>
				  <el-carousel-item >
					<img src="../../img/Fbanner2.png" />
				  </el-carousel-item>
				  <el-carousel-item >
					<img src="../../img/banner1.jpg" />
				  </el-carousel-item>
				</el-carousel>
			</div>
			<!-- 推荐好的 -->
			<div class="forum">
				<ul class="clearfix">
					<li><img src="../../img/goods1.jpg" /></li>
					<li><img src="../../img/goods2.jpg" /></li>
					<li><img src="../../img/goods3.jpg" /></li>
					<li><img src="../../img/goods4.jpg" /></li>
				</ul>
			</div>
			<!-- 筛选内容 -->
			<div class="forum_content">
				<div class="project_title">
					<ul class='boxlbox clearfix'>
						<span class="fl boxlb_text text-white">板块：</span>
					    <template v-for="(item,index) in Lists">
					        <li :key="index" @click='leftTap(index)' :class="{boxlb_cheak:cIndex==index}" class='boxlb fl'>
					            <span class='boxlb_inner text-white' :class="{boxlb_inner_cheak:cIndex==index}">{{item.title}}</span>
					        </li>
					    </template>
					</ul>
				</div>
				
				<div class="project_list">
						<ul class="clearfix">
							<router-link to="/fdetails">
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
							</router-link>
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
			pagesize:12,//每页多少数据
			currentPage:1  ,
		}
	},
	components:{
		Bottom,
		Top
	},
	methods: {
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

<style scoped="scoped">
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
.forum ul li:nth-child(4n){
	margin-right:0;
}
.banner {
	margin-bottom: 20px;
}
.banner img{
	width: 100%;
	height: 100%;
}
</style>
