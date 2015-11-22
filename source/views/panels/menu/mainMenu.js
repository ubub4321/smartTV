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
	classes: "panels-sample-flickr-panels1",
	pattern:"activity",
	spotlight: true,
	components: [{	
					kind: "FittableRows",
					components:[{
						kind:"FittableColumns",
						components:[{
										kind: "FittableRows",
										components:[{
											name: "twit",kind:"moon.Image",classes :"twitb", onclick: "gotwit"
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
																	name: "face",kind:"moon.Image",classes :"faceb", onclick: "goface"
																	}]
													}]
									},
									{
										kind:"FittableColumns",
										components:[{
														kind: "FittableRows",
														components:[{
																	name: "select",kind:"moon.Image",classes :"playb", onclick: "imageClick",
																	}]
													}]
									},
									{
										kind:"FittableColumns",
										components:[{
														kind: "FittableRows",
														components:[{
																	name: "news",kind:"moon.Image",classes :"newsb", onclick: "imageClick"
																	},
																	
														]
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
	         	goface : function()
	         	{
	         	      location = "https://www.facebook.com/hashtag/%ED%8C%A8%EC%85%98?fref=ts";
	         	      return true;
	         	},
	        	gotwit : function()
	         	{
	         	      location = "https://twitter.com/search?q=fashion&src=tyah";
	         	      return true;
	         	}
});











