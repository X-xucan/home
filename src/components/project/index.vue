<template>
	<div>
		<Top></Top>
		<div class="project">
			<div class="content">
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
				<div class="project_title app_project">
					<ul class='boxlbox clearfix'>
						<span class="fl boxlb_text text-white">板块：</span>
					    <template v-for="(item,index) in Lists">
					        <li :key="index" @click='leftTap(index)' :class="{boxlb_cheak:cIndex==index}" class='boxlb fl'>
					            <span class='boxlb_inner text-white' :class="{boxlb_inner_cheak:cIndex==index}">{{item.title}}</span>
					        </li>
					    </template>
					</ul>
				</div>
				
				
				<div class="project_list on">
					<ul class="clearfix">
						<li :key="index"  v-for="(item,index) in Lists[cIndex].goods.slice((currentPage- 1)*pagesize,currentPage*pagesize)">
						    <img :src="item.img" />
						</li>
					</ul>
				</div>
				<div class="project_list active">
					<ul class="clearfix">
						<li :key="index"  v-for="(item,index) in Lists[cIndex].goods">
						    <div style="width: 100%; height: 130px;">
								<img style="height: 100%;" :src="item.img" />
							</div>
							<div>
								<p class="text-center margin-5-top text-bolder font-14">文艺风范</p>
								<p class="overflow-1">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
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
export default{
	data () {
		return{
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

<style>
.project_list.active{
	display: none;
}
.project_title.app_project{
	display: none;
	padding: 0;
	padding-top: 22px;
}
.project_title.app_project .boxlb_inner{
	    margin-right: 2px;
	    width: 57px;
	    height: 20px;
	    display: inline-block;
	    text-align: center;
	    line-height: 20px;
	    cursor: pointer;
}
.project_title.app_project ul {
	padding-top: 8px;
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
	height: 360px;
	float: left;
	margin-right: 15px;
	margin-bottom: 35px;
}
.project_list ul li img{
	width: 100%;
	height: 360px;
}
</style>
