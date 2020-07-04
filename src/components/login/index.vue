<template>
	<div class="login">
		<div class="back">
			<img src="../../img/bgck.jpg" />
		</div>
		<div class="login_content">
			<div class="content">
				<div class="logo">
					<img src="../../img/logo.png">
				</div>
				<!-- 登录界面 -->
				<div class="login_inte">
					<div class="login-title">
						<img src="../../img/logo.png">
						<p class="margin-20-top font-18">氏京品-装修行业的领先者，带你感受精品的魅力！</p>
					</div>
					<!-- tab切换 -->
					<div class="login-tab clearfix">
						 <ul class="tab-tilte">
							<li @click="cur=0" :class="{active:cur==0}">密码登录</li>
							<li @click="cur=1" :class="{active:cur==1}">短信登录</li>
						</ul>
						<div class="tab-content">
							<div class="list list1" v-show="cur==0">
								<div>
									<input type="text" placeholder="账号"/>
									<input type="password" placeholder="密码"/>
									<button>登录</button>
								</div>
								<div class="text-right margin-20-top">
									<span>忘记密码</span>
									<span class="margin-10">|</span>
									<router-link to="/register" style="color: #000000;">注册</router-link>
								</div>
							</div>
							<div class="list list1" v-show="cur==1">
								<div>
									<input type="text" placeholder="手机号"/>
									<div class="clearfix">
										<input class="fl" style="width: 213px; height: 38px;" type="password" placeholder="请输入验证码"/>
										<button style="width: 148px; height: 38px; margin-left: 15px;" class="fl" >发送验证码</button>
									</div>
									<button>登录</button>
								</div>
								<div class="text-right margin-20-top">
									<span>忘记密码</span>
									<span class="margin-10">|</span>
									<router-link to="/register" style="color: #000000;">注册</router-link>
								</div>
							</div>
						</div>
					</div>
					
				</div>
				<div class="text-center" style="margin-top: 50px;">
					<span class="font-20">备案号备案号备案号备案号备案号备案号备案号备案号备案号备案号备案号备案号</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data () {
		return {
			cur:0
		}
	}
}
</script>

<style scoped="scoped">
.login_inte img{
	width: 140px;
	height: 45px;
}
.login-title{
	margin-top: 20px;
	color: #1293a6;
	text-align: center;
	font-size: 18px;
	margin-bottom: 30px;
}
.login{
	width: 100%;
	height: 100%;
	position: relative;
	padding-top: 40px;
	box-sizing: border-box;
}
.login .back img{
	width: 100%;
	position:fixed;
	top: 0;
	left: 0;
}
.login_content{
	width: 100%;
	position: absolute;
	z-index: 111;
}
.logo img{
	width: 216px;
	height: 76px;
}
.login_inte {
	width: 408px;
	height: 503px;
	margin: 0 auto;
	margin-top: 20px;
}
.tab-tilte{
	width: 100%;
	height: 50px;
	background: #1293a6;
}
.tab-tilte li{
	float: left;
	height: 100%;
	width: 95px;
	line-height: 50px;
	text-align: center;
	cursor: pointer;
	box-sizing: border-box;
	color: #fff;
}
.tab-tilte .active{
	border-bottom: 2px solid #f6c329;
}
.tab-content .list{
	float: left;
	width: 100%;
	height: 295px;
	background: #fff;
	padding: 48px 15px;
	box-sizing: border-box;
}
.tab-content .list1 input{
	width: 375px;
	height: 38px;
	background: #f1f1f1;
	padding: 10px;
	border-radius: 15px;
	border: 1px solid #dbdbdb;
	color: #000;
	margin-bottom: 20px;
	box-sizing: border-box;
}
.list1 button {
	width: 375px;
	height: 38px;
	background: #f1f1f1;
	padding: 10px;
	border-radius: 15px;
	border: 1px solid #dbdbdb;
	color: #000;
	margin-bottom: 20px;
	box-sizing: border-box;
}
</style>
