enyo.kind({
		   name: "detail_1Panel",
		   classes: "moon enyo-fit enyo-unselectable",
		   components: [{
                kind : "moon.Panels",
              //  pattern : "alwaysviewing",
                animate : false,
                classes : "enyo-fit",
                showing : true,
                
                components : [{
                          	classes: "moon enyo-unselectable enyo-fit;moon-panels.always-viewing .moon-panels-panel-scrim;",
                        	components: [
                        		{kind: 'moon.Scroller', classes: "enyo-fill", components: [
                        			{
                        				components: [{kind: "moon.Divider", spotlight: true,
                        						components:[{
    												components : [
    													{
    														kind : "moon.TooltipDecorator",
    														style : "display:inline-block",
    														components :[
	    													{
																name : "homeButton",
																kind : "moon.Image",
																style : " height : 40px;margin-left:10px;",
																src : "assets/HomeButton.png",
																ontap : "goback"
	    													},
	    													{
	    														kind : "moon.Tooltip",
	    														content : "뒤로가기",
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
	                             								src: "assets/1.jpg",
	                             								ontap:"showPanel"
	        												},
	    													{
	    														kind : "moon.Tooltip",
	    														content : "상세정보 확인",
	    														showDelay : 2
	    													}]
        												},
        												
        												{
    														kind: "moon.Divider", spotlight: true,
        												}],
                        						}]
                        					},
                        				]
                        			}
                        		]}
                        	],
                		}]
		   }],
		        goback: function(inSender, inEvent) {
				var panelKind = inSender.name+"Panel";   // addBff������  addBffPanel      	
				var model = inEvent.model;
				this.$.panels.popPanels(1);
				this.$.panels.pushPanel({kind: playmenuPanel, model: model});
				//alert(panelKind);
				return true;
			},
});