<template>
  <div>
	  <Top></Top>
	  <div class="banner">
	  		 <!-- 轮播图 -->
	  		<div class="banner_list">
	  			<el-carousel :interval="3000" height="705px" arrow="always">
	  			  <el-carousel-item >
	  				<img src="../img/banner1.jpg" />
	  			  </el-carousel-item>
	  			  <el-carousel-item >
	  				<img src="../img/banner1.jpg" />
	  			  </el-carousel-item>
	  			  <el-carousel-item >
	  				<img src="../img/banner1.jpg" />
	  			  </el-carousel-item>
	  			</el-carousel>
	  			<div class="content">
	  				<div class="offer">
	  					<div class="offer_list clearfix">
	  						<div class="offer_list_cont fl">
	  							<img src="../img/inco1.png" />
	  						</div>
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
	  								<div class="house margin-10-top">
	  									<span class="house_title">小区面积</span>
	  									<input placeholder="请输入小区名称" />
	  									<input placeholder="请输入室内面积" style="width: 315px;" />
	  								</div>
	  								<div class="house margin-10-top">
	  									<span class="house_title">联系方式</span>
	  									<input placeholder="请输入您的姓名" />
	  									<input placeholder="请输入您的电话号码" style="width: 315px;" />
	  								</div>
	  							</div>
	  							<!-- 按钮 -->
	  							<div class="clearfix">
	  								<div class="fr offer_list_btn">
	  									<span class="text-white" >发送报价到手机</span>
	  								</div>
	  							</div>		
	  						</form>
	  					</div>
	  				</div>
	  			</div>
	  		</div>
	  		
			<!-- 产品展示 -->
	  		<div class="product_display">
	  			<div class="content clearfix">
	  				<div>
	  					<p class="product_title"><u>U</u>RSTRENGTHS</p>
	  					<p class="font-22 margin-5-top">产品展示</p>
	  				</div>
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
	  						<div class="tab-div" v-show="cur==0">
	  							<el-row :gutter="20">
	  							  <el-col :span="8"><div class="grid-content "><img src="../img/goods1.jpg" /></div></el-col>
	  							  <el-col :span="8"><div class="grid-content1"><img src="../img/goods2.jpg" /></div></el-col>
	  							  <el-col :span="4"><div class="grid-content2"><img src="../img/goods3.jpg" /></div></el-col>
	  							</el-row>
	  							<el-row :gutter="20">
	  							  <el-col :span="4"><div class="grid-content3"><img src="../img/goods4.jpg" /></div></el-col>
	  							  <el-col :span="16"><div class="grid-content4"><img src="../img/goods5.jpg" /></div></el-col>
	  							</el-row>
	  						</div>
	  						<div class="tab-div" v-show="cur==1"></div>
	  						<div class="tab-div" v-show="cur==2"></div>
	  						<div class="tab-div" v-show="cur==3"></div>
	  					</div>
	  				</div>
	  				
	  				<div class="product_btn">
	  					<router-link to="/product"><p>更多<span class="iconfont icon-jiang-copy"></span></p></router-link>
	  				</div>
	  			</div>
	  		</div>
	  		<!-- 我们的优势 -->
	  		<div class="advantage">
	  			<div class="content">
	  				<div>
	  					<p class="product_title"><u>U</u>RSTRENGTHS</p>
	  					<p class="font-22 margin-5-top">我们的优势</p>
	  				</div>
	  				<img src="../img/my.png" />
	  			</div>
	  		</div>
	  		<!-- 资深设计大咖 -->
	  		<div class="big_shot">
	  			<div class="content">
	  				<div>
	  					<h6>资深设计大咖</h6>
	  					<h5>一对一私人定制服务</h5>
	  				</div>
	  				<div style="margin-top: 60px;" class="big_shot_item">
	  					<el-carousel :interval="4000" height="353px" type="card" >
	  						<!-- v-for="item in 3" :key="item" -->
	  					  <el-carousel-item > 
	  						<div class="character clearfix">
	  							<div class="character_left">
	  								<img src="../img/name.jpg" />
	  							</div>
	  							<div class="character_right">
	  								<div class="character_name" style="margin-top: 38px;">
	  									<span class="font-30">薛之谦</span>
	  									<span class="font-14 margin-10-left" style="color: #333;">歌手</span>
	  								</div>
	  								<div style="margin-top: 15px; color: #333;" class="overflow-1 font-14">
	  									用心观察生活，感悟人生真谛，让设计与生活互动呀呀呀呀
	  									用心观察生活，感悟人生真谛，让设计与生活互动呀呀呀呀
	  								</div>
	  								<div style="margin-top: 30px; color: #333;">
	  									<p class="iconfont icon-shijian margin-5-top"><span class="margin-5-left">从业时间：16年</span></p>
	  									<p class="iconfont icon-biye margin-5-top"><span class="margin-5-left">毕业院校：中央戏剧学院</span></p>
	  									<p class="iconfont icon-zuopin margin-5-top"><span class="margin-5-left">作品数量：25套</span></p>
	  									<p class="iconfont icon-zuopin1 margin-5-top overflow1"><span class="margin-5-left">擅长风格：现代简约，古典现代简约，古典现代简约，古典现代简约，古典</span></p>
	  								</div>
	  								<div class="character_btn">
	  									<router-link to="/detaols"><span>查看详情</span></router-link>
	  								</div>
	  							</div>
	  						</div>
	  					  </el-carousel-item>
						  <el-carousel-item >
							<div class="character clearfix">
								<div class="character_left">
									<img src="../img/name.jpg" />
								</div>
								<div class="character_right">
									<div class="character_name" style="margin-top: 38px;">
										<span class="font-30">薛之谦</span>
										<span class="font-14 margin-10-left" style="color: #333;">歌手</span>
									</div>
									<div style="margin-top: 15px; color: #333;" class="overflow-1 font-14">
										用心观察生活，感悟人生真谛，让设计与生活互动呀呀呀呀
										用心观察生活，感悟人生真谛，让设计与生活互动呀呀呀呀
									</div>
									<div style="margin-top: 30px; color: #333;">
										<p class="iconfont icon-shijian margin-5-top"><span class="margin-5-left">从业时间：16年</span></p>
										<p class="iconfont icon-biye margin-5-top"><span class="margin-5-left">毕业院校：中央戏剧学院</span></p>
										<p class="iconfont icon-zuopin margin-5-top"><span class="margin-5-left">作品数量：25套</span></p>
										<p class="iconfont icon-zuopin1 margin-5-top overflow1"><span class="margin-5-left">擅长风格：现代简约，古典现代简约，古典现代简约，古典现代简约，古典</span></p>
									</div>
									<div class="character_btn">
										<router-link to="/detaols"><span>查看详情</span></router-link>
									</div>
								</div>
							</div>
						  </el-carousel-item>
						  <el-carousel-item >
							<div class="character clearfix">
								<div class="character_left">
									<img src="../img/goods1.jpg" />
								</div>
								<div class="character_right">
									<div class="character_name" style="margin-top: 38px;">
										<span class="font-30">薛之谦</span>
										<span class="font-14 margin-10-left" style="color: #333;">歌手</span>
									</div>
									<div style="margin-top: 15px; color: #333;" class="overflow-1 font-14">
										用心观察生活，感悟人生真谛，让设计与生活互动呀呀呀呀
										用心观察生活，感悟人生真谛，让设计与生活互动呀呀呀呀
									</div>
									<div style="margin-top: 30px; color: #333;">
										<p class="iconfont icon-shijian margin-5-top"><span class="margin-5-left">从业时间：16年</span></p>
										<p class="iconfont icon-biye margin-5-top"><span class="margin-5-left">毕业院校：中央戏剧学院</span></p>
										<p class="iconfont icon-zuopin margin-5-top"><span class="margin-5-left">作品数量：25套</span></p>
										<p class="iconfont icon-zuopin1 margin-5-top overflow1"><span class="margin-5-left">擅长风格：现代简约，古典现代简约，古典现代简约，古典现代简约，古典</span></p>
									</div>
									<div class="character_btn">
										<router-link to="/detaols"><span>查看详情</span></router-link>
									</div>
								</div>
							</div>
						  </el-carousel-item>
	  					</el-carousel>
	  				</div>
	  			</div>
	  		</div>
	  		<!-- 经典案列 -->
	  		<div class="case_list">
				<div class="content">
					<div>
						<p class="product_title"><u>U</u>RSTRENGTHS</p>
						<p class="font-22 margin-5-top">产品展示</p>
					</div>
					<ul class="case_list_ul clearfix">
						<li>
							<div class="case_list_img">
								<img src="../img/img1.jpg" />
							</div>
							<div class="case_list_text">
								<p style="font-size: 20px;">中式装修</p>
								<div class="font-14 margin-10-top">
									<span class="iconfont icon-biaoqian"></span>
									<span>2020/14/4</span>
									<span class="iconfont icon-xiaoxi margin-30-left"></span>
									<span>13</span>
								</div>
								<div class="overflow-1 margin-20-top" style="width: 320px;">
									介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍
									介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍...
								</div>
								<div class="margin-20-top">
									<router-link to="/product"><div class="btn">详情</div></router-link>
								</div>
							</div>
						</li>
						<li  style="margin: 0 42px;">
							<div class="case_list_img">
								<img src="../img/img2.jpg" />
							</div>
							<div class="case_list_text">
								<p style="font-size: 20px;">休闲装修</p>
								<div class="font-14 margin-10-top">
									<span class="iconfont icon-biaoqian"></span>
									<span>2020/14/4</span>
									<span class="iconfont icon-xiaoxi margin-30-left"></span>
									<span>13</span>
								</div>
								<div class="overflow-1 margin-20-top" style="width: 320px;">
									介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍
									介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍...
								</div>
								<div class="margin-20-top">
									<router-link to="/product"><div class="btn">详情</div></router-link>
								</div>
							</div>
						</li>
						<li>
							<div class="case_list_img">
								<img src="../img/img3.jpg" />
							</div>
							<div class="case_list_text">
								<p style="font-size: 20px;">欧式装修</p>
								<div class="font-14 margin-10-top">
									<span class="iconfont icon-biaoqian"></span>
									<span>2020/14/4</span>
									<span class="iconfont icon-xiaoxi margin-30-left"></span>
									<span>13</span>
								</div>
								<div class="overflow-1 margin-20-top" style="width: 320px;">
									介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍
									介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍...
								</div>
								<div class="margin-20-top">
									<router-link to="/product"><div class="btn">详情</div></router-link>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
	  </div>
	  <Bottom></Bottom>
  </div>
</template>

<script>
import {room} from '../js/list.js'
import Bottom from './assembly/bottom.vue'
import Top from './assembly/navigation.vue'
export default {
	data() {
	  return {
		activeName: 'second',
		cur:0 ,
		value: '',
		value1: '',
		value2: '',
		roomList: room
	  }
	},
	methods: {
	  handleClick(tab, event) {
		console.log(tab, event);
	  }
	},
	components:{
		Bottom,
		Top
	}
}
</script>

<style scoped>
@import "./index.css";
</style>
