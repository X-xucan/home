<template>
	<div>
		<Top></Top>
		<div class="product">
			<div class="content" style="margin-top: 35px;">
				<!-- <div style="margin-bottom: 30px;">
					<el-breadcrumb separator-class="el-icon-arrow-right">
					  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					  <el-breadcrumb-item>产品展示</el-breadcrumb-item>
					  <el-breadcrumb-item>室内装饰</el-breadcrumb-item>
					  <el-breadcrumb-item>文艺风范</el-breadcrumb-item>
					</el-breadcrumb>
				</div> -->
				<div class="exhibition clearfix">
					<div class="fl">
						<div class="goodDetails_name_img">
							<img :src="ImgUrl">
						</div>
						<div class="little_img">
							<div class="list_btn fl"></div>
							<ul class="clearfix fl" >
								<li v-on:click='getIndex(item.url)' v-for="(item,index) of imgUrlList" :key="index"  :class="active==index ? 'activeClass' : '' ">
									<!-- v-for="(item,index) of imgUrlList" :key="index" -->
									<img  @click="change(index)" :src="item.url">
								</li>
							</ul>
							<div class="list_btn fr"></div>
						</div>
					</div>
					<div class="design fr">
						<div class="design_list">
							<div class="clearfix">
								<img class="fl" src="../../img/inco1.png"/>
								<span class="font-20 fl margin-10-left" style="color: #f3a730; line-height: 17px;">设计师</span>
							</div>
							<p class="font-30 margin-15-top">张安</p>
							<div style="margin-top: 15px; color: #333;">
								<p class="iconfont icon-shijian margin-5-top"><span class="margin-5-left">从业时间：16年</span></p>
								<p class="iconfont icon-biye margin-5-top"><span class="margin-5-left">毕业院校：中央戏剧学院</span></p>
								<p class="iconfont icon-zuopin margin-5-top"><span class="margin-5-left">作品数量：25套</span></p>
								<p class="iconfont icon-zuopin1 margin-5-top overflow1"><span class="margin-5-left">擅长风格：现代简约，古典现代简约，古典现代简约，古典现代简约，古典</span></p>
							</div>
						</div>
						<div class="design_make">
							<div class="clearfix">
								<img class="fl" src="../../img/inco1.png"/>
								<span class="font-20 fl margin-10-left" style="color: #f3a730; line-height: 17px;">预约ta</span>
							</div>
							<div class="design_make_inp">
								<input placeholder="小区名字" />
								<input placeholder="房屋面积" />
								<input placeholder="您的称呼" />
								<input placeholder="联系方式" />
							</div>
							<p class="submit">提交</p>
						</div>
					</div>
				</div>
				<div class="introduce">
					<ul class="tab-tilte clearfix">
						<li @click="cur=0" :class="{active:cur==0}">介绍</li>
						<li @click="cur=1" :class="{active:cur==1}">评论</li>
						<li class="fabulous" v-on:click="like">
							<img v-if="isClick==0" style="color: #30D4F5;" src="../../img/dian.png"></img>
							<img v-if="isClick==1" style="color: #30D4F5;" src="../../img/dian1.png"></img>
							
							<div class="clicknum">
								<span v-if="isClick==0">点赞</span>
								<span v-if="isClick==1">已赞</span>
								<span class="margin-5-left">{{clickNum}}</span>
							</div>
						</li>
					</ul>
					<div class="tab-content clearfix">
						<div class="list list1" v-show="cur==0">
							<p><span class="text-bolder">设计户型： </span>盘龙区金尚俊园85平方米小户型</p>
							<p><span class="text-bolder">设计风格：</span>现代风格</p>
							<p><span class="text-bolder">设计采纳品牌：</span>萨米特品牌地板砖，弗尔森强化木地板，法莱帝衣柜及书柜。</p>
							<p><span class="text-bolder">设计说明：</span>本案是金尚俊园现代风格装修案例，现代风格的居室重视个性和创造性的表现，即不主张追求高档豪华，而着力表现区别于其他住宅的东西。住宅小空间多功能是现代室内设计的重要特征。与主人兴趣爱好相关联的功能空间包括家庭视听中心、家庭电脑工作室等。这些个性化的功能空间完全可以按主人的个人喜好进行设计，从而表现出与众不同的效果。如果能使上述功能小空间表现出主人的独创性，这套住宅设计就有出彩的地方了。</p>
							<p><span class="text-bolder">客厅餐厅：</span>从整体到局部展示</p>
							<p><span class="text-bolder">整体：</span>整体设计以白色为主色调，给人简洁、明快、开阔之感，一张沙发一个茶几一个电视柜，简单的线条，简单的组合，再搭配一副极具现代感的画、个性抱枕等简单元素，瞬间营造出舒适简洁的居家氛围。</p>
						</div>
						<div class="list list2" v-show="cur==1">
							<div class="comment">
								<ul>
									<li>
										<div class="comment_list ">
											<div class="clearfix">
												<div class="comment_title fl">
													<img src="../../img/goods1.jpg" />
												</div>
												<div class="fl margin-10-top margin-10-left font-16 text-bolder">佛系白小白</div>
											</div>
											<div class="comment_cont">
												在装修过程中很严格，施工比较规范。用材各方面有比较高的要求，材料都是比较好的，还是让人比较放心的，值得推荐
											</div>
											<div class="comment_img">
												<ul class="clearfix">
													<li><img src="../../img/goods1.jpg" /></li>
													<li><img src="../../img/goods1.jpg" /></li>
													<li><img src="../../img/goods1.jpg" /></li>
													<li><img src="../../img/goods1.jpg" /></li>
												</ul>
											</div>
										</div>
									</li>
									
									<li>
										<div class="comment_list ">
											<div class="clearfix">
												<div class="comment_title fl">
													<img src="../../img/goods1.jpg" />
												</div>
												<div class="fl margin-10-top margin-10-left font-16 text-bolder">佛系白小白</div>
											</div>
											<div class="comment_cont">
												不错不错
											</div>
										</div>
									</li>
									<li>
										<div class="comment_list ">
											<div class="clearfix">
												<div class="comment_title fl">
													<img src="../../img/goods1.jpg" />
												</div>
												<div class="fl margin-10-top margin-10-left font-16 text-bolder">佛系白小白</div>
											</div>
											<div class="comment_cont">
												在装修过程中很严格，施工比较规范。用材各方面有比较高的要求，材料都是比较好的，还是让人比较放心的，值得推荐
											</div>
											<div class="comment_img">
												<ul class="clearfix">
													<li><img src="../../img/goods1.jpg" /></li>
													<li><img src="../../img/goods1.jpg" /></li>
													<li><img src="../../img/goods1.jpg" /></li>
													<li><img src="../../img/goods1.jpg" /></li>
												</ul>
											</div>
										</div>
									</li>
									<li>
										<div class="comment_list ">
											<div class="clearfix">
												<div class="comment_title fl">
													<img src="../../img/goods1.jpg" />
												</div>
												<div class="fl margin-10-top margin-10-left font-16 text-bolder">佛系白小白</div>
											</div>
											<div class="comment_cont">
												在装修过程中很严格，施工比较规范。用材各方面有比较高的要求，材料都是比较好的，还是让人比较放心的，值得推荐
											</div>
											<div class="comment_img">
												<ul class="clearfix">
													<li><img src="../../img/goods1.jpg" /></li>
													<li><img src="../../img/goods1.jpg" /></li>
													<li><img src="../../img/goods1.jpg" /></li>
													<li><img src="../../img/goods1.jpg" /></li>
												</ul>
											</div>
										</div>
									</li>
									
								</ul>
							</div>
							<div class="publish">
								<div class="my_publish">
									<p class="font-16">我的观点</p>
									<textarea />
								</div>
								<div class="upload">
									<p class="font-16">上传图片</p>
									<div class="upload_list">
										<el-upload
										  action="#"
										  list-type="picture-card"
										  :auto-upload="false">
										    <i slot="default" class="el-icon-plus"></i>
										    <div slot="file" slot-scope="{file}">
										      <img
										        class="el-upload-list__item-thumbnail"
										        :src="file.url" alt=""
										      >
										      <span class="el-upload-list__item-actions">
										        <span
										          class="el-upload-list__item-preview"
										          @click="handlePictureCardPreview(file)"
										        >
										          <i class="el-icon-zoom-in"></i>
										        </span>
										        <span
										          v-if="!disabled"
										          class="el-upload-list__item-delete"
										          @click="handleRemove(file)"
										        >
										          <i class="el-icon-delete"></i>
										        </span>
										      </span>
										    </div>
										</el-upload>
										<el-dialog :visible.sync="dialogVisible">
										  <img width="100%" :src="dialogImageUrl" alt="">
										</el-dialog>
									</div>
								</div>
								<p class="btn fr">提交</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Bottom></Bottom>
	</div>
	
</template>

<script>
import {imgUrl} from '../../js/list.js'
import Bottom from '../assembly/bottom.vue'
import Top from '../assembly/navigation.vue'
export default {
	data() {
	  return {
		cur:0,
		dialogImageUrl: '',
		dialogVisible: false,
		disabled: false,
		clickNum: 12,
		isClick:'',
		imgUrlList: imgUrl,
		ImgUrl:require('../../img/goods1.jpg'),
		active:0,
	  }
	},
    methods: {
		change(index){
			this.active = index;
		},
      handleRemove(file, fileList) {
		this.dialogVisible = false
	  },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
	  like () {
	  	if(this.isClick==0){
	  		this.isClick=1
	  		this.clickNum=this.clickNum+1
	  	}else{
	  		this.isClick=0
	  		this.clickNum=this.clickNum-1
	  	}
	  },
      getIndex(imgUrlList){
          this.ImgUrl = imgUrlList;
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
