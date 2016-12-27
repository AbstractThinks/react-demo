import { appId, wxDefaultConfig } from '../config/common';

export function wxshare(wxConfig = {}) {
	//console.log({ ...wxDefaultConfig, ...wxConfig });
	loadXMLDoc({ ...wxDefaultConfig, ...wxConfig });
}

function loadXMLDoc(wxConfig) {
	var xmlhttp;
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera,
								// Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var data = eval('(' + xmlhttp.responseText + ')');
			data = data.data;
			//data.debug = true;
			data.jsApiList = [ 'onMenuShareTimeline','closeWindow',
					'onMenuShareAppMessage', 'hideAllNonBaseMenuItem',
					'showMenuItems' ];
			// 通过config接口注入权限验证配置
			// console.log(data);
			wx.config(data);

			// 通过ready接口处理成功验证
			wx.ready(function() {
						// alert(meta.dataset.msgImg);
						// console.log(meta.dataset);

						var opts = {
							title : wxConfig.msgTitle, // 分享标题
							desc : wxConfig.msgContent, // 分享描述
							link : wxConfig.link, // 分享链接
							imgUrl : wxConfig.msgImg // 分享图标
						};
						if(wxConfig.hideAll) {
							// 隐藏按钮
							wx.hideAllNonBaseMenuItem();
							// 分享到朋友圈
							wx.onMenuShareTimeline(opts);
							// 分享给朋友
							wx.onMenuShareAppMessage(opts);
							// 显示按钮
							wx.showMenuItems({
							    menuList: ['menuItem:share:appMessage', 'menuItem:share:timeline', 'menuItem:favorite'] // 要显示的菜单项，所有menu项见附录3
							});
						} else {
							// 分享到朋友圈
							wx.onMenuShareTimeline(opts);
							// 分享给朋友
							wx.onMenuShareAppMessage(opts);
						}
						
						//wx.showAllNonBaseMenuItem();
					});
			wx.error(function(res) {
			});
		}
	}
	var currentHost = "http://" + window.location.host;
	xmlhttp.open("GET", currentHost +"/weichat/weichat/share/" + appId + "?url="
					+ encodeURIComponent(window.location.href.split('#')[0]), true);
	xmlhttp.send();
}