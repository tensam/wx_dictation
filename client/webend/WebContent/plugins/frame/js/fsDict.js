/**
 * @Description: 字典配置
 * @Copyright: 2017 wueasy.com Inc. All rights reserved.
 * @author: fallsea
 * @version 1.8.4
 * @License：MIT
 */
layui.fsDict = {
		//省份（本地）
		province : {
			formatType : "local",
			labelField : "provincename",
			valueField : "provinceid",
			//静态数据
			data:[{"provinceid":"PRO10001","provincename":"广东省","style":"color:#F00;"},
				{"provinceid":"PRO10002","provincename":"广西省"},
				{"provinceid":"PRO10003","provincename":"江西省"},
				{"provinceid":"PRO10004","provincename":"吉林省"}
				
			]
		}
		,
		
		//城市
		city : {
			formatType : "local",
			labelField : "cityname",
			valueField : "cityid",
			//静态数据
			data:[{"cityid":"CITY10001","cityname":"惠州","style":"color:#F00;"},
				{"cityid":"CITY10002","cityname":"北京"},
				{"cityid":"CITY10003","cityname":"上海"},
				{"cityid":"CITY10004","cityname":"天津"}
				
			]
		}
		,
		//类型
		type : {
			formatType : "local",
			labelField : "name",
			valueField : "code",
			spaceMode : " ",//展示多个数据分隔符，默认,
			data:[{"code":"write","name":"写作","css":"layui-badge layui-bg-orange"},
				{"code":"read","name":"阅读","css":"layui-badge layui-bg-green"},
				{"code":"dai","name":"发呆","css":"layui-badge layui-bg-cyan"}]
		}
		,
		//性别
		sex : {
			formatType : "local",
			labelField : "name",
			valueField : "code",
			spaceMode : "",//展示多个数据分隔符，默认,
			data:[{"code":"男","name":"男"},
				{"code":"女","name":"女"}]
		}
		,
		//省份
		area1 : {
			formatType : "server",
			loadUrl : "/fsbus/DEMO1006",
			method : "get",
			inputs : "parentid:0",
			labelField : "name",
			valueField : "id"
		},
		//城市
		area2 : {
			formatType : "server",
			loadUrl : "/fsbus/DEMO1006",
			inputs : "parentid:",
			labelField : "name",
			valueField : "id"
		},
		//区
		area3 : {
			formatType : "server",
			loadUrl : "/fsbus/DEMO1006",
			inputs : "parentid:,area1:#area2222222",
			labelField : "name",
			valueField : "id"
		}
		,
		//学校（机构）
		org : {
			formatType : "local",
			labelField : "orgname",
			valueField : "orgid",
			//静态数据
			data:[{"orgid":"ORG10001","orgname":"财经学院"},
				{"orgid":"ORG10002","orgname":"中心小学"},
				{"orgid":"ORG10003","orgname":"惠南中心"},
				{"orgid":"ORG10004","orgname":"东里二中"}
			]
		}
		,
		//年级
		grade: {
			formatType : "local",
			labelField : "gradename",
			valueField : "gradeid",
			//静态数据
			data:[{"gradeid":"GRA1001","gradename":"一年级","style":"color:#F00;"},
				{"gradeid":"GRA1002","gradename":"二年级"},
				{"gradeid":"GRA1003","gradename":"三年级"},
				{"gradeid":"GRA1004","gradename":"四年级"}
			]
		}

		,
		//班级
		sclass: {
			formatType : "server",
			loadUrl : "/sclass?method=WebGetAllClassByUidForDropList",
			method : "get",
			labelField : "classname",
			valueField : "classid",
		}
};
