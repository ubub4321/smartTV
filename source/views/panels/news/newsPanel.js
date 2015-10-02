enyo.kind({
	name:"newsPanel",
	classes:"News_background",
	kind : "moon.Panels",
	spotlight: true,
	components:[
	     {kind: "FittableRows", style:"margin-left: 100px; margin-top : 150px;",  //제일 왼쪽 부분, 윗부분 띄우기
	    	components: [
	    	             {kind: "FittableColumns",
	    	            	 components:[
	    	            	             {kind: "FittableRows",
	    	            	            	 components:[
	    	            	            	             {kind: "moon.Image",classes:"home",ontap : "gohome"}
	    	            	            	            ]
	    	            	             }]},
	    	             
            {kind: "FittableColumns", // 왼쪽 띄워진 부분부터 column으로 묶어줌
            	components: [
	            {kind: "FittableRows",style:"margin-left:120px;width : 420px; height :410px;",
	            	components: [
	                {name : "popup",style:"width : 620px; height :300px;", // style:"background-color: black;"
	                	components: [
		                {name:"carousel", kind:"ImageCarousel", style:"width : 620px;height:400px;"},
		                {name : "head",onload : "changedHeadLineText",},
		                ],  
		                ondown: "gonews"},
		                {style:"margin-top:180px;",
		                	components :[
		                	             {kind: "moon.Icon", icon: "arrowsmallleft", style:"margin-top : 10px;margin-left : 250px;",small: false, ontap: "previous"},
		         		                 {kind: "moon.Icon", icon: "arrowsmallright", style:"margin-top : 10px;",small: false,small: false, ontap: "next"},
		         		                ]
		                }
	                
	                ]},

            ],
            
            },
       /* {kind: "FittableRows",
            	components: [
            	             {kind: "FittableColumns", style:"margin-left:80px;margin-top:150px;",
            	            	 components: [
            	            	              {kind : "Image" ,  name : "street" ,style: "text-align:center;width : 250px; height : 300px;", ontap : "Stfashion"},
            	            	              {content: "Street Fashion",style:"margin-left:80px;"},
            	            	              { kind: "FittableRows",
             	             	            	 components : [
             	             	            	               {name : "StFashion",style:"margin-top:30px;margin-left:-200px;"},
             	             	            	               ]}
            	            	              
                                              ]
            	             },
            	             {kind: "FittableColumns", style:"margin-top:10px;",
            	            	 components: [
            	             	             {kind : "Image" ,  name : "fashionnews" ,style: "text-align:center;width : 250px; height : 300px;margin-left:80px;", ontap : "fashionnew"},
            	             	             {name : "fashioncontent",classes : "news-font"},
            	             	            { kind: "FittableRows",
            	             	            	 components : [
            	             	            	               {name : "fashiontext",classes : "news-font",style:" margin-left:-370px; margin-top : 50px;"},
            	             	            	               //{name: "flickrSearch", kind: "enyo.sample.PanelsFlickrSearch", onResults: "searchResults"}
            	             	            	               ]}
            	             	            	 
            	             	             ]
            	             },

            	             ]
            
        
        },    */
            ]}, 

	],
	gohome: function(inSender, inEvent){
		this.bubbleUp("onGoHome");
		return true;
	},
	gonews : function(inSender, inEvent)
	{
		var index = this.$.carousel.getIndex();
		var name = inSender.name;
		alert(inSender.name);
		enyo.log(name);
		this.bubbleUp("onShowPanel", {name:name});
		return true;
	},

	/*gonews: function(inSender, inEvent) {
		var panelKind = inSender.name+"Panel";   // addBff������  addBffPanel      	
		var model = inEvent.model;
		alert(inSender.name);
		this.$.panels.popPanels(1);
		this.$.panels.pushPanel({kind: panelKind, model: model});
		alert(panelKind);
		return true;
	},*/
	
	changedHeadLineText: function(inSender,inEvent){
		var index = this.$.carousel.getIndex(); 
		if(0 == index%5)
		{
	    	this.$.head.setContent(head0); // 
	    }
		else if(1 == index%5)
		{
			this.$.head.setContent(head1); // 
		}
		else if(2 == index%5)
		{
			this.$.head.setContent(head2); // 
		}
		else if(3 == index%5)
		{
			this.$.head.setContent(head3); // 
		}
		else if(4 == index%5)
		{
			this.$.head.setContent(head4); // 
		}
    	return true;
	},
	
	create: function(inSender, inEvent){
		this.inherited(arguments);
		this.fetch();
		url = [
		       "http://img.syoff.com/webdata/20150930/20150930183905_5874.jpg",
		       "http://img.syoff.com/webdata/20150930/20150930174911_1202.jpg",
		       "http://img.syoff.com/webdata/20150930/20150930123315_2427.jpg",
		       "http://img.syoff.com/webdata/20150925/20150925191841_8965.jpg",
		       "http://img.syoff.com/webdata/20150925/20150925160522_5799.jpg"
		       ];
		this.$.carousel.setImages(url);
				
		 return true;
		},
		
		
		previous: function(inSender, inEvent) {
			this.$.carousel.previous();
			this.changedHeadLineText();
		},
		next: function(inSender, inEvent) {
			this.$.carousel.next();
			this.changedHeadLineText();
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
			      // do something with it
			      data = JSON.stringify(inResponse, null, 2);
			      //alert(data.length);
			      //this.$.textArea.setValue(data);
			      // parsing of KBO order inform.
			      this.parsernews();
			      return true;
		   },
			   parsernews: function(){
			      
			      condata = data.substring(data.indexOf("헤드1"));	//substring(3) -> 0~3번째 문자열을 뺀 나머지를 출력
			      head0 = condata.substring(condata.indexOf("h4")+6,condata.indexOf("끝"));
			      
			      condata = data.substring(data.indexOf("헤드2"));	//substring(3) -> 0~3번째 문자열을 뺀 나머지를 출력
			      head1 = condata.substring(condata.indexOf("h4")+6,condata.indexOf("끝"));
			      
			      condata = data.substring(data.indexOf("헤드3"));	//substring(3) -> 0~3번째 문자열을 뺀 나머지를 출력
			      head2 = condata.substring(condata.indexOf("h4")+6,condata.indexOf("끝"));
			      
			      condata = data.substring(data.indexOf("헤드4"));	//substring(3) -> 0~3번째 문자열을 뺀 나머지를 출력
			      head3 = condata.substring(condata.indexOf("h4")+6,condata.indexOf("끝"));
			      
			      condata = data.substring(data.indexOf("헤드5"));	//substring(3) -> 0~3번째 문자열을 뺀 나머지를 출력
			      head4 = condata.substring(condata.indexOf("h4")+6,condata.indexOf("끝"));
			      
			      
			      
			      
			      //content1 = content1.substring().replace(/[!,",\\,\\r,\\n,\\"]/gi,'');
			      this.$.head.setContent(head0);
			      return true;
			      
			   },
			   
});
  