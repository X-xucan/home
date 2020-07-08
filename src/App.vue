<template>
  <div id="app">
	<!-- <naviget></naviget> -->
    <router-view/>
	<Beian></Beian>
  </div>
</template>

<script>
import naviget from '@/components/assembly/navigation'
import Bottom from '@/components/assembly/bottom'
import Beian from '@/components/assembly/beian'
export default {
  name: 'App',
  data () {
	return{
		path:''
	}  
  },
  components: {
	 Beian 
  }
}
</script>

<style>
@import url("css/public.css");
@import url("css/media.css");
@import url("font/iconfont.css");
.beian{
	display: none;
}
</style>
