if (self.CavalryLogger) { CavalryLogger.start_js(["gRLuS"]); }

__d("HomepagePanelPromoteFooterLoader",["csx","cx","Bootloader","ReactRenderer"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a={register:function(a,c,d,e){__p&&__p();var f=!1,g=!1,h=!1;function i(a){a.button||(d.classList.add("_1tt"),g=!0,h=!1),k()}function j(a){a.button||(d.classList.remove("_1tt"),g=!1,h=!0),k()}function k(){if(f)return;f=!0;b("Bootloader").loadModules(["PagesManagerConsolidatedPromoteButton.react"],function(f){d.removeEventListener("click",i),e.removeEventListener("click",j),b("ReactRenderer").constructAndRenderComponent(f,babelHelpers["extends"]({},a,{clickOnMount:g}),c,h?l:function(){})},"HomepagePanelPromoteFooterLoader")}function l(){var a=c.querySelector("._764l");a&&a.click()}d.addEventListener("click",i);e.addEventListener("click",j)}};e.exports=a}),null);
__d("HomepagePanelRecentPostCarouselItem.react",["ix","cx","fbt","BoostedComponentButtonLabels","BoostedComponentDialogButtonWithDataV2Wrapper.react","BoostedComponentRef","Image.react","ImageBlock.react","InlineBlock.react","Layout.react","LineClamp.react","React","SUIBusinessTheme","SUILink.react","SUIText.react","SUIThemeContainer.react","UFIReactionsBlingTokens.react","XUICarouselItem.react","fbglyph","formatDate"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k=64;c={1:{reduced:"1","default":1},2:{reduced:"1","default":1},3:{reduced:"1","default":1}};var l={reactioncountmap:c,reactioncount:0,reactioncountreduced:""};j=babelHelpers.inherits(a,b("React").PureComponent);j&&j.prototype;a.prototype.render=function(){var a=this.props,c=a.commentCount,d=a.creationTime,e=a.fullWidth,f=a.picture,h=a.postUri;a=a.reactionCount;var j=b("React").createElement(b("SUIText.react"),{className:"_3-94",display:"block",size:"medium_DEPRECATED",weight:"bold"},i._("\""),this.props.message,i._("\""));f=b("React").createElement(b("Image.react"),{height:k,src:f,width:k});return b("React").createElement(b("XUICarouselItem.react"),null,b("React").createElement(b("SUIThemeContainer.react"),{theme:b("SUIBusinessTheme")},b("React").createElement("div",{className:e?"_3qzf":"_3qzg"},b("React").createElement(b("ImageBlock.react"),{className:"_3qzh",spacing:"large"},h?b("React").createElement(b("SUILink.react"),{href:h,showUnderline:"never"},f):f,b("React").createElement(b("InlineBlock.react"),{alignv:"middle",height:k},b("React").createElement(b("LineClamp.react"),{enableTooltipOnOverflow:!0,lines:2},h?b("React").createElement(b("SUILink.react"),{href:h,showUnderline:"never"},j):{postMessage:j}),b("React").createElement(b("LineClamp.react"),{enableTooltipOnOverflow:!0,lines:1},b("React").createElement(b("SUIText.react"),{shade:"light",size:"meta1"},d&&i._("{date} at {time}",[i._param("date",b("formatDate")(d,"F j")),i._param("time",b("formatDate")(d,"g:ia"))]))))),b("React").createElement(b("Layout.react"),null,b("React").createElement(b("Layout.react").FillColumn,{className:"mrm"},b("React").createElement(b("SUIText.react"),{className:"_4ar- _3qzi",shade:"light",size:"meta1"},b("React").createElement(b("UFIReactionsBlingTokens.react"),{feedback:l,max:2,noLinks:!0}),a>0&&a,c>0&&b("React").createElement("span",{className:"_3-99"},b("React").createElement(b("Image.react"),{alt:"Number of comments",className:"_3qzk",src:g("125886")}),c))),b("React").createElement(b("Layout.react").Column,null,b("React").createElement(b("BoostedComponentDialogButtonWithDataV2Wrapper.react"),{buttonData:this.props.buttonData,buttonLabel:b("BoostedComponentButtonLabels").DIRECT_BOOST_BUTTON_LABEL,permanentCreateMode:!1,placement:b("BoostedComponentRef").WWW_HOMEPAGE_PANEL}))))))};function a(){j.apply(this,arguments)}e.exports=a}),null);
__d("HomepagePanelRecentPostCarousel.react",["ix","cx","fbt","HomepagePanelRecentPostCarouselItem.react","Image.react","React","XUICarousel.react","XUICarouselAnimator","XUICarouselArrow.react","fbglyph"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;c=b("React").createElement(b("XUICarouselArrow.react"),{className:"_1c9r"},b("React").createElement(b("Image.react"),{alt:i._("Prev"),src:g("112989")}));d=b("React").createElement(b("XUICarouselArrow.react"),{className:"_1c9r"},b("React").createElement(b("Image.react"),{alt:i._("Next"),src:g("112999")}));var k=[c,d];j=babelHelpers.inherits(a,b("React").PureComponent);j&&j.prototype;a.prototype.render=function(){var a=this.props.postEntries,c=a.map(function(c,d){var e=c.buttonData.buttonID;return b("React").createElement(b("HomepagePanelRecentPostCarouselItem.react"),{buttonData:c.buttonData,commentCount:c.commentCount,creationTime:c.creationTime,fullWidth:a.length===1,key:e!=null&&e!==""?e:d,message:c.message,picture:c.picture,postUri:c.postUri,reactionCount:c.reactionCount})});return b("React").createElement("div",{className:"_2pid"},b("React").createElement("div",{className:"_1c9t"},i._("Recent Posts")),b("React").createElement(b("XUICarousel.react"),{animator:new(b("XUICarouselAnimator"))({type:"horizontal",centered:!0,firstAndLastAligned:a.length>1}),arrows:k,className:"_3-8x",initialAutoplay:!1,resizeViewport:"disabled",wrapAround:!1},c))};function a(){j.apply(this,arguments)}e.exports=a}),null);