// 可以使用不同的瘦成rolling

var appData = {
		appName: "德国LeanX服务公司",
		slogan: "您的德国战略先锋",
		highlights: [
			"LeanX是一家德国本土咨询服务公司。",
			"公司效力于为中国企业量身打造高效的德国市场进入策略。"
		],
		contacts: [
			{
				title: "中国",
				telephone: "0086 138 617 625 61",
				email: "info@leanx-service.de",
				person: "陈 女士"
			},
			{
				title: "德国",
				telephone: "0049 179 388 0100",
				email: "info-de@leanx-service.de",
				person: "吴 先生"
			}
		],
		teamDesc: "服务团队拥有丰富的工业制造，企业管理背景。专业领域涉及项目管理，生产管理，销售管理，供应链管理等等。为您的海外战略在各个环节提供强有力的专业支持，同时预防和规避企业在本地化过程中各种隐患。",
		solutionSections: [
			{
				id: "sol41",
				title: "实地考察",
				icon: "./img/pic-2.png",
				content: "LEANX帮助富有开拓精神的中国企业家，紧跟工业技术发展前沿。此外，工业4.0环德考察让您全面学习和感受来自欧洲心脏的工业革命，让德国工业4.0与中国制造2025碰撞火花。"
			},
			{
				id: "sol42",
				title: "展会支持",
				icon: "./img/pic-3.png",
				content: "参加专业展会是您的企业了解的市场，建立商业关系最有效的手段。LEANX为您提供展会期间的语言交流，行程安排，展台布置，客户关系等全方面的支持。"
			},
			{
				id: "sol43",
				title: "托管公司",
				icon: "./img/pic-4.png",
				content: "作为您的战略先锋，LEANX保障您的海外公司，在发展壮大以前，受到全方位的呵护，其中包括，注册地址服务，信件整理，税务服务等等。"
			},
			{
				id: "sol4",
				title: "市场开拓",
				icon: "./img/pic-5.png",
				content: "要让您公司的产品销往德国，可以选择不同战略，如建立销售渠道，寻找销售代理，开展市场营销活动等等。此外，您也需要在海外市场建立您的国际化形象，注册德国商标，建立运维团队等等。根据您的战略选择，LEANX提供专业灵活的服务。"
			},
			{
				id: "sol45",
				title: "注册公司",
				icon: "./img/pic-6.png",
				content: "成立德国公司是您的企业真正踏入德国市场的第一步。成立过程中，您将需要考虑和处理来入境，语言，法律法规，税务，租赁，雇佣等诸多问题。LEANX将按照您的需求梳理和解决这些问题，辅助您高效顺畅的完成这一步。"
			},
			{
				id: "sol46",
				title: "欧洲专业采购",
				icon: "./img/pic-7.png",
				content: "LEANX守护您的生产原料的原产地，为您在德国建立自己的采购直通车，让您的生产不再困扰于供应中间商的摇摆不定。"
			}
			
		]
	}

var app = angular.module('leanx.home.app', ['ngAnimate']);

app.filter("paginate", function(){});
app.controller('leanx.home.ctrl', function($scope) {
	$scope.a = appData;
});
