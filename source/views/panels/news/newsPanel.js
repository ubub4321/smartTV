enyo.kind({
	name:"newsPanel",
	classes:"News_background",
	kind : "moon.Panels",
	components:[
	     {kind: "FittableColumns", style:"margin-left: 100px; margin-top : 150px;",  //제일 왼쪽 부분, 윗부분 띄우기
	    	components: [
	    	             {kind: "moon.Image",classes:"home",ontap : "gohome"},
	    
	    {kind: "FittableColumns", style:" margin-left: -50px; margin-top : 50px;",  //제일 왼쪽 부분, 윗부분 띄우기
	    	components: [
            {kind: "FittableColumns", // 왼쪽 띄워진 부분부터 column으로 묶어줌
            	components: [
	            {kind: "FittableRows",style:"",
	            	components: [
	                {style:"width : 650px; height : 700px;margin-top : 100px;", fit : true, //background-color: black;
	                	components: [
		                {name:"carousel", kind:"ImageCarousel", style:"height:450px;"},
		                {name : "head" ,classes:"head_back", onload : "changedHeadLineText"},
		                {kind: "moon.Icon", icon: "arrowsmallleft", style:"margin-top : 10px;margin-left : 250px;",small: false, classes:"headLine_arrow", small: false, ontap: "previous"},
		                {kind: "moon.Icon", icon: "arrowsmallright", style:"margin-top : 10px;",small: false, classes:"headLine_arrow", small: false, ontap: "next"},
		                ],  
		                ondown: "gonews"}, 
	                
	                ]},

            ],
            
            },
        {kind: "FittableRows",
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
            	             	             {/*kind : "moon.LabeledTextItem",*/name : "fashioncontent",classes : "news-font"},
            	             	            { kind: "FittableRows",
            	             	            	 components : [
            	             	            	               {/*kind : "moon.LabeledTextItem",*/name : "fashiontext",classes : "news-font",style:" margin-left:-370px; margin-top : 50px;"},
            	             	            	               //{name: "flickrSearch", kind: "enyo.sample.PanelsFlickrSearch", onResults: "searchResults"}
            	             	            	               ]}
            	             	            	 
            	             	             ]
            	             },

            	             ]
            
        
        },            	         
	    ]},   ]}, 

	],
	gonews : function(inSender, inEvent)
	{
		var index = this.$.carousel.getIndex();
		var name = inSender.name;
		alert(inSender.name);
		this.bubbleUp("onShowPanel", {name:name});
		return true;
	},
	
	changedHeadLineText: function(inSender,inEvent){
		var index = this.$.carousel.getIndex(); 
		if(0 == index%5)
		{
	    	this.$.head.setContent(head1); // 
	    }
		else if(1 == index%5)
		{
			this.$.head.setContent(head2); // 
		}
		else if(2 == index%5)
		{
			this.$.head.setContent(head3); // 
		}
		else if(3 == index%5)
		{
			this.$.head.setContent(head4); // 
		}
		else if(4 == index%5)
		{
			this.$.head.setContent(head5); // 
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
			      head1 = condata.substring(condata.indexOf("h4")+6,condata.indexOf("끝"));
			      content1 = condata.substring(condata.indexOf("content")+11,condata.indexOf("...")+1);
			      
			      condata = data.substring(data.indexOf("헤드2"));	//substring(3) -> 0~3번째 문자열을 뺀 나머지를 출력
			      head2 = condata.substring(condata.indexOf("h4")+6,condata.indexOf("끝"));
			      content2 = condata.substring(condata.indexOf("content")+11,condata.indexOf("...")+1);
			      
			      condata = data.substring(data.indexOf("헤드3"));	//substring(3) -> 0~3번째 문자열을 뺀 나머지를 출력
			      head3 = condata.substring(condata.indexOf("h4")+6,condata.indexOf("끝"));
			      content3 = condata.substring(condata.indexOf("content")+11,condata.indexOf("...")+1);
			      
			      condata = data.substring(data.indexOf("헤드4"));	//substring(3) -> 0~3번째 문자열을 뺀 나머지를 출력
			      head4 = condata.substring(condata.indexOf("h4")+6,condata.indexOf("끝"));
			      content4 = condata.substring(condata.indexOf("content")+11,condata.indexOf("...")+1);
			      
			      condata = data.substring(data.indexOf("헤드5"));	//substring(3) -> 0~3번째 문자열을 뺀 나머지를 출력
			      head5 = condata.substring(condata.indexOf("h4")+6,condata.indexOf("끝"));
			      content5 = condata.substring(condata.indexOf("content")+11,condata.indexOf("...")+1);
			      
			      
			      
			      
			      content1 = content1.substring().replace(/[!,",\\,\\r,\\n,\\"]/gi,'');
			      content2 = content2.substring().replace(/[!,",\\,\\r,\\n,\\"]/gi,'');
			      content3 = content3.substring().replace(/[!,",\\,\\r,\\n,\\"]/gi,'');
			      content4 = content4.substring().replace(/[!,",\\,\\r,\\n,\\"]/gi,'');
			      content5 = content5.substring().replace(/[!,",\\,\\r,\\n,\\"]/gi,'');
			      this.$.head.setContent(head1);
			      return true;
			      
			   },
			   
});
  