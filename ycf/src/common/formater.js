import * as util from '../common/util';

/*
  消息项格式化
====================================================*/
export function messageItemFormater(messageItem){
  if (messageItem) {
    let { content, createtime, stockcode } = messageItem;
    if (content) {
      if (stockcode !== "") {
        if (stockcode.indexOf("6") === 0) {
          messageItem.stockarea = "SH";
        } else {
          messageItem.stockarea = "SZ";
        }
      }
      messageItem.content = content.replace(/\\n/g, "<br/>");
    }
    // if (createtime && createtime.indexOf('-') > 0) {
    //   messageItem.createtime = util.DateFormater(createtime, "yyyy年MM月dd日 hh:mm");
    // }
  }
  return messageItem;
}

/*
  消息列表格式化
====================================================*/
export function messageListFormater(messageList){
  let results = [];
  if (messageList && messageList.length) {
    for (let i = 0, len = messageList.length; i < len; i++) {
      let messageItem = messageList[i],
          formatMessage = messageItemFormater(messageItem);
      if (formatMessage) {
        results.push(formatMessage);
      }
    }
  }
  return results;
}

/*
  时间格式化
====================================================*/
export function formatDate(date, fmt = 'yyyy-mm-dd HH:mm:ss'){

    var formatDate = date;
    if(typeof date === "undefined"){
        formatDate = new Date();
    }

    if(typeof date === "string"){
        formatDate = new Date();

        /* km
           低版本ios提供的setTime方法，仅支持yyyy/MM/dd HH:mm:ss格式
          ===========================================================*/
        date = date.replace(/-/g,"/");

        formatDate.setTime(Date.parse(date));
    }

    var o = {
        "M+": formatDate.getMonth() + 1,
        "d+": formatDate.getDate(),
        "h+": formatDate.getHours(), 
        "m+": formatDate.getMinutes(),  
        "s+": formatDate.getSeconds(),  
        "q+": Math.floor((formatDate.getMonth() + 3) / 3),   
        "S": formatDate.getMilliseconds() 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (formatDate.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

