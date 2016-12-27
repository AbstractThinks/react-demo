import React from 'react';
import Notification from 'rc-notification';

let Notify = (function(){
    let notifyKey = "mcmurphy-notify";

    let notifyInstance = null;

    let makeNotify = function(text, duration = 3){
     notifyInstance = Notification.newInstance({
        key : notifyKey,
        style: {
          'top': 30,
          'left': '50%'
          
        }
      });

      notifyInstance.notice({
        content: <span>{ text }</span>,
        duration: duration
      });
    };

    let removeNotify = function(){
        notifyInstance.removeNotice(notifyKey);
    };

    return {
       makeNotify : makeNotify,
       removeNotify : removeNotify
    };
})();

module.exports = Notify;
