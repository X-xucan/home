<template>
	<div>
		<Top></Top>
		<div class="details">
			<div class="content">
				<div class="introduce clearfix">
					<div class="introduce_img">
						<img src="../../img/chara.jpg" />
					</div>
					<div class="introduce_list">
						<div class="">
							<span class="font-22">刘萍萍</span>
							<span style="color: #1293a6;" class="margin-25-left">首席设计师</span>
						</div>
						<p class="font-14 margin-25-top ">用心感受生活，感悟人生，让设计与生活结合</p>
						<div style="margin-top: 40px; color: #999999 ;" class="font-size">
							<p class="iconfont icon-shijian margin-5-top"><span class="margin-5-left">从业时间：16年</span></p>
							<p class="iconfont icon-biye margin-5-top"><span class="margin-5-left">毕业院校：中央戏剧学院</span></p>
							<p class="iconfont icon-zuopin margin-5-top"><span class="margin-5-left">作品数量：25套</span></p>
							<p class="iconfont icon-zuopin1 margin-5-top overflow1"><span class="margin-5-left">擅长风格：现代简约，古典现代简约，古典现代简约，古典现代简约，古典</span></p>
						</div>
						<div class="tankuang">
							<div class="mask" v-if="showModal"></div>
							<div class="pop" v-if="showModal">
								<div class="pop_tab">
									<ul class="tab-tilte">
										<li @click="cur=0" :class="{active:cur==0}">室内装修</li>
										<li @click="cur=1" :class="{active:cur==1}">广告设计</li>
									</ul>
									<i class="el-icon-circle-close" @click="showModal=false"></i>
									<div class="tab-content">
										<div class="list" v-show="cur==0">
											<form>
												<div class="offer_list_text fl">
													<div class="house">
														<span class="house_title">房置户型</span>
														<template>
														  <el-select v-model="value" placeholder="请选择">
														    <el-option
														      v-for="item in roomList"
														      :key="item.value"
														      :label="item.label"
														      :value="item.room">
														    </el-option>
														  </el-select>
														</template>
														<template>
														  <el-select v-model="value1" placeholder="请选择">
														    <el-option
														      v-for="item in roomList"
														      :key="item.value"
														      :label="item.label"
														      :value="item.office">
														    </el-option>
														  </el-select>
														</template>
														<template>
														  <el-select v-model="value2" placeholder="请选择">
														    <el-option
														      v-for="item in roomList"
														      :key="item.value"
														      :label="item.label"
														      :value="item.wei">
														    </el-option>
														  </el-select>
														</template>
													</div>
													<div class="house margin-15-top">
														<span class="house_title">小区面积</span>
														<input placeholder="请输入小区名称" />
														<input placeholder="请输入室内面积" style="width: 323px;" />
													</div>
													<div class="house margin-15-top">
														<span class="house_title">联系方式</span>
														<input placeholder="请输入您的姓名" />
														<input placeholder="请输入您的电话号码" style="width: 323px;" />
													</div>
												</div>
												<!-- 按钮 -->
												<div class="clearfix">
													<div class="fr offer_list_btn">
														<span class="text-white" >提交</span>
													</div>
												</div>		
											</form>
										</div>
										<div class="list" v-show="cur==1">
											<form>
												<div class="offer_list_text fl">
													<div class="house">
														<span class="house_title">设计类型</span>
														<template>
														  <el-select v-model="type" placeholder="请选择">
														    <el-option
														      v-for="item in typeList"
														      :key="item.value"
														      :label="item.label"
														      :value="item.title">
														    </el-option>
														  </el-select>
														</template>
													</div>
													<div class="house margin-15-top">
														<span class="house_title">需求描述</span>
														<input placeholder="请输入小区名称" style="width: 506px;"/>
													</div>
													<div class="house margin-15-top">
														<span class="house_title">联系方式</span>
														<input placeholder="请输入您的姓名" />
														<input placeholder="请输入您的电话号码" style="width: 323px;" />
													</div>
												</div>
												<!-- 按钮 -->
												<div class="clearfix">
													<div class="fr offer_list_btn">
														<span class="text-white" >提交</span>
													</div>
												</div>		
											</form>
										</div>
									</div>
								</div>
							
							</div>
							<div class="btn" @click="showModal=true">预约ta</div>
						</div>
					</div>    
				</div>
			
				<!-- 个人作品 -->
				<div class="personal">
					<div class="btn">个人作品</div>
					<div class="personal_list">
						<ul class="clearfix">
							<li v-for="item in goodslist.slice((currentPage- 1)*pagesize,currentPage*pagesize)" :key="item.index">
								<div class="personal_list_img">
									<img :src="item.img" />
								</div>
								<div class="list-title">
									<p class="font-16 margin-10-top text-bolder">{{item.title}}</p>
									<div class="font-12 margin-5-top text-blackdark">
										<span>现代简约</span>
										<span class="margin-10-left margin-10-right">59m</span>
										<span>一室一厅</span>
									</div>
								</div>
							</li>
						</ul>
						<div class="turn_page">
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
				</div>
			</div>
		</div>
		<div class="details on">
			<div class="content">
				<div class="introduce">
					<div class="introduce_img">
						<img src="../../img/chara.jpg" />
					</div>
					<div class="introduce_list">
						<div class="">
							<span class="font-22">刘萍萍</span>
							<span style="color: #1293a6;" class="margin-25-left">首席设计师</span>
						</div>
						<p class="font-14 margin-25-top list">用心感受生活，感悟人生，让设计与生活结合</p>
						<div style="margin-top: 20px; color: #999999 ;" class="font-size">
							<p class="overflow3">从业时间：16年  毕业院校：中央戏剧学院 作品数量：25套 擅长风格：现代简约，古典现代简约，古典现代简约，古典现代简约，古典</p>
						</div>
					</div>    
				</div>
				<div class="pop_tab">
					<ul class="tab-tilte clearfix">
						<li @click="cur=0" :class="{active:cur==0}">室内装修</li>
						<li @click="cur=1" :class="{active:cur==1}">广告设计</li>
					</ul>
					<i class="el-icon-circle-close" @click="showModal=false"></i>
					<div class="tab-content">
						<div class="list" v-show="cur==0">
							<form class="clearfix">
								<div class="offer_list_text fl">
									<div class="house clearfix">
										<span class="house_title">房置户型</span>
										<template>
										  <el-select v-model="value" placeholder="请选择">
										    <el-option
										      v-for="item in roomList"
										      :key="item.value"
										      :label="item.label"
										      :value="item.room">
										    </el-option>
										  </el-select>
										</template>
										<template>
										  <el-select v-model="value1" placeholder="请选择">
										    <el-option
										      v-for="item in roomList"
										      :key="item.value"
										      :label="item.label"
										      :value="item.office">
										    </el-option>
										  </el-select>
										</template>
										<template>
										  <el-select v-model="value2" placeholder="请选择">
										    <el-option
										      v-for="item in roomList"
										      :key="item.value"
										      :label="item.label"
										      :value="item.wei">
										    </el-option>
										  </el-select>
										</template>
									</div>
									<div class="house margin-15-top">
										<span class="house_title">小区面积</span>
										<input placeholder="请输入小区名称" />
										<input placeholder="请输入室内面积" style="width: 187px;" />
									</div>
									<div class="house margin-15-top">
										<span class="house_title">联系方式</span>
										<input placeholder="请输入您的姓名" />
										<input placeholder="请输入您的电话号码" style="width: 187px;" />
									</div>
								</div>
								<div class="clearfix">
									<div class="fr offer_list_btn">
										<span class="text-white" >提交</span>
									</div>
								</div>		
							</form>
						</div>
						<div class="list" v-show="cur==1">
							<form>
								<div class="offer_list_text fl">
									<div class="house">
										<span class="house_title">设计类型</span>
										<template>
										  <el-select v-model="type" placeholder="请选择">
										    <el-option
										      v-for="item in typeList"
										      :key="item.value"
										      :label="item.label"
										      :value="item.title">
										    </el-option>
										  </el-select>
										</template>
									</div>
									<div class="house margin-15-top">
										<span class="house_title">需求描述</span>
										<input placeholder="请输入小区名称" style="width: 100%;"/>
									</div>
									<div class="house margin-15-top">
										<span class="house_title">联系方式</span>
										<input placeholder="请输入您的姓名" />
										<input placeholder="请输入您的电话号码" style="width: 187px;" />
									</div>
								</div>
								<div class="clearfix">
									<div class="fr offer_list_btn">
										<span class="text-white" >提交</span>
									</div>
								</div>		
							</form>
						</div>
					</div>
				</div>
				
				<!-- 个人作品 -->
				<div class="personal">
					<div class="btn">个人作品</div>
					<div class="personal_list">
						<ul class="clearfix">
							<li v-for="item in goodslist" :key="item.index">
								<div class="personal_list_img">
									<img :src="item.img" />
								</div>
								<div class="list-title">
									<p class="font-16 margin-10-top text-bolder">{{item.title}}</p>
									<div class="font-12 margin-5-top text-blackdark">
										<span>现代简约</span>
										<span class="margin-10-left margin-10-right">59m</span>
										<span>一室一厅</span>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			
			</div>
		</div>
		
		<Bottom></Bottom>
	</div>
