
enyo.kind({
	name:"popupPanel",
<<<<<<< HEAD:source/views/panels/popup/popupPanel.js
	classes:"backg",
=======
	kind : "moon.Panel",
>>>>>>> 17a57f88c13b37a7bef05f49a145f733759379e0:source/views/panels/news/popupPanel.js
	style: "background-color:white;",
	spotlight: true,
	components:[
	    {kind:"FittableColumns",classes:"news_title",  
	    	components:[ //height:150px; style:"padding-top:20px;"
	        {name:"title", fit:true, },
	        {kind: "moon.Item", style:"width:120px; margin-right:15px;",  ontap: "goBack", components: [
	            {name:"backButton", kind:"moon.Image", classes: "buttonback"}
	        ]},
	        {kind: "moon.Item", style:"width:120px; margin-right:35px",  ontap: "goHome", components: [
	            {name:"homeButton", kind:"moon.Image", classes : "buttonhome"}
	        ]}
	    ]},
	    {kind:"FittableRows",
	    	components:[
	        {style:"text-align:center; margin-top:10px;", 
	        	components:[
	            {name:"image", kind:"Image", style:"background-color:black;zoom:80%;",},
	            
	        ]},
		   {kind: "moon.Scroller", classes: "news_scroller", vertical:"scroll", components:[
		        {name:"spinner", kind:"moon.Spinner", center:true},      
	            {name:"detail"}
	        ]}
        ]}
    ],
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
	      jsonp.go({		  q: 'select * from html where url = "http://meeneeon.ddns.net/news1.html"'});
	      // attach responders to the transaction object
	      jsonp.response(this, "processResponse");
	      return true;
	},	
	processResponse: function(inSender, inResponse) {
		dataNews = JSON.stringify(inResponse, null, 2);
		this.$.spinner.hide();
		this.parserNewsPage();
		return true;
	},
	parserNewsPage: function(){
		getin = '헤드'+(index+1);
		condata = dataNews.substring(dataNews.indexOf(getin));	//substring(3) -> 0~3번째 문자열을 뺀 나머지를 출력
	    head = condata.substring(condata.indexOf("h4")+6,condata.indexOf("끝"));
	    content = condata.substring(condata.indexOf("content")+11,condata.indexOf("...")+1);

		this.updateUI();
    	return true;
	},
	updateUI: function(){
		this.$.title.setContent(head);
		this.$.image.setSrc(url[index]);
		this.$.detail.setContent(content);
	},
	goHome: function(inSender, inEvent){
		this.bubbleUp("onGoHome");
		return true;
	},
	goBack: function(inSender, inEvent) {
		this.bubbleUp("onShowPanel", {name:"news"});
		return true;
	},
});