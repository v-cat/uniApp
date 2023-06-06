<template>
	<view >
	 
			<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="swiperData.indicatorDots" :autoplay="swiperData.autoplay" :interval="swiperData.interval"
						:duration="swiperData.duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		 <div v-for='item in defaultValue'>
			 <McCapCube
			 				 v-if="item.component == 'McCapCube'"
			 				 :id="'widget' + item.id"
			 				 :key="item.id"
			 				 :styles="item.styles"
			 				:cube="item.cube"
			 				  ></McCapCube> 
			</div>  
			
			 
		</view>
		</view>
	 
</template>

<script setup>
	import {
		ref,onMounted
	} from 'vue'
	import  mockData from './mock.js';
	const defaultValue=ref()
	onMounted(()=>{
		  defaultValue.value=mockData.data.pages[0].componentList
		// console.log('show',defaultValue.value)  
	})
	const cube=ref({})
	import McCapCube from'@/components/McCapCube/index.vue'
	const swiperData = ref({
		 background: ['color1', 'color2', 'color3'],
		            indicatorDots: true,
		            autoplay: true,
		            interval: 2000,
		            duration: 500
	})
</script>

<style>
	.uni-margin-wrap {
			width: 690rpx;
			width: 100%;
		}
		.swiper {
			height: 300rpx;
		}
		.swiper-item {
			display: block;
			height: 300rpx;
			line-height: 300rpx;
			text-align: center;
		}
		.swiper-list {
			margin-top: 40rpx;
			margin-bottom: 0;
		}
		.uni-common-mt {
			margin-top: 60rpx;
			position: relative;
		}
		.info {
			position: absolute;
			right: 20rpx;
		}
		.uni-padding-wrap {
			width: 550rpx;
			padding: 0 100rpx;
		}
		.uni-bg-red{
			background-color: red;
		}
</style>