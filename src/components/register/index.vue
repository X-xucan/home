<template>
	<div>
		<div class="login">
			<!-- 背景图片 -->
			<div class="back">
				<img src="../../img/bgck.jpg" />
			</div>
			<!-- 注册页面 -->
			<div class="register">
				<div class="content">
					<div class="register-list">
						<div class="register-list-title clearfix">
							<img class="fl" src="../../img/logo.png">
							<div class="fr" style="margin-top: 55px;">
								已有账号，<router-link to="/login" style="color: #c60e2c;">马上登录</router-link> <router-link to="/" style="margin-left: 56px; color: #c60e2c;">返回首页</router-link>
							</div>
						</div>
						<div class="register_title"><span class="font-18 text-center">注册</span></div>
						<div class="register_content">
							<div class="register_content_list">
								<div>
									<input type="text" placeholder="手机号"/>
									<div class="clearfix">
										<input class="fl" style="width: 207px; height: 38px;" type="password" placeholder="请输入验证码"/>
										<button style="width: 148px; height: 38px; margin-left: 15px;" class="fl" >发送验证码</button>
										<input type="password" prop="pass" placeholder="请输入密码"/>
										<input type="password" prop="pass" placeholder="昵称"/>
										<!-- 下拉框 -->
										<div class="select">
											<template>
											  <el-select class="aa" v-model="value" placeholder="请选择">
											    <el-option
											      v-for="item in gender"
											      :key="item.value"
											      :label="item.label"
											      :value="item.value">
											    </el-option>
											  </el-select>
											</template>
											<div class="fr">
												<input style="width: 150px;" type="text" placeholder="年龄"/>
											</div>
										</div>
									</div>
									<div class="margin-10-top">
										<el-checkbox v-model="checked">
											<span class="text-black">我已阅读并接受</span>
											<span style="color: #c60e2c;">用户协议</span>
										</el-checkbox>
									</div>
									<button class="margin-30-top">登录</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="login on">
			<!-- 注册页面 -->
			<div class="register">
				<div class="content">
					<div class="register-list">
						<img src="../../img/logo.png" style="width: 120px; height: 50px;"/>
						<div class="register-list-title clearfix">
							<div class="fr" style="margin-top: 30px; font-size: 16px;">
								已有账号，<router-link to="/login" style="color: #c60e2c; font-size: 16px;">马上登录</router-link> <router-link to="/" style="margin-left: 56px; color: #c60e2c; font-size: 16px;">返回首页</router-link>
							</div>
						</div>
						<div class="register_title"><span class="font-18 text-center">注册</span></div>
						<div class="register_content">
							<div class="register_content_list">
								<div>
									<input type="text" placeholder="手机号"/>
									<div class="clearfix">
										<input class="fl" style="width: 192px !important; height: 38px;" type="password" placeholder="请输入验证码"/>
										<button style="width: 130px !important; height: 38px; margin-left: 15px;" class="fl" >发送验证码</button>
										<input type="password" prop="pass" placeholder="请输入密码"/>
										<input type="password" prop="pass" placeholder="昵称"/>
										<!-- 下拉框 -->
										<div class="select">
											<template>
											  <el-select class="aa" v-model="value" placeholder="请选择">
											    <el-option
											      v-for="item in gender"
											      :key="item.value"
											      :label="item.label"
											      :value="item.value">
											    </el-option>
											  </el-select>
											</template>
											<div class="fr">
												<input style="width: 190px !important;" type="text" placeholder="年龄"/>
											</div>
										</div>
									</div>
									<div class="margin-10-top">
										<el-checkbox v-model="checked">
											<span class="text-black">我已阅读并接受</span>
											<span style="color: #c60e2c;">用户协议</span>
										</el-checkbox>
									</div>
									<button class="margin-30-top">登录</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Bottom></Bottom>
		</div>
		
	</div>
</template>

<script>
import Bottom from '../assembly/bottom.vue'
export default{
	data () {
		return {
			cur:0,
			checked: true,
			value: '',
			gender: [{
				value: 1,
				label: '男'
			}, {
				value: 2,
				label: '女'
			}]
		}
	},
	components:{
		Bottom
	}
}
</script>

<style scoped="scoped">
/deep/ .register_content_list .el-input__inner{
	border-radius: 12px !important;
	width: 150px;
}
.register_content_list input{
	width: 375px;
	height: 40px;
	background: #f1f1f1;
	padding: 10px;
	border-radius: 12px;
	border: 1px solid #dbdbdb;
	color: #000;
	margin-bottom: 20px;
	box-sizing: border-box;
	background: #fff;
}
.register_content_list button {
	width: 375px;
	height: 40px;
	background: #f1f1f1;
	padding: 10px;
	border-radius: 12px;
	border: 1px solid #dbdbdb;
	color: #000;
	margin-bottom: 20px;
	box-sizing: border-box;
	background: #fff;
}
.register_content_list{
	width: 370px;
	height: 305px;
	margin: 0 auto;
}
.register_content{
	padding-top: 15px;
	padding-bottom: 15px;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	background: #f1f1f1;
}
.register_title{
	background: #1293a6;
	color: #fff;
	text-align: center;
	height: 62px;
	line-height: 62px;
	width: 920px;
	margin-top: 5px;
}
.register-list-title {
	height: 70px;
}
.register-list-title img{
	width: 215px;
	height: 70px;
}
.login{
	width: 100%;
	position: relative;
	box-sizing: border-box;
}
.login .back img{
	width: 100%;
	position:fixed;
	top: 0;
	left: 0;
}
.register{
	width: 100%;
	position: absolute;
	z-index: 111;
}
.register-list{
	width: 920px;
	height: 490px;
	margin: 0 auto;
	margin-top: 20px;
}
.login.on{
	display: none;
}
</style>
