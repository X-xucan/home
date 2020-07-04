<template>
  <div id="app">
	<!-- <naviget></naviget> -->
    <router-view/>
	<!-- <Bottom></Bottom> -->
  </div>
</template>

<script>
import naviget from '@/components/assembly/navigation'
import Bottom from '@/components/assembly/bottom'
export default {
  name: 'App',
  data () {
	return{
		path:''
	}  
  },
  // components: {
	 //  naviget,
	 //  Bottom
  // }
}
</script>

<style>
@import url("css/public.css");
@import url("font/iconfont.css");
</style>
