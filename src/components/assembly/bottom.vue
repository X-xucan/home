<template>
	<div class="bottom_list">
		<div class="content">
			<div class="bottom clearfix">
				<div class="bottom_cont">
					<div class="cont-text margin-20-left">
						<div>
							<span class="iconfont icon-dianhua"></span>
							<span class="inco">+0692-4111567</span>
							<div class="margin-25-left">+0692-8825258</div>
						</div>
						<div>
							<span class="iconfont icon-youjian"></span>
							<span class="inco">support@company.com</span>
						</div>
						<div>
							<span class="iconfont icon-dizhi"></span>
							<span class="inco">云南省瑞丽市广母路110恒泰锦圆1栋1-3号商铺二楼（中国-云南自由贸易实验区德宏片区）</span>
						</div>
					</div>
				</div>
				<div class="bottom_cont">
					<div class="cont-text ">
						<img src="../../img/erweima.png" style="padding-left: 100px;"/>
						<div style="padding-left: 100px;">扫一扫，关注我们</div>
					</div>
				</div>
				<div class="bottom_cont">
					<div class="cont-text ">
						<ul class="cont-ui">
							<router-link to="/"><li>首页</li></router-link>
							<router-link to="/about"><li>关于我们</li></router-link>
							<router-link to="/business"><li>业务领域</li></router-link>
							<router-link to="/project"><li>项目案例</li></router-link>
							<router-link to="/contact"><li>联系我们</li></router-link>
						</ul>
					</div>
				</div>
				<div class="bottom_cont">
					<div class="cont-text ">
						<ul class="coopera clearfix">
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="list ">
				<div>Copyright 2016. All rights reversed. Design by no.13    </div>
				<div>Copyright 2016. All rights reversed. Design by no.13    Copyright 2016. All rights reversed. Design by no.13    </div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped="scoped">
.cont-text .coopera li{
	width: 80px;
	height: 80px;
	background-color: #969696;
	border-radius: 15px;
	float: left;
	margin-left: 15px;
	margin-top: 15px;
}
.cont-text .coopera img{
	width: 100%;
	height: 100%;
	border-radius: 15px;
}
.cont-text .cont-ui li{
	width: 300px;
	text-align: center;
	height: 30px;
	line-height: 46px;
}
.bottom_list {
	width: 100%;
	position: relative;
	bottom: 0;
	background: #131313;
}
.bottom{
	width: 100%;
	height: 370px;
	background: #131313;
	color: #FFFFFF;
	border-bottom:1px solid #2d2d2d;
}
.list{
	width: 100%;
	height: 100px;
	background: #131313;
	text-align: center;
	color: #6a6a6a;
	font-size: 13px;
	margin-top: 25px;
	padding-top: 5px;
}
.list div{
	margin-top: 15px;
}
.bottom_cont{
	width: 300px;
	float: left;
	color: #969696;
	font-size: 14px;
	height: 100%;
	position: relative;
}
.bottom_cont .iconfont{
	font-size: 14px;
}
.bottom_cont div{
	margin-top: 10px;
}
.inco {
	 display: inline-block;
	 margin-left: 5px;
	 width: 250px;
}
.cont-text {
	position: absolute;
	bottom: 35px;
}
</style>
