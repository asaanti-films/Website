if (self.CavalryLogger) { CavalryLogger.start_js(["ai9p9"]); }

__d("canUseReactEditor",["UserAgent"],(function(a,b,c,d,e,f){"use strict";d=typeof a.getSelection==="function";var g=d&&(b("UserAgent").isPlatform("iOS")||b("UserAgent").isPlatform("Linux")||b("UserAgent").isPlatform("Mac OS X")||b("UserAgent").isPlatform("Windows")||b("UserAgent").isPlatform("Chrome OS"))&&(b("UserAgent").isEngine("EdgeHTML >= 12")||b("UserAgent").isEngine("Gecko >= 16")||b("UserAgent").isEngine("Trident >= 5")||b("UserAgent").isEngine("WebKit >= 533.16")&&!b("UserAgent").isBrowser("Mobile Safari < 6"));function c(){return g}e.exports=c}),null);
__d("getVisibleValueForContentState",["DraftEntity","emptyFunction"],(function(a,b,c,d,e,f){__p&&__p();function a(a){__p&&__p();a=a.getBlockMap().map(function(a){var c=a.getText(),d="";a.findEntityRanges(b("emptyFunction").thatReturnsTrue,function(e,f){var g=a.getEntityAt(e);if(g===null)d+=c.slice(e,f);else{g=b("DraftEntity").get(g);g.getType()==="EMOTICON"?d+=g.getData().originalEmoticon:g.getType()==="EMOJI"?d+=g.getData().emoji.join(""):d+=c.slice(e,f)}});return d});return a.join("\n")}e.exports=a}),null);
__d("applyEmoticonToContentState",["EmoticonsList","applyEmoticonToContentBlock","getTextAfterNearestEntity"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new RegExp(b("EmoticonsList").regexp.source,"g");function a(a,c){__p&&__p();var d=c.getAnchorKey(),e=c.getAnchorOffset(),f=a.getBlockForKey(d),h=b("getTextAfterNearestEntity")(f,e),i,j;while(j!==null)j=g.exec(h),j!==null&&(i=j);if(!i)return a;var k=i[1];if(!k&&e!==h.length)return a;k=i[2];h=e-h.length;h=h+i.index+i[1].length;d=a.getBlockMap().set(d,b("applyEmoticonToContentBlock")(f,k,h,a));e-=k.length-1;return a.merge({blockMap:d,selectionBefore:c,selectionAfter:c.merge({anchorOffset:e,focusOffset:e})})}e.exports=a}),null);
__d("handleBeforeInputForEmoticon",["DraftModifier","EditorState","applyEmoticonToContentState"],(function(a,b,c,d,e,f){__p&&__p();var g=new RegExp(/[\s\'\".,!?]/);function a(a,c){var d=a.getSelection();if(!d.isCollapsed()||!c||!g.test(c))return a;var e=a.getCurrentContent();d=b("applyEmoticonToContentState")(e,d);if(d===e)return a;e=b("DraftModifier").insertText(d,d.getSelectionAfter(),c);return b("EditorState").push(a,e,"insert-characters")}e.exports=a}),null);
__d("handleSoftNewlineForEmoticon",["DraftModifier","EditorState","applyEmoticonToContentState"],(function(a,b,c,d,e,f){function a(a){var c=a.getCurrentContent(),d=a.getSelection(),e=b("applyEmoticonToContentState")(c,d);c=b("DraftModifier").splitBlock(e,c===e?d:e.getSelectionAfter());return b("EditorState").push(a,c,"split-block")}e.exports=a}),null);
__d("UFIMentionsInput.react",["cx","Arbiter","BanzaiScuba","Bootloader","CancelablePromise","ContentState","DOMVector","DraftModifier","EditorState","EmojiFormat.bs","FBLogger","Input","Keys","MentionBotCommandLoader","MentionsInput.react","Random","React","ReactDOM","SelectionState","SubscriptionsHandler","TextDelightSurface","UFI2Config","UFICommonInteractionEvents","UFICommonInteractionLogger","UFIUIEvents","URI","addEmojiInput","addEmojiToEditorState","addTextDelightInput","canUseReactEditor","clearImmediate","clickRefAction","containsNode","createEditorStateWithRanges","createMentionEntityForContentState","emptyFunction","getDelightRangesForContentState","getMentionsInputDecorator","getMentionsTextForContentState","getVisibleValueForContentState","gkx","handleBeforeInputForEmoticon","handleSoftNewlineForEmoticon","ifRequired","isSoftNewlineEvent","memoize","promiseDone","setImmediate"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("MentionBotCommandLoader").module,j=b("UFI2Config").composerInputSamplingRateDenominator;d=b("addTextDelightInput").addTextDelightInput;var k=b("ifRequired")("MentionBotTypeaheadPicker.react",function(a){return a}),l=null,m;d?m=b("addEmojiInput")(d(b("MentionsInput.react"),b("TextDelightSurface").COMMENT)):m=b("addEmojiInput")(b("MentionsInput.react"));var n=new(b("BanzaiScuba"))("ufi_tinder",null,{addBrowserFields:!0,addGeoFields:!0,addPredictedGeographyFields:!0,addMobileDeviceFields:!0,addUser:!0}),o=200,p="ufi_comment_composer",q="ufi_reply_composer",r=b("canUseReactEditor")();function s(a){a=a.map(function(a){return{kind:"file",type:a.type,getAsFile:b("emptyFunction").thatReturns(a)}});return{clipboardData:{items:a}}}function t(a){a===void 0&&(a={});return b("createEditorStateWithRanges")({text:a.text||"",ranges:a.ranges,decorator:b("getMentionsInputDecorator")(),addEntityToContentStateFn:w})}function u(a){var b=/^image\//;return a.filter(function(a){return b.test(a.type)})}var v=b("memoize")(function(){var a=j||100;return b("Random").coinflip(a)&&b("gkx")("678290")});f=babelHelpers.inherits(c,b("React").Component);h=f&&f.prototype;function c(a){__p&&__p();h.constructor.call(this,a);this.$4=null;this.$6=null;this.focus=function(){this.$9(function(){if(r)this.refs.mentionsInput.focus();else{var a=b("ReactDOM").findDOMNode(this.refs.textarea);a instanceof HTMLElement&&a.focus()}}.bind(this))}.bind(this);this.$7=function(){__p&&__p();if(this.props.monitorHeight){var a=b("setImmediate")(function(){var a=r?b("ReactDOM").findDOMNode(this.refs.mentionsInput):b("ReactDOM").findDOMNode(this.refs.textarea);if(a instanceof HTMLElement){var c=b("DOMVector").getElementDimensions(a).y;c!==this.$2&&(this.$2=c,b("Arbiter").inform(b("UFIUIEvents").InputHeightChanged,{node:a}))}}.bind(this));this.$1.addSubscriptions({remove:function(){b("clearImmediate")(a)}})}}.bind(this);this.$10=function(a){a.getCurrentContent().hasText()&&!l&&b("Bootloader").loadModules(["TextDelightInComposerMatcher"],function(a){l=a},"UFIMentionsInput.react");l&&(a=l.applyTextDelightEntity(a,this.state.editorState,this.props.replyCommentID||this.props.ftEntIdentifier,b("TextDelightSurface").COMMENT));if(this.props.onContentChange){var c=this.state.editorState.getCurrentContent(),d=a.getCurrentContent();c!==d&&this.props.onContentChange(b("getMentionsTextForContentState")(d))}this.setState({editorState:a},this.$7)}.bind(this);this.$13=function(a,c){if(b("isSoftNewlineEvent")(a)){this.setState({editorState:b("handleSoftNewlineForEmoticon")(c)});return!0}a.persist();this.setState(null,function(){this.submitComment(a,this.state)}.bind(this));return!0}.bind(this);this.$14=function(a,c){v()&&(this.$4!=null&&b("FBLogger")("ufi2").warn("Already tracking a composer input event."),this.$4=b("UFICommonInteractionLogger").startInteraction(b("UFICommonInteractionEvents").UFI_COMPOSER_KEYPRESS_LATENCY));a=b("handleBeforeInputForEmoticon")(c,a);if(a===c)return!1;else{this.setState({editorState:a});return!0}}.bind(this);this.$16=function(a,b){return this.$15(b)}.bind(this);this.$17=function(a){return this.$15(a)}.bind(this);this.$18=function(){this.state.typeaheadReporter&&this.state.typeaheadReporter.sessionEnd(),this.props.onBlur&&this.props.onBlur(),b("Arbiter").inform(b("UFIUIEvents").Blur,{ftEntIdentifier:this.props.ftEntIdentifier,instanceID:this.props.instanceID,hasEnteredText:this.hasEnteredText()})}.bind(this);this.$19=function(){__p&&__p();if(!this.state.bootloaded&&!this.$3){this.$3=!0;var a=b("Bootloader").loadModules(["TypeaheadMetricReporter","getMentionsSearchSource"],function(a,b){a=new a({event_name:"tinder_mentions"});a.sessionStart();b=b(this.props.datasource,a);b.bootstrap();this.setState({typeaheadReporter:a,bootloaded:!0,mentionsSource:b},function(){this.$3=!1}.bind(this))}.bind(this),"UFIMentionsInput.react");this.$1.addSubscriptions(a)}else this.state.typeaheadReporter&&this.state.typeaheadReporter.sessionStart();this.props.onFocus&&this.props.onFocus();b("Arbiter").inform(b("UFIUIEvents").Focus,{ftEntIdentifier:this.props.ftEntIdentifier,instanceID:this.props.instanceID})}.bind(this);this.$20=function(a,b){this.state.typeaheadReporter&&this.state.typeaheadReporter.reportResults(a.map(function(a){return a.getUniqueID()}))}.bind(this);this.$21=function(a,b,c){this.$11(a);if(this.state.typeaheadReporter){var d=this.state.typeaheadReporter,e=a.getUniqueID();a=a.getType();d.reportSelect(e,a,b,c.button>=0);this.props.updateMentionsData&&this.props.updateMentionsData(e,a);d&&(d.sessionEnd(),d.sessionStart())}}.bind(this);this.$22=function(a){if(a.which!==b("Keys").RETURN)return;if(b("isSoftNewlineEvent")(a)||!this.state.fallbackText.trim())return;a.preventDefault();var c={visibleValue:this.state.fallbackText,encodedValue:this.state.fallbackText};this.props.onEnterSubmit(c,a)&&this.setState({fallbackText:""})}.bind(this);this.$23=function(a){this.setState({fallbackText:a.target.value})}.bind(this);this.$24=function(a){this.props.onBlur&&this.props.onBlur()}.bind(this);this.$25=function(a){this.props.onFocus&&this.props.onFocus()}.bind(this);this.$26=function(a,b){var c=a.getAuxiliaryData().renderType,d=b.getAuxiliaryData().renderType;if(c===d)return a.getOrder()-b.getOrder();a=this.props.viewOptionsTypeObjectsOrder;return a.indexOf(c)-a.indexOf(d)}.bind(this);this.$27=function(){this.$9()}.bind(this);this.$32=function(a){a||this.setState({selectedBot:null})}.bind(this);this.$34=function(a){if(!r){this.setState(function(b){return{fallbackText:b.fallbackText+" "+a}});return}this.setState(function(b){return{editorState:this.$33(b.editorState,a)}}.bind(this));this.focus()}.bind(this);var c="";a=[];var d=[];this.props.initialData&&(c=this.props.initialData.value||"",a=this.props.initialData.mentions||[],d=this.props.initialData.delights||[],a=a.map(function(a){return babelHelpers["extends"]({},a,{entity:{uid:a.uid,weakreference:a.weakreference}})}));var e=t({ranges:a,text:c});e=b("EditorState").moveSelectionToEnd(e);c.length>0&&(l?e=l.addDelightsIntoEditorState(c,d,b("TextDelightSurface").COMMENT,e,this.props.replyCommentID||this.props.ftEntIdentifier):b("Bootloader").loadModules(["TextDelightInComposerMatcher"],function(a){l=a,l&&(e=l.addDelightsIntoEditorState(c,d,b("TextDelightSurface").COMMENT,e,this.props.replyCommentID||this.props.ftEntIdentifier)),this.state&&this.setState({editorState:e},this.$7)}.bind(this),"UFIMentionsInput.react"));this.state={bootloaded:!1,fullRender:!!(this.props.initialData&&this.props.initialData.value),typeaheadReporter:null,editorState:e,mentionsSource:null,fallbackText:c,selectedBot:null}}c.prototype.UNSAFE_componentWillMount=function(){__p&&__p();this.$1=new(b("SubscriptionsHandler"))(),this.$1.addSubscriptions(b("Arbiter").subscribe("Story/delete",function(a,b){a=b.split(":")[2];a===this.props.ftEntIdentifier&&this.$8()}.bind(this)),b("Arbiter").subscribe(b("UFIUIEvents").Comment,function(a,c){__p&&__p();a=c.ft_id;c=c.target;if(a!==this.props.ftEntIdentifier)return;if(b("containsNode")(b("ReactDOM").findDOMNode(this),c)){var d=b("setImmediate")(function(){this.$8()}.bind(this));this.$1.addSubscriptions({remove:function(){b("clearImmediate")(d)}})}}.bind(this)))};c.prototype.componentWillUnmount=function(){this.$1&&this.$1.release(),delete this.$1,this.$6&&this.$6.cancel()};c.prototype.hasEnteredText=function(){return!!this.state.editorState.getCurrentContent().getPlainText().trim()};c.prototype.getText=function(){var a=this.state.editorState.getCurrentContent();return b("getMentionsTextForContentState")(a)};c.prototype.insertMention=function(a){__p&&__p();this.$9(function(){__p&&__p();if(r){var c=this.state.editorState,d=c.getSelection(),e=c.getCurrentContent(),f=d.getStartKey(),g=d.getStartOffset();f=e.getBlockForKey(f);e=b("createMentionEntityForContentState")(e,a);var h=e.getLastCreatedEntityKey();if(f.getText().substr(g-1,1).trim().length>0){f=b("DraftModifier").replaceText(e,d," ");d=f.getSelectionAfter();g=b("DraftModifier").insertText(f,d,a.getTitle(),c.getCurrentInlineStyle(),h)}else g=b("DraftModifier").replaceText(e,d,a.getTitle(),c.getCurrentInlineStyle(),h);d=g.getSelectionAfter();g=b("DraftModifier").insertText(g,d," ");c=b("EditorState").push(c,g,"insert-fragment");c=b("EditorState").forceSelection(c,c.getSelection());this.$10(c);this.focus()}else{f=b("ReactDOM").findDOMNode(this.refs.textarea);f instanceof HTMLElement&&f.focus();this.state.fallbackText.length?this.setState({fallbackText:this.state.fallbackText+" "+a.title}):this.setState({fallbackText:a.title})}this.$11(a)}.bind(this))};c.prototype.insertEmoticon=function(a){__p&&__p();if(!r){this.setState({fallbackText:this.state.fallbackText+" "+a});return}var c=this.state.editorState,d=c.getCurrentContent(),e=c.getSelection(),f=d.getBlockForKey(e.getStartKey()).getText()[e.getStartOffset()-1];f&&f!==" "&&(a=" "+a);f=d.getBlockForKey(e.getEndKey()).getText()[e.getEndOffset()];f&&f!==" "&&(a+=" ");d=b("DraftModifier").replaceText(c.getCurrentContent(),c.getSelection(),a);c=b("EditorState").push(c,d,"insert-characters");c=b("EditorState").forceSelection(c,c.getSelection());this.setState({editorState:c})};c.prototype.insertEmoji=function(a){a=b("EmojiFormat.bs").codeArrayToUnicode(a);if(!r){this.setState({fallbackText:this.state.fallbackText+" "+a});return}b("addEmojiToEditorState")(a,this.state.editorState,this.$10)};c.prototype.replaceText=function(a,c){__p&&__p();if(!r){this.setState({fallbackText:a});return}a=c.sort(function(a,b){return b.startIndex-a.startIndex});c=this.state.editorState;var d=c.getCurrentContent();for(var a=a,e=Array.isArray(a),f=0,a=e?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=a.length)break;g=a[f++]}else{f=a.next();if(f.done)break;g=f.value}g=g;var h=b("SelectionState").createEmpty(d.getFirstBlock().getKey()).merge({anchorOffset:g.startIndex,focusOffset:g.startIndex+g.changeCount});d=b("DraftModifier").replaceText(d,h,g.changeValue);c=b("EditorState").push(c,d,g.changeValue.length>0?"insert-characters":"remove-range")}c=b("EditorState").moveFocusToEnd(c);this.setState({editorState:c})};c.prototype.$8=function(){this.state.typeaheadReporter&&this.state.typeaheadReporter.sessionEnd(),this.setState({editorState:b("EditorState").moveFocusToEnd(t())})};c.prototype.componentDidUpdate=function(a,c){a=this.$4;v()&&a!=null&&(b("UFICommonInteractionLogger").endInteractionAtEndOfFrame(a),this.$4=null);c.selectedBot===null&&this.state.selectedBot!==null&&this.$12()};c.prototype.$12=function(){!k&&!this.$5&&(this.$5=!0,this.$1.addSubscriptions(b("Bootloader").loadModules(["MentionBotTypeaheadPicker.react"],function(a){k=a,this.forceUpdate(),this.$5=!1}.bind(this),"UFIMentionsInput.react")))};c.prototype.submitComment=function(c,d){__p&&__p();d===void 0&&(d=this.state);var e=d.editorState.getCurrentContent(),f=b("getVisibleValueForContentState")(e),g=b("getMentionsTextForContentState")(e);e=b("getDelightRangesForContentState")(e,b("TextDelightSurface").COMMENT,this.props.replyCommentID||this.props.ftEntIdentifier);f={visibleValue:f,encodedValue:g,delightRanges:JSON.stringify(e)};g=b("Input").getValue(b("ReactDOM").findDOMNode(this.refs.proxyInput));if(g){e=new(b("URI"))(a.location.href);n.addNormal("path",e.getPath());n.addNormal("proxy_value",g.substr(0,o));n.post()}e=this.props.onEnterSubmit(f,c);if(e){g=b("EditorState").push(d.editorState,b("ContentState").createFromText(""),"remove-range");this.setState({editorState:g})}return e};c.prototype.$11=function(a){if(!i)return;this.$6&&this.$6.cancel();this.$6=new(b("CancelablePromise"))(i.fetchMentionBotCommands(a));b("promiseDone")(this.$6.getPromise(),function(a){a&&this.setState({selectedBot:a})}.bind(this))};c.prototype.$15=function(a){a=u(a);if(a.length){this.props.onPaste(s(a));return!0}return!1};c.prototype.$9=function(a){this.setState({fullRender:!0},a)};c.prototype.$28=function(){return b("React").createElement("div",{className:"_2xwx _289b"},b("React").createElement("textarea",{ref:"textarea",className:"UFIAddCommentInput _1os9 _2xww",name:"add_comment_text",placeholder:this.props.placeholder,spellCheck:!0,onKeyDown:this.$22,onChange:this.$23,onBlur:this.$24,onFocus:this.$25,value:this.state.fallbackText}))};c.prototype.$29=function(){if(!this.props.hideProxyInput){var a="_1osa mentionsHidden";return b("React").createElement("input",{className:a,name:"add_comment_text",ref:"proxyInput",onFocus:this.focus,tabIndex:"-1"})}return null};c.prototype.$30=function(){var a="UFIAddCommentInput _1osb _1osc _2xww";return b("React").createElement("div",{onClick:this.$27,className:"_2xwx",onFocus:this.$27,onMouseOver:this.$27,onSelect:b("emptyFunction"),onTouchStart:this.$27,role:"presentation"},this.$29(),b("React").createElement("div",{className:a},this.props.placeholder))};c.prototype.$31=function(a){b("clickRefAction")("ufi",a.target,null,"FORCE")};c.prototype.$33=function(a,c){var d=a.getCurrentContent(),e=a.getSelection(),f=d.getBlockForKey(e.getStartKey()).getText()[e.getStartOffset()-1];f&&f!==" "&&(c=" "+c);f=d.getBlockForKey(e.getEndKey()).getText()[e.getEndOffset()];f&&f!==" "&&(c+=" ");d=b("DraftModifier").replaceText(a.getCurrentContent(),a.getSelection(),c);a=b("EditorState").push(a,d,"insert-characters");return b("EditorState").forceSelection(a,a.getSelection())};c.prototype.$35=function(){return this.state.selectedBot&&k?b("React").createElement(k,{context:this.refs.mentionsInput,mentionBot:this.state.selectedBot,onToggle:this.$32,onSelect:this.$34}):null};c.prototype.$36=function(){var a="UFIAddCommentInput _1osb _2xww"+(this.props.showMessengerPivot?" _6fry":""),c=babelHelpers["extends"]({mentionSortFn:this.props.viewOptionsTypeObjectsOrder?this.$26:null},this.props.viewProps);return b("React").createElement("div",{className:"_2xwx _289c",onClick:this.$31,role:"presentation"},this.$29(),this.$35(),b("React").createElement(m,{ref:"mentionsInput",ariaMultiline:!0,className:a,delightFunnelID:this.props.replyCommentID||this.props.ftEntIdentifier,editorState:this.state.editorState,onChange:this.$10,mentionsSource:this.state.mentionsSource,role:"textbox",typeaheadView:this.props.viewComponent,typeaheadViewProps:c,spellCheck:!0,placeholder:this.props.placeholder,onAddMention:this.$21,onShowMentions:this.$20,onFocus:this.$19,onBlur:this.$18,handleContentReturn:this.$13,handleBeforeInput:this.$14,handlePastedFiles:this.$17,handleDroppedFiles:this.$16,autoflip:this.props.autoflip,position:this.props.isBroadcasterUFI||this.props.isTahoeUFI||this.props.isLivingRoom||this.props.isStreamerHub?"above":null,webDriverTestID:this.props.replyCommentID?q:p}))};c.prototype.componentDidMount=function(){__p&&__p();if(!r){if(this.state.fallbackText){var a=b("ReactDOM").findDOMNode(this.refs.textarea);a instanceof HTMLElement&&a.focus()}}else if(this.state.editorState.getCurrentContent().hasText()){var c=b("setImmediate")(function(){this.focus()}.bind(this));this.$1.addSubscriptions({remove:function(){b("clearImmediate")(c)}})}};c.prototype.render=function(){if(!r)return this.$28();return!this.state.fullRender?this.$30():this.$36()};function w(a,b){return b.createEntity("MENTION","IMMUTABLE",{id:a.entity.uid,isWeak:a.entity.weakreference})}e.exports=c}),null);