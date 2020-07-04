<template>
	<div>
		<Top></Top>
		<div class="contact">
			<div>
				<img src="../../img/banner3.jpg">
			</div>
			<div class="content">
				<div class="contact_mobile">
					<div>联系电话：</div>
					<div class="text-gray" style="margin-left: 75px;">
						<p class="font-14">+0692-4111567</p>
						<p class="margin-20-top font-14">+0692-8825258</p>
					</div>
					<div style=" margin-top: 45px;">公司地址：</div>
					<div class="text-gray" style="margin-left: 75px;">
						<p class="font-14">云南省瑞丽市广母路110恒泰锦圆1栋1-3号商铺二楼（中国-云南自由贸易实验区德宏片区）</p>
					</div>
				</div>
				<!-- 地图 -->
				<div class="contact_map">
					<Maps></Maps>
				</div>
			</div>
		</div>
		<Bottom></Bottom>
	</div>
</template>

<script>
import Bottom from '../assembly/bottom.vue'
import Top from '../assembly/navigation.vue'
import Maps from '../assembly/map.vue'
export default{
	data () {
		return {
			
		}
	},
	components:{
		Bottom,
		Top,
		Maps
	}
}
</script>

<style>
.contact {
	width: 100%;
}
.contact img{
	width: 100%;
	height: 490px;
}
.contact_mobile{
	margin-top: 45px;
	margin-bottom: 63px;
}
.contact_map {
	width: 100%;
	height: 675px;
	background: pink;
	margin-bottom: 100px;
}
</style>
