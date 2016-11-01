if (self.CavalryLogger) { CavalryLogger.start_js(["ZdVAt"]); }

__d('MTabbable',['MAria','MJSEnvironment','MViewport','isNodeWithinRect'],(function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(o,p){while(o&&o!==p){if(h.isHidden(o))return true;o=o.parentNode;}return false;}function m(o,p){if(o.offsetHeight===0||o.offsetWidth===0||window.getComputedStyle(o).visibility==='hidden'||parseInt(o.tabIndex,10)<0||l(o,p))return false;if(o.tabIndex>=0)return true;switch(o.tagName){case 'A':return o.href&&o.rel!='ignore';case 'INPUT':return o.type!='hidden'&&o.type!='file'&&!o.disabled;case 'BUTTON':case 'SELECT':case 'TEXTAREA':return !o.disabled;}return false;}function n(o){if(!o.getBoundingClientRect)return;var p=i.IS_APPLE_WEBKIT_IOS&&parseFloat(i.OS_VERSION)>=8||i.BROWSER_NAME==='Safari'&&!i.IS_APPLE_WEBKIT_IOS,q=p?o.querySelectorAll('a, button, select, [tabindex]'):o.querySelectorAll('a, button, input, select, textarea, [tabindex]'),r=j.getBoundingRect();for(var s=0,t;t=q[s];s++)if(m(t,o)&&k(t,r)){t.focus();return;}}g.focusTabbable=n;}),null);
__d('Popover',['setTimeoutAcrossTransitions','CSS','DOM','MAria','MViewport','Stratcom','Vector','$','eventsMixinDeprecated'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q=40;function r(s){'use strict';var t=s.flyout;this.flyout=typeof t=='string'?o(t):t;this.content=j.scry(this.flyout,'div','flyout-content')[0];this.options=s;this._onOrientationChange=this._reposition.bind(this);i.conditionClass(this.flyout,'popover_flyout',true);var u=s.button;if(u){this.button=typeof u=='string'?o(u):u;this.buttonClickListener=j.listen(this.button,'click',null,this._openHandler.bind(this));this.button.setAttribute('role','button');k.setupPopup(this.button,this.flyout);}var v=s.flyoutAnchor;if(v){this.flyoutAnchor=typeof v=='string'?o(v):v;}else this.flyoutAnchor=this.button;if(this.options.flyoutFromRoot)this.flyoutClickListener=j.listen(this.flyout,'click',null,this._openHandler.bind(this));if(this.options.touchstart_callback)this.flyoutTouchStartListener=j.listen(this.flyout,'touchstart',null,this._touchStartHandler.bind(this));if(this.options.touchmove_callback)this.flyoutTouchMoveListener=j.listen(this.flyout,'touchmove',null,this._touchMoveHandler.bind(this));if(this.options.touchend_callback)this.flyoutTouchEndListener=j.listen(this.flyout,'touchend',null,this._touchEndHandler.bind(this));r._instances[this.flyout.id]=this;}r.prototype.isOpen=function(){'use strict';return !!this._isOpen;};r.prototype.open=function(){'use strict';if(this.isOpen())return;if(r._activePopover)r._activePopover.close();r._activePopover=this;this._isOpen=true;this.constraint=null;i.conditionClass(this.flyout,'popover_hidden',false);if(this.options.flyoutFromRoot)this._absolutePositionFlyout();this._position();if(!this.options.heightConstraint){i.conditionClass(document.body,'disableClicks',true);this.globalListener=m.listenCapture('click',null,this._closeHandler.bind(this));}window.addEventListener('orientationchange',this._onOrientationChange,false);k.showPopup(this.button,this.flyout);if(this.options.ensureVisible){var s=l.getScrollTop(),t=this._getElementPosition(this.flyout).y,u=t+this.flyout.offsetHeight,v=u-(s+l.getUseableHeight());if(v>0){var w=Math.min(v,Math.max(t-s-q,0));l.scrollTo(0,s+w);}}this.invoke('open');};r.prototype.close=function(s){'use strict';if(!this.isOpen())return;r._activePopover=null;this._isOpen=false;i.conditionClass(this.flyout,'popover_hidden',true);if(this.options.flyoutFromRoot){this.flyoutParent.appendChild(this.flyout);delete this.flyoutParent;}h(function(){i.conditionClass(document.body,'disableClicks',false);}.bind(this),400);this.globalListener&&this.globalListener.remove();window.removeEventListener('orientationchange',this._onOrientationChange,false);this._releaseConstraint();k.hidePopup(this.button,this.flyout);if(!s)this.invoke('close');};r.prototype.clear=function(){'use strict';this.globalListener&&this.globalListener.remove();this.buttonClickListener&&this.buttonClickListener.remove();this.flyoutClickListener&&this.flyoutClickListener.remove();this.flyoutTouchStartListener&&this.flyoutTouchStartListener.remove();this.flyoutTouchMoveListener&&this.flyoutTouchMoveListener.remove();this.flyoutTouchEndListener&&this.flyoutTouchEndListener.remove();delete r._instances[this.flyout.id];};r.prototype.refreshConstraints=function(){'use strict';if(!this._isOpen)return false;var s=this.flyout;this._releaseConstraint();if(this.options.heightConstraint){s.style.minHeight=l.getUseableHeight()+'px';this.constraint=l.addHeightConstraint(n.getDim(this.content).y+this._getElementPosition(s).y);}else this.constraint=l.addMinHeightConstraint(n.getDim(s).y+this._getElementPosition(s).y+r._MARGIN);};r.prototype._getTouchPoint=function(event){'use strict';var s=event.getRawEvent().targetTouches[0],t={x:s?s.screenX:0,y:s?s.screenY:0};return t;};r.prototype._touchStartHandler=function(event){'use strict';this.options.touchstart_callback(this._getTouchPoint(event));};r.prototype._touchMoveHandler=function(event){'use strict';if(this.isOpen())this.options.touchmove_callback(this._getTouchPoint(event));};r.prototype._touchEndHandler=function(event){'use strict';this.options.touchend_callback(this._getTouchPoint(event));};r.prototype._openHandler=function(event){'use strict';event.prevent();var s=this.isOpen();if(s&&!this.options.preventClose){this.close();}else if(!s){var t=j.scry(document,'input');for(var u=0;u<t.length;u++)t[u].blur();this.open();}};r.prototype._closeHandler=function(event){'use strict';if(!event.getNode('popover'))this.close();};r.prototype._getElementPosition=function(s){'use strict';var t=s.offsetLeft,u=s.offsetTop;s=s.offsetParent;while(s&&s!==document.documentElement){t+=s.offsetLeft;u+=s.offsetTop;var v=window.getComputedStyle(s);t+=parseInt(v.getPropertyValue('border-left-width').slice(0,-2),10);u+=parseInt(v.getPropertyValue('border-top-width').slice(0,-2),10);s=s.offsetParent;}return new n(t,u);};r.prototype._absolutePositionFlyout=function(){'use strict';this.flyoutParent=this.flyout.parentNode;o('root').appendChild(this.flyout);var s=this._getElementPosition(this.flyout.parentNode),t=this._getElementPosition(this.flyoutAnchor),u=n.getDim(this.flyoutAnchor),v=t.y-s.y+u.y;this.flyout.style.position='absolute';this.flyout.style.top=v+'px';};r.prototype._position=function(){'use strict';var s=this.flyout;if(this.flyoutAnchor&&this.options.positionNub){var t=this._getElementPosition(this.flyoutAnchor),u=j.find(this.flyout,'*','nub'),v=n.getDim(u).x,w=n.getDim(this.flyoutAnchor).x,x=this._getElementPosition(s);new n(t.x-x.x+(w-v)/2,0).setPos(u);}this.refreshConstraints();};r.prototype._reposition=function(){'use strict';h(this._position.bind(this),0);};r.prototype._releaseConstraint=function(){'use strict';if(this.constraint){this.constraint.release();this.constraint=null;}};r.getInstance=function(s){'use strict';return r._instances[s];};r.clearAll=function(){'use strict';for(var s=0;s<r._instances.length;s++)r._instances[s].clear();};p(r,['open','close']);Object.assign(r,{_activePopover:null,_MARGIN:40,_instances:{}});f.exports=r;}),null);
__d('MJewel',['setTimeoutAcrossTransitions','CSS','DOM','MHistory','MJSEnvironment','MLogState','MTabbable','MViewport','Popover','Stratcom','$','eventsMixinDeprecated'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t=10;function u(v,w){'use strict';this._sigil=v;this.options=w||{};this._jewelNode=r(u.JEWEL_NAV_NODE_ID);this._softState=w.softState||'jewel='+u.nextID++;this._duringInit=false;this._createPopover();q.listen('m:history:change',null,function(event){if(event.getData().soft===this._softState){this._popover&&this._popover.open();}else this._popover&&this._popover.close();}.bind(this));}u.prototype.isInitialized=function(){'use strict';var v=this.options.contentsSigil||'contents';return !!j.scry(this._jewelNode,'*',v)[0];};u.prototype._getJewelElement=function(){'use strict';return j.find(this._jewelNode,'div',this._sigil);};u.prototype._getCountElement=function(){'use strict';return j.find(this._getJewelElement(),'span','count');};u.prototype._getContentsElement=function(){'use strict';var v=this.options.contentsSigil||'contents';return j.find(this._getJewelElement(),'*',v);};u.prototype._getFlyoutElement=function(){'use strict';return j.find(this._getJewelElement(),'*','flyout');};u.prototype.getCount=function(){'use strict';return this._count;};u.prototype.setDuringInit=function(v){'use strict';this._duringInit=v;};u.prototype._updateCountElement=function(){'use strict';var v=this._getJewelCount();j.setContent(this._getCountElement(),''+v);var w=this._getJewelElement(),x=this._count>0;i.conditionClass(w,'noCount',!x);i.conditionClass(w,'hasCount',x);};u.prototype.setCount=function(v){'use strict';if(v<0)return;this._count=v;this._updateCountElement();};u.prototype.setHeaderText=function(v,w){'use strict';if(!v||!w)return;var x=this._getFlyoutElement();if(!x)return;var y=j.scry(x,'*',v)[0];if(!y)return;var z=y.cloneNode(true);z.innerText=w;j.replace(y,z);};u.prototype.handleViewedContent=function(){'use strict';if(this.getCount()>0&&this.isInitialized()){this.setCount(0);this.invoke('cleared');}else this.invoke('jewel_click');};u.prototype.setMenuContent=function(v){'use strict';j.setContent(this._getFlyoutElement(),v);if(this.isOpen())this.handleViewedContent();};u.prototype.prependMenuContent=function(v){'use strict';j.prependContent(this._getContentsElement(),v);};u.prototype.removeMenuContent=function(v){'use strict';var w=document.getElementById(v);if(w)j.remove(w);};u.prototype.updateMenuColor=function(v,w,x){'use strict';x?h(this._updateMenuColor.bind(this,v,w),u.MARK_READ_DELAY):this._updateMenuColor(v,w);};u.prototype._updateMenuColor=function(v,w){'use strict';var x=document.getElementById(v);if(x){i.conditionClass(x,u.M_AREA_LIGHTBLUE,!w);i.conditionClass(x,u.M_AREA_WHITE,w);}};u.prototype._createPopover=function(){'use strict';var v=this._getJewelElement(),w=j.find(v,'div','flyout');this._popover=new p({button:j.find(v,'*','icon'),flyout:w,ensureVisible:false,heightConstraint:true,preventClose:true});this._onOpenListener=this._popover.listen('open',this._onOpen.bind(this));this._onCloseListener=this._popover.listen('close',this._onClose.bind(this));this._popoverClickListener=j.listen(w,'click',null,this._onPopoverClick.bind(this));if(l.IS_ANDROID&&l.GET_OS_VERSION>=4)this._scrollAreaNode=j.scry(w,'div','scroll-area')[0];};u.prototype.clear=function(){'use strict';this._onOpenListener&&this._onOpenListener.remove();this._onCloseListener&&this._onCloseListener.remove();this._popoverClickListener&&this._popoverClickListener.remove();this._popoverTouchStartListener&&this._popoverTouchStartListener.remove();this._touchMoveListener&&this._touchMoveListener.remove();this._touchStartListener&&this._touchStartListener.remove();this._popover&&this._popover.clear();};u.prototype._onPopoverClick=function(event){'use strict';m.updateLink(event,this.options.pos);this.options.clickCallback&&this.options.clickCallback(event);};u.prototype._onPopoverTouchStart=function(event){'use strict';event.kill();};u.prototype._getJewelCount=function(){'use strict';if(this._count>0){return this._count;}else return this._unreadCount;};u.prototype._onOpen=function(){'use strict';if(this._scrollAreaNode){o.scrollToHeader();var v=document.documentElement;i.conditionClass(v,'hide-scroll',true);this._scrollAreaNode.style.maxHeight=v.offsetHeight-200+'px';}var w=this._getJewelCount();k.pushSoftState(this._softState);this.handleViewedContent();q.invoke('m:jewel:flyout:open',null,{jewel:this._sigil});i.conditionClass(this._getJewelElement(),'popoverOpen',true);var x=j.find(this._getJewelElement(),'div','flyout');n.focusTabbable(x);};u.prototype._onClose=function(){'use strict';if(this._scrollAreaNode){this._scrollAreaNode.style.minHeight='';i.conditionClass(document.documentElement,'hide-scroll',false);}q.invoke('m:jewel:flyout:close',null,{jewel:this._sigil});i.conditionClass(this._getJewelElement(),'popoverOpen',false);k.popSoftState(this._softState);};u.prototype.isOpen=function(){'use strict';return this._popover&&this._popover.isOpen();};u.prototype.openPopover=function(){'use strict';this._popover&&!this._popover.isOpen()&&this._popover.open();};u.prototype.reregisterListeners=function(){'use strict';var v=this.isOpen();this.clear();this._createPopover();if(v)this._popover.open();};s(u,['cleared','jewel_click']);Object.assign(u,{M_AREA_WHITE:'acw',M_AREA_LIGHTBLUE:'aclb',MARK_READ_DELAY:3000,JEWEL_NAV_NODE_ID:'mJewelNav',nextID:0});Object.assign(u.prototype,{_sigil:null,_currentJewel:null,_count:0,_popover:null});f.exports=u;}),null);
__d('MJewels',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={REQUESTS:'requests',MESSAGES:'messages',NOTIFICATIONS:'notifications',SEARCH:'search',MORE:'more',NEWS_FEED:'news-feed',BOOKMARKS:'bookmarks',VIDEOS:'videos'};}),null);
__d("XMessagesJewelContentController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/mobile\/messages\/jewel\/content\/",{spinner_id:{type:"String",required:true}});}),null);
__d("XNotificationJewelContentController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/mobile\/notifications\/jewel\/content\/",{spinner_id:{type:"String",required:true}});}),null);
__d("XPymkImpressionLoggingController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pymk\/log_impressions\/",{imp_ts:{type:"Int",required:true},query_id:{type:"Int"},candidate_id:{type:"Int",required:true},loc:{type:"String",required:true},ref:{type:"String"},action:{type:"Enum",defaultValue:"impression",enumType:1}});}),null);
__d('MJewelSet',['ChannelEventType','MLegacyDataStore','DOM','EventListener','HTML','MarauderLogger','MessagingEvent','MJewels','MDynaTemplate','MJewel','MLogState','MItemConstants','MMessagesThreadImageRenderer','Popover','MRequest','MViewport','Stratcom','MTouchChannelManager','MURI','XPymkImpressionLoggingController','XNotificationJewelContentController','XMessagesJewelContentController','BanzaiLogger','Banzai','fbt','isFacebookURI','throttle'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha){if(c.__markCompiled)c.__markCompiled();var ia={_viewerID:null,_requestsJewel:null,_messagesJewel:null,_notificationsJewel:null,_unseenNotificationIds:{},_jewelClickLogListener:null,_messengerCliff:false,_messengerCliffQELogged:false,_messengerCliffShouldLog:false,_messengerCliffCp:null,_messengerCliffData:null,_haveInitializedJewels:false,_pymkAndRequestImpressionLogged:false,MSG_ID_PREFIX:'msg_',OTHER_USER_FBID_PREFIX:'other_user_fbid_',THREAD_FBID_PREFIX:'thread_fbid_',NOTIF_ID_PREFIX:'notif_',JEWEL_NAV_NODE_ID:'mJewelNav',JEWEL_NAV_CACHE_KEY:'mJewelNavKey',JEWEL_MSG_LIST:'mJewelMsgThreadContents',_lazyLoadNotificationsReq:null,_lazyLoadMessagesReq:null,_hasCombinedTab:false,createJewels:function ja(ka){if(ka.showRequests){ia._requestsJewel=new q('requests',{pos:r.CLICK_POSITION_REQUESTS_FLYOUT,softState:o.REQUESTS},'friends_jewel_module');ia._requestsJewel.listen('cleared',ia._markRequestsRead);ia._requestsJewel.listen('jewel_click',ia._logRequestsJewelClick);}if(ka.hasCombinedTab)ia._hasCombinedTab=true;ia._messagesJewel=new q('messages',{contentsSigil:ia.JEWEL_MSG_LIST,pos:r.CLICK_POSITION_MESSAGES_FLYOUT,softState:o.MESSAGES},'messages_jewel_module');ia._messagesJewel.listen('cleared',ia._markMessagesRead);ia._notificationsJewel=new q('notifications',{pos:r.CLICK_POSITION_NOTIFICATIONS_FLYOUT,softState:o.NOTIFICATIONS},'notifications_jewel_module');ia._notificationsJewel.listen('cleared',ia._markNotificationsSeen);ia._jewelClickLogListener=ia._notificationsJewel.listen('jewel_click',ia._logNotificationJewelClick);x.listen('m:jewel:flyout:open',null,ia._onJewelOpen);},openMessageJewel:function ja(){ia._messagesJewel.openPopover();},setMessengerCliff:function ja(ka,la,ma){ia._messengerCliff=ka;ia._messengerCliffCp=ma;ia._messengerCliffData=la;},setMessengerCliffShouldLog:function ja(ka,la){ia._messengerCliffShouldLog=ka;ia._messengerCliffData=la;},markFriendRequestsSeen:function ja(event){if(ia._requestsJewel===null)return;ia._requestsJewel.setCount(0);},updateFriendRequests:function ja(event){if(ia._requestsJewel===null)return;if(ia._requestsJewel.isOpen())return;var ka=new v('/ajax/mobile/friends/jewel/requests_markup');ka.send();},onAfterUpdateFriendRequests:function ja(ka){if(ia._requestsJewel===null)return;ia._setJewelCount(ia._requestsJewel,ka,ia._markRequestsRead);u.getInstance('reqs_flyout').refreshConstraints();if(ia._requestsJewel.isOpen()){var la=ia._requestsJewel._getContentsElement();ia._logPymkAndRequestImpression(la);}},onCombinedTabAsyncLoad:function ja(){if(ia._notificationsJewel&&ia._notificationsJewel.isOpen()){var ka=ia._notificationsJewel._getContentsElement();ia._logPymkAndRequestImpression(ka);}},_logPymkAndRequestImpression:function ja(ka){if(ia._pymkAndRequestImpressionLogged)return;ia._pymkAndRequestImpressionLogged=true;var la=j.scry(ka,'div','undoable-action');for(var ma=0;ma<la.length;ma++){var na=la[ma].getAttribute('data-pymk-id');if(na){var oa=aa.getURIBuilder().setInt('candidate_id',na).setInt('imp_ts',Date.now()).setEnum('action','impression').setString('loc','mobile_jewel').getURI();new v(oa).setMethod('POST').send();}else{var pa=i.get(la[ma]).userid;m.log('request_seen','friend_request_waterfall',{request_id:pa,request_location:'requests_jewel'});}}},refreshNotificationsConstraints:function ja(){u.getInstance('notifications_flyout').refreshConstraints();},refreshNotificationsConstraintsOnImageLoad:function ja(){var ka=document.getElementById('notifications_flyout');if(!ka)return;ia.refreshNotificationsConstraints();var la=ha(ia.refreshNotificationsConstraints,500);j.scry(ka,'img','notif_thumb').forEach(function(ma){var na=k.listen(ma,'load',function(){na.remove();la();});});},refreshMessagesConstraints:function ja(){u.getInstance('messages_flyout').refreshConstraints();},updateNotification:function ja(event){var ka=event.getData();if(ka&&ka.data){if(ka.data.type==='friend_confirmed')return;if(!ia._notificationsJewel.isOpen()&&!ia._unseenNotificationIds[ka.data.alert_id])ia._notificationsJewel.setCount(ka.data.unread+ia._notificationsJewel.getCount());ia._notificationsJewel.removeMenuContent(ia._getNotifNodeID(ka.data.alert_id));ia._unseenNotificationIds[ka.data.alert_id]=true;if(ia._notificationsJewel.isOpen())ia._markNotificationsSeen();ia._loadNotificationJewelContent();}},updateUnseenNotificationIds:function ja(event){var ka=event.getData();if(!ka)return;var la=event.getType()=='notifications_read';if(ka.alert_ids){var ma=0;for(var na=0;na<ka.alert_ids.length;na++)if(ia._unseenNotificationIds[ka.alert_ids[na]]){delete ia._unseenNotificationIds[ka.alert_ids[na]];la&&ia._notificationsJewel.updateMenuColor(ia._getNotifNodeID(ka.alert_ids[na]),true,false);ma++;}var oa=ia._notificationsJewel.getCount();ia._notificationsJewel.setCount(oa-ma);}else{ia._notificationsJewel.setCount(0);if(la)for(var pa in ia._unseenNotificationIds)ia._notificationsJewel.updateMenuColor(ia._getNotifNodeID(pa),true,false);ia._unseenNotificationIds={};}},updateUnreadMessageCount:function ja(event){var ka=event.getData();if(!ka)return;if(ka.unseen!==null&&!ia._messagesJewel.isOpen())ia._messagesJewel.setCount(ka.unseen);if(ka.unread!==null){var la=null;if(ka.unread>0){la=fa._("Messages ({unread_message_count})",[fa.param('unread_message_count',ka.unread)]);}else la=fa._("Messages");ia._messagesJewel.setHeaderText('messages_jewel_header_text',la);}},updateMessage:function ja(event){var ka=event.getData();if(!ka)return;if(ka.parsedPayload){var la=ka.parsedPayload;if(la.getFolder()!=='inbox'||!ia._viewerIsAParticipant(ia._viewerID,la))return;if(ia._messagesJewel.isInitialized()){ia._messagesJewel.removeMenuContent(ia._getMessageNodeID(la.getOtherUserFBID(),la.getThreadFBID()));if(ia._messagesJewel.isOpen())ia._markMessagesRead();}ia._loadMessagesJewelContent();}else if(ka.mark_as_read){for(var ma=0;ma<ka.other_user_fbids.length;ma++){var na=ka.other_user_fbids[ma];if(ka.folder_info[na]!=='inbox')continue;ia._messagesJewel.updateMenuColor(ia._getMessageNodeID(na.toString(),null),ka.event=='read',false);}for(ma=0;ma<ka.thread_fbids.length;ma++){var oa=ka.thread_fbids[ma];if(ka.folder_info[oa]!=='inbox')continue;ia._messagesJewel.updateMenuColor(ia._getMessageNodeID(null,oa.toString()),ka.event=='read',false);}}else if(ka.event===n.READ&&ka.is_sync)ia._messagesJewel.updateMenuColor(ia._getMessageNodeID(ka.message.other_user_fbid,ka.message.thread_fbid),true,false);},_getMessageNodeID:function ja(ka,la){ka=ka?ka:'';la=la?la:'';return (ia.MSG_ID_PREFIX+ia.OTHER_USER_FBID_PREFIX+ka+ia.THREAD_FBID_PREFIX+la);},_getNotifNodeID:function ja(ka){return ia.NOTIF_ID_PREFIX+ka;},_markRequestsRead:function ja(){x.invoke('m_requests_jewel_mark_read');var ka=new v(new z('/a/jewel_requests_read.php').toString());ka.send();},_markMessagesRead:function ja(){var ka=new v(new z('/a/jewel_messages_read.php').toString());ka.send();},_markNotificationsSeen:function ja(){if(ia._jewelClickLogListener){ia._jewelClickLogListener.remove();ia._jewelClickLogListener=null;}if(ia._hasCombinedTab)ia._markRequestsRead();var ka=ia._unseenNotificationIds;ia._unseenNotificationIds={};var la=[];for(var ma in ka)la.push(ma);var na=new v(new z('/a/jewel_notifications_read.php').toString());na.addData({ids:la,count:la.length,seen:true});na.send();},_onJewelOpen:function ja(event){var ka=event.getData();if(ka&&ka.jewel)if(ka.jewel==='notifications'){ia._loadNotificationJewelContent();}else if(ka.jewel==='messages'){if(ia._messengerCliff||ia._messengerCliffShouldLog){if(!ia._messengerCliffQELogged){var la={signal:true},ma={name:ia._messengerCliffData};ea.post('qe_log_exposure',ma,la);ia._messengerCliffQELogged=true;}if(ia._messengerCliff)da.log('XFBConfirmationCliffLoggerConfig',{event:'messenger_seen',contactpoint:ia._messengerCliffCp});}ia._loadMessagesJewelContent();}},_loadNotificationJewelContent:function ja(){var ka=ia._notificationsJewel._getContentsElement(),la='notifications-flyout-loading';if(x.hasSigil(ka,la)){var ma=ba.getURIBuilder().setString('spinner_id',ka.getAttribute('id')).getURI();if(!ia._lazyLoadNotificationsReq){ia._lazyLoadNotificationsReq=new v(ma);ia._lazyLoadNotificationsReq.listen('finally',function(){ia._lazyLoadNotificationsReq=null;});ia._lazyLoadNotificationsReq.send();}}},_loadMessagesJewelContent:function ja(){var ka=ia._messagesJewel._getJewelElement(),la='messages-flyout-loading',ma=j.scry(ka,'*',la);if(ma.length>0){var na=ca.getURIBuilder().setString('spinner_id',ma[0].getAttribute('id')).getURI();if(!ia._lazyLoadMessagesReq){ia._lazyLoadMessagesReq=new v(na);ia._lazyLoadMessagesReq.listen('finally',function(){ia._lazyLoadMessagesReq=null;});ia._lazyLoadMessagesReq.send();}}},_logNotificationJewelClick:function ja(){if(ia._jewelClickLogListener){ia._jewelClickLogListener.remove();ia._jewelClickLogListener=null;}if(ia._hasCombinedTab){var ka=ia._notificationsJewel._getContentsElement();ia._logRequestsImpessions(ka);if(ia._notificationsJewel.isOpen())if(!x.hasSigil(ka,'notifications-flyout-loading'))ia._logPymkAndRequestImpression(ka);}new v('/a/jewel_notifications_log.php').addData({click_type:'jewel_click',count:ia._notificationsJewel.getCount()}).send();},_logRequestsJewelClick:function ja(){var ka=ia._requestsJewel._getContentsElement();ia._logRequestsImpessions(ka);if(ia._requestsJewel.isOpen())if(x.hasSigil(ka,'requests-flyout-loading')){new v('/ajax/mobile/friends/jewel/requests_markup').send();}else{var la=ia._requestsJewel._getContentsElement();ia._logPymkAndRequestImpression(la);}},_logRequestsImpessions:function ja(ka){if(!ka)return;var la=j.scry(ka,'div','attachment'),ma=[];for(var na=0;na<la.length;na++){var oa=la[na].getAttribute('id');if(oa&&oa.startsWith('m_jewel_req_'))ma=ma.concat(oa.replace('m_jewel_req_',''));}if(ma.length){var pa=new v('/friends/requests/log_impressions');pa.setMethod('POST');pa.addData({ids:ma.join(','),ref:'m_jewel'});pa.send();}},_viewerIsAParticipant:function ja(ka,la){if(!la.getParticipantIDs())return false;if(la.getParticipantIDs().indexOf(ka)>-1)return true;return la.getParticipantIDs().indexOf(ka.toString())>-1;},_initJewelCount:function ja(ka,la,ma){ka.setDuringInit(true);ka.reregisterListeners();ia._setJewelCount(ka,la,ma);ka.setDuringInit(false);},_setJewelCount:function ja(ka,la,ma){if(!ka.isOpen()){ka.setCount(la);}else if(la)ma();},_initJewelCounts:function ja(event){var ka=event.getData();ia.initJewels(null,null);if(ka.viewer_id)ia._viewerID=ka.viewer_id;if(ka.unread_notification_ids)ia._unseenNotificationIds=ka.unread_notification_ids||{};if(ka.request_count&&ia._requestsJewel)ia._initJewelCount(ia._requestsJewel,ka.request_count,ia._markRequestsRead);if(ka.message_count)ia._initJewelCount(ia._messagesJewel,ka.message_count,ia._markMessagesRead);if(ka.notification_count)ia._initJewelCount(ia._notificationsJewel,ka.notification_count,ia._markNotificationsSeen);},initJewels:function ja(ka,la){if(ia._haveInitializedJewels)return;ia._haveInitializedJewels=true;y.initialize();ia.createJewels(la||{});if(ia._requestsJewel){if(!ia._friendRequestAddListener)ia._friendRequestAddListener=x.listen('jewel_requests_add',null,ia.updateFriendRequests);if(!ia._friendRequestRemoveListener)ia._friendRequestRemoveListener=x.listen('jewel_requests_remove_old',null,ia.updateFriendRequests);if(!ia._friendAcceptedListener)ia._friendAcceptedListener=x.listen('jewel_friending_notifs',null,ia.updateFriendRequests);if(!ia._friendRequestSeenListener)ia._friendRequestSeenListener=x.listen('friend_requests_seen',null,ia.markFriendRequestsSeen);}if(!ia._notificationListener)ia._notificationListener=x.listen('m_notification',null,ia.updateNotification);if(!ia._notificationRefreshListener)ia._notificationRefreshListener=x.listen('m:jewel-set:notifications-jewel:refresh-flyout',null,ia.refreshNotificationsConstraints);if(!ia._messageListener)ia._messageListener=x.listen(h.MESSAGE,null,ia.updateMessage);if(!ia._messageCountListener)ia._messageCountListener=x.listen('inbox',null,ia.updateUnreadMessageCount);if(!ia._notifReadListener)ia._notifReadListener=x.listen('notifications_read',null,ia.updateUnseenNotificationIds);if(!ia._notifSeenListener)ia._notifSeenListener=x.listen('notifications_seen',null,ia.updateUnseenNotificationIds);if(!ia._friendRequestResponseListener)ia._friendRequestResponseListener=x.listen('m:requests:refresh',null,function(){var ma=ia._hasCombinedTab?'notifications_flyout':'reqs_flyout';u.getInstance(ma).refreshConstraints();});if(!ia._orientationChangeListener)ia._orientationChangeListener=x.listen('m:viewport:orientation-change',null,ia._onOrientationChange);},_onOrientationChange:function ja(){setTimeout(function(){var ka=u._activePopover;if(!ka)return;if(w.getHeight()+'px'!==ka.flyout.style.minHeight)ka.refreshConstraints();},800);}};(function(){x.listen('m:jewels:init-counts',null,ia._initJewelCounts);})();f.exports=ia;}),null);
__d('MJewelNotifications',['Bootloader','ChannelEventType','MRequest','MURI','Run','Stratcom','SubscriptionsHandler','isFacebookURI'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){'use strict';if(c.__markCompiled)c.__markCompiled();var p={overlayIcon:false};function q(r,s){this.$MJewelNotifications1=r;this.$MJewelNotifications2=[];this.$MJewelNotifications3=false;this.$MJewelNotifications4=false;this.$MJewelNotifications5=s||p;this.$MJewelNotifications6=new n();this.$MJewelNotifications6.addSubscriptions(l.onLeave(function(){this.$MJewelNotifications6.release();}.bind(this)),m.listen(i.NOTIFICATIONS_NEW,null,this.onNotificationReceive.bind(this)));}q.prototype.getNotifications=function(){return this.$MJewelNotifications2;};q.prototype.registerListeners=function(){this.$MJewelNotifications6.addSubscriptions(m.listen(i.NOTIFICATIONS_READ,null,this.onNotificationRead.bind(this)),m.listen('click','live-notifications',this.onNotificationClick.bind(this)),m.listen('m:jewel:flyout:open',null,this.onJewelOpen.bind(this)));};q.prototype.onJewelOpen=function(event){var r=event.getData(),s=r&&r.jewel&&r.jewel==='notifications';if(s&&this.$MJewelNotifications4)this.updateUI();};q.prototype.onNotificationClick=function(event){var r=event.getNode('live-notification');if(!r)return;var s=r.getAttribute('data-alertid');this.readNotification(s);this.updateUI();new j('/a/jewel_notifications_log.php').addData({click_type:'jewel_notif_click',id:s}).send();};q.prototype.onNotificationRead=function(event){var r=event.getData();if(r&&r.alert_ids){r.alert_ids.forEach(function(s){this.readNotification(s);}.bind(this));this.updateUI();}};q.prototype.readNotification=function(r){this.$MJewelNotifications2.forEach(function(s){if(s.alert_id==r){if(s.unread)this.$MJewelNotifications4=true;s.unread=false;}}.bind(this));};q.prototype.addNotification=function(r){this.$MJewelNotifications2=this.$MJewelNotifications2.filter(function(s){return s.alert_id!==r.alert_id;});r.timestamp=Date.now();this.$MJewelNotifications2.push(r);this.$MJewelNotifications4=true;};q.prototype.onNotificationReceive=function(event){var r=event.getData();if(r&&r.data){if(r.data.type==='friend_confirmed')return;if(!this.$MJewelNotifications3){this.$MJewelNotifications3=true;this.registerListeners();}this.addNotification(r.data);this.updateUI();}};q.prototype.updateUI=function(){if(!this.$MJewelNotifications3||!this.$MJewelNotifications4)return;h.loadModules(["React","ReactDOM","MJewelNotificationList.react","Popover"],function(r,s,t,u){if(!u.getInstance('notifications_flyout').isOpen())return;var v={notifications:this.$MJewelNotifications2,overlayIcon:this.$MJewelNotifications5.overlayIcon};s.render(r.createElement(t,v),this.$MJewelNotifications1);u.getInstance('notifications_flyout').refreshConstraints();this.$MJewelNotifications4=false;}.bind(this),'MJewelNotifications');};f.exports=q;}),null);
__d('MJewelThreads',['Bootloader','ChannelEventType','MessagingEvent','Stratcom'],(function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();function l(m){this.$MJewelThreads1=m;this.$MJewelThreads2=[];this.$MJewelThreads3=false;this.$MJewelThreads4=false;k.listen(i.MESSAGE,null,this.onMessageEvent.bind(this));}l.prototype.getThreads=function(){return this.$MJewelThreads2;};l.prototype.registerListeners=function(){k.listen('click','live-threads',this.onThreadClick.bind(this));k.listen('m:jewel:flyout:open',null,this.onJewelOpen.bind(this));};l.prototype.onJewelOpen=function(event){var m=event.getData(),n=m&&m.jewel&&m.jewel==='messages';if(n&&this.$MJewelThreads4)this.updateUI();};l.prototype.onThreadClick=function(event){var m=event.getNode('live-thread');if(!m)return;this.setThreadReadStatus(m.getAttribute('data-fbid'),m.getAttribute('data-canonical')==='true',true);this.updateUI();};l.prototype.onMessageEvent=function(event){var m=event.getData();if(m.parsedPayload){var n=m.parsedPayload;if(n.getFolder()!=='inbox')return;if(!this.$MJewelThreads3){this.$MJewelThreads3=true;this.registerListeners();}this.addThread(n);}else if(m.hasOwnProperty('mark_as_read')){m.other_user_fbids.forEach(function(q){this.setThreadReadStatus(q.toString(),true,m.mark_as_read);}.bind(this));m.thread_fbids.forEach(function(q){this.setThreadReadStatus(q.toString(),false,m.mark_as_read);}.bind(this));this.updateUI();}else if(m.event===j.READ&&m.is_sync){var o=!!m.message.other_user_fbid,p=o?m.message.other_user_fbid:m.message.thread_fbid;this.setThreadReadStatus(p,o,true);this.updateUI();}};l.prototype.addThread=function(m){this.$MJewelThreads2=this.$MJewelThreads2.filter(function(n){var o=n.isCanonicalThread()?n.getOtherUserFBID():n.getThreadFBID();return !this.isSameThread(o,m.isCanonicalThread(),m);}.bind(this));m.unread=m.isUnread();this.$MJewelThreads2.push(m);this.$MJewelThreads4=true;this.updateThreadImage(m);};l.prototype.updateThreadImage=function(m){h.loadModules(["MMessagesThreadMetadataCache","MShortProfiles"],function(n,o){if(m.hasThreadImage()){n.get(m.getThreadFBID(),function(q){m.image_src=q.image_src;this.updateUI();}.bind(this));}else{var p=m.isCanonicalThread()?m.getOtherUserFBID():m.getAuthorFBID();o.get(p,function(q){m.image_src=q.mThumbSrcSmall;this.updateUI();}.bind(this));}}.bind(this),'MJewelThreads');};l.prototype.setThreadReadStatus=function(m,n,o){this.$MJewelThreads2.forEach(function(p){if(this.isSameThread(m,n,p)){if(p.unread==o)this.$MJewelThreads4=true;p.unread=!o;}}.bind(this));};l.prototype.isSameThread=function(m,n,o){var p=n?o.getOtherUserFBID():o.getThreadFBID();return m==p;};l.prototype.updateUI=function(){if(!this.$MJewelThreads3||!this.$MJewelThreads4)return;h.loadModules(["React","ReactDOM","MJewelThreadList.react","Popover"],function(m,n,o,p){if(!p.getInstance('messages_flyout').isOpen())return;var q={threads:this.$MJewelThreads2};n.render(m.createElement(o,q),this.$MJewelThreads1);p.getInstance('messages_flyout').refreshConstraints();this.$MJewelThreads4=false;}.bind(this),'MJewelThreads');};f.exports=l;}),null);
__d('MSideNavMarauderLogger',['MLegacyDataStore','Stratcom','MarauderLogger','MTouchClick'],(function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l='';function m(event){j.toggleModule('sidebar_menu',true);}function n(event){j.toggleModule('sidebar_menu',false);}function o(event){var x=event.getNode('tag:a'),y=event.getNode('tag:div');j.log('open_application','sidebar_menu',{application_link_type:'local_module',display_name:y?y.innerText:'unknown',url:x&&x.href});j.setNavigationModule('sidebar_menu');}function p(){u('session_start');}function q(){u('cancel');}function r(x){var y=x.getData();if(y.node.rel<=0)return;var z=0,aa='',ba=h.get(y.node);if(ba){z=ba.bootstrap?1:0;aa=ba.type;}var ca=0,da=null;for(var ea=0;ea<y.results.length;ea++){var fa=y.results[ea];if(fa.rel>0){if(fa.rel==y.node.rel){da=ca;break;}ca++;}}u('click',{query:y.query,is_bootstrapped:z,display_position:da},aa,y.node.rel);}function s(x){var y=x.getData();u('click',{query:y.query,is_bootstrapped:y.node.bootstrap?1:0,display_position:y.position},y.node.type,y.node.id);}function t(x){if(l!==x)u('search_keystroke',{prev_query:l,new_query:x});l=x;}function u(x,y,z,aa){j.log(x,'search_typeahead',y,z,aa);}function v(x){return x.listen('change',t);}i.listen('m:side-area:show',null,m);i.listen('m:side-area:hide',null,n);i.listen('click','side-menu-item',o);var w=k.hasTouchEvents()?'touchend':'click';i.listen(w,'search-activator',p);i.listen(w,'graph-search-activator',p);i.listen('click','graph-search-entry-point',p);i.listen('m:search-overlay:cancel',null,q);i.listen('m:search-overlay:cancel-react',null,q);i.listen('m:search-typeahead:select',null,r);i.listen('m:search-typeahead:select-react',null,s);f.exports={setupTypeaheadListener:v};}),null);
__d('MNotificationClick',['CSS','MLegacyDataStore','Stratcom','MRequest'],(function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l='notification',m='list_',n='acw',o='aclb',p={},q=false;function r(){if(q)return;j.listen('click',l,s);j.listen('m:page:render:cache:complete',null,t);q=true;}function s(event){var w=event.getNode('touchable');if(!w)return;var x=i.get(w).notif_id;if(!x)return;new k('/a/jewel_notifications_log.php').addData({click_type:'notification_click',id:x}).send();u(event);}function t(w){if(w.getData().path.indexOf('notifications')>-1)for(var x in p)v(x);}function u(event){var w=event.getNode('marea');if(!w)return;var x=w.getAttribute('id');if(!x)return;v(x);var y=x.startsWith(m)?x.substring(m.length):m+x;v(y);p[x]=true;p[y]=true;}function v(w){var x=document.getElementById(w);if(x){h.addClass(x,n);h.removeClass(x,o);}}f.exports={init:r};}),null);
__d('MQuickPromotion',['DOM','Stratcom'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=false,k=function l(){if(j)return;j=true;var m='m-promo-close';function n(event){var o=event.getNode('m-promo');h.hide(o);}i.listen('click',m,n);};g.main=k;}),null);
__d('MPopover',['Popover','Stratcom','MRequest','MURI'],(function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(m){var n=new h(m),o=[n.listen('open',function(){i.invoke(':m:page-header-right:open');if(m.sessionTime){var p=new k('/a/friendlists/log/').setQueryData({subject_id:m.subjectID,ref_param:m.refParam,session_time:m.sessionTime});new j(p.toString()).send();}}),n.listen('close',function(){i.invoke(':m:page-header-right:close');}),i.listen('click','flyout',function(){n.close();}),i.listen('m:page:unload',null,function(){while(o.length)o.pop().remove();o=null;n=null;})];}g.main=l;}),null);
__d('MPopoverClose',['Popover'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=function j(){if(h._activePopover)h._activePopover.close();};g.main=i;}),null);