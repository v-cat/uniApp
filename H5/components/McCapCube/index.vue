<template>
	<div :style="[wrapStyle(cubeData.styles)]">
		<div class="cap-cube-wrap" :style='[getWrapStyle()]'>
			<div v-for="(item, index) in cubeData.cube.list" :key="index" class="absolute cap-cube-item"
				:style="[getMainStyle(item)]">
				<div class="cap-cube-item-wrap" :style="[getItemStyle()]">
					<image class="cap-cube-img" mode="aspectFill" :src="item.image"
					@click="jump(item.jump)" />
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	import {
		ref,
		onMounted,
		computed
	} from 'vue'
	const cubeData =
		defineProps(['id', 'key', 'styles', 'cube'])
	// 容器样式
	// onMounted(()=>{
	// 		console.log('show',cubeData.cube.list) 
	// 	})
	const itemUnit = computed(() => {
		// 屏幕宽度为375px
		return (375 - cubeData.styles.pagePadding * 2) / 6
	})
	const wrapHeight = computed(() => cubeData.cube.row * itemUnit.value)
	const margin = computed(() => cubeData.styles.imgMargin)
	const unit = (target) => {
		return `${target * 2}rpx`
	}
	const getWrapStyle = () => {
		let result = {}
		if (cubeData.cube?.list.length > 0) {
			result.height = unit(wrapHeight.value);
		} else {
			result.backgroundImage =
				"url('http://110.41.150.71:8090/img/1667354829715.jpg')";
			result.backgroundSize = `100% 100%`;
			result.height = unit(190);
		}

		return result
	}

	// 主体样式
	const getMainStyle = (styles) => {
		let result = {};
		Object.keys(styles).map((key) => {
			console.log(key)
			let tmep = styles[key] * itemUnit.value;
			switch (key) {
				case "top":
					let paddingTop = tmep == 0 ? margin.value : margin.value / 2;
					result.paddingTop = unit(paddingTop);
					break;
				case "left":
					let paddingLeft = tmep == 0 ? margin.value : margin.value / 2;
					result.paddingLeft = unit(paddingLeft);
					break;
				case "bottom":
					let paddingBottom =
						tmep == wrapHeight.value ? margin.value : margin.value / 2;
					result.paddingBottom = unit(paddingBottom);
					break;

				case "right":
					let paddingRight =
						tmep == 375 - cubeData.styles.pagePadding * 2 ?
						margin.value :
						margin.value / 2;
					result.paddingRight = unit(paddingRight);
					break;
			}
			if (key === 'width') {
				let marginWidth =
					(tmep == 375 - cubeData.styles.pagePadding * 2 ?
						margin.value :
						margin.value / 2);
				result.width = unit(tmep - marginWidth * (cubeData.cube.row / 2 + 1));
			} else if (key === 'height') {
				let marginWidth =
					(tmep == 375 - cubeData.styles.pagePadding * 2 ?
						margin.value :
						margin.value / 2);
				result.height = unit(tmep - marginWidth * (cubeData.cube.row / 2 + 1));
			} else {
				result[key] = unit(tmep);
			}

		})
		console.log(result)
		return result
	}

	// 单项容器样式
	const getItemStyle = () => {
		return {
			borderRadius: unit(cubeData.styles.imgRadius),
		};
	}
	// 动态渲染通用样式
	const wrapStyle = (target) => {
		if (!target) {
			return {}
		}

		let result = {}

		// 需px单位基础样式
		const needUnit = ['fontSize', 'width', 'height']
		for (const [key, value] of Object.entries(target)) {
			// 需px单位基础样式
			if (needUnit.includes(key)) {
				result[key] = unit(value)
				continue
			}

			// 页面间距
			if (key == 'pagePadding') {
				result['paddingLeft'] = unit(value)
				result['paddingRight'] = unit(value)
				continue
			}
		}

		return result
	}
	const jump=(jump)=>{
		if(!jump) return
		console.log(jump)
	}
</script>

<style lang="scss" scoped>
	.cap-cube-wrap {
		overflow: hidden;
		position: relative;

		.cap-cube-item {
			display: flex;

			.cap-cube-item-wrap {
				width: 100%;
				height: 100%;
				overflow: hidden;

				.cap-cube-img {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>