</template>

<script>
import {goods, type,room} from '../../js/list.js'
import Bottom from '../assembly/bottom.vue'
import Top from '../assembly/navigation.vue'
export default {
	data () {
		return {
			goodslist: goods,
			info:[],//数据
			pagesize:12,//每页多少数据
			currentPage:1  ,//默认当前页为第一页
			showModal: false,
			cur:0 ,
			value: '',
			value1: '',
			value2: '',
			type: '',
			roomList: room,
			typeList: type
		}
	},
	methods:{
         current_change(currentPage){  //改变当前页
             this.currentPage = currentPage
         }
     },
	 mounted(){  //如果使用数据接口
         // axios.get('/api',{
         //     params:{
         //          //请求参数
         //     }
         // }).then(res => {
         //     this.info = res.data //赋值
         // })
     },
	 components:{
	 	Bottom,
	 	Top
	 }
}
</script>
<!-- 620 835 -->
<style scoped="scoped">
.details.on{
	display: none;
}
.house .el-select{
	width: 146px;
	margin-left: 33px;
	height: 31px;
}
.offer_list_text{
	margin-top: 40px;
}
.el-icon-circle-close{
	position: absolute;
	right: 30px;
	top: 30px;
	font-size: 30px;
	color: #999;
}
.el-icon-circle-close:hover{
	color: #1293A6;
}
.house input{
	width: 140px;
	height: 40px;
	border: 1px solid #f1f1f1;
	margin-left: 33px;
	font-size: 12px;
}
.house_title{
	display: inline-block;
	width: 70px;
	height: 30px;
	text-align: center;
	font-size: 14px;
}

