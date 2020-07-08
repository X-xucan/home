<template>
	<div>
		<Top></Top>
		<!-- pc端 -->
		<div class="product list">
			<div class="content" style="margin-top: 35px;">
				<div class="content_title clearfix">
					<div class="fl title_left">
						<p class="font-24">小小的设计</p>
						<p class="margin-15-top">1小时前发布</p>
						<div class="clearfix margin-10">
							<p class="margin-15-top font-16 fl" style="margin-left: -10px;">原创 &nbsp;/&nbsp;现代&nbsp;/&nbsp;简约&nbsp;/&nbsp;大气</p>
							<div class="margin-15-top text-gray clearfix fr">
								<div class="fl clearfix">
									<span class="iconfont icon-yanjing fl"></span>
									<span class="fl margin-5-left">11</span>
								</div>
								
								<div class="fl clearfix">
									<span class="iconfont icon-xihuan margin-20-left fl"></span>
									<span class="fl margin-5-left">22</span>
								</div>
								
								<div class="fl clearfix">
									<span class="iconfont icon-xinxi margin-20-left fl"></span>
									<span class="fl margin-5-left">33</span>
								</div>
							</div>
						</div>
					</div>
					<div class="fl title_right clearfix">
						<div class="title_right_hade fl">
							<img  src="../../img/goods1.jpg"/>
						</div>
						<div class="title_right_text fl margin-15-top margin-15-left">
							<p class="font-16">小小设计者</p>
							<p class="title_btn">关注</p>
						</div>
					</div>
				</div>
				<div class="exhibition clearfix">
					<div class="fl">
						<div class="goodDetails_name_img">
							<img :src="ImgUrl">
						</div>
						<div class="little_img">
							<div class="list_btn fl"></div>
							<ul class="clearfix fl" >
								<li v-on:click='getIndex(item.url)' v-for="(item,index) of imgUrlList" :key="index"  :class="active==index ? 'activeClass' : '' ">
									<img  @click="change(index)" :src="item.url">
								</li>
							</ul>
							<div class="list_btn fr"></div>
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
		
		<!-- app端 -->
		<div class="product on">
			<div class="content" style="margin-top: 35px;">
				<div class="exhibition clearfix">
					<div class="fl exhibition_list">
						<div class="goodDetails_name_img">
							<img :src="ImgUrl">
						</div>
						<div class="little_img">
							<div class="list_btn fl"></div>
							<ul class="clearfix fl" >
								<li v-on:click='getIndex(item.url)' v-for="(item,index) of imgUrlList" :key="index"  :class="active==index ? 'activeClass' : '' ">
									<img  @click="change(index)" :src="item.url">
								</li>
							</ul>
							<div class="list_btn fr"></div>
						</div>
					</div>
				</div>
				<!-- 个人信息 -->
				<router-link to="/my">
					<div class="info_exhibition clearfix">
						<div class="info-img fl"><img src="../../img/my.jpg" /></div>
						<div class="fl">
							<div class="margin-5-top margin-10-left text-white font-14">
								<span>小小设计者</span>
								<span class="font-btn">关注</span>
							</div>
							<div class="clearfix yuanchuang">
								<div class="margin-15-top margin-10-left text-white fl">
									<span>原创</span>
									<span>/</span>
									<span>现代</span>
									<span>/</span>
									<span>简约</span>
								</div>
								<div class="margin-15-top margin-20-left text-white clearfix fr">
									<div class="fl clearfix">
										<span class="iconfont icon-yanjing fl"></span>
										<span class="fl top_2 margin-5-left">11</span>
									</div>
									
									<div class="fl clearfix">
										<span class="iconfont icon-xihuan margin-20-left fl"></span>
										<span class="fl top_2 margin-5-left">22</span>
									</div>
									
									<div class="fl clearfix">
										<span class="iconfont icon-xinxi margin-20-left fl"></span>
										<span class="fl top_2 margin-5-left">33</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					
				</router-link>
				
				<!-- 评论 -->
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
@import "./fdetails.css";
</style>
