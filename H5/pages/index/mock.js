const mockData = {
	"message": "查询成功",
	"status": "10000",
	"data": {
		"pages": [{
				"id": "000000",
				"name": "首页",
				"home": true,
				"componentList": [{
						"component": "McSearch",
						"name": "搜索",
						"icon": "icon-sousuo",
						"value": {
							"text": "搜索你想要的商品"
						},
						"styles": {
							"shape": "circular",
							"location": "left",
							"cmpBackground": "rgba(69, 82, 236, 1)"
						},
						"id": "1639924944YKGaDc",
						"height": 50
					},
					{
						"component": "McCapCube",
						"name": "魔方",
						"icon": "icon-mofang",
						"cube": {
							"model": "custom",
							"row": 3,
							"list": [{
									"top": 0,
									"left": 0,
									"bottom": 1,
									"right": 2,
									"height": 1,
									"width": 2,
									"image": "//d303.paixin.com/thumbs/1561359/378467338/staff_1024.jpg"
								},
								{
									"top": 0,
									"left": 2,
									"bottom": 3,
									"right": 4,
									"height": 3,
									"width": 2,
									"image": "//d303.paixin.com/thumbs/1561359/378467338/staff_1024.jpg"
								},
								{
									"top": 2,
									"left": 0,
									"bottom": 3,
									"right": 2,
									"height": 1,
									"width": 2,
									"image": "//d303.paixin.com/thumbs/1561359/378467338/staff_1024.jpg"
								},{
									"top": 2,
									"left": 6,
									"bottom": 3,
									"right": 0,
									"height": 1,
									"width": 2,
									"image": "//d303.paixin.com/thumbs/1561359/378467338/staff_1024.jpg"
								}
							]
						},
						"styles": {
							"pagePadding": 0,
							"cmpRadius": 0,
							"imgMargin": 0,
							"imgRadius": 0,
							"cmpBackground": ""
						},
						"id": "1685957355HBQR8C"
					},
					{
						"component": "McSwiper",
						"name": "广告轮播",
						"icon": "icon-swiper",
						"list": [{
							"id": "0001",
							"image": "http://110.41.150.71:8090/img/1667355527866.jpg"
						}],
						"attrs": {
							"model": "basis",
							"autoplay": true,
							"loop": true,
							"center": true,
							"crown": false,
							"imgWidth": 100,
							"imgHeight": 180,
							"spaceBetween": 0
						},
						"styles": {
							"pagePadding": 0,
							"negativeMarginBottom": 0
						},
						"id": "1639924897Kn4qR0",
						"height": 204
					},
					{
						"component": "McNotice",
						"name": "公告",
						"icon": "icon-gonggao",
						"noticeContent": {
							"text": "一对一分析学习情况，做阶段式学习计划，明确学习方向， 掌控学习节奏。",
							"icon": ""
						},
						"noticeStyles": {
							"pagePadding": 23,
							"fontColor": "",
							"cmpBackground": "rgba(255, 255, 255, 1)"
						},
						"id": "1639925354AfqNuY",
						"height": 30
					},
					{
						"component": "McCapCube",
						"name": "魔方",
						"icon": "icon-mofang",
						"cube": {
							"model": "custom",
							"row": 4,
							"list": [{
									"top": 0,
									"left": 0,
									"bottom": 2,
									"right": 3,
									"height": 2,
									"width": 3,
									"image": "http://110.41.150.71:8090/img/1667355558330.jpg"
								},
								{
									"top": 0,
									"left": 3,
									"bottom": 2,
									"right": 6,
									"height": 2,
									"width": 3,
									"image": "http://110.41.150.71:8090/img/1667355564322.jpg"
								},
								{
									"top": 2,
									"left": 0,
									"bottom": 4,
									"right": 3,
									"height": 2,
									"width": 3,
									"image": "http://110.41.150.71:8090/img/1667355570355.jpg"
								},
								{
									"top": 2,
									"left": 3,
									"bottom": 4,
									"right": 6,
									"height": 2,
									"width": 3,
									"image": "http://110.41.150.71:8090/img/1667355575729.jpg"
								}
							]
						},
						"styles": {
							"pagePadding": 0,
							"cmpRadius": 10,
							"imgMargin": 12,
							"imgRadius": 10,
							"cmpBackground": "rgba(255, 255, 255, 1)"
						},
						"id": "1639925008oJYaq4",
						"height": 250
					},
					{
						"component": "McImg",
						"name": "图片",
						"icon": "icon-image",
						"imageValue": {
							"imagePath": "http://110.41.150.71:8090/img/1667355586328.jpg",
							"jumpPath": ""
						},
						"imageStyle": {
							"pagePadding": 10,
							"cmpRadius": 10,
							"cmpUpperPadding": 0,
							"cmpLowerPadding": 0
						},
						"id": "1639925639Z9SJc4",
						"height": 130
					}
				]
			},
			{
				"id": "1685092096SQ9I",
				"name": "详情",
				"componentList": [{
						"component": "McCapCube",
						"name": "魔方",
						"icon": "icon-mofang",
						"cube": {
							"model": "custom",
							"row": 3,
							"list": [{
								"top": 0,
								"left": 0,
								"bottom": 3,
								"right": 6,
								"height": 3,
								"width": 6,
								"image": "//d303.paixin.com/thumbs/1561359/378467338/staff_1024.jpg",
								"jump": {
									"type": "custom",
									"id": "1685092096SQ9I"
								}
							}]
						},
						"styles": {
							"pagePadding": 0,
							"cmpRadius": 0,
							"imgMargin": 5,
							"imgRadius": 100,
							"cmpBackground": "rgba(244, 234, 234, 1)"
						},
						"id": "1685092114A5We3B",
						"height": 187
					},
					{
						"component": "McCountdown",
						"name": "倒计时",
						"icon": "icon-daojishi",
						"value": {
							"text": "活动",
							"startTime": "",
							"endTime": ""
						},
						"styles": {
							"model": "one",
							"location": "left",
							"pagePadding": 0,
							"cmpUpperPadding": 10,
							"cmpLowerPadding": 10,
							"cmpUpperRadius": 0,
							"titleColor": "#000000",
							"timeColor": "#000000",
							"cmpBackground": "#FFFFFF"
						},
						"id": "1685092182tOyyly",
						"height": 33
					},
					{
						"component": "McGoods",
						"name": "商品",
						"icon": "icon-shangpin",
						"goodsData": [{
							"id": "1685092208KwPvQw",
							"list": [
								"647076fa80fd235bfa6075d2"
							],
							"title": "22",
							"label": "22"
						}],
						"attrs": {
							"model": "transverse",
							"tabModel": "tab2",
							"listModel": "towCols",
							"itemAlign": "left",
							"showTitle": true,
							"showInfo": false,
							"showOriginalPrice": false,
							"buyText": "购买"
						},
						"styles": {
							"pagePadding": 0,
							"wrapPadding": 0,
							"cmpUpperRadius": 0,
							"cmpLowerRadius": 0,
							"titleColor": "#000000",
							"subTitleColor": "#7F8080",
							"background": "#ffffff",
							"tabActiveColor": "#000000",
							"buyBackgroundColor": "#df201e"
						},
						"id": "1685092193MuM5JD",
						"height": 266
					},
					{
						"component": "McEmpty",
						"name": "辅助分割",
						"icon": "icon-line",
						"styles": {
							"model": "basis",
							"type": "basis",
							"pagePadding": 0,
							"height": 20,
							"lineColor": "#E5E5E5"
						},
						"id": "1685092188j2HG4H",
						"height": 20
					},
					{
						"component": "McImg",
						"name": "图片",
						"icon": "icon-image",
						"imageValue": {
							"imagePath": "http://110.41.150.71:8090/img/1685092279272.jpeg",
							"jumpPath": {
								"type": "custom",
								"id": "1685092096SQ9I"
							}
						},
						"imageStyle": {
							"pagePadding": 0,
							"cmpRadius": 0,
							"cmpUpperPadding": 0,
							"cmpLowerPadding": 0
						},
						"id": "16850922688ZGK0F",
						"height": 376
					},
					{
						"component": "McNotice",
						"name": "公告",
						"icon": "icon-gonggao",
						"noticeContent": {
							"text": "自恨罗衣掩诗句，举头空羡榜中名",
							"icon": ""
						},
						"noticeStyles": {
							"pagePadding": 0,
							"fontColor": "rgba(183, 93, 93, 0.75)",
							"cmpBackground": ""
						},
						"id": "1685092301pQ1fNm",
						"height": 30
					},
					{
						"component": "McSearch",
						"name": "搜索",
						"icon": "icon-sousuo",
						"value": {
							"text": "搜索你想要的商品"
						},
						"styles": {
							"shape": "square",
							"location": "left",
							"cmpBackground": "#FFFFFF"
						},
						"id": "1685092305hAL8im",
						"height": 50
					},
					{
						"component": "McSwiper",
						"name": "广告轮播",
						"icon": "icon-swiper",
						"list": [{
								"id": "0001",
								"image": "http://110.41.150.71:8090/img/1667354598861.png"
							},
							{
								"id": "0002",
								"image": "http://110.41.150.71:8090/img/1667354575078.png"
							}
						],
						"attrs": {
							"model": "basis",
							"autoplay": true,
							"loop": true
						},
						"styles": {
							"pagePadding": 0,
							"negativeMarginBottom": 0
						},
						"id": "1685092309sPZl5x",
						"height": 208
					},
					{
						"component": "McTab",
						"name": "图文导航",
						"icon": "icon-daohang",
						"tabList": [{
								"id": "0001",
								"label": "推荐酒店",
								"image": "http://110.41.150.71:8090/img/1667354666114.png"
							},
							{
								"id": "0002",
								"label": "热销抢购",
								"image": "http://110.41.150.71:8090/img/1667354683202.png"
							},
							{
								"id": "0003",
								"label": "促销门票",
								"image": "http://110.41.150.71:8090/img/1667354700687.png"
							},
							{
								"id": "0004",
								"label": "机票团购",
								"image": "http://110.41.150.71:8090/img/1667354717861.png"
							}
						],
						"attrs": {
							"model": "fixed",
							"type": "image-text",
							"max": "4"
						},
						"styles": {
							"pagePadding": 0,
							"cmpUpperPadding": 0,
							"cmpLowerPadding": 0,
							"imgPadding": 10,
							"cmpUpperRadius": 0,
							"cmpLowerRadius": 0,
							"imgWidth": 50,
							"imgRadius": 0,
							"fontSize": 12,
							"titleColor": "",
							"cmpBackground": ""
						},
						"id": "1685092317UXqNWP",
						"height": 85.5
					},
					{
						"component": "McTitle",
						"name": "标题",
						"icon": "icon-biaotizujian",
						"value": {
							"title": "LEADING SERIES",
							"info": "品牌系列推荐"
						},
						"attrs": {
							"model": "left"
						},
						"styles": {
							"pagePadding": 0,
							"cmpUpperPadding": 10,
							"cmpLowerPadding": 10,
							"cmpUpperRadius": 0,
							"cmpLowerRadius": 0,
							"titleSize": 20,
							"infoSize": 12,
							"titleColor": "#333333",
							"infoColor": "#999999",
							"cmpBackground": ""
						},
						"id": "1685092331Xiip3G"
					}
				],
				"home": false
			}
		],
		"_id": "64704d2580fd235bfa6060a8",
		"name": "123",
		"cover": "http://110.41.150.71:8090/img/1667355593343.png",
		"config": {
			"navigation": {
				"label": "导航",
				"styles": {
					"background": "#fff"
				},
				"list": [{
						"id": "00001",
						"icon": "icon-shop",
						"text": "首页",
						"jump": {
							"type": "custom",
							"id": "000000"
						}
					},
					{
						"id": "00003",
						"icon": "icon-sort",
						"text": "分类",
						"jump": {
							"type": "fixed",
							"id": "category"
						}
					},
					{
						"id": "00004",
						"icon": "icon-cart",
						"text": "购物车",
						"jump": {
							"type": "fixed",
							"id": "car"
						}
					},
					{
						"id": "00005",
						"icon": "icon-my",
						"text": "我的",
						"jump": {
							"type": "fixed",
							"id": "my"
						}
					}
				]
			},
			"goodsGroups": [{
					"name": "新品上架",
					"type": "0001",
					"level": 1,
					"child": []
				},
				{
					"name": "热销排行",
					"type": "0002",
					"level": 1,
					"child": []
				}
			],
			"listTpl": {
				"model": "one",
				"addIcon": "cart"
			},
			"categoryTpl": {
				"advertising": false
			},
			"hotList": [],
			"backgroundColor": "rgba(255, 255, 255, 1)"
		},
		"type": "mall",
		"industry": "education",
		"logo": "http://110.41.150.71:8090/img/1667353444841.png",
		"__v": 0,
		"id": "64704d2580fd235bfa6060a8",
		"userId": "64704d0280fd235bfa6060a1"
	}
}
export default mockData;