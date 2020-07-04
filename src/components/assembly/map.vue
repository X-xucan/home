<template>
    <div class="aa">
		<baidu-map
		:scroll-wheel-zoom="true"
		:center="{lng:97.855664,lat:24.000081}" :zoom="17" class="bm-view">
		    <bm-marker
		    :position="{lng:97.855664,lat:24.000081}"
		    animation=""
		    >
		        <bm-label content="我在这里"
		        :labelStyle="{color: 'red', fontSize : '12px'}"
		        :offset="{width: -17, height: 14}"/>
		    </bm-marker>
		    </bm-marker>
		</baidu-map>
	</div>
</template>

<script>
export default {
  name: 'TestBaiDu',
  data () {
    return {
      center: {lng: 97.855664, lat: 24.000081},
      zoom: 18
    }
  },
  methods: {
    handler ({BMap, map}) {
      var point = new BMap.Point( 97.855664, 25.0491531)
      map.centerAndZoom(point, 13)
      var marker = new BMap.Marker(point) // 创建标注
      map.addOverlay(marker) // 将标注添加到地图中
      var circle = new BMap.Circle(point, 6, { strokeColor: 'Red', strokeWeight: 6, strokeOpacity: 1, Color: 'Red', fillColor: '#f03' })
      map.addOverlay(circle)
    },
    getClickInfo (e) {
      console.log(e.point.lng)
      console.log(e.point.lat)
      this.center.lng = e.point.lng
      this.center.lat = e.point.lat
    }
},
}
</script>

<style>
.bm-view {
  width: 100%;
  height: 700px;
}
</style>
