<template>
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
						<router-link to="/login"><span>登录</span></router-link>
						<span class="margin-15-left margin-15-right">|</span>
						<router-link to="/register"><span>注册</span></router-link>
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
</template>

<script>
export default {

}
</script>

<style scoped="scoped">
a{
	color: #000;
}
.nav ul li{
	width: 135px;
	height: 35px;
	float: left;
	text-align: center;
	font-size: 12px;
	box-sizing: border-box;
}
.nav ul li:hover{
	color: #1293a6;
	border-bottom: 3px solid #1293a6;
}
.navigation {
	width: 100%;
	height: 115px;
}
.content .logo{
	width: 205px;
}
.content .logo img{
	width: 205px;
	height: 100%;
	margin-top: 16px;
}
</style>
