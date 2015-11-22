enyo.kind({
   name:"newsPanel",
   classes:"News_background",
   kind : "moon.Panels",
   spotlight: true,
   
   components:[
        {kind: "FittableRows",// style:"background-color: black;",  //제일 왼쪽 부분, 윗부분 띄우기
          components: [
                       {kind: "FittableColumns",style: "padding-left : 1730px;padding-top : 50px",
                          components:[
                                      {kind: "FittableRows",
                                         components:[
                                                     {name : "home",kind: "moon.Image",classes:"home",ontap : "gohome",onmouseout:"Selectout_home",onmouseover:"Selecton_home"} //홈 버튼
                                                    ]
                                      }]},
                                      {kind: "FittableColumns",style : "margin-left : 100px;",
                                    	  components: [
                                    	               {kind: "FittableRows",
                                    	            	   components: [
                                    	            	                {kind : "FittableColumns",
                                    	            	                	components : [
                                    	            	                	              {kind : "moon.Image",name : "img1", classes:"Photos",ontap : "Stfashion", onmouseout:"Selectout1",onmouseover:"Selecton1"}, //사진 1
                                    	            	                	              {kind : "moon.Image",name : "img2",classes:"Photos",ontap : "Stfashion", onmouseout:"Selectout2",onmouseover:"Selecton2"}, // 사진 2
                                    	            	                	              {kind : "moon.Image",name : "img3",classes:"Photos",ontap : "Stfashion", onmouseout:"Selectout3",onmouseover:"Selecton3"}, // 사진 3
                                    	            	                	              {kind : "moon.Image",name : "img4",classes:"Photos",ontap : "Stfashion", onmouseout:"Selectout4",onmouseover:"Selecton4"}, // 사진 4
                                    	            	                	              ]
                                    	            	                },
                                    	            	                {kind : "FittableColumns", style : "margin-top : 200px;",
                                    	            	                	components : [
                                    	            	                	              {kind : "moon.Image",name : "img5",classes:"bottomPhoto",ontap : "Stfashion", onmouseout:"Selectout5",onmouseover:"Selecton5"},
                                    	            	                	              {kind : "moon.Image",name : "img6",classes:"bottomPhoto",ontap : "Stfashion", onmouseout:"Selectout6",onmouseover:"Selecton6"},
                                    	            	                	              {kind : "moon.Image",name : "img7",classes:"bottomPhoto",ontap : "Stfashion", onmouseout:"Selectout7",onmouseover:"Selecton7"},
                                    	            	                	              ]
                                    	            	                },
                                    	            	                ],
                                    	            	                },
                                    	            	{kind: "FittableRows",style:"width : 680px; height :480px;margin-left : 110px;",
                                    	            	                	components: [
                                    	            	                	             {name : "popup",style:"width : 680px; height :380px;margin-top : -50px;",  //style:"background-color: black;",
                                    	            	                	            	 components: [
                                    	            	                	            	              {name:"carousel", kind:"ImageCarousel", style:"width : 680px;height:450px;"}, // 이미지 넘기는 화면
                                    	            	                	            	              {name : "head",onload : "changedHeadLineText",style : "text-align:center;"}, // 기사 헤드라인
                                    	            	                	            	              ],
                                    	            	                	            	              ondown: "gonews"},
                                    	            	                	            	              {style:"margin-top:100px;",
                                    	            	                	            	            	  components :[
                                    	            	                	            	            	               {kind: "moon.Icon", icon: "arrowsmallleft", style:"margin-top : 10px;margin-left : 250px; color : black;",small: false, ontap: "previous"},
                                    	            	                	            	            	               {kind: "moon.Icon", icon: "arrowsmallright", style:"margin-top : 10px; color : black;",small: false, ontap: "next"},
                                    	            	                	            	            	               // 화살표
                                    	            	                	            	            	               ]
                                    	            	                	            	              },
                                    	            	                	            	              {style:"margin-top:10px;",//style:"background-color: black;",
                                    	            	                	            	            	  components :[
                                    	            	                	            	            	               {kind : "moon.Image",name : "img8", classes:"Photos",ontap : "Stfashion", onmouseout:"Selectout8",onmouseover:"Selecton8"},
                                    	            	                	            	            	               ]
                                    	            	                	            	              },
                                    	            	                	            	              {kind : "moon.BodyText",name : "info",content:"이미지를 클릭하면 상세정보가 나옵니다.",style:"font-size :15px;color : #b45b4b"},
                                    	            	                	            	              ]
                                    	            	                },
                                    	            	                ]
                                      }
                                      ]
        },
        ],
   Stfashion : function()
      {
      this.$.audio.play();
         location = "http://www.thesartorialist.com/";
         return true;
      },
   fashionnew :  function()
      {
      this.$.audio.play();
         location = "http://www.musinsa.com/index.php?m=news&cat=FASHION";
         return true;
      },
      Selecton1: function(inSender, inEvent)
	   {
	      this.$.img1.setSrc("assets/news/1_modify.jpg");   
	   },
	 Selectout1: function(inSender, inEvent)
	   {   
	      this.$.img1.setSrc("assets/news/1.jpg");   
	   },
	 Selecton2: function(inSender, inEvent)
	   {
		  this.$.img2.setSrc("assets/news/2_modify.jpg");   
	   },
	 Selectout2: function(inSender, inEvent)
	   {
		  this.$.img2.setSrc("assets/news/2.jpg");  
	   },
	 Selecton3: function(inSender, inEvent)
	   {
	      this.$.img3.setSrc("assets/news/3_modify.jpg");   
	   },
	 Selectout3: function(inSender, inEvent)
	   {
	      this.$.img3.setSrc("assets/news/3.jpg");      
	   },
	 Selecton4: function(inSender, inEvent)
	   {
	      this.$.img4.setSrc("assets/news/4_modify.jpg");   
	   },
	 Selectout4: function(inSender, inEvent)
	   {
	      this.$.img4.setSrc("assets/news/4.jpg");      
	   },
	 Selecton5: function(inSender, inEvent)
	   {
	      this.$.img5.setSrc("assets/news/5_modify.jpg");   
	   },
	 Selectout5: function(inSender, inEvent)
	   {
	      this.$.img5.setSrc("assets/news/5.jpg");      
	   },
	 Selecton6: function(inSender, inEvent)
	   {
	      this.$.img6.setSrc("assets/news/6_modify.jpg");   
	   },
	 Selectout6: function(inSender, inEvent)
	   {
	      this.$.img6.setSrc("assets/news/6.jpg");      
	   },
	 Selecton7: function(inSender, inEvent)
	   {
	      this.$.img7.setSrc("assets/news/7_modify.jpg");   
	   },
	 Selectout7: function(inSender, inEvent)
	   {
	      this.$.img7.setSrc("assets/news/7.jpg");      
	   },
	 Selecton8: function(inSender, inEvent)
	   {
	      this.$.img8.setSrc("assets/news/8_modify.jpg");   
	   },
	 Selectout8: function(inSender, inEvent)
	   {
	      this.$.img8.setSrc("assets/news/8.jpg");      
	   },
	 Selecton_home: function(inSender, inEvent)
	   {
	      this.$.home.setSrc("assets/news/home_on.png");   
	   },
	 Selectout_home: function(inSender, inEvent)
	   {
	      this.$.home.setSrc("assets/news/home_off.png");      
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
      this.$.img1.setSrc("assets/news/1.jpg");
      this.$.img2.setSrc("assets/news/2.jpg");
      this.$.img3.setSrc("assets/news/3.jpg");
      this.$.img4.setSrc("assets/news/4.jpg");
      this.$.img5.setSrc("assets/news/5.jpg");
      this.$.img6.setSrc("assets/news/6.jpg");
      this.$.img7.setSrc("assets/news/7.jpg");
      this.$.img8.setSrc("assets/news/8.jpg");
      this.fetch();
      url = [
             "http://pic.styleindex.co.kr/syof/editor/201511/8881fa1e8f90227426c25f935f77b1d2.jpg",
             "http://pic.styleindex.co.kr/syof/editor/201511/5be09fcf8aadbbe65fc281d42ccd6021.jpg",
             "http://pic.styleindex.co.kr/syof/editor/201511/66375737f941ce5da22441d24d88234c.jpg",
             "http://pic.styleindex.co.kr/syof/editor/201511/3a6dcb3c70923dbea4314dd2b15c9be8.jpg",
             "http://pic.styleindex.co.kr/syof/editor/201511/dbad2eb2494a93c2050e879869473a75.jpg"
             ];
      this.$.carousel.setImages(url);
      
       return true;
      },
      
      
      previous: function(inSender, inEvent) {
         var index = this.$.carousel.getIndex();
         this.$.carousel.previous();
         if (index == 0)
         {
            this.$.carousel.setIndex(4);
         }
         this.changedHeadLineText();

         
      },
      next: function(inSender, inEvent) {
         var index = this.$.carousel.getIndex();
         this.$.carousel.next();
         if (index == 4)
         {
            this.$.carousel.setIndex(0);
         }
         this.changedHeadLineText();
      },
      fetch: function() {
            var jsonp = new enyo.JsonpRequest({
               url: "http://query.yahooapis.com/v1/public/yql?format=json",
               callbackName: "callback"
            });
            // send parameters the remote service using the 'go()' method
            jsonp.go({        q: 'select * from html where url = "http://meeneeon.ddns.net/news1.html"'});
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
               
               condata = data.substring(data.indexOf("헤드1"));   //substring(3) -> 0~3번째 문자열을 뺀 나머지를 출력
               head0 = condata.substring(condata.indexOf("h4")+6,condata.indexOf("끝"));
               
               condata = data.substring(data.indexOf("헤드2"));   //substring(3) -> 0~3번째 문자열을 뺀 나머지를 출력
               head1 = condata.substring(condata.indexOf("h4")+6,condata.indexOf("끝"));
               
               condata = data.substring(data.indexOf("헤드3"));   //substring(3) -> 0~3번째 문자열을 뺀 나머지를 출력
               head2 = condata.substring(condata.indexOf("h4")+6,condata.indexOf("끝"));
               
               condata = data.substring(data.indexOf("헤드4"));   //substring(3) -> 0~3번째 문자열을 뺀 나머지를 출력
               head3 = condata.substring(condata.indexOf("h4")+6,condata.indexOf("끝"));
               
               condata = data.substring(data.indexOf("헤드5"));   //substring(3) -> 0~3번째 문자열을 뺀 나머지를 출력
               head4 = condata.substring(condata.indexOf("h4")+6,condata.indexOf("끝"));
               /*
               condata = data.substring(data.indexOf("스트릿1"));
               img1 = condata.substring(condata.indexOf("스트릿사진")+9,condata.indexOf("jpg")+3);
               
               condata = data.substring(data.indexOf("스트릿2"));
               img2 = condata.substring(condata.indexOf("스트릿사진")+9,condata.indexOf("jpg")+3);
               
               condata = data.substring(data.indexOf("스트릿3"));
               img3 = condata.substring(condata.indexOf("스트릿사진")+9,condata.indexOf("jpg")+3);
               
               condata = data.substring(data.indexOf("패션뉴스"));
               fsimg = condata.substring(condata.indexOf("패션뉴스사진")+10,condata.indexOf("jpg")+3);
               fshead = condata.substring(condata.indexOf("h4")+6,condata.indexOf("끝"));
               */
               //this.$.img4.setSrc(fsimg);
               //this.$.text1.setContent(fshead);
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
  

