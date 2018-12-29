if (self.CavalryLogger) { CavalryLogger.start_js(["+rzq\/"]); }

__d("EmojiDispatcher",["ExplicitRegistrationDispatcher"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("ExplicitRegistrationDispatcher"))({strict:!1})}),null);
__d("EmojiActions",["EmojiDispatcher","keyMirror"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("keyMirror")({CHANGE_CURRENT_CATEGORY:null,CHANGE_EMOJI_COLOR:null,EMOJI_COLOR_READY:null,GET_EMOJI_COLOR:null,TRAY_DATA_READY:null,UPDATE_TRAY_DATA:null});var g={Types:a,loadedTrayData:function(){b("EmojiDispatcher").dispatch({type:g.Types.TRAY_DATA_READY})},updateTrayData:function(){b("EmojiDispatcher").dispatch({type:g.Types.UPDATE_TRAY_DATA})},changeEmojiColor:function(a){b("EmojiDispatcher").dispatch({type:g.Types.CHANGE_EMOJI_COLOR,color:a})},changeCurrentCategory:function(a){b("EmojiDispatcher").dispatch({type:g.Types.CHANGE_CURRENT_CATEGORY,currentCategory:a})},getEmojiColor:function(){b("EmojiDispatcher").dispatch({type:g.Types.GET_EMOJI_COLOR})},emojiColorReady:function(a){b("EmojiDispatcher").dispatch({type:g.Types.EMOJI_COLOR_READY,color:a})}};e.exports=g}),null);
__d("ChatEmojiPickerButton.react",["cx","fbt","Image.react","ImmutableObject","Keys","MessengerHotLikePreviewEvents","MessengerHotLikeUtils","React","MercuryMessageObject","MercuryTriodeSourceUtil","StickerConstants","clearTimeout","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("MercuryMessageObject").get();c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").PureComponent);i=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.$1=null,this.$2=null,this.$3=null,this.$6=function(a){a.stopPropagation(),this.props.onClick(this.props.emojiData.emojiCodes,this.refs.div)}.bind(this),this.$7=function(a){a.keyCode===b("Keys").RETURN&&(a.preventDefault(),this.props.onClick(this.props.emojiData.emojiCodes,this.refs.div))}.bind(this),this.$8=function(a){a.preventDefault();a.stopPropagation();if(a.button!==0)return;!this.props.enableHotEmoji?this.$1=setTimeout(this.$10,1e3):(this.$1=setTimeout(function(){this.$3=Date.now(),this.$11(),this.$12()}.bind(this),500),this.props.onMouseDown&&this.props.onMouseDown())}.bind(this),this.$9=function(a){a.stopPropagation();b("clearTimeout")(this.$1);if(this.props.enableHotEmoji){if(!(this.props.threadID&&this.$3))return;this.$3=0;this.$14();this.$15()}}.bind(this),this.$10=function(){this.props.onLongPress(this.props.emojiData.emojiCodes,this.refs.div)}.bind(this),this.$16=function(){if(!this.props.threadID)return;b("MessengerHotLikePreviewEvents").emit(b("MessengerHotLikePreviewEvents").POP,this.props.threadID)}.bind(this),this.$4=function(){this.$3&&(this.$3=0,this.$14(),this.$16())}.bind(this),c}a.prototype.componentWillUnmount=function(){this.$4(),b("clearTimeout")(this.$1),b("clearTimeout")(this.$2)};a.prototype.render=function(){return b("React").createElement("div",{"aria-label":this.$5(),onClick:this.$6,onKeyDown:this.$7,onMouseDown:this.$8,onMouseLeave:this.$4,onMouseUp:this.$9,ref:"div",role:"button",tabIndex:"0"},b("React").createElement(b("Image.react"),{className:"_1lih _1ift _1ifu",style:{margin:0},src:this.props.emojiData.uri}))};a.prototype.$5=function(){return h._("Pick emoji {emoji choice}",[h._param("emoji choice",String.fromCodePoint.apply(String,this.props.emojiData.emojiCodes))])};a.prototype.$11=function(){this.$10();if(!this.props.threadID)return;var a=this.$13();b("MessengerHotLikePreviewEvents").emit(b("MessengerHotLikePreviewEvents").START,a,this.props.threadID,this.props.emojiData.emojiCodes)};a.prototype.$15=function(){if(!this.props.threadID)return;b("MessengerHotLikePreviewEvents").emit(b("MessengerHotLikePreviewEvents").STOP_EMOJI,this.props.threadID,!0)};a.prototype.$12=function(){this.$14(),this.$2=b("setTimeoutAcrossTransitions")(this.$16,b("MessengerHotLikeUtils").SizeTimes.large)};a.prototype.$14=function(){b("clearTimeout")(this.$2)};a.prototype.$13=function(){__p&&__p();var a=this.props.threadID;if(!a)return null;a=j.constructStickerMessageObject(b("StickerConstants").HOT_LIKE_SMALL_STICKER_ID,b("MercuryTriodeSourceUtil").getMercuryTriodeSource(),a);j.normalizeNewMessage(a);a.is_like_preview=!0;a.like_preview_since=this.$3;a.customLike=this.props.emojiData;a.body="";return new(b("ImmutableObject"))(a)};a.propTypes={emojiData:c.object.isRequired,enableHotEmoji:c.bool,onClick:c.func.isRequired,onLongPress:c.func.isRequired,threadID:c.string};e.exports=a}),null);
__d("ChatEmojiPicker.react",["cx","Bootloader","ChatEmojiPickerButton.react","ChatEmojiSkinToneSelector.react","EmojiActions","EmojiFormat.bs","EmojiLikeConstants","Grid.react","MessengerEmojiTransitionMapping.bs","MessengerHotLikePreviewEvents","MessengerSupportedEmojiUtils","React","SkinToneEmoji.bs","SubscriptionsHandler","gkx","joinClasses","performanceAbsoluteNow"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("Grid.react").GridItem;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").PureComponent);h=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$1=!1,this.$2=null,this.state={clickedEmoji:null,selectedEmoji:[],toneSelectorShown:!1,toneSelectorContext:null},this.scrollToTop=function(a){if(this.refs.scrollable)if(this.refs.scrollable.scrollTo)try{this.refs.scrollable.scrollTo({top:0,behavior:a?"smooth":void 0})}catch(a){this.refs.scrollable.scrollTo(0,0)}else this.refs.scrollable.scrollTop=0}.bind(this),this.$8=function(a){if(this.props.shouldSaveEmojiColorChoice){var c=b("SkinToneEmoji.bs").getTone(a);b("EmojiActions").changeEmojiColor(c)}this.$9();this.props.onSelect&&this.props.onSelect(a)}.bind(this),this.$4=function(a,c){this.props.shouldSaveEmojiColorChoice&&this.props.useSkinToneSelector&&b("SkinToneEmoji.bs").hasVariations(a)?(this.$10(a,c),this.$1=!1):this.$1?this.$1=!1:this.$8(a)}.bind(this),this.$5=function(a,c){this.props.useSkinToneSelector&&b("SkinToneEmoji.bs").hasVariations(a)?this.$10(a,c):this.setState({clickedEmoji:a}),this.$1=!0}.bind(this),this.$7=function(){this.$1||this.$3()}.bind(this),this.$6=function(){this.$3();var a=this.refs.scrollable;typeof this.props.onScroll==="function"&&a&&(a.scrollTop+a.clientHeight+100>=a.scrollHeight-20&&(this.props.onScroll&&this.props.onScroll()))}.bind(this),c}a.prototype.componentDidMount=function(){this.$2=new(b("SubscriptionsHandler"))(),this.$2.addSubscriptions(b("MessengerHotLikePreviewEvents").addListener(b("MessengerHotLikePreviewEvents").START,function(a,c,d){d&&this.props.useSkinToneSelector&&!b("SkinToneEmoji.bs").hasVariations(d)&&this.state.toneSelectorShown&&this.$3()}.bind(this)),b("MessengerHotLikePreviewEvents").addListener(b("MessengerHotLikePreviewEvents").FINISH_EMOJI_ANIMATION,function(a,c,d){a===this.props.threadID&&(d&&this.state.clickedEmoji&&this.props.sendCustomEmoji&&(this.props.sendCustomEmoji({emoji:b("EmojiFormat.bs").codeArrayToUnicode(this.state.clickedEmoji)},d,b("EmojiLikeConstants").source.PICKER),this.setState({clickedEmoji:null})))}.bind(this)))};a.prototype.componentWillUnmount=function(){this.$2&&this.$2.release()};a.prototype.render=function(){__p&&__p();var a=!b("gkx")("705411")||this.props.useMessengerSupportedEmoji,c=this.props.emojiChoices.map(function(c){var d=String.fromCodePoint.apply(String,c),e=this.props.enableHotEmoji||!b("SkinToneEmoji.bs").hasVariations(c),f=c;if(a&&!b("MessengerSupportedEmojiUtils").isMessengerSupportedEmojiKey(b("EmojiFormat.bs").codeArrayToCodeString(f)))return null;b("MessengerEmojiTransitionMapping.bs").hasGender(f)&&(f=b("MessengerEmojiTransitionMapping.bs").makeFemale(f));if(b("MessengerEmojiTransitionMapping.bs").isBlacklisted(f))return null;var g=b("MessengerSupportedEmojiUtils").getUrl(b("EmojiFormat.bs").codeArrayToCodeString(f),this.props.emojiSize?this.props.emojiSize:b("EmojiLikeConstants").size.SMALL);return g?b("React").createElement(i,{key:c.join("_"),className:"_3-sy _3dyd"+(d===this.props.currentEmoji?" _4w0j":"")},b("React").createElement("div",{className:(d===this.props.currentEmoji?"_4rlt":"")+" _4rlu"},b("React").createElement(b("ChatEmojiPickerButton.react"),{emojiData:{emojiCodes:f,uri:g},enableHotEmoji:e,onClick:this.$4,onLongPress:this.$5,threadID:this.props.threadID}))):null}.bind(this)).filter(function(a){return!!a});return b("React").createElement("div",{className:b("joinClasses")(this.props.className,"_6f3k"),onScroll:this.$6,ref:"scrollable"},b("React").createElement(b("Grid.react"),{cols:this.props.columns,alignh:this.props.alignh,className:"_3-s_ _3ecb"},c),this.props.useSkinToneSelector?b("React").createElement(b("ChatEmojiSkinToneSelector.react"),{context:this.state.toneSelectorContext,emojiCodes:this.state.selectedEmoji,onBlur:this.$7,onSelect:this.$8,sendCustomEmoji:this.props.sendCustomEmoji,shouldSaveEmojiColorChoice:this.props.shouldSaveEmojiColorChoice,shown:this.state.toneSelectorShown,threadID:this.props.threadID}):null)};a.prototype.$9=function(){var a=b("performanceAbsoluteNow")();b("Bootloader").loadModules(["QuickPerformanceLogger","MessengerWebQuickLogModule"],function(b,c){b.markerPoint(c.COMPOSER_INTERACTION,"select_emoji","",0,a),b.markerEnd(c.COMPOSER_INTERACTION,"SUCCESS",0,a)},"ChatEmojiPicker.react")};a.prototype.$10=function(a,b){this.setState({toneSelectorShown:!0,selectedEmoji:a,toneSelectorContext:b})};a.prototype.$3=function(){this.setState({toneSelectorShown:!1})};a.propTypes={className:c.string,columns:c.number,currentEmoji:c.string,emojiChoices:c.arrayOf(c.arrayOf(c.number)).isRequired,enableHotEmoji:c.bool,onSelect:c.func,sendCustomEmoji:c.func,shouldSaveEmojiColorChoice:c.bool,threadID:c.string,useSkinToneSelector:c.bool,useMessengerSupportedEmoji:c.bool};a.defaultProps={columns:7,useSkinToneSelector:!1};e.exports=a}),null);
__d("ChatEmojiSkinToneFlyout.react",["cx","fbt","ChatEmojiPicker.react","MessengerEmojiConfig","React","SkinToneEmoji.bs"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;i=babelHelpers.inherits(a,b("React").PureComponent);i&&i.prototype;a.prototype.render=function(){var a=[];if(this.props.emojiCodes.length>0){var c=b("SkinToneEmoji.bs").removeTone(this.props.emojiCodes);a=b("MessengerEmojiConfig").emoji_colors.map(function(a){return b("SkinToneEmoji.bs").applyTone(c,a)})}var d=null;this.props.shouldSaveEmojiColorChoice&&(d=b("React").createElement("div",{className:"_4gww"},h._("Pick one. You can change it anytime in Settings.")));return b("React").createElement("div",null,d,b("React").createElement(b("ChatEmojiPicker.react"),{className:this.props.className,columns:6,emojiChoices:a,enableHotEmoji:!0,onSelect:this.props.onSelect,sendCustomEmoji:this.props.sendCustomEmoji,threadID:this.props.threadID}))};function a(){i.apply(this,arguments)}a.propTypes={className:c.string,emojiCodes:c.arrayOf(c.number).isRequired,onSelect:c.func.isRequired,sendCustomEmoji:c.func,shouldSaveEmojiColorChoice:c.bool,threadID:c.string};e.exports=a}),null);
__d("ChatEmojiSkinToneSelector.react",["cx","fbt","ChatEmojiSkinToneFlyout.react","ContextualLayerAutoFlip","React","XUIContextualDialog.react","emptyFunction"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;var j=276;i=babelHelpers.inherits(a,b("React").PureComponent);i&&i.prototype;a.prototype.render=function(){return b("React").createElement(b("XUIContextualDialog.react"),{behaviors:{ContextualLayerAutoFlip:b("ContextualLayerAutoFlip")},context:this.props.context,contextRef:b("emptyFunction"),label:h._("Skintone Selector"),onBlur:this.props.onBlur,onToggle:this.$1,shown:this.props.shown,width:j},b("React").createElement(b("ChatEmojiSkinToneFlyout.react"),{className:"_2ejf",emojiCodes:this.props.emojiCodes,onSelect:this.props.onSelect,sendCustomEmoji:this.props.sendCustomEmoji,shouldSaveEmojiColorChoice:this.props.shouldSaveEmojiColorChoice,threadID:this.props.threadID}))};function a(){i.apply(this,arguments)}a.propTypes={context:c.instanceOf(HTMLElement),emojiCodes:c.arrayOf(c.number).isRequired,onBlur:c.func.isRequired,onSelect:c.func.isRequired,sendCustomEmoji:c.func,shouldSaveEmojiColorChoice:c.bool,shown:c.bool,threadID:c.string};e.exports=a}),null);
__d("MessengerThreadThemesWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLQueryBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"1938553679488985"};c.getQueryID=function(){"use strict";return"496396380778038"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("CustomizeThreadThemeUtil",["ChatConfig","CurrentUser","MessengerThreadThemesWebGraphQLQuery","WebGraphQL","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){__p&&__p();var c=b("CurrentUser").isWorkUser()?"WORKPLACE_VERSION0":b("ChatConfig").getBool("chat_tab_has_gradients")?"M4_VERSION0":"LEGACY";b("promiseDone")(b("WebGraphQL").exec(new(b("MessengerThreadThemesWebGraphQLQuery"))({version:c})),function(b){__p&&__p();if(b&&b.messenger_thread_themes&&Array.isArray(b.messenger_thread_themes)){var c=[];b.messenger_thread_themes.forEach(function(a){if(!a.id)return;if(!a.fallback_color)return;if(!a.accessibility_label)return;a={id:a.id,fallback_color:a.fallback_color,accessibility_label:a.accessibility_label,gradient_colors:a.gradient_colors};c.push(a)});a(c)}})}e.exports={fetchThemes:a}}),null);
__d("MessengerTabIndices",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({NEW_MESSAGE_TOKENIZER:9998,GROUP_NAME_INPUT:9999,COMPOSER_INPUT:1e4});e.exports=a}),null);
__d("MessengerComposeViewHeader.react",["cx","fbt","ImmutableObject","MessengerButtonReact.bs","MessengerGraphQLTokenizer.react","MessengerTabIndices","React","clearImmediate","gkx","immutable","joinClasses","setImmediate"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("MessengerButtonReact.bs").jsComponent;c=b("React").PropTypes;var k=320;d=babelHelpers.inherits(a,b("React").PureComponent);i=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={tokenizerContext:null,excludeGroups:!1,excludePages:!1,forGroup:!1},this.$1=null,this.$2=function(){this.$1=b("setImmediate")(function(){this.refs.tokenizer&&this.refs.tokenizer.focusInput()}.bind(this))}.bind(this),c}a.prototype.componentDidMount=function(){this.$2(),this.setState({tokenizerContext:this.refs.tokenizerContext})};a.prototype.componentDidUpdate=function(a){this.props.recipients!==a.recipients&&this.props.onResize()};a.prototype.UNSAFE_componentWillReceiveProps=function(a){a.recipients!==this.props.recipients&&(a.recipients.size===0?this.setState({excludeGroups:!1,excludePages:!1,forGroup:!1}):a.isWorkUser?this.setState({excludeGroups:!0,excludePages:!1,forGroup:!0}):this.setState({excludeGroups:!0,excludePages:!0,forGroup:!0}))};a.prototype.componentWillUnmount=function(){this.$1&&b("clearImmediate")(this.$1)};a.prototype.render=function(){var a={enableMessageSearch:!1,hasHoverState:!0,originalEntryIDs:b("immutable").Set(),scrollableViewClassName:"_2y8_",shouldQueryInternalBot:!0,shouldQueryVCEndpoint:!1,width:k};return b("React").createElement("div",{className:b("joinClasses")("_2y8y"+(b("gkx")("686397")?" _6zw0":"")+" _5l-3",this.props.className),onClick:this.$2,role:"presentation"},b("React").createElement("div",{className:"_2y8z",ref:b("gkx")("678607")?"tokenizerContext":""},h._("To:")),b("React").createElement("div",{className:"_66s6"},b("React").createElement(b("MessengerGraphQLTokenizer.react"),babelHelpers["extends"]({autoFocus:!0,className:"_2y8-",context:this.state.tokenizerContext,entries:this.props.recipients,excludeGroups:this.state.excludeGroups,excludePages:this.state.excludePages,forGroup:this.state.forGroup,forceHideClearButton:this.props.forceHideClearButton,onAddEntryAttempt:this.props.onAddRecipient,onClear:this.props.onClear,onRemoveEntryAttempt:this.props.onRemoveRecipient,placeholder:h._("Type the name of a person or group"),ref:"tokenizer",tabIndex:b("MessengerTabIndices").NEW_MESSAGE_TOKENIZER,useLayer:!0,viewer:this.props.viewer},a)),b("gkx")("678607")?null:b("React").createElement("div",{ref:"tokenizerContext"})),this.$3())};a.prototype.$3=function(){return this.props.shouldShowCreateGroupButton?b("React").createElement(j,{className:"_6wh5",label:h._("Create New Chat"),onClick:this.props.onCreateGroupButtonClicked,role:"button",tabIndex:0,type:"primary"}):null};a.propTypes={forceHideClearButton:c.bool.isRequired,onAddRecipient:c.func.isRequired,onClear:c.func,onRemoveRecipient:c.func.isRequired,onResize:c.func.isRequired,recipients:c.instanceOf(b("immutable").List).isRequired,thread:c.instanceOf(b("ImmutableObject")),viewer:c.string.isRequired,isWorkUser:c.bool.isRequired,shouldShowCreateGroupButton:c.bool,onCreateGroupButtonClicked:c.func};a.defaultProps={shouldShowCreateGroupButton:!1,isWorkUser:!1};e.exports=a}),null);
__d("AARRGGBBColor.bs",[],(function(a,b,c,d,e,f){"use strict";function a(a){return"#"+a.slice(2,8)}f.toHex=a}),null);
__d("PagesManagerDispatcher",["ReactDispatcher_DEPRECATED"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("ReactDispatcher_DEPRECATED"))()}),null);
__d("PhotoUtils",["Event","URI"],(function(a,b,c,d,e,f){__p&&__p();var g={getImagesFromData:function(a){var b=[];for(var c in a)c.indexOf("image")===0&&b.push(a[c]);return b},getFBIDFromData:function(a){return a&&a.id},getOriginalImageFromData:function(a){return a.original||a.download_image},getDownloadURLFromData:function(a){a=this.getOriginalImageFromData(a);if(!a)return null;a=new(b("URI"))(a.uri);a.addQueryData({dl:1});return a},getPermalinkFromData:function(a){return a.permalink},canViewerMakeCoverPhoto:function(a){return!!a.can_viewer_make_cover_photo},getCoverPhotoURLFromData:function(a){return new(b("URI"))("/profile.php").addQueryData({preview_cover:g.getFBIDFromData(a)})},preload:function(a,c,d){var e=a.getDimensions();for(var f=0;f<c.length;++f){var g=e.getBestFitImageFromPhoto(c[f],e.getMaxStageDimensions()),h=new Image();d&&b("Event").listen(h,"load",d.bind(null,c[f]));a.getLogger().log(g.uri);h.src=g.uri}}};e.exports=g}),null);
__d("SpotlightViewer",["cx","React","Spotlight.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";if(!this.props.open)return null;var a="_n3";this.props.className&&(a+=" "+this.props.className);return b("React").createElement(b("Spotlight.react"),{onBeforeHide:this.props.onBeforeHide,onHide:this.props.onHide,rootClassName:this.props.rootClassName,shown:this.props.open,key:"photoLayer"},b("React").createElement("div",{className:a,onClick:this.props.onClick,role:"presentation"},this.props.children))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("SpotlightViewerImage",["cx","Image.react","React","XUISpinner.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(a){"use strict";h.constructor.call(this,a),this.$3=function(){this.setState({loading:!1})}.bind(this),this.state={loading:!0}}a.prototype.UNSAFE_componentWillReceiveProps=function(a){"use strict";a.src!==this.props.src&&this.setState({loading:!0})};a.prototype.render=function(){"use strict";return b("React").createElement("div",{className:"_4-od"},this.$1(),this.$2())};a.prototype.$1=function(){"use strict";return!this.state.loading?null:b("React").createElement(b("XUISpinner.react"),{className:"_enh",size:"large"})};a.prototype.$2=function(){"use strict";return b("React").createElement("div",{className:this.state.loading?"_eni":""},b("React").createElement(b("Image.react"),{onLoad:this.$3,src:this.props.src,style:{width:this.props.dimensions.x||"",height:this.props.dimensions.y||""}}))};e.exports=a}),null);
__d("SpotlightViewport",["csx","cx","Locale","Parent","React","ReactDOM","Vector","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"SpotlightViewport",propTypes:{stageDimensions:a.object.isRequired,useWidth:a.bool},PAGE_TO_PREV_PERCENTAGE:.2,sections:{NONE:null,FORWARD:1,BACKWARD:2},timer:null,getInitialState:function(){return{currentActiveSection:this.sections.NONE,active:!0}},componentDidMount:function(){this._onMouseEnter()},componentWillUnmount:function(){this.props.fadeInNOut&&clearTimeout(this.timer)},_onMouseMove:function(a){var c=b("ReactDOM").findDOMNode(this);a=b("Vector").getEventPosition(a.nativeEvent);var d=b("Vector").getElementPosition(c);c=this.props.useWidth?this.props.stageDimensions.x:b("Vector").getElementDimensions(c).x;this.props.fadeInNOut&&(this._isMouseOverActionBars(a)?clearTimeout(this.timer):this._onMouseEnter());a=a.x-d.x;d=a/c;b("Locale").isRTL()?a=d>1-this.PAGE_TO_PREV_PERCENTAGE:a=d<this.PAGE_TO_PREV_PERCENTAGE;a?this.setState({currentActiveSection:this.sections.BACKWARD}):this.setState({currentActiveSection:this.sections.FORWARD})},_onClick:function(a){var c=this.state.currentActiveSection==this.sections.FORWARD,d=a.target;b("Parent").bySelector(d,"._51an")||this.props.onClick&&this.props.onClick(c,a)},_isMouseOverActionBars:function(a){return a.y<70||a.y>this.props.stageDimensions.y-70},_onMouseEnter:function(){this.setState({active:!0}),this.props.fadeInNOut&&(clearTimeout(this.timer),this.timer=setTimeout(this._onMouseLeave,1e3))},_onMouseLeave:function(){this.setState({active:!1})},makeActive:function(){this._onMouseEnter()},render:function(){var a="_4-of"+(!this.state.active&&!this.props.active?" _50-l":"")+(this.state.currentActiveSection===this.sections.BACKWARD?" _516a":"")+(this.state.currentActiveSection===this.sections.FORWARD?" _516b":"")+(this.props.showLoadingIndicator?" _51jp":"");this.props.className&&(a=b("joinClasses")(a,this.props.className));var c={};this.props.stageDimensions&&(c={height:this.props.stageDimensions.y},this.props.useWidth&&(c.width=this.props.stageDimensions.x));return b("React").createElement("div",{className:a,onClick:this._onClick,onMouseEnter:this._onMouseEnter,onMouseLeave:this._onMouseLeave,onMouseMove:this._onMouseMove,role:"presentation",style:c},this.props.children,b("React").createElement("div",{className:"_4-og"},b("React").createElement("span",{className:"_4-oh"}),this.props.media,b("React").createElement("div",{className:"_4-oi"})))}});e.exports=c}),null);
__d("MessagingThreadCustomizationSource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADMIN_MSG_CHANGE_LINK:"admin_msg",THREAD_INLINE:"thread_inline",JOURNEY_PROMPT:"journey_prompt",JOURNEY_PROMPT_WRITE_IN:"journey_prompt_write_in",PROMO_LINK:"promo_link",SETTINGS:"thread_settings",USER_INFO_ACTION_SHEET:"user_info_action_sheet",ROOM_CREATION:"room_creation",DELETE_ALL_SETTING:"delete_all_setting",RELATIONSHIP_STATUS_UPDATE:"relationship_status_update",TESTBOT:"testbot",SET_FROM_MESSAGE:"set_from_message",GROUP_NULL_STATE:"group_null_state",TEST:"test"})}),null);