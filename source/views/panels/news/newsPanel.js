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
	    	            	             
	    	             
            {kind: "FittableColumns", //style:"background-color: black;",// 왼쪽 띄워진 부분부터 column으로 묶어줌
            	components: [
	            {kind: "FittableRows",style:"margin-left:220px;padding-top:50px;width : 420px; height :410px;",
	            	components: [
	                {name : "popup",style:"width : 620px; height :300px;", // style:"background-color: black;"
	                	components: [
		                {name:"carousel", kind:"ImageCarousel", style:"width : 620px;height:420px;"},
		                {name : "head",onload : "changedHeadLineText",},
		                ],  
		                ondown: "gonews"},
		                
		                {style:"margin-top:180px;",
		                	components :[
		                	             {kind: "moon.Icon", icon: "arrowsmallleft", style:"margin-top : 10px;margin-left : 250px;",small: false, ontap: "previous"},
		         		                 {kind: "moon.Icon", icon: "arrowsmallright", style:"margin-top : 10px;",small: false,small: false, ontap: "next"},
		         		                 
		         		                ]
		                },
		                {kind : "moon.BodyText",name : "info",content:"이미지를 클릭하면 상세정보가 나옵니다.",style:"font-size :15px;padding-top:80px;color : #b45b4b"},
		                
	                
	                ]},
	                {kind : "moon.Image",name : "img1",style:"margin-left : 800px;padding-top:270px;zoom:30%;",ontap : "Stfashion"},
	                {kind : "moon.Image",name : "img2",style:"padding-top:270px;zoom:30%;",ontap : "Stfashion"},
	                {kind : "moon.Image",name : "img3",style:"padding-top:270px;zoom:30%;",ontap : "Stfashion"},
	                
	                {kind : "moon.Image",name : "img4",classes : "fsnew",ontap : "fashionnew"},
	                {kind : "moon.BodyText",name : "text",classes : "fstext"},

            ],
            },
            ]}, 

	],
	Stfashion : function()
	   {
	      location = "http://www.thesartorialist.com/";
	      return true;
	   },
	fashionnew :  function()
	   {
	      location = "http://www.musinsa.com/index.php?m=news&cat=FASHION";
	      return true;
	   },
	   
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
		      jsonp.go({		  q: 'select * from html where url = "http://meeneeon.ddns.net:8080/news1.html"'});
		      // attach responders to the transaction object
		      jsonp.response(this, "processResponse");
		      return true;
		   },
		   processResponse: function(inSender, inResponse) {
			      data = JSON.stringify(inResponse, null, 2);
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
			      
			      condata = data.substring(data.indexOf("스트릿1"));
			      img1 = condata.substring(condata.indexOf("스트릿사진")+9,condata.indexOf("jpg")+3);
			      
			      condata = data.substring(data.indexOf("스트릿2"));
			      img2 = condata.substring(condata.indexOf("스트릿사진")+9,condata.indexOf("jpg")+3);
			      
			      condata = data.substring(data.indexOf("스트릿3"));
			      img3 = condata.substring(condata.indexOf("스트릿사진")+9,condata.indexOf("jpg")+3);
			      
			      condata = data.substring(data.indexOf("패션뉴스"));
			      fsimg = condata.substring(condata.indexOf("패션뉴스사진")+10,condata.indexOf("jpg")+3);
			      fshead = condata.substring(condata.indexOf("h4")+6,condata.indexOf("끝"));
			      //article = condata.substring(condata.indexOf("기사")+6,condata.indexOf("...")+3);
			      

			      this.$.img1.setSrc(img1);
			      this.$.img2.setSrc(img2);
			      this.$.img3.setSrc(img3);
			      this.$.img4.setSrc(fsimg);
			      this.$.text.setContent(fshead);
			      this.$.head.setContent(head0);
			      return true;
			      
			   },
			gohome: function(inSender, inEvent){
					this.bubbleUp("onGoHome");
					return true;
				},
			gonews : function(inSender, inEvent)
				{
					index = this.$.carousel.getIndex();
					var name = inSender.name;
					this.bubbleUp("onShowPanel", {name:name});
					return true;
				},
				
			   
});
  
