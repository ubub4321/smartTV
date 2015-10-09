//프로듀사 영상의 옷이 저장된 DB //num, program, program_start_time, program_end_time, imgSrc, address, price
var clothesArray
var wishList;
var tableCount;

enyo.kind({
	name: "playPanel",
	classes: "moon enyo-fit enyo-unselectable",
	components: [{
		name : "player",
		kind : "enyo.Video",
		classes:"container-video",
		src : "assets/pro.mp4", 
		preload : "auto",
		autoplay : true,
	}, 
	{

		name : "panels",
		kind : "moon.Panels",
		animate : false,
		pattern : "alwaysviewing",
		classes : "enyo-fit",
		showing : false,
		components : [{ 
			autoNumber : false,
			components: [
			             {
			            	 components: [
			            	              {kind: 'enyo.Scroller', classes : "enyo-fit",
			            	            	  components: [{		
			            	            		  components : [{							
			            	            			  components :[

			            	            			               {
			            	            			            	   name : "homeButton",
			            	            			            	   kind : "moon.Image",
			            	            			            	   style : "margin-top:50px : 40px;margin-left:680px;",
			            	            			            	   src : "assets/HomeButton.png",
			            	            			            	   ontap : "goHome"
			            	            			               },
			            	            			               {
			            	            			            	   kind : "moon.Tooltip",
			            	            			            	   content : "홈",
			            	            			            	   showDelay : 2
			            	            			               }]
			            	            		  },
			            	            		  {	  
			            	            			  name : "logo",
			            	            			  kind : "moon.Image",
			            	            			  classes : "logo",
			            	            			  style : "margin-bottom:300px;",
			            	            			  src : "assets/logo.png"
			            	            		  },
			            	            		  {
			            	            			  kind: "moon.Divider", spotlight: true,
			            	            		  },

			            	            		  {
			            	            			  name: "detail_1",
			            	            			  kind: "moon.Image",
			            	            			  classes : "imagepanel",
			            	            			  style : "margin-left:210px;",
			            	            			  ontap:"realDrawer1"
			            	            		  },
			            	            		  {
			            	            			  kind : "moon.Tooltip",
			            	            			  content : "상세정보 확인",
			            	            			  showDelay : 2
			            	            		  },
			            	            		  {
			            	            			  name : "drawer1",
			            	            			  kind : "enyo.Drawer",
			            	            			  open : false,
			            	            			  components : [ {
			            	            				  classes : "moon-hspacing fittable-sample-box fittable-sample-mtb",
			            	            				  style : "height : 500px; color: white;",
			            	            				  components : [
			            	            				                {
			            	            				                	kind: 'FittableRows',
			            	            				                	classes: 'enyo-fit;',
			            	            				                	components: [
			            	            				                	             {kind: 'FittableRows', classes: 'fittable-sample-column', style : "width : 130px !important;",
			            	            				                	            	 components: [{
			            	            				                	            		 name : "reresult1_1",
			            	            				                	            		 classes : "table",
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 name : "reresult1_2",
			            	            				                	            		 classes : "table",
			            	            				                	            		 content : "가격"
			            	            				                	            	 }]
			            	            				                	             },
			            	            				                	             {kind: 'FittableRows', classes: 'fittable-sample-column', style : "width : 130px !important;",
			            	            				                	            	 components: [{
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:180px;margin-top:40px",
			            	            				                	            		 src: "assets/back.png",
			            	            				                	            		 ontap:"backtoImage1"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/addtowhishlist.png",
			            	            				                	            		 ontap:"buttonTapped"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/close.png",
			            	            				                	            		 ontap:"closeDrawer1"
			            	            				                	            	 }]
			            	            				                	             }
			            	            				                	             ]
			            	            				                }]
			            	            			  } ]
			            	            		  },
			            	            		  {
			            	            			  kind: "moon.Divider", spotlight: true,
			            	            		  },
			            	            		  {
			            	            			  kind : "moon.TooltipDecorator",
			            	            			  style : "display:inline-block",
			            	            			  components :[
			            	            			               {
			            	            			            	   name: "detail_2",
			            	            			            	   kind: "moon.Image",
			            	            			            	   classes : "imagepanel",
			            	            			            	   style : "margin-left:210px;",
			            	            			            	   ontap:"realDrawer2"
			            	            			               },
			            	            			               {
			            	            			            	   kind : "moon.Tooltip",
			            	            			            	   content : "상세정보 확인",
			            	            			            	   showDelay : 2
			            	            			               }]
			            	            		  },
			            	            		  {
			            	            			  name : "drawer2",
			            	            			  kind : "enyo.Drawer",
			            	            			  open : false,
			            	            			  components : [ {
			            	            				  classes : "moon-hspacing fittable-sample-box fittable-sample-mtb",
			            	            				  style : "height : 500px; color: white;",
			            	            				  components : [
			            	            				                {
			            	            				                	kind: 'FittableRows',
			            	            				                	classes: 'enyo-fit',
			            	            				                	components: [
			            	            				                	             {kind: 'FittableRows', classes: 'fittable-sample-column', style : "width : 130px !important;",
			            	            				                	            	 components: [{
			            	            				                	            		 name : "reresult2_1",
			            	            				                	            		 classes : "table",
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 name : "reresult2_2",
			            	            				                	            		 classes : "table",
			            	            				                	            		 content : "가격"
			            	            				                	            	 }]
			            	            				                	             },
			            	            				                	             {kind: 'FittableRows', classes: 'fittable-sample-column', style : "width : 130px !important;",
			            	            				                	            	 components: [{
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:180px;margin-top:40px",
			            	            				                	            		 src: "assets/back.png",
			            	            				                	            		 ontap:"backtoImage2"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/addtowhishlist.png",
			            	            				                	            		 ontap:"buttonTapped"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/close.png",
			            	            				                	            		 ontap:"closeDrawer2"
			            	            				                	            	 }]
			            	            				                	             }
			            	            				                	             ]
			            	            				                }]
			            	            			  } ]
			            	            		  },
			            	            		  {
			            	            			  kind: "moon.Divider", spotlight: true,
			            	            		  },
			            	            		  {
			            	            			  kind : "moon.TooltipDecorator",
			            	            			  style : "display:inline-block",
			            	            			  components :[
			            	            			               {
			            	            			            	   name: "detail_3",
			            	            			            	   kind: "moon.Image",
			            	            			            	   classes : "imagepanel",
			            	            			            	   style : "margin-left:210px;",
			            	            			            	   ontap:"realDrawer3"
			            	            			               },
			            	            			               {
			            	            			            	   kind : "moon.Tooltip",
			            	            			            	   content : "상세정보 확인",
			            	            			            	   showDelay : 2
			            	            			               }]
			            	            		  },
			            	            		  {
			            	            			  name : "drawer3",
			            	            			  kind : "enyo.Drawer",
			            	            			  open : false,
			            	            			  components : [ {
			            	            				  classes : "moon-hspacing fittable-sample-box fittable-sample-mtb",
			            	            				  style : "height : 500px; color: white;",
			            	            				  components : [
			            	            				                {
			            	            				                	kind: 'FittableRows',
			            	            				                	classes: 'enyo-fit',
			            	            				                	components: [
			            	            				                	             {kind: 'FittableRows', classes: 'fittable-sample-column', style : "width : 130px !important;",
			            	            				                	            	 components: [{
			            	            				                	            		 name : "reresult3_1",
			            	            				                	            		 classes : "table",
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 name : "reresult3_2",
			            	            				                	            		 classes : "table",
			            	            				                	            		 content : "가격"
			            	            				                	            	 }]
			            	            				                	             },
			            	            				                	             {kind: 'FittableRows', classes: 'fittable-sample-column', style : "width : 130px !important;",
			            	            				                	            	 components: [{
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:180px;margin-top:40px",
			            	            				                	            		 src: "assets/back.png",
			            	            				                	            		 ontap:"backtoImage3"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/addtowhishlist.png",
			            	            				                	            		 ontap:"buttonTapped"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/close.png",
			            	            				                	            		 ontap:"closeDrawer3"
			            	            				                	            	 }]
			            	            				                	             }
			            	            				                	             ]
			            	            				                }]
			            	            			  } ]
			            	            		  },
			            	            		  {
			            	            			  kind: "moon.Divider", spotlight: true,
			            	            		  },
			            	            		  {
			            	            			  kind : "moon.TooltipDecorator",
			            	            			  style : "display:inline-block",
			            	            			  components :[
			            	            			               {
			            	            			            	   name: "detail_4",
			            	            			            	   kind: "moon.Image",
			            	            			            	   classes : "imagepanel",
			            	            			            	   style : "margin-left:210px;",
			            	            			            	   ontap:"realDrawer4"
			            	            			               },
			            	            			               {
			            	            			            	   kind : "moon.Tooltip",
			            	            			            	   content : "상세정보 확인",
			            	            			            	   showDelay : 2
			            	            			               }]
			            	            		  },
			            	            		  {
			            	            			  name : "drawer4",
			            	            			  kind : "enyo.Drawer",
			            	            			  open : false,
			            	            			  components : [ {
			            	            				  classes : "moon-hspacing fittable-sample-box fittable-sample-mtb",
			            	            				  style : "height : 500px; color: white;",
			            	            				  components : [
			            	            				                {
			            	            				                	kind: 'FittableRows',
			            	            				                	classes: 'enyo-fit',
			            	            				                	components: [
			            	            				                	             {kind: 'FittableRows', classes: 'fittable-sample-column', style : "width : 130px !important;",
			            	            				                	            	 components: [{
			            	            				                	            		 name : "reresult4_1",
			            	            				                	            		 classes : "table",
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 name : "reresult4_2",
			            	            				                	            		 classes : "table",
			            	            				                	            		 content : "가격"
			            	            				                	            	 }]
			            	            				                	             },
			            	            				                	             {kind: 'FittableRows', classes: 'fittable-sample-column', style : "width : 130px !important;",
			            	            				                	            	 components: [{
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:180px;margin-top:40px",
			            	            				                	            		 src: "assets/back.png",
			            	            				                	            		 ontap:"backtoImage4"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/addtowhishlist.png",
			            	            				                	            		 ontap:"buttonTapped"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/close.png",
			            	            				                	            		 ontap:"closeDrawer4"
			            	            				                	            	 }]
			            	            				                	             }
			            	            				                	             ]
			            	            				                }]
			            	            			  } ]
			            	            		  },
			            	            		  {
			            	            			  kind: "moon.Divider", spotlight: true,
			            	            		  },
			            	            		  {
			            	            			  kind : "moon.TooltipDecorator",
			            	            			  style : "display:inline-block",
			            	            			  components :[
			            	            			               {
			            	            			            	   name: "detail_5",
			            	            			            	   kind: "moon.Image",
			            	            			            	   classes : "imagepanel",
			            	            			            	   style : "margin-left:210px;",
			            	            			            	   ontap:"realDrawer5"
			            	            			               },
			            	            			               {
			            	            			            	   kind : "moon.Tooltip",
			            	            			            	   content : "상세정보 확인",
			            	            			            	   showDelay : 2
			            	            			               }]
			            	            		  },
			            	            		  {
			            	            			  name : "drawer5",
			            	            			  kind : "enyo.Drawer",
			            	            			  open : false,
			            	            			  components : [ {
			            	            				  classes : "moon-hspacing fittable-sample-box fittable-sample-mtb",
			            	            				  style : "height : 500px; color: white;",
			            	            				  components : [
			            	            				                {
			            	            				                	kind: 'FittableRows',
			            	            				                	classes: 'enyo-fit',
			            	            				                	components: [
			            	            				                	             {kind: 'FittableRows', classes: 'fittable-sample-column', style : "width : 130px !important;",
			            	            				                	            	 components: [{
			            	            				                	            		 name : "reresult5_1",
			            	            				                	            		 classes : "table",
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 name : "reresult5_2",
			            	            				                	            		 classes : "table",
			            	            				                	            		 content : "가격"
			            	            				                	            	 }]
			            	            				                	             },
			            	            				                	             {kind: 'FittableRows', classes: 'fittable-sample-column', style : "width : 130px !important;",
			            	            				                	            	 components: [{
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:180px;margin-top:40px",
			            	            				                	            		 src: "assets/back.png",
			            	            				                	            		 ontap:"backtoImage5"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/addtowhishlist.png",
			            	            				                	            		 ontap:"buttonTapped"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/close.png",
			            	            				                	            		 ontap:"closeDrawer5"
			            	            				                	            	 }]
			            	            				                	             }
			            	            				                	             ]
			            	            				                }]
			            	            			  } ]
			            	            		  },
			            	            		  {
			            	            			  kind: "moon.Divider", spotlight: true,
			            	            		  },
			            	            		  {
			            	            			  kind : "moon.TooltipDecorator",
			            	            			  style : "display:inline-block",
			            	            			  components :[
			            	            			               {
			            	            			            	   name: "detail_6",
			            	            			            	   kind: "moon.Image",
			            	            			            	   classes : "imagepanel",
			            	            			            	   style : "margin-left:210px;",
			            	            			            	   ontap:"realDrawer6"
			            	            			               },
			            	            			               {
			            	            			            	   kind : "moon.Tooltip",
			            	            			            	   content : "상세정보 확인",
			            	            			            	   showDelay : 2
			            	            			               }]
			            	            		  },
			            	            		  {
			            	            			  name : "drawer6",
			            	            			  kind : "enyo.Drawer",
			            	            			  open : false,
			            	            			  components : [ {
			            	            				  classes : "moon-hspacing fittable-sample-box fittable-sample-mtb",
			            	            				  style : "height : 500px; color: white;",
			            	            				  components : [
			            	            				                {
			            	            				                	kind: 'FittableRows',
			            	            				                	classes: 'enyo-fit',
			            	            				                	components: [
			            	            				                	             {kind: 'FittableRows', classes: 'fittable-sample-column', style : "width : 130px !important;",
			            	            				                	            	 components: [{
			            	            				                	            		 name : "reresult6_1",
			            	            				                	            		 classes : "table",
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 name : "reresult6_2",
			            	            				                	            		 classes : "table",
			            	            				                	            		 content : "가격"
			            	            				                	            	 }]
			            	            				                	             },
			            	            				                	             {kind: 'FittableRows', classes: 'fittable-sample-column', style : "width : 130px !important;",
			            	            				                	            	 components: [{
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:180px;margin-top:40px",
			            	            				                	            		 src: "assets/back.png",
			            	            				                	            		 ontap:"backtoImage6"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/addtowhishlist.png",
			            	            				                	            		 ontap:"buttonTapped"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/close.png",
			            	            				                	            		 ontap:"closeDrawer6"
			            	            				                	            	 }]
			            	            				                	             }
			            	            				                	             ]
			            	            				                }]
			            	            			  } ]
			            	            		  },
			            	            		  {
			            	            			  kind: "moon.Divider", spotlight: true,
			            	            		  },
			            	            		  {
			            	            			  kind : "moon.TooltipDecorator",
			            	            			  style : "display:inline-block",
			            	            			  components :[
			            	            			               {
			            	            			            	   name: "detail_7",
			            	            			            	   kind: "moon.Image",
			            	            			            	   classes : "imagepanel",
			            	            			            	   style : "margin-left:210px;",
			            	            			            	   ontap:"realDrawer7"
			            	            			               },
			            	            			               {
			            	            			            	   kind : "moon.Tooltip",
			            	            			            	   content : "상세정보 확인",
			            	            			            	   showDelay : 2
			            	            			               }]
			            	            		  },
			            	            		  {
			            	            			  name : "drawer7",
			            	            			  kind : "enyo.Drawer",
			            	            			  open : false,
			            	            			  components : [ {
			            	            				  classes : "moon-hspacing fittable-sample-box fittable-sample-mtb",
			            	            				  style : "height : 500px; color: white;",
			            	            				  components : [
			            	            				                {
			            	            				                	kind: 'FittableRows',
			            	            				                	classes: 'enyo-fit',
			            	            				                	components: [
			            	            				                	             {kind: 'FittableRows', classes: 'fittable-sample-column', style : "width : 130px !important;",
			            	            				                	            	 components: [{
			            	            				                	            		 name : "reresult7_1",
			            	            				                	            		 classes : "table",
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 name : "reresult7_2",
			            	            				                	            		 classes : "table",
			            	            				                	            		 content : "가격"
			            	            				                	            	 }]
			            	            				                	             },
			            	            				                	             {kind: 'FittableRows', classes: 'fittable-sample-column', style : "width : 130px !important;",
			            	            				                	            	 components: [{
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:180px;margin-top:40px",
			            	            				                	            		 src: "assets/back.png",
			            	            				                	            		 ontap:"backtoImage7"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/addtowhishlist.png",
			            	            				                	            		 ontap:"buttonTapped"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/close.png",
			            	            				                	            		 ontap:"closeDrawer7"
			            	            				                	            	 }]
			            	            				                	             }
			            	            				                	             ]
			            	            				                }]
			            	            			  } ]
			            	            		  },
			            	            		  {
			            	            			  kind: "moon.Divider", spotlight: true,
			            	            		  },
			            	            		  {
			            	            			  kind : "moon.TooltipDecorator",
			            	            			  style : "display:inline-block",
			            	            			  components :[
			            	            			               {
			            	            			            	   name: "detail_8",
			            	            			            	   kind: "moon.Image",
			            	            			            	   classes : "imagepanel",
			            	            			            	   style : "margin-left:210px;",
			            	            			            	   ontap:"realDrawer8"
			            	            			               },
			            	            			               {
			            	            			            	   kind : "moon.Tooltip",
			            	            			            	   content : "상세정보 확인",
			            	            			            	   showDelay : 2
			            	            			               }]
			            	            		  },
			            	            		  {
			            	            			  name : "drawer8",
			            	            			  kind : "enyo.Drawer",
			            	            			  open : false,
			            	            			  components : [ {
			            	            				  classes : "moon-hspacing fittable-sample-box fittable-sample-mtb",
			            	            				  style : "height : 500px; color: white;",
			            	            				  components : [
			            	            				                {
			            	            				                	kind: 'FittableRows',
			            	            				                	classes: 'enyo-fit',
			            	            				                	components: [
			            	            				                	             {kind: 'FittableRows', classes: 'fittable-sample-column', style : "width : 130px !important;",
			            	            				                	            	 components: [{
			            	            				                	            		 name : "reresult8_1",
			            	            				                	            		 classes : "table",
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 name : "reresult8_2",
			            	            				                	            		 classes : "table",
			            	            				                	            		 content : "가격"
			            	            				                	            	 }]
			            	            				                	             },
			            	            				                	             {kind: 'FittableRows', classes: 'fittable-sample-column', style : "width : 130px !important;",
			            	            				                	            	 components: [{
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:180px;margin-top:40px",
			            	            				                	            		 src: "assets/back.png",
			            	            				                	            		 ontap:"backtoImage8"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/addtowhishlist.png",
			            	            				                	            		 ontap:"buttonTapped"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/close.png",
			            	            				                	            		 ontap:"closeDrawer8"
			            	            				                	            	 },
			            	            				                	            	  {name: "flickrSearch", kind: "enyo.sample.PanelsFlickrSearch", onResults: "searchResults"} 
			            	            				                	            	 ]
			            	            				                	             }
			            	            				                	             ]
			            	            				                }]
			            	            			  } ]
			            	            		  },
			            	            		  ],


			            	            	  }
			            	            	  ]
			            	              }
			            	              	              ]}
			             ],
		},
		]
	},

	],
	rendered: enyo.inherit(function(sup) {
	      return function() {
	         sup.apply(this, arguments);
	         this.search();
	         
	      };
	   }),
	   search: function() {
		      //this.searchText = this.$.searchInput.getValue();
		      this.page = 0;
		      this.results = [];
		      //this.$.searchSpinner.show();
		      this.$.flickrSearch.search(this.searchText);
		      
		   },
		   searchResults: function(inSender, inResults) {
			      //this.$.searchSpinner.hide();
			      //this.$.moreSpinner.hide();
			      this.results = this.results.concat(inResults);
			      this.show();
			   },
	show: function(){
		this.$.reresult1_1.setContent(clothesArray[0][1]); 
		this.$.reresult2_1.setContent(clothesArray[1][1]);
		this.$.reresult3_1.setContent(clothesArray[2][1]);
		this.$.reresult4_1.setContent(clothesArray[3][1]);
		this.$.reresult5_1.setContent(clothesArray[4][1]);
		this.$.reresult6_1.setContent(clothesArray[5][1]);
		this.$.reresult7_1.setContent(clothesArray[6][1]);
		this.$.reresult8_1.setContent(clothesArray[7][1]);
		
		this.$.reresult1_2.setContent("￦ "+clothesArray[0][6]); 
		this.$.reresult2_2.setContent("￦ "+clothesArray[1][6]);
		this.$.reresult3_2.setContent("￦ "+clothesArray[2][6]);
		this.$.reresult4_2.setContent("￦ "+clothesArray[3][6]);
		this.$.reresult5_2.setContent("￦ "+clothesArray[4][6]);
		this.$.reresult6_2.setContent("￦ "+clothesArray[5][6]);
		this.$.reresult7_2.setContent("￦ "+clothesArray[6][6]);
		this.$.reresult8_2.setContent("￦ "+clothesArray[7][6]);
		
		
		this.$.detail_1.setSrc(clothesArray[0][4]);
		this.$.detail_2.setSrc(clothesArray[1][4]);
		this.$.detail_3.setSrc(clothesArray[2][4]);
		this.$.detail_4.setSrc(clothesArray[3][4]);
		this.$.detail_5.setSrc(clothesArray[4][4]);
		this.$.detail_6.setSrc(clothesArray[5][4]);
		this.$.detail_7.setSrc(clothesArray[6][4]);
		this.$.detail_8.setSrc(clothesArray[7][4]);
		//----------------------------------------------------------------------------------------------------------	
	},buttonTapped: function(inSender, inEvent) {              //장바구니 추가 버튼을 누르면, 옷이 몇번째 꺼 인지 정보를 주어 wishList DB에 추가.
		var num = 1; //사진의 id값 을 주어, 그 행을 통채로 wishList에 추가.
		this.ajaxFunction(num);
	},ajaxFunction : function(num){
		var str=""; //= "\'qqqqqqq\'";  //0번째 array를 가져온다
		for(j=0; j<7; j++)
		{
			if(j==6)
				str = str+ "\'"+clothesArray[num][j]+"\'";
			else
				str = str+ "\'"+clothesArray[num][j]+"\',";
			while(true)
			{
				if(str.indexOf("&")==-1)
					break;
				str = str.replace('&', '%26');
			}
		}
		//this.$.text1.setContent(str);
		this.showUser(str+"\'");
	}, showUser : function(str) {
		if (str == "") {
			document.getElementById("txtHint").innerHTML = "";
			return;
		} else { 
			if (window.XMLHttpRequest) {
				// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp = new XMLHttpRequest();
			} else {
				// code for IE6, IE5
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
				}
			}
			//%26
			xmlhttp.open("GET","http://meeneeon.ddns.net/insert_sora.php?q="+str+"\'",true);

			xmlhttp.send();
		}
	},
	goHome : function(inSender, inEvent) {
		this.$.player.unload();
		this.bubbleUp("onGoHome", {
			name : name
		});
		return true;
	},
	backtoImage1 : function(inSender, inEvent){
		var time = clothesArray[0][3];
		time = parseInt(time); 
		this.$.player.setCurrentTime(time)
	},
	backtoImage2 : function(inSender, inEvent){
		var time = clothesArray[1][3];
		time = parseInt(time); 
		this.$.player.setCurrentTime(time)
	},
	backtoImage3 : function(inSender, inEvent){
		var time = clothesArray[2][3];
		time = parseInt(time); 
		this.$.player.setCurrentTime(time)
	},
	backtoImage4 : function(inSender, inEvent){
		var time = clothesArray[3][3];
		time = parseInt(time); 
		this.$.player.setCurrentTime(time)
	},
	backtoImage5 : function(inSender, inEvent){
		var time = clothesArray[4][3];
		time = parseInt(time); 
		this.$.player.setCurrentTime(time)
	},
	backtoImage6 : function(inSender, inEvent){
		var time = clothesArray[5][3];
		time = parseInt(time); 
		this.$.player.setCurrentTime(time)
	},
	backtoImage7 : function(inSender, inEvent){
		var time = clothesArray[6][3];
		time = parseInt(time); 
		this.$.player.setCurrentTime(time)
	},
	backtoImage8 : function(inSender, inEvent){
		var time = clothesArray[7][3];
		time = parseInt(time); 
		this.$.player.setCurrentTime(time)
	},
	realDrawer1 : function(inSender, inEvent) {
		this.$.drawer1.setOpen(true);
		playerinput = inSender.getContent();
		//var data_player_url1 = player.indexOf(playerinput);
	},
	realDrawer2 : function(inSender, inEvent) {
		this.$.drawer2.setOpen(true);
		playerinput = inSender.getContent();
		var data_player_url1 = player.indexOf(playerinput);
	},
	realDrawer3 : function(inSender, inEvent) {
		this.$.drawer3.setOpen(true);
		playerinput = inSender.getContent();
		var data_player_url1 = player.indexOf(playerinput);
	},
	realDrawer4 : function(inSender, inEvent) {
		this.$.drawer4.setOpen(true);
		playerinput = inSender.getContent();
		var data_player_url1 = player.indexOf(playerinput);
	},
	realDrawer5 : function(inSender, inEvent) {
		this.$.drawer5.setOpen(true);
		playerinput = inSender.getContent();
		var data_player_url1 = player.indexOf(playerinput);
	},
	realDrawer6 : function(inSender, inEvent) {
		this.$.drawer6.setOpen(true);
		playerinput = inSender.getContent();
		var data_player_url1 = player.indexOf(playerinput);
	},
	realDrawer7 : function(inSender, inEvent) {
		this.$.drawer7.setOpen(true);
		playerinput = inSender.getContent();
		var data_player_url1 = player.indexOf(playerinput);
	},
	realDrawer8 : function(inSender, inEvent) {
		this.$.drawer8.setOpen(true);
		playerinput = inSender.getContent();
		var data_player_url1 = player.indexOf(playerinput);
	},
	closeDrawer1 : function(inSender, inEvent) {
		this.$.drawer1.setOpen(false);
		return true;
	},
	closeDrawer2 : function(inSender, inEvent) {
		this.$.drawer2.setOpen(false);
		return true;
	},
	closeDrawer3 : function(inSender, inEvent) {
		this.$.drawer3.setOpen(false);
		return true;
	},
	closeDrawer4 : function(inSender, inEvent) {
		this.$.drawer4.setOpen(false);
		return true;
	},
	closeDrawer5 : function(inSender, inEvent) {
		this.$.drawer5.setOpen(false);
		return true;
	},
	closeDrawer6 : function(inSender, inEvent) {
		this.$.drawer6.setOpen(false);
		return true;
	},
	closeDrawer7 : function(inSender, inEvent) {
		this.$.drawer7.setOpen(false);
		return true;
	},
	closeDrawer8 : function(inSender, inEvent) {
		this.$.drawer8.setOpen(false);
		return true;
	},
});
enyo.kind({
	   name: "enyo.sample.PanelsFlickrSearch",
	   kind: "Component",
	   published: {
	      searchText: ""
	   },
	   events: {
	      onResults: ""
	   },
	   url: "http://query.yahooapis.com/v1/public/yql?format=json",
	   search: function(inSearchText, inPage) {
	    // username:  decodeURIComponent($('#username').val());
	      
	      var params = {
	         q: 'select * from html where url = "http://meeneeon.ddns.net/clothes.php"'
	      };
	      var req;
	      req = new enyo.JsonpRequest({url: this.url, callbackName: "callback"})
	       //  .response.setCharacterEncoding("UTF-8")
	          .response(this, "processResponse")
	         .go(params);
	      
	      return req;
	   },
	   processResponse: function(inSender, inResponse) {
	      data = JSON.stringify(inResponse, null, 2);
	      this.parserOrderPitcher();
	      return true;
	   },
	   parserOrderPitcher: function(){
	      var data2 = data;
	      
	      var tableCount=0;
	      while(1)
	         {
	            temp=data2.indexOf("td");
	            if(temp == -1)
	               break;
	            else
	            {
	               tableCount++;
	               data2 = data2.substring(temp);
	               data2 = data2.substring(data2.indexOf("["));
	            }
	         }
	      clothesArray = new Array(tableCount);
	      for(i=0; i<tableCount; i++)
	         clothesArray[i] = new Array(7);
	      //'produsa'프로그램을 뽑아서 clothesArray를 할당한다.
	      
	      data2 = data;
	      for(i=0; i<tableCount; i++)
	      {
	         data2 = data2.substring(data2.indexOf("td"));
	         data2 = data2.substring(data2.indexOf("["));
	         for(j=0; j<7; j++)
	         {
	            if(j == 6)
	            {
	               clothesArray[i][j] = data2.substring(data2.indexOf("\"")+1, data2.indexOf("]")-18);
	               break;
	            }   
	            clothesArray[i][j] = data2.substring(data2.indexOf("\"")+1, data2.indexOf("\","));
	            data2 = data2.substring(data2.indexOf(clothesArray[i][j])+clothesArray[i][j].length+2);
	         }
	      } //웹에 출력된 DB를 파싱하여 clothesArray에 저장한다.
	      this.doResults(clothesArray);
	      return clothesArray;
	   }      
	   
	});