<template>
	<div>
		<Top></Top>
		<div class="about">
			<div class="about_img">
				<img src="../../img/banner2.jpg" />
			</div>
			<div class="about_back">
				<div class="about_back_img">
					<img src="../../img/bgck.jpg" />
				</div>
				<div class="about_list">
					<div class="content">
						<div class="about_culture">
							<div style="margin-top: 150px;">
								<p class="product_title"><u>T</u>he enterprise culture</p>
								<p class="font-22 margin-5-top">企业文化</p>
							</div>
							<div class="about_exh clearfix">
								<img src="../../img/goods1.jpg"/>
								<div class="about_exh_text">
									<p>结果前提，自我退后</p>
									<p>锁定目标，专注重复</p>
									<div style="margin-top: 45px;">精品是精细雕琢，巧夺天工，也可以化繁为简，道法自然，入心入魂，合于天道，方得始终。氏京品必定是您未来精品空间的设计者。</div>
									<div>精品筑梦，向精品精神致敬，真正的智慧与创造性相连，艺不按古京品独妙，时代锤炼精品，京品塑造时代，向所有精品缔造精神的你致敬。</div>
									<div style="margin-top: 45px;">精品筑梦，向精品精神致敬，真正的智慧与创造性相连，艺不按古京品独妙，时代锤炼精品，京品塑造时代，向所有精品缔造精神的你致敬。</div>
									<div>我们要以服务来定队伍建设的宗旨，以顾客满意度作为衡量一切一切的工作准则。</div>
									<div>氏京品所有愿意和愿意合作的，是高度自尊和有强烈成就欲望的，我们在重视广泛的对等合作建立战略伙伴关系，积极探索在互利基础上的多种外部合作形式。</div>
								</div>
							</div>
							
							<div class="about_list_title">
								<ul class="clearfix">
									<li>认真第一，聪明第二</li>
									<li>胜利第一，理由第二</li>
									<li>速度第一，完美第二</li>
								</ul>
							</div>
						</div>
						<div class="about_culture1">
							<div style="margin-top: 150px;"  class="about_cultu_title">
								<p class="product_title"><u>T</u>he enterprise culture</p>
								<p class="font-22 margin-5-top">企业文化</p>
							</div>
							<div class="about_exh clearfix">
								<div class="about_exh_text margin-10-button">
									<p>结果前提，自我退后</p>
									<p>锁定目标，专注重复</p>
									<div style="margin-top: 45px;">精品是精细雕琢，巧夺天工，也可以化繁为简，道法自然，入心入魂，合于天道，方得始终。氏京品必定是您未来精品空间的设计者。</div>
									<div>精品筑梦，向精品精神致敬，真正的智慧与创造性相连，艺不按古京品独妙，时代锤炼精品，京品塑造时代，向所有精品缔造精神的你致敬。</div>
									<div class="about_exh_top" style="margin-top: 45px;">精品筑梦，向精品精神致敬，真正的智慧与创造性相连，艺不按古京品独妙，时代锤炼精品，京品塑造时代，向所有精品缔造精神的你致敬。</div>
									<div>我们要以服务来定队伍建设的宗旨，以顾客满意度作为衡量一切一切的工作准则。</div>
									<div>氏京品所有愿意和愿意合作的，是高度自尊和有强烈成就欲望的，我们在重视广泛的对等合作建立战略伙伴关系，积极探索在互利基础上的多种外部合作形式。</div>
								</div>
								<img src="../../img/goods1.jpg"/>
							</div>
							
							<div class="about_list_title ">
								<p>认真第一，聪明第二</p>
								<p>认真第一，聪明第二</p>
								<p>认真第一，聪明第二</p>
							</div>
						</div>
						
						<div style="margin-top: 115px;" class="about_title">
							<p class="product_title"><u>G</u>rowth of traction</p>
							<p class="font-22 margin-5-top">成长历程</p>
						</div>
						<div  class="growth">
							<ul class="clearfix app_img_growth">
								<img src="../../img/about1.jpg" />
							</ul>
							<ul class="clearfix app_img_growth on">
								<img src="../../img/about2.jpg" />
							</ul>
							<div class="growth_text">
								<p>氏京品成长的主要牵引力，这四种力量存在着相互作用，机会牵引人才，人才牵引创新，创新牵引精品，精品的作品牵引更多更大的发展机会，加大这四种力量的牵引力度促进他们的良性循环，就加快氏京品的成长。</p>
								<p>我们追求在一定的利润回报率水平的成长的最大化，我们必须达到和保持高于行业平均的增长速度和行业中主要竞争对手的增长速度，以增强氏京品的活力，吸引最优秀的人才和突破氏京品各种经营资源的最佳配置，在室内设计行业中要么成为前跑者，要么淘汰，没有第三条路可走。</p>
								
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
import Bottom from '../assembly/bottom.vue'
import Top from '../assembly/navigation.vue'
export default{
	data () {
		return {
			
		}
	},
	components:{
		Bottom,
		Top
	}
}
</script>

<style scoped="scoped">
.app_img_growth {
	width: 100%;
	height: 200px;
}
.app_img_growth.on{
	display: none;
}
.app_img_growth img{
	width: 100%;
	height: 100%;
}
.growth_text p {
	text-align: center;
	font-size: 16px;
	margin-top: 25px;
}
.growth{
	width: 100%;
	margin-top: 35px;
}
.growth ul li{
	width: 280px;
	height: 190px;
	border-radius: 10px;
	border: 1px solid #1293A6;
	float: left;
	margin-right: 15px;
	position: relative;
	overflow: hidden;
	margin-bottom: 20px;
}
.growth ul li img{
	width: 100%;
	height: 190px;
	border-radius: 10px;
}
.growth ul li div{
	width: 100%;
	height: 50px;
	background:rgba(0,0,0,0.3);
	position: absolute;
	top: 140px;
	font-size: 30px;
	color: #fff;
	text-align: center;
}
.about_list_title{
	width: 100%;
	margin-top: 70px;
}
.about_list_title p{
	font-size: 20px;
	text-align: center;
}
.about_list_title ul li {
	width: 33.3333%;
	float: left;
	font-size: 20px;
	text-align: center;
}
.product_title, u{
	font-size: 45px;
	text-transform: uppercase;
}
.about_exh {
	margin-top: 50px;
	width: 100%;
	height: 100%;
}
.about_exh img{
	width: 734px;
	height: 490px;
	float: left;
}
.about_exh_text{
	width: 447px;
	height: 100%;
	float: right;
	padding-top: 47px;
	box-sizing: border-box;
}
.about_exh_text p {
	text-align: center;
	font-size: 22px;
}
.about_exh_text div{
	text-indent:2em;
	line-height: 20px;
}
.about_back{
	width: 100%;
	height: 1733px;
	position: relative;
}
.about_back_img img{
	width: 100%;
	height: 100%;
	position: absolute;
	bottom: 0;
	opacity: 0.4;
}
.about_list{
	width: 100%;
	position: absolute;
	z-index: 999;
}
.about_img{
	width: 100%;
	height: 502px;
}
.about_img img{
	width: 100%;
	height: 100%;
	z-index: -1;
}
.about_culture1{
	display: none;
}
</style>
