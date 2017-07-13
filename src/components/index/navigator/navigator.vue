<template>
	<div id="naviga">
		<header class="navig_header">
			<img src="../../../../static/assets/images/back_click.png" class="goBack">
			<p class="search">
				<input type="text" name="" placeholder="请输入兴趣点">
				<img src="../../../../static/assets/images/home_weizhang_click.png">
			</p>
			
		</header>
		<!-- <naviga /> -->
		<ul class="server">
			<li v-for="(value,key) in pageData" key="value.key">
				<img :src="value.src"><br>
				<span>{{value.name}}</span>
			</li>
		</ul>	
			<div class="adress">
				<span>收藏地点</span>
				<img src="../../../../static/assets/images/search_down.png">
			</div>
			<div class="history">
				<span>历史目的地</span>
				<img src="../../../../static/assets/images/collect_delete.png">
			</div>
		
	</div>
</template>

<script type="text/javascript">
	//import naviga from '../../public/naviga.vue';
	export default{
		data(){
			return{
				pageData:[
					{
						name:'停车场',
						src:'../../../../static/assets/images/poi_parking.png'
					},{
						name:'加油站',
						src:'../../../../static/assets/images/poi_gas.png'
					},{
						name:'汽车服务',
						src:'../../../../static/assets/images/poi_carservice.png'
					}
					,{
						name:'餐饮美食',
						src:'../../../../static/assets/images/poi_food.png'

					},{
						name:'宾馆住宿',
						src:'../../../../static/assets/images/poi_hotel.png'

					},{
						name:'ATM银行',
						src:'../../../../static/assets/images/poi_bank.png'

					},{
						name:'商场超市',
						src:'../../../../static/assets/images/poi_market.png'

					},{
						name:'小区地名',
						src:'../../../../static/assets/images/poi_house.png'

					}
				]

			}
		},
		components:{
			//naviga,

		}
	}
	
</script>
<style type="text/css" spocd>
	#naviga{
		width: 100%;
		height: 100%;
		background: #ededed;
		padding-top: 0.3rem;
	}
	.server {
		height: 3rem;
		width: 100%;
		font-size: 14px;


	}
	.server li{
		height: 1.5rem;
		width: 25%;
		text-align: center;
		border:1px solid #c3c3c3;
		float: left;
		background: #fff;
		padding-top: 0.1rem;
	}
	.server img{
		width: 0.7rem;
	}
	.adress{
		margin:0.2rem 0;
	}
	.adress img{
		width: 0.4rem;
	}
	.adress,.history{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 0.9rem;
		width: 100%;
		background: #fff;
		border-top:1px solid #c3c3c3;
		border-bottom:1px solid #c3c3c3;
		padding: 0 0.5rem;
		color: #ed8200;
		font-size: 14px;
		
	}
	.history img{
		width: 0.4rem;
	}
	.navig_header {
		height: 1rem;
		padding-right: 0.5rem;

	}
	.goBack{
		width: 0.6rem;
		float: left;
		padding:0 0.25rem;

	}
	.search{
		height: 0.7rem;background: #fff;
		overflow: hidden;	




	}
	.search input{
		height: 0.7rem;
		float: left;
		border:none;
		outline: none;
		width: 5.2rem;
		text-indent: .2rem;


	}
	.search img{
		width: 0.40rem;
		margin-top: 0.15rem;

	}
</style>