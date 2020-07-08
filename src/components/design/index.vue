<template>
	<div>
		<Top></Top>
		<div class="exhib">
			<div class="content">
				<div class="exhib_title">
					资深设计大咖
				</div>
				
				<div class="exhib_list">
					<ul class="clearfix">
						<router-link to="/detaols">
							<li  :key="item.index" v-for="item in Designs">
								<div class="exhib_list_img">
									<img :src="item.img" />
								</div>
								<div class="app_lists">
									<div>
										<span class="font-22">{{item.name}}</span> <span class="font-16 margin-10-left text-ligh">{{item.identity}}</span>
									</div>
									<div class="margin-10-top app_list_info clearfix">
										<div class="fl">
											<span style="color: #88e0fa;" class="iconfont icon-fengge font-24"></span>
											<span class="font-14 margin-5-left">{{item.style}}</span>
										</div>
										<div class="fr">
											<span style="color: #d78bec;" class="iconfont icon-time font-24"></span>
											<span class="font-14">{{item.time}}</span>
										</div>
									</div>
								</div>
							</li>
						</router-link>
						
					</ul>
				</div>
			
			</div>
		</div>
		<Bottom></Bottom>
	</div>	
</template>

<script>
import Bottom from '../assembly/bottom.vue'
import Top from '../assembly/navigation.vue'
import {design} from '../../js/list.js'
export default{
	data () {
		return{
			Designs: design,
		}
	},
	components:{
		Bottom,
		Top
	},
	methods: {
	    
	}
}
</script>

<style>
.exhib_title{
	width: 100%;
	height: 95px;
	background: #1293a6;
	color: #fff;
	font-size: 18px;
	text-align: center;
	line-height: 92px;
}
.exhib_list{
	width: 100%;
	height: 100%;
	margin-top: 20px;
}
.exhib_list ul li{
	width:  48%;
	height: 280px;
	background-color: #FFFFFF;
	border: 1px solid #F1F1F1;
	float: left;
	margin-bottom: 15px;
}
.exhib_list_img{
	width: 100%;
	height: 185px;
}
.exhib_list_img img{
	width: 100%;
	height: 100%;
}
.exhib_list ul li:nth-child(2n){
	float: right !important;
}
.app_lists{
	width: 100%;
    padding: 10px 4px !important;
	box-sizing: border-box;
	height: 97px;
}
.app_list_info{
	height: 40px;
	width: 100%;
	line-height: 40px;
	border-top: 1px solid #F1F1F1;
}

</style>