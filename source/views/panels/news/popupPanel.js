
enyo.kind({
	name:"popupPanel",
	kind : "moon.Panels",
	style: "background-color:white;",
	classes : "popup_background",
	spotlight: true,
	components:[
	             {kind : "FittableRows",
	            	 components : [
	            	               {name:"backButton", kind:"moon.Image", classes : "buttonback", ontap: "goBack",onmouseout:"Selectout_back",onmouseover:"Selecton_back"},
	            	               {name:"homeButton", kind:"moon.Image", classes : "buttonhome", ontap: "goHome",onmouseout:"Selectout_home",onmouseover:"Selecton_home"},
	            	               {kind:"FittableColumns",style : "height : 100px;margin : 110px 0px 0px 70px;",
	            	            	   components:[
	            	            	               {name:"title",classes:"news_title",fit : true},
	            	            	               ]
	            	               },
	            	               {kind : "FittableColumns",style :"margin-top : 15px;margin-left : 45px;",
	            	            	   components:[
	            	            	               {name:"image", kind:"Image", style:"width : 890px;height : 517px;"}, //zoom: 50%;
	            	            	               {name:"article",classes :"article"}
	            	            	               ]
	            	               }
	            	               ]
	             }
	    
	    
	    
	    
	    
	    ],
	    Selectout_back: function(inSender, inEvent)
		   {
		      this.$.backButton.setSrc("assets/news/popback_off.jpg");   
		   },
		Selecton_back: function(inSender, inEvent)
		   {   
		      this.$.backButton.setSrc("assets/news/popback_on.jpg");   
		   },
		Selectout_home: function(inSender, inEvent)
		   {
			  this.$.homeButton.setSrc("assets/news/pophome_off.jpg");   
		   },
		Selecton_home: function(inSender, inEvent)
		   {
			  this.$.homeButton.setSrc("assets/news/pophome_on.jpg");  
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
	      jsonp.go({		  q: 'select * from html where url = "http://meeneeon.ddns.net/news1.html"'});
	      // attach responders to the transaction object
	      jsonp.response(this, "processResponse");
	      return true;
	},	
	processResponse: function(inSender, inResponse) {
		dataNews = JSON.stringify(inResponse, null, 2);
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
		this.$.article.setContent(content);
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
