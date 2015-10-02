enyo.kind({
   name: "playmenuPanel",
   style : "zoom 200%",
   classes: "moon enyo-fit enyo-unselectable",
   components: [{
				   name : "player",
					kind : "moon.VideoPlayer",
					src : "assets/big_buck_bunny.mp4", 
					autoplay : true,
					ontimeupdate : "timeChanged", 
   				},

   				{
                name : "panels",
                kind : "moon.Panels",
                pattern : "alwaysviewing",
                animate : false,
                classes : "enyo-fit",
                showing : false,
                
                components : [{
                        	components: [
                        		{kind: 'moon.Scroller', classes: "enyo-fill", components: [
                        			{
                        				components: [
                        					{kind: "moon.Divider", spotlight: true,
                        						components:[{
    												components : [ {
    													kind : "moon.InputDecorator",
    													classes : "teduri",
    													style : "margin-left:30px;",
    													alwaysLooksFocused : false,
    													components : [{
    																name : "playername1",
    																kind : "enyo.Input",
    																style : "height:5px;width: 40px;Text-align:center",
    																placeholder : "빠른 검색",
    															},
    															{
    																name : "searchButton",
    																kind : "Image",
    																src : "assets/search-input-search2.png",
    																//ontap : "searchDrawer1_1"
    															}]
    													},
    													{
    														kind : "moon.TooltipDecorator",
    														style : "display:inline-block",
    														components :[
	    													{
																name : "WishList",
																kind : "moon.Image",
																style : " height : 4px;margin-left:4px;",
																src : "assets/wishlistButton.png",
																ontap : "showPanel"
	    													},
	    													{
	    														kind : "moon.Tooltip",
	    														content : "장바구니",
	    														showDelay : 2
	    													}]
    													},
    													{
    														kind : "moon.TooltipDecorator",
    														style : "display:inline-block",
    														components :[
	    													{
																name : "homeButton",
																kind : "moon.Image",
																style : " height : 4px;margin-left:1px;",
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
    														kind: "moon.Divider", spotlight: true,
        												},
{	
        													
        													kind : "moon.TooltipDecorator",
    														style : "display:inline-block",
    														
    														components :[
	        												{
	        													name: "detail_1",
	        													kind: "moon.Image",
	                             								classes : "imagepanel",
	                             								style : "margin-left:160px;",
	                             								src: "assets/1.jpg",
	                             								ontap:"showPanel"
	                             									
	        												},
	    													{
	    														kind : "moon.Tooltip",
	    														content : "상세정보 확인",
	    														showDelay : 2
	    													},
	    													{kind: "moon.BodyText", content: "착용자:윤형선",style:"color:black"},
	    													{kind: "moon.BodyText", content: "가  격: 서민은 못사 ",style:"color:black"}
	    													]
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
	                             								src: "assets/2.jpg",
	        												},
	    													{
	    														kind : "moon.Tooltip",
	    														content : "상세정보 확인",
	    														showDelay : 2
	    													}]
        												},
        												{
    														kind: "moon.Divider", spotlight: true,
        												},
        												
        												],
    													

                        						}]
                        					},
											    
                        					
                        				]
                        			}
                        		]}
                        	],
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
									style : "width : 130px !important;",
									components : [
											{
												name : "reresult1",
												classes : "tabletest",
												kind : "moon.Divider",
												content : "승"
											},
											{
												name : "reresult2",
												classes : "tabletest",
												kind : "moon.Divider",
												content : "패"
											},
											{
												name : "reresult3",
												classes : "tabletest",
												kind : "moon.Divider",
												content : "세이브"
											},
											{
												name : "reresult4",
												classes : "tabletest",
												kind : "moon.Divider",
												content : "승률"
											},
											{
												name : "reresult5",
												classes : "tabletest",
												kind : "moon.Divider",
												content : "이닝"
											} ]
								},
								{
									style : "width : 130px !important;",
									components : [
											{
												classes : "tabletest",
												kind : "moon.Divider",
												name : "realobj1",
												content : ""
											},
											{
												classes : "tabletest",
												kind : "moon.Divider",
												name : "realobj2",
												content : ""
											},
											{
												classes : "tabletest",
												kind : "moon.Divider",
												name : "realobj3",
												content : ""
											},
											{
												classes : "tabletest",
												kind : "moon.Divider",
												name : "realobj4",
												content : ""
											},
											{
												classes : "tabletest",
												kind : "moon.Divider",
												name : "realobj5",
												content : ""
											} ]
								},
								{
									style : "width : 130px !important;",
									components : [
											{
												name : "reresult6",
												classes : "tabletest",
												kind : "moon.Divider",
												content : "투구수"
											},
											{
												name : "reresult7",
												classes : "tabletest",
												kind : "moon.Divider",
												content : "피안타"
											},
											{
												name : "reresult8",
												classes : "tabletest",
												kind : "moon.Divider",
												content : "피홈런"
											},
											{
												name : "reresult9",
												classes : "tabletest",
												kind : "moon.Divider",
												content : "타자"
											},
											{
												name : "reresult10",
												classes : "tabletest",
												kind : "moon.Divider",
												content : "홀드"
											} ]
								},
								{
									style : "width : 130px !important;",
									components : [
											{
												classes : "tabletest",
												kind : "moon.Divider",
												name : "realobj6",
												content : ""
											},
											{
												classes : "tabletest",
												kind : "moon.Divider",
												name : "realobj7",
												content : ""
											},
											{
												name : "realobj8",
												classes : "tabletest",
												kind : "moon.Divider",
												content : ""
											},
											{
												classes : "tabletest",
												kind : "moon.Divider",
												name : "realobj9",
												content : ""
											},
											{
												classes : "tabletest",
												kind : "moon.Divider",
												name : "realobj10",
												content : ""
											} ]
								} ]
					} ]
				}
    ],
    goHome : function(inSender, inEvent) {
		this.$.player.unload();
		this.bubbleUp("onGoHome", {
			name : name
		});
		return true;
	},
	showPanel: function(inSender, inEvent) {
		var panelKind = inSender.name+"Panel";   // addBff������  addBffPanel      	
		var model = inEvent.model;
		this.$.panels.popPanels(1);
		this.$.panels.pushPanel({kind: panelKind, model: model});
		//alert(panelKind);
		return true;
	},
	Gotodetail: function(inSender, inEvent) {
		var panelKind = inSender.name+"Panel";   // addBff������  addBffPanel      	
		var model = inEvent.model;
		this.$.panels.popPanels(1);
		this.$.panels.pushPanel({kind: panelKind, model: model});
		alert(panelKind);
		return true;
	},
	realDrawer : function(inSender, inEvent) {
		this.$.drawer3.setOpen(false);
		playerinput = inSender.getContent();
		var data_player_url1 = player.indexOf(playerinput);

	},
});