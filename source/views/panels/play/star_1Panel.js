//프로듀사 영상의 옷이 저장된 DB //num, program, program_start_time, program_end_time, imgSrc, address, price
var clothesArray
var wishList;
var tableCount;

enyo.kind({
   name: "star_1Panel",
   classes: "moon enyo-fit enyo-unselectable",
   components: [{
      name : "player",
      kind : "enyo.Video",
      classes:"container-video",
      src : "star_1.mp4", 
      preload : "auto",
      autoplay : true,
      loop : true,
      showControls : true,
   }, 
   {

      name : "panels",
      kind : "moon.Panels",
      animate : false,
      pattern : "alwaysviewing",
      classes : "enyo-fit",
      showing : false,
      components : [{ 
         autoNumber : false,
         components: [
                      {
                         /*classes : "palyback",*/
                         components: [
                                      {kind: 'enyo.Scroller', classes : "enyo-fit",
                                         components: [{      
                                        	 components : [{kind:"FittableRows",							
		            	            			  components :[{name:"wish_7",kind:"moon.Image",style:"margin-left:620px;",src:"assets/play/towishlist.png",classes:"gtwish",ontap:"imageClick",onmouseout:"Selectout_wish",onmouseover:"Selecton_wish"},

                                                            {
                                                               name : "homeButton",
                                                               kind:"moon.Image",
                                                               src:"assets/play/back.png",
                                                               classes:"resize_back",
                                                               ontap : "goBack",
                                                               style:"margin-left:-10px;",
                                                               onmouseout:"Selectout",
                                                               onmouseover:"Selecton"
                                                            }
                                                            ]
                                            },
                                            {     
                                               name : "logo",
                                               kind : "moon.Image",
                                               classes : "logo",
                                               style : "margin-bottom:300px;",
                                               src : "assets/logo.png"
                                            },
                                            {
                                               kind: "moon.Divider", spotlight: true,
                                            },

                                            {
                                               name: "detail_1",
                                               kind: "moon.Image",
                                               classes : "imagepanel",
                                               style : "margin-left:210px;",
                                               ontap:"realDrawer1"
                                            },
                                            {
                                               name : "drawer1",
                                               kind : "enyo.Drawer",
                                               open : false,
                                               components : [ {
                                                  classes : "moon-hspacing fittable-sample-box fittable-sample-mtb",
                                                  style : "height : 500px; color: white;",
                                                  components : [
                                                                {
                                                                   kind: 'FittableRows',
                                                                   classes: 'enyo-fit;',
                                                                   components: [
                                                                                {kind: 'FittableRows', classes: 'fittable-sample-column', style : "width : 130px !important;",
                                                                                   components: [{
                                                                                      name : "reresult1_1",
                                                                                      classes : "table",
                                                                                      style : "margin-left:300px;",

                                                                                   },
                                                                                   {
                                                                                      name : "reresult1_2",
                                                                                      classes : "table",
                                                                                      style : "margin-left:300px;",

                                                                                   }]
                                                                                },
                                                                                {kind: 'FittableRows', classes: 'fittable-sample-column', style : "width : 130px !important;",
                                                                                   components: [{
                                                                                      name: "back1",
                                                                                      kind: "moon.Image",
                                                                                      style : "margin-left:180px;margin-top:40px",
                                                                                      src: "assets/back.png",
                                                                                      ontap:"backtoImage1",
                                                                                      onmouseout:"Selectout1_1",
                                                                                      onmouseover:"Selecton1_1"
                                                                                   },
                                                                                   {
                                                                                      name: "addtowishlist1",
                                                                                      kind: "moon.Image",
                                                                                      style : "margin-left:40px;margin-top:40px",
                                                                                      src: "assets/addtowishlist.png",
                                                                                      ontap:"buttonTapped1",
                                                                                       onmouseout:"Selectout1_2",
                                                                                      onmouseover:"Selecton1_2"
                                                                                   },
                                                                                   {
                                                                                      name: "close1",
                                                                                      kind: "moon.Image",
                                                                                      style : "margin-left:40px;margin-top:40px",
                                                                                      src: "assets/close.jpg",
                                                                                      ontap:"closeDrawer1",
                                                                                      onmouseout:"Selectout1_3",
                                                                                      onmouseover:"Selecton1_3"
                                                                                   },
                                                                                   {name: "flickrSearch", kind: "enyo.sample.PanelsFlickrSearchForstar1", onResults: "searchResults"}
                                                                                   
                                                                                   ]
                                                                                },
                                                                                {kind: 'FittableRows', classes: 'fittable-sample-column', style : "width : 130px !important;",
                                                                                   components: [{
                                                                                      name: "wish_toast",
                                                                                      kind: "moon.BodyText",
                                                                                      classes : "toast_font",
                                                                                      style : "margin-left:270px;",
                                                                                   }]
                                                                                }
                                                                                ]
                                                                }]
                                               } ]
                                            },
                                            
                                            ],


                                         }
                                         ]
                                      }
                                                       ]}
                      ],
      },
      ]
   },

   ],
   rendered: enyo.inherit(function(sup) {
         return function() {
            sup.apply(this, arguments);
            this.search();
            
         };
      }),
      search: function() {
            //this.searchText = this.$.searchInput.getValue();
            this.page = 0;
            this.results = [];
            //this.$.searchSpinner.show();
            this.$.flickrSearch.search(this.searchText);
            
         },
         searchResults: function(inSender, inResults) {
               //this.$.searchSpinner.hide();
               //this.$.moreSpinner.hide();
               this.results = this.results.concat(inResults);
               this.show();
            },
   show: function(){
      this.$.reresult1_1.setContent(clothesArray[0][1]); 

      this.$.reresult1_2.setContent("￦ "+clothesArray[0][8]); 

      this.$.detail_1.setSrc(clothesArray[0][6]);

      //----------------------------------------------------------------------------------------------------------   
   },buttonTapped1: function(inSender, inEvent) {  
       this.$.wish_toast.setContent("추가 되었습니다");
      this.ajaxFunction(0);
   },ajaxFunction : function(num){
      var str=""; //= "\'qqqqqqq\'";  //0번째 array를 가져온다
      for(j=0; j<10; j++)
      {
         if(j==9)
            str = str+ "\'"+clothesArray[num][j]+"\'";
         else
            str = str+ "\'"+clothesArray[num][j]+"\',";
         while(true)
         {
            if(str.indexOf("&")==-1)
               break;
            str = str.replace('&', '%26');
         }
      }
      //this.$.text1.setContent(str);
      this.showUser(str);
   }, showUser : function(str) {
      if (str == "") {
         document.getElementById("txtHint").innerHTML = "";
         return;
      } else { 
         if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
         } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
         }
         xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
            }
         }
         //%26

         xmlhttp.open("GET","http://meeneeon.ddns.net/insert_sora.php?q="+str,true);


         xmlhttp.send();
      }
   },
	imageClick: function(inSender, inEvent) {
		this.$.player.unload();
        var name = inSender.name;
        this.bubbleUp("onShowPanel", {name:name});
        return true;
     },
   goHome : function(inSender, inEvent) {
      this.$.player.unload();
      this.bubbleUp("onGoHome", {
         name : name
      });
      return true;
   },
   goBack: function(inSender, inEvent) {
      this.$.player.unload();
      this.bubbleUp("onShowPanel", {name:"select"});
      
      return true;
   },
   backtoImage1 : function(inSender, inEvent){
      var time = clothesArray[0][5];
      time = parseInt(time); 
      this.$.player.setCurrentTime(time)
   },
   
   realDrawer1 : function(inSender, inEvent) {
      this.$.drawer1.setOpen(true);
      playerinput = inSender.getContent();
      var data_player_url1 = player.indexOf(playerinput);
   },
   closeDrawer1 : function(inSender, inEvent) {
      this.$.drawer1.setOpen(false);
      return true;
   },
   Selecton_wish: function(inSender, inEvent)
   {
         this.$.wish_7.setSrc("assets/play/towishlist_modify.png");   
   },
   Selectout_wish: function(inSender, inEvent)
   {
         this.$.wish_7.setSrc("assets/play/towishlist.png");      
   },
   Selecton: function(inSender, inEvent)
    {
          this.$.homeButton.setSrc("assets/play/back_modify.png");   
    },
    Selectout: function(inSender, inEvent)
    {
          this.$.homeButton.setSrc("assets/play/back.png");      
    },
   Selecton1_1: function(inSender, inEvent)
    {
          this.$.back1.setSrc("assets/back_modify.png");   
    },
    Selectout1_1: function(inSender, inEvent)
    {
          this.$.back1.setSrc("assets/back.png");      
    },
    Selecton1_2: function(inSender, inEvent)
    {
          this.$.addtowishlist1.setSrc("assets/addtowishlist_modify.png");   
    },
    Selectout1_2: function(inSender, inEvent)
    {
        this.$.wish_toast.setContent(""); 
       this.$.addtowishlist1.setSrc("assets/addtowishlist.png");      
    },
    Selecton1_3: function(inSender, inEvent)
    {
          this.$.close1.setSrc("assets/close_modify.png");   
    },
    Selectout1_3: function(inSender, inEvent)
    {
          this.$.close1.setSrc("assets/close.jpg");      
    },
});
enyo.kind({
      name: "enyo.sample.PanelsFlickrSearchForstar1",
      kind: "Component",
      published: {
         searchText: ""
      },
      events: {
         onResults: ""
      },
      url: "http://query.yahooapis.com/v1/public/yql?format=json",
      search: function(inSearchText, inPage) {
       // username:  decodeURIComponent($('#username').val());
         
         var params = {                        //http://meeneeon.ddns.net:8080/wishList.php
            q: 'select * from html where url = "http://meeneeon.ddns.net/star2.php"'
         };
         var req;
         req = new enyo.JsonpRequest({url: this.url, callbackName: "callback"})
          //  .response.setCharacterEncoding("UTF-8")
             .response(this, "processResponse")
            .go(params);
         
         return req;
      },
      processResponse: function(inSender, inResponse) {
         data = JSON.stringify(inResponse, null, 2);
         this.parserOrderPitcher();
         return true;
      },
      parserOrderPitcher: function(){
         var data2 = data;
         
         var tableCount=0;
         while(1)
            {
               temp=data2.indexOf("td");
               if(temp == -1)
                  break;
               else
               {
                  tableCount++;
                  data2 = data2.substring(temp);
                  data2 = data2.substring(data2.indexOf("["));
               }
            }
         clothesArray = new Array(tableCount);
         for(i=0; i<tableCount; i++)
            clothesArray[i] = new Array(10);
         //'produsa'프로그램을 뽑아서 clothesArray를 할당한다.
         
         data2 = data;
         for(i=0; i<tableCount; i++)
         {
            data2 = data2.substring(data2.indexOf("td"));
            data2 = data2.substring(data2.indexOf("["));
            for(j=0; j<10; j++)
            {
               if(j == 9)
               {
                  clothesArray[i][j] = data2.substring(data2.indexOf("\"")+1, data2.indexOf("]")-18);
                  break;
               }   
               clothesArray[i][j] = data2.substring(data2.indexOf("\"")+1, data2.indexOf("\","));
               data2 = data2.substring(data2.indexOf(clothesArray[i][j])+clothesArray[i][j].length+2);
            }
         } //웹에 출력된 DB를 파싱하여 clothesArray에 저장한다.
         this.doResults(clothesArray);
         return clothesArray;
      }      
      
   });/**
 * 
 */