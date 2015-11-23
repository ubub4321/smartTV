//프로듀사 영상의 옷이 저장된 DB //num, program, program_start_time, program_end_time, imgSrc, address, price
var clothesArray
var wishList;
var tableCount;

enyo.kind({
	name: "pro_1Panel",
	classes: "moon enyo-fit enyo-unselectable",
	components: [{
		name : "player",
		kind : "enyo.Video",
		classes:"container-video",
		src : "pro_1.mp4", 
		preload : "auto",
		autoplay : true,
		showControls : true,
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
			            	 /*classes : "palyback",*/
			            	 components: [
			            	              {kind: 'enyo.Scroller', classes : "enyo-fit",
			            	            	  components: [{		
			            	            		  components : [{							
			            	            			  components :[
			            	            			               {
			            	            			            	   name : "homeButton",
			            	            			            	   kind:"moon.Image",
			            	            			            	   src:"assets/play/back.png",
			            	            			            	   classes:"resize_back",
			            	            			            	   ontap : "goBack",
			            	            			            	   onmouseout:"Selectout",
			            	            			            	   onmouseover:"Selecton"
			            	            			               }
			            	            			               ]
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
			            	            				                	            		 name: "back1",
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:180px;margin-top:40px",
			            	            				                	            		 src: "assets/back.png",
			            	            				                	            		 ontap:"backtoImage1",
			            	            				                	            		 onmouseout:"Selectout1_1",
			            	            				                	            		 onmouseover:"Selecton1_1"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 name: "addtowishlist1",
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/addtowishlist.png",
			            	            				                	            		 ontap:"buttonTapped1",
				            	            				                	                 onmouseout:"Selectout1_2",
				            	            				                	            	 onmouseover:"Selecton1_2"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 name: "close1",
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/close.jpg",
			            	            				                	            		 ontap:"closeDrawer1",
			            	            				                	            		 onmouseout:"Selectout1_3",
			            	            				                	            		 onmouseover:"Selecton1_3"
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
			            	            				                	            		 name: "back2",
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:180px;margin-top:40px",
			            	            				                	            		 src: "assets/back.png",
			            	            				                	            		 ontap:"backtoImage2",
			            	            				                	            		 onmouseout:"Selectout2_1",
			            	            				                	            		 onmouseover:"Selecton2_1"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 name: "addtowishlist2",
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/addtowishlist.png",
			            	            				                	            		 ontap:"buttonTapped2",
			            	            				                	            		 onmouseout:"Selectout2_2",
			            	            				                	            		 onmouseover:"Selecton2_2"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 name: "close2",
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "width: 135px;height: 135px;margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/close.jpg",
			            	            				                	            		 ontap:"closeDrawer2",
			            	            				                	            		 onmouseout:"Selectout2_3",
			            	            				                	            		 onmouseover:"Selecton2_3"
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
			            	            				                	            		 name: "back3",
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:180px;margin-top:40px",
			            	            				                	            		 src: "assets/back.png",
			            	            				                	            		 ontap:"backtoImage3",
			            	            				                	            		 onmouseout:"Selectout3_1",
			            	            				                	            		 onmouseover:"Selecton3_1"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 name: "addtowishlist3",
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/addtowishlist.png",
			            	            				                	            		 ontap:"buttonTapped3",
			            	            				                	            		 onmouseout:"Selectout3_2",
			            	            				                	            		 onmouseover:"Selecton3_2"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 name: "close3",
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "width: 135px;height: 135px;margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/close.jpg",
			            	            				                	            		 ontap:"closeDrawer3",
			            	            				                	            		 onmouseout:"Selectout3_3",
			            	            				                	            		 onmouseover:"Selecton3_3"
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
			            	            				                	            		 name: "back4",
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:180px;margin-top:40px",
			            	            				                	            		 src: "assets/back.png",
			            	            				                	            		 ontap:"backtoImage4",
			            	            				                	            		 onmouseout:"Selectout4_1",
			            	            				                	            		 onmouseover:"Selecton4_1"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 name: "addtowishlist4", 
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/addtowishlist.png",
			            	            				                	            		 ontap:"buttonTapped4",
			            	            				                	            		 onmouseout:"Selectout4_2",
			            	            				                	            		 onmouseover:"Selecton4_2"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 name: "close4",
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "width: 135px;height: 135px;margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/close.jpg",
			            	            				                	            		 ontap:"closeDrawer4",
			            	            				                	            		 onmouseout:"Selectout4_3",
			            	            				                	            		 onmouseover:"Selecton4_3"
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
			            	            				                	            		 name: "back5",
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:180px;margin-top:40px",
			            	            				                	            		 src: "assets/back.png",
			            	            				                	            		 ontap:"backtoImage5",
			            	            				                	            		 onmouseout:"Selectout5_1",
			            	            				                	            		 onmouseover:"Selecton5_1"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 name: "addtowishlist5", 
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/addtowishlist.png",
			            	            				                	            		 ontap:"buttonTapped5",
			            	            				                	            		 onmouseout:"Selectout5_2",
			            	            				                	            		 onmouseover:"Selecton5_2"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 name: "close5",
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "width: 135px;height: 135px;margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/close.jpg",
			            	            				                	            		 ontap:"closeDrawer5",
			            	            				                	            		 onmouseout:"Selectout5_3",
			            	            				                	            		 onmouseover:"Selecton5_3"
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
			            	            				                	            		 name: "back6",
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:180px;margin-top:40px",
			            	            				                	            		 src: "assets/back.png",
			            	            				                	            		 ontap:"backtoImage6",
			            	            				                	            		 onmouseout:"Selectout6_1",
			            	            				                	            		 onmouseover:"Selecton6_1"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 name: "addtowishlist6",
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/addtowishlist.png",
			            	            				                	            		 ontap:"buttonTapped6",
			            	            				                	            		 onmouseout:"Selectout6_2",
			            	            				                	            		 onmouseover:"Selecton6_2"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 name: "close6",
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "width: 135px;height: 135px;margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/close.jpg",
			            	            				                	            		 ontap:"closeDrawer6",
			            	            				                	            		 onmouseout:"Selectout6_3",
			            	            				                	            		 onmouseover:"Selecton6_3"
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
			            	            				                	            		 name: "back7", 
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:180px;margin-top:40px",
			            	            				                	            		 src: "assets/back.png",
			            	            				                	            		 ontap:"backtoImage7",
			            	            				                	            		 onmouseout:"Selectout7_1",
			            	            				                	            		 onmouseover:"Selecton7_1"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 name: "addtowishlist7",
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/addtowishlist.png",
			            	            				                	            		 ontap:"buttonTapped7",
			            	            				                	            		 onmouseout:"Selectout7_2",
			            	            				                	            		 onmouseover:"Selecton7_2"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 name: "close7",
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "width: 135px;height: 135px;margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/close.jpg",
			            	            				                	            		 ontap:"closeDrawer7",
			            	            				                	            		 onmouseout:"Selectout7_3",
			            	            				                	            		 onmouseover:"Selecton7_3"
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
			            	            				                	            		 name: "back8",
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:180px;margin-top:40px",
			            	            				                	            		 src: "assets/back.png",
			            	            				                	            		 ontap:"backtoImage8",
			            	            				                	            		 onmouseout:"Selectout8_3",
			            	            				                	            		 onmouseover:"Selecton8_3"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 name: "addtowishlist8", 
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/addtowishlist.png",
			            	            				                	            		 ontap:"buttonTapped8",
			            	            				                	            		 onmouseout:"Selectout8_3",
			            	            				                	            		 onmouseover:"Selecton8_3"
			            	            				                	            	 },
			            	            				                	            	 {
			            	            				                	            		 name: "close8",
			            	            				                	            		 kind: "moon.Image",
			            	            				                	            		 style : "width: 135px;height: 135px;margin-left:40px;margin-top:40px",
			            	            				                	            		 src: "assets/close.jpg",
			            	            				                	            		 ontap:"closeDrawer8",
			            	            				                	            		 onmouseout:"Selectout8_3",
			            	            				                	            		 onmouseover:"Selecton8_3"
			            	            				                	            	 },
			            	            				                	            	  {name: "flickrSearch", kind: "enyo.sample.PanelsFlickrSearchForClothes", onResults: "searchResults"}
			            	            				                	            	  
			            	            				                	            	 ]
			            	            				                	             }
			            	            				                	             ]
			            	            				                }]
			            	            			  } ]
			            	            		  },
			            	            		  {
			            	            			  kind: "moon.Divider", spotlight: true,
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
		
		this.$.reresult1_2.setContent("￦ "+clothesArray[0][8]); 
		this.$.reresult2_2.setContent("￦ "+clothesArray[1][8]);
		this.$.reresult3_2.setContent("￦ "+clothesArray[2][8]);
		this.$.reresult4_2.setContent("￦ "+clothesArray[3][8]);
		this.$.reresult5_2.setContent("￦ "+clothesArray[4][8]);
		this.$.reresult6_2.setContent("￦ "+clothesArray[5][8]);
		this.$.reresult7_2.setContent("￦ "+clothesArray[6][8]);
		this.$.reresult8_2.setContent("￦ "+clothesArray[7][8]);
		
		
		this.$.detail_1.setSrc(clothesArray[0][6]);
		this.$.detail_2.setSrc(clothesArray[1][6]);
		this.$.detail_3.setSrc(clothesArray[2][6]);
		this.$.detail_4.setSrc(clothesArray[3][6]);
		this.$.detail_5.setSrc(clothesArray[4][6]);
		this.$.detail_6.setSrc(clothesArray[5][6]);
		this.$.detail_7.setSrc(clothesArray[6][6]);
		this.$.detail_8.setSrc(clothesArray[7][6]);
		//----------------------------------------------------------------------------------------------------------	
	},buttonTapped1: function(inSender, inEvent) {  
		this.ajaxFunction(0);
	},buttonTapped2: function(inSender, inEvent) { 
		this.ajaxFunction(1);
	},buttonTapped3: function(inSender, inEvent) {  
		this.ajaxFunction(2);
	},buttonTapped4: function(inSender, inEvent) { 
		this.ajaxFunction(3);
	},buttonTapped5: function(inSender, inEvent) {  
		this.ajaxFunction(4);
	},buttonTapped6: function(inSender, inEvent) {  
		this.ajaxFunction(5);
	},buttonTapped7: function(inSender, inEvent) {  
		this.ajaxFunction(6);
	},buttonTapped8: function(inSender, inEvent) {  
		this.ajaxFunction(7);
	},ajaxFunction : function(num){
		var str=""; //= "\'qqqqqqq\'";  //0번째 array를 가져온다
		for(j=0; j<10; j++)
		{
			if(j==9)
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
		this.showUser(str);
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
			xmlhttp.open("GET","http://meeneeon.ddns.net/insert_sora.php?q="+str,true);

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
	goBack: function(inSender, inEvent) {
		this.$.player.unload();
		this.bubbleUp("onShowPanel", {name:"select"});
		
		return true;
	},
	backtoImage1 : function(inSender, inEvent){
		var time = clothesArray[0][5];
		time = parseInt(time); 
		this.$.player.setCurrentTime(time)
	},
	backtoImage2 : function(inSender, inEvent){
		var time = clothesArray[1][5];
		time = parseInt(time); 
		this.$.player.setCurrentTime(time)
	},
	backtoImage3 : function(inSender, inEvent){
		var time = clothesArray[2][5];
		time = parseInt(time); 
		this.$.player.setCurrentTime(time)
	},
	backtoImage4 : function(inSender, inEvent){
		var time = clothesArray[3][5];
		time = parseInt(time); 
		this.$.player.setCurrentTime(time)
	},
	backtoImage5 : function(inSender, inEvent){
		var time = clothesArray[4][5];
		time = parseInt(time); 
		this.$.player.setCurrentTime(time)
	},
	backtoImage6 : function(inSender, inEvent){
		var time = clothesArray[5][5];
		time = parseInt(time); 
		this.$.player.setCurrentTime(time)
	},
	backtoImage7 : function(inSender, inEvent){
		var time = clothesArray[6][5];
		time = parseInt(time); 
		this.$.player.setCurrentTime(time)
	},
	backtoImage8 : function(inSender, inEvent){
		var time = clothesArray[7][5];
		time = parseInt(time); 
		this.$.player.setCurrentTime(time)
	},
	realDrawer1 : function(inSender, inEvent) {
		this.$.drawer1.setOpen(true);
		playerinput = inSender.getContent();
		var data_player_url1 = player.indexOf(playerinput);
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
	Selecton: function(inSender, inEvent)
    {
          this.$.homeButton.setSrc("assets/play/back_modify.png");   
    },
    Selectout: function(inSender, inEvent)
    {
          this.$.homeButton.setSrc("assets/play/back.png");      
    },
	Selecton1_1: function(inSender, inEvent)
    {
          this.$.back1.setSrc("assets/back_modify.png");   
    },
    Selectout1_1: function(inSender, inEvent)
    {
          this.$.back1.setSrc("assets/back.png");      
    },
    Selecton1_2: function(inSender, inEvent)
    {
          this.$.addtowishlist1.setSrc("assets/addtowishlist_modify.png");   
    },
    Selectout1_2: function(inSender, inEvent)
    {
          this.$.addtowishlist1.setSrc("assets/addtowishlist.png");      
    },
    Selecton1_3: function(inSender, inEvent)
    {
          this.$.close1.setSrc("assets/close_modify.png");   
    },
    Selectout1_3: function(inSender, inEvent)
    {
          this.$.close1.setSrc("assets/close.jpg");      
    },
    Selecton2_1: function(inSender, inEvent)
    {
          this.$.back2.setSrc("assets/back_modify.png");   
    },
    Selectout2_1: function(inSender, inEvent)
    {
          this.$.back2.setSrc("assets/back.png");      
    },
    Selecton2_2: function(inSender, inEvent)
    {
          this.$.addtowishlist2.setSrc("assets/addtowishlist_modify.png");   
    },
    Selectout2_2: function(inSender, inEvent)
    {
          this.$.addtowishlist2.setSrc("assets/addtowishlist.png");      
    },
    Selecton2_3: function(inSender, inEvent)
    {
          this.$.close2.setSrc("assets/close_modify.png");   
    },
    Selectout2_3: function(inSender, inEvent)
    {
          this.$.close2.setSrc("assets/close.jpg");      
    },
    Selecton3_1: function(inSender, inEvent)
    {
          this.$.back3.setSrc("assets/back_modify.png");   
    },
    Selectout3_1: function(inSender, inEvent)
    {
          this.$.back3.setSrc("assets/back.png");      
    },
    Selecton3_2: function(inSender, inEvent)
    {
          this.$.addtowishlist3.setSrc("assets/addtowishlist_modify.png");   
    },
    Selectout3_2: function(inSender, inEvent)
    {
          this.$.addtowishlist3.setSrc("assets/addtowishlist.png");      
    },
    Selecton3_3: function(inSender, inEvent)
    {
          this.$.close3.setSrc("assets/close_modify.png");   
    },
    Selectout3_3: function(inSender, inEvent)
    {
          this.$.close3.setSrc("assets/close.jpg");      
    },
    Selecton4_1: function(inSender, inEvent)
    {
          this.$.back4.setSrc("assets/back_modify.png");   
    },
    Selectout4_1: function(inSender, inEvent)
    {
          this.$.back4.setSrc("assets/back.png");      
    },
    Selecton4_2: function(inSender, inEvent)
    {
          this.$.addtowishlist4.setSrc("assets/addtowishlist_modify.png");   
    },
    Selectout4_2: function(inSender, inEvent)
    {
          this.$.addtowishlist4.setSrc("assets/addtowishlist.png");      
    },
    Selecton4_3: function(inSender, inEvent)
    {
          this.$.close4.setSrc("assets/close_modify.png");   
    },
    Selectout4_3: function(inSender, inEvent)
    {
          this.$.close4.setSrc("assets/close.jpg");      
    },
    Selecton5_1: function(inSender, inEvent)
    {
          this.$.back5.setSrc("assets/back_modify.png");   
    },
    Selectout5_1: function(inSender, inEvent)
    {
          this.$.back5.setSrc("assets/back.png");      
    },
    Selecton5_2: function(inSender, inEvent)
    {
          this.$.addtowishlist5.setSrc("assets/addtowishlist_modify.png");   
    },
    Selectout5_2: function(inSender, inEvent)
    {
          this.$.addtowishlist5.setSrc("assets/addtowishlist.png");      
    },
    Selecton5_3: function(inSender, inEvent)
    {
          this.$.close5.setSrc("assets/close_modify.png");   
    },
    Selectout5_3: function(inSender, inEvent)
    {
          this.$.close5.setSrc("assets/close.jpg");      
    },
    Selecton6_1: function(inSender, inEvent)
    {
          this.$.back6.setSrc("assets/back_modify.png");   
    },
    Selectout6_1: function(inSender, inEvent)
    {
          this.$.back6.setSrc("assets/back.png");      
    },
    Selecton6_2: function(inSender, inEvent)
    {
          this.$.addtowishlist6.setSrc("assets/addtowishlist_modify.png");   
    },
    Selectout6_2: function(inSender, inEvent)
    {
          this.$.addtowishlist6.setSrc("assets/addtowishlist.png");      
    },
    Selecton6_3: function(inSender, inEvent)
    {
          this.$.close6.setSrc("assets/close_modify.png");   
    },
    Selectout6_3: function(inSender, inEvent)
    {
          this.$.close6.setSrc("assets/close.jpg");      
    },
    Selecton7_1: function(inSender, inEvent)
    {
          this.$.back7.setSrc("assets/back_modify.png");   
    },
    Selectout7_1: function(inSender, inEvent)
    {
          this.$.back7.setSrc("assets/back.png");      
    },
    Selecton7_2: function(inSender, inEvent)
    {
          this.$.addtowishlist7.setSrc("assets/addtowishlist_modify.png");   
    },
    Selectout7_2: function(inSender, inEvent)
    {
          this.$.addtowishlist7.setSrc("assets/addtowishlist.png");      
    },
    Selecton7_3: function(inSender, inEvent)
    {
          this.$.close7.setSrc("assets/close_modify.png");   
    },
    Selectout7_3: function(inSender, inEvent)
    {
          this.$.close7.setSrc("assets/close.png");      
    },
    Selecton8_1: function(inSender, inEvent)
    {
          this.$.back8.setSrc("assets/back_modify.png");   
    },
    Selectout8_1: function(inSender, inEvent)
    {
          this.$.back8.setSrc("assets/back.png");      
    },
    Selecton8_2: function(inSender, inEvent)
    {
          this.$.addtowishlist8.setSrc("assets/addtowishlist_modify.png");   
    },
    Selectout8_2: function(inSender, inEvent)
    {
          this.$.addtowishlist8.setSrc("assets/addtowishlist.png");      
    },
    Selecton8_3: function(inSender, inEvent)
    {
          this.$.close8.setSrc("assets/close_modify.png");   
    },
    Selectout8_3: function(inSender, inEvent)
    {
          this.$.close8.setSrc("assets/close.jpg");      
    },
});
enyo.kind({
	   name: "enyo.sample.PanelsFlickrSearchForClothes",
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
	      
	      var params = {                        //http://meeneeon.ddns.net:8080/wishList.php
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
	         clothesArray[i] = new Array(10);
	      //'produsa'프로그램을 뽑아서 clothesArray를 할당한다.
	      
	      data2 = data;
	      for(i=0; i<tableCount; i++)
	      {
	         data2 = data2.substring(data2.indexOf("td"));
	         data2 = data2.substring(data2.indexOf("["));
	         for(j=0; j<10; j++)
	         {
	            if(j == 9)
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