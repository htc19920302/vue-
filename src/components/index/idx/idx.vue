<template>
	<div id="box">
		<swiper :options="swiperOption" ref="mySwiper" name>
    			<!-- slides -->
			    <swiper-slide><img src="../../../../static/assets/images/banner.png"></swiper-slide>
			    <swiper-slide><img src="../../../../static/assets/images/banner1.png"></swiper-slide>
			    <swiper-slide><img src="../../../../static/assets/images/banner2.png"></swiper-slide>
			    
			    <!-- Optional controls -->
			    <div class="swiper-pagination"  slot="pagination"></div>
 		</swiper>
 		<div class="title">宝胜智能后视镜</div>
 		<div class="idx_icon">
 			<div class="one">
 				<p>
 					<img src="../../../../static/assets/images/1.png"><br>
 					<span>实时预览</span>

 				</p>
 				<p>
 					<img src="../../../../static/assets/images/2.png"><br>
 					<span>视频影像</span>

 				</p>
 				<p>
 					<img src="../../../../static/assets/images/3.png"><br>
 					<span>车辆定位</span>

 				</p>
 			</div>
 			<div class="two">
 				<p>
 					<img src="../../../../static/assets/images/4.png"><br>
 					<span>远程监控</span>

 				</p>
 				<p>
 					<img src="../../../../static/assets/images/5.png"><br>
 					<span>异动报警</span>

 				</p>
 				<p>
 					<img src="../../../../static/assets/images/7.png"><br>
 					<span>远程设置</span>

 				</p>
 			</div>
 		</div>
		
	</div>
</template>
<script type="text/javascript">
	
	import { swiper, swiperSlide } from 'vue-awesome-swiper'


	export default {
		name: 'carrousel',
		 components: {
		    swiper,
		    swiperSlide
		  },
		data(){
			return{
				
			     swiperOption:{
		          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
		          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
		          notNextTick: true,
		          // swiper configs 所有的配置同swiper官方api配置
		          autoplay: 3000,
		          //direction : 'vertical',
		          grabCursor : true,
		          setWrapperSize :true,
		          autoHeight: true,
		          pagination : '.swiper-pagination',
		          paginationClickable :true,
		          observeParents:true,
		          // if you need use plugins in the swiper, you can config in here like this
		          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
		          debugger: true,
		          // swiper callbacks
		          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
		          onTransitionStart(swiper){
		            console.log(swiper)
	          		}
				}
			}
		}, 
		computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
     // this.swiper.slideTo(3, 1000, false)
    }
			
	}
	
</script>
<style type="text/css" spcod>
	#box{
		width:100%;
		height: 100%;
	}
	
	.swiper-slide,.swiper-wrapper{
		height: 3.8rem;
		width: 7.5rem;
		box-sizing: border-box;
		margin:0;
		padding:0;
		overflow: hidden;
	}
	.swiper-slide img{
		height: 3.8rem;
		width: 7.5rem;
		display: block;
	}
	.title{
		height: 0.8rem;
		background: #ff8b00;
		color:#fff;
		text-align: center;
		line-height: 0.8rem;
		font-size: 16px;
	}
	.one,.two{
		display: flex;
		justify-content: space-around;
		font-size: 14px;

	}
	.one p,.two p {
		height: 2.2rem;
		text-align: center;
	}
	.one p img,.two p img{
		width:1.2rem;
		margin:0.3rem 0;
	}
</style>