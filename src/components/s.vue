<template>
	<div id="app" v-cloak>
	    <div class='box'>
	        <div class='boxleft'>
	            <ul class='boxlbox'>
	                <template v-for="(item,index) in lists">
	                    <li :key="index" @click='leftTap(index)' :class="{boxlb_cheak:cIndex==index}" class='boxlb'>
	                        <span class='boxlb_inner' :class="{boxlb_inner_cheak:cIndex==index}">{{item.title}}</span>
	                    </li>
	                </template>
	            </ul>
	        </div>
	        <ul class='boxright'>
	            <li :key="index" class='boxri' v-for="(item,index) in lists[cIndex].goods">
	                <img class='boxri_img' :src='item.img'/>
	                <div class='boxri_text'>
	                    <div class='boxrit_left'>
	                        <p class='boxritl_name'>{{item.name}}</p>
	                        <p class='boxritl_price'>￥{{item.price}}</p>
	                    </div>
	                    <div class='boxrit_right'>
	                        <img @click='reduceNum(item)' v-show="item.num>0"  class='boxrit_right_img' src='../img/goods1.jpg'/>
	                        <span  class='boxrit_right_num' v-show="item.num>0">{{item.num}}</span>
	                        <img @click='addNum(item)' class='boxrit_right_img' src='../img/goods1.jpg'/>
	                    </div>
	                </div>
	            </li>
	        </ul>
			<div></div>
	    </div>
	
	</div>
</template>

<script>
export default {
	data () {
	    return {
			cIndex: 0,
			lists: [
			    {
			        title: "蔬菜",
			        goods: [
			            {
			                id: 0,
			                img: '../img/goods1.jpg',
			                name: '白菜1',
			                price: '10.00',
			                num: 0
			            },
			            {
			                id: 1,
			                img: '../img/goods1.jpg',
			                name: '青菜1',
			                price: '10.00',
			                num: 0
			            }
				 
			        ]
			    },
			    {
			        title: "水果",
			        goods: [
			            {
			                id: 2,
			                img: '../img/goods1.jpg',
			                name: '猕猴桃2',
			                price: '20.00',
			                num: 0
			            },
			            {
			                id: 3,
			                img: '../img/goods1.jpg',
			                name: '西瓜2',
			                price: '20.00',
			                num: 0
			            },
			        ]
			    },
			],
			carArr: [],
			appearCar: false
		}
	},
	computed:{
	    alltotal:function () {
	       var alltotal = 0;
	       var allNum = 0;
	       for(var i = 0,len = this.lists.length;i<len;i++){
	           for(var j = 0,goodsLen = this.lists[i].goods.length;j<goodsLen;j++){
	               alltotal += parseInt(this.lists[i].goods[j].num)*parseFloat(this.lists[i].goods[j].price);
	               allNum += parseInt(this.lists[i].goods[j].num);
	           }
	       }
	        return [alltotal,allNum]
	    },
	},
	methods: {
	    leftTap: function (index) {
	        this.cIndex = index
	    },
	    showCar: function () {
	        if (this.carArr.length == 0) {
	            this.appearCar = false
	        } else {
	            this.appearCar = !this.appearCar
	        }
	 
	    },
	    //商品数量加
	    addNum: function (data) {
	        data.num++;
	        var carArr = this.carArr;
	        var isCar = false;
	        if (carArr == 0) {
	            carArr.push(data)
	        }
	        for (var i = 0, len = carArr.length; i < len; i++) {
	            if (data.id == carArr[i].id) {
	                isCar = true
	            }
	        }
	        if (!isCar) {
	            carArr.push(data)
	        }
	    },
	    reduceNum: function (data) {
	        if (data.num <= 0) return;
	        var carArr = this.carArr;
	        data.num--;
	        var isCar = false;
	        for (var i = 0, len = carArr.length; i < len; i++) {
	            if (carArr[i].num <= 0) {
	                carArr.splice(i, 1)
	            }
	        }
	    }
	}
}
</script>

<style>
.aa{
	width: 100%;
	height: 800px;
}
ul li {

	margin: 0;
	padding: 0;
	list-style: none;
}
.tab-tilte{
	width: 90%;
}
.tab-tilte li{
	float: left;
	width: 25%;
	padding: 10px 0;
	text-align: center;
	background-color:#f4f4f4;
	cursor: pointer;
}
/* 点击对应的标题添加对应的背景颜色 */
.tab-tilte .active{
	background-color: #09f;
	color: #fff;
}
.tab-content div{
	float: left;
	width: 25%;
	line-height: 100px;
	text-align: center;
}
</style>