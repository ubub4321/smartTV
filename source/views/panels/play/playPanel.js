var clothesArray; //프로듀사 영상의 옷이 저장된 DB //num, program, program_start_time, program_end_time, imgSrc, address, price
var wishList;
var tableCount;

enyo.kind({
   name: "playPanel",
   classes: "moon enyo-fit enyo-unselectable",
   components: [
                {
                	   
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
	                             								src: "assets/1.jpg",
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
	        						        												name : "reresult1",
	        						        												classes : "table",
	        						        											},
	        						        											{
	        						        												name : "reresult2",
	        						        												classes : "table",
	        						        												content : "가격"
	        						        											},
	        						        											{
	        						        												name : "reresult3",
	        						        												classes : "table",
	        						        												content : "가테고리"
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
	                             								src: "assets/1.jpg",
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
        						        												name : "reresult1",
        						        												classes : "table",
        						        											},
        						        											{
        						        												name : "reresult2",
        						        												classes : "table",
        						        												content : "가격"
        						        											},
        						        											{
        						        												name : "reresult3",
        						        												classes : "table",
        						        												content : "가테고리"
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
	                             								src: "assets/1.jpg",
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
        						        												name : "reresult1",
        						        												classes : "table",
        						        											},
        						        											{
        						        												name : "reresult2",
        						        												classes : "table",
        						        												content : "가격"
        						        											},
        						        											{
        						        												name : "reresult3",
        						        												classes : "table",
        						        												content : "가테고리"
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
	                             								src: "assets/1.jpg",
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
        						        												name : "reresult1",
        						        												classes : "table",
        						        											},
        						        											{
        						        												name : "reresult2",
        						        												classes : "table",
        						        												content : "가격"
        						        											},
        						        											{
        						        												name : "reresult3",
        						        												classes : "table",
        						        												content : "가테고리"
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
	                             								src: "assets/1.jpg",
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
        						        												name : "reresult1",
        						        												classes : "table",
        						        											},
        						        											{
        						        												name : "reresult2",
        						        												classes : "table",
        						        												content : "가격"
        						        											},
        						        											{
        						        												name : "reresult3",
        						        												classes : "table",
        						        												content : "가테고리"
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
	                             								src: "assets/1.jpg",
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
        						        												name : "reresult1",
        						        												classes : "table",
        						        											},
        						        											{
        						        												name : "reresult2",
        						        												classes : "table",
        						        												content : "가격"
        						        											},
        						        											{
        						        												name : "reresult3",
        						        												classes : "table",
        						        												content : "가테고리"
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
	                             								src: "assets/1.jpg",
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
        						        												name : "reresult1",
        						        												classes : "table",
        						        											},
        						        											{
        						        												name : "reresult2",
        						        												classes : "table",
        						        												content : "가격"
        						        											},
        						        											{
        						        												name : "reresult3",
        						        												classes : "table",
        						        												content : "가테고리"
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
	                             								src: "assets/1.jpg",
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
        						        												name : "reresult1",
        						        												classes : "table",
        						        											},
        						        											{
        						        												name : "reresult2",
        						        												classes : "table",
        						        												content : "가격"
        						        											},
        						        											{
        						        												name : "reresult3",
        						        												classes : "table",
        						        												content : "가테고리"
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
        	        		                             								ontap:"closeDrawer8"
        	        						        						        }]
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
    collapsedChanged: function(inSender, inEvent) {
		this.$.console.setContent(inSender.name + (inSender.collapsed ? " Collapsed" : " Expanded"));
	},
	create: function(inSender, inEvent){
		this.inherited(arguments);
		this.fetch();
	},
	fetch: function() {
		var jsonp = new enyo.JsonpRequest({
			url: "http://query.yahooapis.com/v1/public/yql?format=json",
			callbackName: "callback"
		});
		// send parameters the remote service using the 'go()' method
		jsonp.go({
			q: 'select * from html where url = "http://221.165.119.4/clothes.php"'
		});
		// attach responders to the transaction object
		jsonp.response(this, "processResponse");
		return true;
	},	
	processResponse: function(inSender, inResponse) {
		// do something with it
		data = JSON.stringify(inResponse, null, 2);
		//alert(data.length);
		//this.$.textArea.setValue(data);
		// parsing of KBO order inform.
		this.parserOrderPitcher();
		return true;
	},
	parserOrderPitcher: function(){ //clothesDB내용을 긁어와서 clothesArray에 저장.
		var data2 = data;
		tableCount=0;
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
		this.show();
		return true;
	},show: function(){
			this.$.reresult1.setContent(clothesArray[0][1]);   //이 위에는, clothes 옷정보 DB를 엔요의 clothesArray변수에 저장하는것
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
	        xmlhttp.open("GET","http://221.165.119.4/insert_sora.php?q="+str+"\'",true);
	        
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
		var time = clothesArray[0][1];
		time = parseInt(time); 
		this.$.player.setCurrentTime(1)
	},
	backtoImage2 : function(inSender, inEvent){
		this.$.player.setCurrentTime(10)
	},
	backtoImage3 : function(inSender, inEvent){
		this.$.player.setCurrentTime(20)
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