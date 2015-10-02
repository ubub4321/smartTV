/**
	For simple applications, you might define all of your views in this file.  
	For more complex applications, you might choose to separate these kind definitions 
	into multiple files under this folder.
*/

enyo.kind({
	name: "mainMenuPanel",
	kind:"FittableColumns",
	style:"text-align:center;",
	ontimeupdate : "timeChanged",
	classes: "panels-sample-flickr-panels",
	pattern:"activity",
	components: [{	
					kind: "FittableRows",
					components:[{
						kind:"FittableColumns",
						components:[{
										kind: "FittableRows",
										components:[{
											name: "twit",kind:"moon.Image",classes :"twitb", onclick: "imageClick"
													}]
									}]
					},
					{
						kind:"FittableColumns",
						components:[{
										kind: "FittableRows",
										components:[{
													name: "wish",kind:"moon.Image",classes :"wishb", onclick: "imageClick"
													}]
									}]
					}
					]
				 },
				// {
				//	 kind: "FittableRows",
				//	 classes:"ani",
				//		components:[{
				//						kind:'moon.Image',src:'assets/images.jpg'
				//		}]
				// },
				 {
					 kind: "FittableRows",
						components:[{
										kind:"FittableColumns",
										components:[{
														kind: "FittableRows",
														components:[{
																	name: "face",kind:"moon.Image",classes :"faceb", onclick: "imageClick"
																	}]
													}]
									},
									{
										kind:"FittableColumns",
										components:[{
														kind: "FittableRows",
														components:[{
																	name: "play",kind:"moon.Image",classes :"playb", onclick: "imageClick"
																	}]
													}]
									},
									{
										kind:"FittableColumns",
										components:[{
														kind: "FittableRows",
														components:[{
																	name: "news",kind:"moon.Image",classes :"newsb", onclick: "imageClick"
																	}]
													}]
									},
									{
										kind:"FittableColumns",
										components:[{
														kind: "FittableRows",
														components:[{
																	name: "popup",kind:"moon.Image",classes :"newtsb", onclick: "imageClick"
																	}]
													}]
									},
									]
				 }],
	         	imageClick: function(inSender, inEvent) {
	         		//alert(inSender.name); // 
	         		var name = inSender.name;
	         		this.bubbleUp("onShowPanel", {name:name});
	         		return true;
	         	},
	         	timeChanged: function(inSender, inEvent) {
	        		this.$.videoPosition.setContent(Math.floor(inEvent.currentTime) + "s");
	        		
	        		if (Math.floor(inEvent.currentTime)==2)
	        		{
	        			this.$.Image.setSrc("http://221.165.119.4/images/lajoonmo_02.PNG");
	        		}
	        		if(Math.floor(inEvent.currentTime)==5)
	        		{
	        			this.$.player.setCurrentTime(1)
	        		}
	        		return true;
	        	},

});











