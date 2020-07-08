<template>
	
	<div>
		<!-- pc -->
		<div class="navigation">
			<div class="content clearfix">
				<!-- loog -->
				<div class="logo fl">
					<img src="../../img/logo.png"/>
				</div>
				<!-- 导航 -->
				<div class="nav fr">
					<div class="clearfix text-gray font-14 margin-15-top" style="margin-bottom: 45px;">
						<div class="fr" style="margin-left: 40px;">
							<router-link style="color: #666;" to="/login"><span>登录</span></router-link>
							<span class="margin-15-left margin-15-right">|</span>
							<router-link style="color: #666;" to="/register"><span>注册</span></router-link>
						</div>
						<div class="fr margin-10-left">
							<span class="iconfont icon-dianhua"></span>
							<span class="inco">+0692-4111567</span>
							<span class="iconfont icon-youjian margin-20-left"></span>
							<span class="inco">support@company.com</span>
						</div>
					</div>
					<ul class="clearfix">
						<router-link to="/"><li>首页</li></router-link>
						<router-link to="/forum"><li>论坛</li></router-link>
						<router-link to="/about"><li>关于我们</li></router-link>
						<router-link to="/business"><li>业务领域</li></router-link>
						<router-link to="/project"><li>项目案例</li></router-link>
						<router-link to="/contact"><li>联系我们</li></router-link>
					</ul>
				</div>
			</div>
		</div>
		<!-- app -->
		<div class="app_nav">
			<div class="naviga clearfix">
				<div class="logo fl">
					<img src="../../img/logo.png"/>
				</div>
				<div class="dakai fr" @click="show = !show">
					<span class="iconfont icon-kuozhan"></span>
				</div>
				
			</div>
			<!-- 弹框 -->
			<div class="tankuang" v-if="show">
				<ul>
					<router-link to="/"><li>首页</li></router-link>
					<router-link to="/forum"><li>论坛</li></router-link>
					<router-link to="/about"><li>关于我们</li></router-link>
					<router-link to="/business"><li>业务领域</li></router-link>
					<router-link to="/project"><li>项目案例</li></router-link>
					<router-link to="/contact"><li>联系我们</li></router-link>
				</ul>
			</div>
		</div>
	</div>
	
</template>

<script>
export default {
	data () {
		return {
			show: false
		}
	}
}
</script>

<style scoped="scoped">
.dakai{
	text-align: center;
	line-height: 55px;
}
.dakai .iconfont{
	font-size: 40px;
}
.nav ul li{
	width: 135px;
	height: 35px;
	float: left;
	text-align: center;
	font-size: 12px;
	box-sizing: border-box;
	color: #666;
}
.nav ul li:hover{
	color: #1293a6;
	border-bottom: 3px solid #1293a6;
}
.navigation {
	width: 100%;
	height: 115px;
	border-bottom: 1px solid #ccc;
	margin-bottom: 2px;
}
.content .logo{
	width: 205px;
	height: 80px;
}
.content .logo img{
	width: 205px;
	height: 100%;
	margin-top: 16px;
}
.naviga {
	height: 95px;
	width: 100%;
	padding: 0 20px;
	box-sizing: border-box;
	position: fixed;
	z-index: 1111111;
	background-color: #fff;
	top: 0;
}
.naviga .logo img{
	width: 140px;
	height: 55px;
	margin-top: 8px;
}
.dakai {
	width: 55px;
	height: 55px;
	margin-top: 12px;
}
.dakai img{
	width: 40px;
	height: 30px;
	text-align: center;
	line-height: 65px;
	margin-top: 10px;
	margin-left: 10px;
}
.tankuang {
	width: 100%;
	height: 500px;
	background: rgb(0,0,0,0.7);
	padding: 0 73px;
	box-sizing: border-box;
	position: fixed;
	z-index: 10000;
	top: 70px;
}
.tankuang ul{
	width: 100%;
	height: 100%;
}
.tankuang ul li {
	width: 100%;
	height: 70px;
	line-height: 70px;
	color: #FFF;
	font-size: 22px;
	border-bottom: 1px solid #fff;
}
.app_nav {
	height: 55px;
	display: none;
	background: #fff;
}
</style>