.offer_list_btn {
	margin-top: 20px;
}
.offer_list_btn span{
	display: inline-block;
	width: 160px;
	height: 40px;
	background: #1293a6;
	text-align: center;
	line-height: 40px;
}

.tab-tilte{
	width: 100%;
}
.tab-tilte li{
	float: left;
	width: 50%;
	padding: 15px 0;
	text-align: center;
	color: #999;
	cursor: pointer;
	font-size: 22px;
	box-sizing: border-box;
}
/* 点击对应的标题添加对应的背景颜色 */
.tab-tilte .active{
	color: #1293a6;
}
.tab-content .list{
	float: left;
	width: 100%;
}
.pop_tab{
	width: 620px;
	height: 335px;
	margin: 0 auto;
	margin-top: 30px;
}
.mask {
  background-color: #000;
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1
}
.pop {
  background-color: #fff;
  position: fixed;
  width: 968px;
  height: 457px;
  border: 1px solid #1293a6;
  left: 0;
  right: 0;
  top:0;
  bottom: 0;
  margin: auto;
  z-index: 2
}
.turn_page{
	margin-top: 60px;
}
.el-pagination{
	text-align: center;
}
.details {
	width: 100%;
	margin-top: 65px;
}
.introduce{
	width: 100%;
	height: 515px;
}
.introduce_img{
	width: 585px;
	height: 100%;
	float: left;
	overflow: hidden;
}
.introduce_img img{
	width: 100%;
	height: 100%;
}
.introduce_list{
	width: 615px;
	height: 365px;
	background: #f1f1f1;
	float: left;
	margin-top: 79px;
}
.introduce_list{
	box-sizing: border-box;
	padding: 25px 40px;
}
.introduce_list .iconfont{
	font-size: 21px;
}
.font-size span{
	font-size: 18px;
}
.font-size .overflow1{
	width: 532px;
}
.introduce_list .btn{
	margin-top: 50px;
	border-radius: 0;
	background-color: #ff5a00;
}
/* 个人作品 */
.personal{
	margin-top: 70px;
	margin-bottom: 177px;
}
.personal .btn{
	border-radius: 0;
}
.personal_list{
	width: 100%;
	height: 1193px;
	border: 1px solid #999999;
}
.personal_list li{
	float: left;
	width: 275px;
	height: 315px;
	background: #f1f1f1;
	margin-left: 20px;
	margin-top: 20px;
}
.personal_list_img{
	width: 100%;
	height: 252px;
}
.personal_list_img img{
	width: 100%;
	height: 100%;
}
.personal_list .list-title{
	height: 65px;
	text-align: center;
}
</style>
