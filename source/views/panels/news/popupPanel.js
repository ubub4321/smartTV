
enyo.kind({
	name:"popupPanel",
	kind : "moon.Panel",
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
	      jsonp.go({		  q: 'select * from html where url = "http://meeneeon.ddns.net:8080/news1.html"'});
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

	    this.$.title.setContent(head);
		this.$.image.setSrc(url[index]);
		//같은 폴더 내에 이미 한번 실행된 js파일에서 gonews의 index변수로 해당 js파일에서 변수가 없어도 사용 가능하다.
		this.$.detail.setContent(content);
    	return true;
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
