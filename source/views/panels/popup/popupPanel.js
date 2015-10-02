enyo.kind({
	name:"popupPanel",
	//kind : "moon.Panels",
	style: "background-color:white;",
	spotlight: true,
	components:[
	    {kind:"FittableColumns", fit:true,  style:"height:150px; padding-top:20px;",classes:"news_title", components:[
	        {name:"title", fit:true, },
	        {kind: "moon.Item", style:"width:120px; margin-right:10px;",  ontap: "goBack", components: [
	            {name:"backButton", kind:"Image", classes: "buttonback"}
	        ]},
	        {kind: "moon.Item", style:"width:120px; margin-right:35px",  ontap: "goHome", components: [
	            {name:"homeButton", kind:"moon.Image", classes : "buttonhome"}
	        ]}
	    ]},
	    {kind:"FittableRows", components:[
	        {style:"text-align:center; margin-top:20px;", components:[
	            {name:"image", kind:"Image"}
	        ]},
		    {kind: "moon.Scroller", classes: "news_scroller", vertical:"scroll", components:[
		        {name:"spinner", kind:"moon.Spinner", center:true, style:"margin-left:960px; margin-top:200px;"},      
	            {name:"detail", allowHtml:true,}
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
	      jsonp.go({		  q: 'select * from html where url = "http://221.165.119.4/news1.html"'});
	      // attach responders to the transaction object
	      jsonp.response(this, "processResponse");
	      return true;
	},	
	processResponse: function(inSender, inResponse) {
		dataNews = JSON.stringify(inResponse, null, 2);
//		this.$.detail.setContent(dataNews);
		this.$.spinner.hide();
		this.parserNewsPage();
		return true;
	},
	parserNewsPage: function(){
		condata = dataNews.substring(dataNews.indexOf("헤드1"));	//substring(3) -> 0~3번째 문자열을 뺀 나머지를 출력
	    head = condata.substring(condata.indexOf("h4")+6,condata.indexOf("끝"));
	    content = condata.substring(condata.indexOf("content")+11,condata.indexOf("...")+1);
    	
		this.updateUI();
    	return true;
	},
	updateUI: function(){
		this.$.title.setContent(head);
		//this.$.image.setSrc(url[index]);
		this.$.detail.setContent(content);
	},
	goHome: function(inSender, inEvent){
		this.bubbleUp("onGoHome");
		return true;
	},
	goBack: function(inSender, inEvent) {
		this.bubbleUp("onShowPanel", {name:"newsPanel"});
		return true;
	},
});