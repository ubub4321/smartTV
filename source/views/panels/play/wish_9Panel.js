var wishList;
var buyitem;
var cnt = 0;
var flag = 0;

enyo.kind({
   name: "wish_9Panel",
   kind: "moon.Panels",
   classes: "main",
   arrangerKind: "CollapsingArranger",
   spotlight: true,
   components: [
                {name: "backToolbar", kind: "onyx.Toolbar", fit: false, showing: false},   
                {classes:"Carousel",components:[
                             {content:"Fashion",style:"margin-top:103px;margin-bottom:-2px;"},
                             {name:"Caro", kind:'moon.Image',style:"width:430px; height:625px;margin-top:5px;"},
                             {classes:"Caro1",layoutKind:"FittableColumnsLayout", fit:true,components:[
                                        {kind: 'moon.Icon', icon: "arrowsmallleft", allowHtml: true, ontap:'previous'},
                                        {kind: 'moon.Icon', icon: "arrowsmallright", allowHtml: true, ontap:'next'}]}]},
                {layoutKind:"FittableRowsLayout", components:[
                            {name:"flickrImage",kind:"Image",classes:"RoadPan"},
                            {layoutKind:"FittableColumnsLayout",classes:"ExpPan",components:[
                                        {layoutKind:"FittableRowsLayout", components:[{content:"이름",classes:"ExpItem"},{content:"브랜드",classes:"ExpItem"},{content:"가격",classes:"ExpItem"},{content:"프로그램이름",classes:"ExpItem"}]},
                                        {layoutKind:"FittableRowsLayout", components:[{name:"clothes_name",classes:"ExpItem"},{name:"clothes_brand",classes:"ExpItem"},{name:"clothes_price",classes:"ExpItem"},{name:"program_name",classes:"ExpItem"}]}
                                        //{layoutKind:"FittableColumnsLayout", components:[{name:"clothes_price",classes:"ExpItem"},{name:"program_name",classes:"ExpItem"}]},
                                        ]},
                            {name:"BuyClothes",kind:"moon.Image",style:"margin-left:570px;width:100px;height:100px;",ontap:"purchaseTap",src:"assets/buybutton.jpg", onmouseout:"Selectout1",onmouseover:"Selecton1"}
                            ]},
                {layoutKind:"FittableRowsLayout",components:[
                            /*{kind:"onyx.Toolbar",components:[
                                  {name:"searchSpinner",kind:"Image",src:"assets/spinner.gif",showing:false}]},*/
                            {kind:"FittableRows",style:"margin-left: 60px;margin-top: 160px;",components:[
                                  {content:"장바구니",style:"font-family: 'Noto Sans KR', sans-serif;font-weight:bold;margin-left:20px;"},
                                  {kind:"List",touch:true,onSetupItem:"setupItem",classes:"listPan",style:"opacity:0.8;",components:[
                                              {name:"item",layoutKind:"FittableColumnsLayout",fit:true,classes:"panels-sample-flickr-item",ontap:"itemTap",components:[
                                                    {name:"thumbnail",kind:"Image",style:"width:75px;height:75px;",classes:"panels-sample-flickr-thumbnail"},
                                                    {name:"title",style:"width:200px;height:75px;margin-left:40px;margin-top:20px;font-size:24px;"},
                                                    {name:"remove",kind:"moon.Image",style:"background-image: url('assets/delete.png');width:60px;height:60px;margin-left:30px;",ontap:"removeTap"}]}]}
                                  ]},
                             {name : "home",kind:"moon.Image",ontap:"goBack",style:"margin-top:10px;margin-left:250px;",src:"assets/back_wish.png", onmouseout:"Selectout2",onmouseover:"Selecton2"}]},
               {name: "flickrSearch_wish", kind: "enyo.sample.PanelsFlickrSearch222", onResults: "searchResults"}],
   rendered: enyo.inherit(function(sup) {
      return function() {
         this.search();
         sup.apply(this, arguments);
         this.urls=['assets/street1.jpg','assets/street2.jpg','assets/street3.jpg','assets/street4.jpg','assets/street5.jpg','assets/street6.jpg','assets/street7.jpg','assets/street8.jpg','assets/street9.jpg','assets/street10.jpg'];
      };
   }),
   reflow: enyo.inherit(function(sup) {
      return function() {
         sup.apply(this, arguments);
         var backShowing = this.$.backToolbar.showing;
         this.$.backToolbar.setShowing(enyo.Panels.isScreenNarrow());
         if (this.$.backToolbar.showing != backShowing) {
            this.$.pictureView.resize();
         }
      };
   }),
   search: function() {
      this.page = 0;
      this.results = [];
      //this.$.searchSpinner.show();
      this.$.flickrSearch_wish.search(this.searchText);
      this.$.Caro.setSrc('assets/starImg/default1.jpg');
      this.$.flickrImage.setSrc('assets/starImg/default2.jpg')
   },
   searchResults: function(inSender, inResults) {
      //this.$.searchSpinner.hide();
      //this.$.moreSpinner.hide();
      this.results = this.results.concat(inResults);
      this.$.list.setCount(this.results.length);
      if (this.page === 0) {
         this.$.list.reset();
      } else {
         this.$.list.refresh();
      }
   },
   setupItem: function(inSender, inEvent) {

		  flag =0;
		  cnt =0;
      var i = inEvent.index;
      var item = this.results[i];
      this.$.item.addRemoveClass("onyx-selected", inSender.isSelected(inEvent.index));
      this.$.thumbnail.setSrc(wishListArray[i][6]); //4//11
       this.$.title.setContent(wishListArray[i][1]);
      return true;
   },
   itemTap: function(inSender, inEvent) {
      if (enyo.Panels.isScreenNarrow()) {
         this.setIndex(1);
      }
      var i = inEvent.index;   
      //this.$.imageSpinner.show();         clothes_name   clothes_brand   clothes_price   program_name
      var item = wishListArray[i][9];
      var Cname = wishListArray[i][1];
      var Cbrand = wishListArray[i][2];
      var Cprice = wishListArray[i][8];
      var Cprogramname = wishListArray[i][4];
      var Cpeoplename = wishListArray[i][3];
      this.$.flickrImage.setSrc(item);
      this.$.clothes_name.setContent(wishListArray[i][1]);
      this.$.clothes_brand.setContent(wishListArray[i][2]);
      this.$.clothes_price.setContent(wishListArray[i][8]);
      this.$.program_name.setContent(wishListArray[i][4]);
      buyitem = wishListArray[i][7];
      
      if(Cpeoplename=="김수현")
      {
         flag = 1;
         this.$.Caro.setSrc('assets/starImg/ksh1.jpg');
         cnt = 1;
      }
      else if(Cpeoplename=="아이유")
      {
         flag = 2;
         this.$.Caro.setSrc('assets/starImg/iii1.jpg');
         cnt = 1;
      }
      else if(Cpeoplename=="박서준")
      {
         flag = 3;
         this.$.Caro.setSrc('assets/starImg/psj1.jpg');
         cnt = 1;
      }
      else if(Cpeoplename=="고준희")
      {
         flag = 4;
         this.$.Caro.setSrc('assets/starImg/kjh1.jpg');
         cnt = 1;
      }
      else if(Cpeoplename=="공효진")
      {
         flag = 5;
         this.$.Caro.setSrc('assets/starImg/ghj1.jpg');
         cnt = 1;
      }
      else if(Cpeoplename=="전지현")
      {
         flag = 6;
         this.$.Caro.setSrc('assets/starImg/jjh1.jpg');
         cnt = 1;
      }
      else if(Cpeoplename=="유인나")
      {
         flag = 7;
         this.$.Caro.setSrc('assets/starImg/uin1.jpg');
         cnt = 1;
      }
      else if(Cpeoplename=="최시원")
      {
         flag = 8;
         this.$.Caro.setSrc('assets/starImg/csw1.jpg');
         cnt = 1;
      }
      else if(Cpeoplename=="차태현")
      {
         flag = 9;
         this.$.Caro.setSrc('assets/starImg/ctw1.jpg');
         cnt = 1;
      }
   },
   imageLoaded: function() {
      var img = this.$.flickrImage;
      img.removeClass("tall");
      img.removeClass("wide");
      img.show();
      var b = img.getBounds();
      var r = b.height / b.width;
      if (r >= 1.25) {
         img.addClass("tall");
      } else if (r <= 0.8 ) {
         img.addClass("wide");
      }
      //this.$.imageSpinner.hide();
   },
   showList: function() {
      this.setIndex(0);
   },
   removeTap: function(inSender, inEvent)
   {
      var i = inEvent.index;
      var str = '\''+wishListArray[i][6]+'\'';
      
      if(str == "")
      {
         document.getElementById("txtHint").innerHTML = "";
         return;
      }
      else
      {
         if(window.XMLHttpRequest)
         {
            xmlhttp = new XMLHttpRequest();
         }
         else
         {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
         }
         xmlhttp.onreadystatechange = function()
         {
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
            {
               document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
            }
         }
         xmlhttp.open("GET","http://meeneeon.ddns.net/delete_sora.php?q="+str,true);
         xmlhttp.send();
      }
      this.search();
   },
   purchaseTap: function(inSender, inEvent)
   {
      if(enyo.Panels.isScreenNarrow())
      {
         this.setIndex(1);
      }
      var getitem = buyitem;
      window.open(getitem,"scrollbars=yes,menubar=no,fullscreen");
   },
   goBack: function(inSender, inEvent) {
	   
	      this.bubbleUp("onShowPanel", {name:"star_3"});
	      
	      return true;
	   },
   Selecton1: function(inSender, inEvent)
   {
         this.$.BuyClothes.setSrc("assets/buybutton_modify.jpg");   
   },
   Selectout1: function(inSender, inEvent)
   {
         this.$.BuyClothes.setSrc("assets/buybutton.jpg");      
   },
   Selecton2: function(inSender, inEvent)
   {
         this.$.home.setSrc("assets/back_wish_modify.png");   
   },
   Selectout2: function(inSender, inEvent)
   {
         this.$.home.setSrc("assets/back_wish.png");      
   },
   previous: function(inSender, inEvent) {
      if(flag == 1)
      {
         if(cnt == 0)
         {
            this.$.Caro.setSrc('assets/starImg/ksh1.jpg');
         }
         else if(cnt == 1)
         {
            this.$.Caro.setSrc('assets/starImg/ksh2.jpg');
         }
         else if(cnt == 2)
         {
            this.$.Caro.setSrc('assets/starImg/ksh3.jpg');
         }
         else if(cnt == 3)
         {
            this.$.Caro.setSrc('assets/starImg/ksh4.jpg');
         }
      }
      else if(flag == 2)
      {
         if(cnt == 0)
         {
            this.$.Caro.setSrc('assets/starImg/iii1.jpg');
         }
         else if(cnt == 1)
         {
            this.$.Caro.setSrc('assets/starImg/iii2.jpg');
         }
         else if(cnt == 2)
         {
            this.$.Caro.setSrc('assets/starImg/iii3.jpg');
         }
         else if(cnt == 3)
         {
            this.$.Caro.setSrc('assets/starImg/iii4.jpg');
         }
      }
      else if(flag == 3)
      {
         if(cnt == 0)
         {
            this.$.Caro.setSrc('assets/starImg/psj1.jpg');
         }
         else if(cnt == 1)
         {
            this.$.Caro.setSrc('assets/starImg/psj2.jpg');
         }
         else if(cnt == 2)
         {
            this.$.Caro.setSrc('assets/starImg/psj3.jpg');
         }
         else if(cnt == 3)
         {
            this.$.Caro.setSrc('assets/starImg/psj4.jpg');
         }
      }
      else if(flag == 4)
      {
         if(cnt == 0)
         {
            this.$.Caro.setSrc('assets/starImg/kjh1.jpg');
         }
         else if(cnt == 1)
         {
            this.$.Caro.setSrc('assets/starImg/kjh2.jpg');
         }
         else if(cnt == 2)
         {
            this.$.Caro.setSrc('assets/starImg/kjh3.jpg');
         }
         else if(cnt == 3)
         {
            this.$.Caro.setSrc('assets/starImg/kjh4.jpg');
         }
      }
      else if(flag == 5)
      {
         if(cnt == 0)
         {
            this.$.Caro.setSrc('assets/starImg/ghj1.jpg');
         }
         else if(cnt == 1)
         {
            this.$.Caro.setSrc('assets/starImg/ghj2.jpg');
         }
         else if(cnt == 2)
         {
            this.$.Caro.setSrc('assets/starImg/ghj3.jpg');
         }
         else if(cnt == 3)
         {
            this.$.Caro.setSrc('assets/starImg/ghj4.jpg');
         }
      }
      else if(flag == 6)
      {
         if(cnt == 0)
         {
            this.$.Caro.setSrc('assets/starImg/jjh1.jpg');
         }
         else if(cnt == 1)
         {
            this.$.Caro.setSrc('assets/starImg/jjh2.jpg');
         }
         else if(cnt == 2)
         {
            this.$.Caro.setSrc('assets/starImg/jjh3.jpg');
         }
         else if(cnt == 3)
         {
            this.$.Caro.setSrc('assets/starImg/jjh4.jpg');
         }
      }
      else if(flag == 7)
      {
         if(cnt == 0)
         {
            this.$.Caro.setSrc('assets/starImg/uin1.jpg');
         }
         else if(cnt == 1)
         {
            this.$.Caro.setSrc('assets/starImg/uin2.jpg');
         }
         else if(cnt == 2)
         {
            this.$.Caro.setSrc('assets/starImg/uin3.jpg');
         }
         else if(cnt == 3)
         {
            this.$.Caro.setSrc('assets/starImg/uin4.jpg');
         }
      }
      else if(flag == 8)
      {
         if(cnt == 0)
         {
            this.$.Caro.setSrc('assets/starImg/csw1.jpg');
         }
         else if(cnt == 1)
         {
            this.$.Caro.setSrc('assets/starImg/csw2.jpg');
         }
         else if(cnt == 2)
         {
            this.$.Caro.setSrc('assets/starImg/csw3.jpg');
         }
         else if(cnt == 3)
         {
            this.$.Caro.setSrc('assets/starImg/csw4.jpg');
         }
      }
      else if(flag == 9)
      {
         if(cnt == 0)
         {
            this.$.Caro.setSrc('assets/starImg/ctw1.jpg');
         }
         else if(cnt == 1)
         {
            this.$.Caro.setSrc('assets/starImg/ctw2.jpg');
         }
         else if(cnt == 2)
         {
            this.$.Caro.setSrc('assets/starImg/ctw3.jpg');
         }
         else if(cnt == 3)
         {
            this.$.Caro.setSrc('assets/starImg/ctw4.jpg');
         }
      }
      cnt-=1;
      cnt%=4;
   },
   next: function(inSender, inEvent) {
      if(flag == 1)
      {
         if(cnt == 0)
         {
            this.$.Caro.setSrc('assets/starImg/ksh1.jpg');
         }
         else if(cnt == 1)
         {
            this.$.Caro.setSrc('assets/starImg/ksh2.jpg');
         }
         else if(cnt == 2)
         {
            this.$.Caro.setSrc('assets/starImg/ksh3.jpg');
         }
         else if(cnt == 3)
         {
            this.$.Caro.setSrc('assets/starImg/ksh4.jpg');
         }
      }
      else if(flag == 2)
      {
         if(cnt == 0)
         {
            this.$.Caro.setSrc('assets/starImg/iii1.jpg');
         }
         else if(cnt == 1)
         {
            this.$.Caro.setSrc('assets/starImg/iii2.jpg');
         }
         else if(cnt == 2)
         {
            this.$.Caro.setSrc('assets/starImg/iii3.jpg');
         }
         else if(cnt == 3)
         {
            this.$.Caro.setSrc('assets/starImg/iii4.jpg');
         }
      }
      else if(flag == 3)
      {
         if(cnt == 0)
         {
            this.$.Caro.setSrc('assets/starImg/psj1.jpg');
         }
         else if(cnt == 1)
         {
            this.$.Caro.setSrc('assets/starImg/psj2.jpg');
         }
         else if(cnt == 2)
         {
            this.$.Caro.setSrc('assets/starImg/psj3.jpg');
         }
         else if(cnt == 3)
         {
            this.$.Caro.setSrc('assets/starImg/psj4.jpg');
         }
      }
      else if(flag == 4)
      {
         if(cnt == 0)
         {
            this.$.Caro.setSrc('assets/starImg/kjh1.jpg');
         }
         else if(cnt == 1)
         {
            this.$.Caro.setSrc('assets/starImg/kjh2.jpg');
         }
         else if(cnt == 2)
         {
            this.$.Caro.setSrc('assets/starImg/kjh3.jpg');
         }
         else if(cnt == 3)
         {
            this.$.Caro.setSrc('assets/starImg/kjh4.jpg');
         }
      }
      else if(flag == 5)
      {
         if(cnt == 0)
         {
            this.$.Caro.setSrc('assets/starImg/ghj1.jpg');
         }
         else if(cnt == 1)
         {
            this.$.Caro.setSrc('assets/starImg/ghj2.jpg');
         }
         else if(cnt == 2)
         {
            this.$.Caro.setSrc('assets/starImg/ghj3.jpg');
         }
         else if(cnt == 3)
         {
            this.$.Caro.setSrc('assets/starImg/ghj4.jpg');
         }
      }
      else if(flag == 6)
      {
         if(cnt == 0)
         {
            this.$.Caro.setSrc('assets/starImg/jjh1.jpg');
         }
         else if(cnt == 1)
         {
            this.$.Caro.setSrc('assets/starImg/jjh2.jpg');
         }
         else if(cnt == 2)
         {
            this.$.Caro.setSrc('assets/starImg/jjh3.jpg');
         }
         else if(cnt == 3)
         {
            this.$.Caro.setSrc('assets/starImg/jjh4.jpg');
         }
      }
      else if(flag == 7)
      {
         if(cnt == 0)
         {
            this.$.Caro.setSrc('assets/starImg/uin1.jpg');
         }
         else if(cnt == 1)
         {
            this.$.Caro.setSrc('assets/starImg/uin2.jpg');
         }
         else if(cnt == 2)
         {
            this.$.Caro.setSrc('assets/starImg/uin3.jpg');
         }
         else if(cnt == 3)
         {
            this.$.Caro.setSrc('assets/starImg/uin4.jpg');
         }
      }
      else if(flag == 8)
      {
         if(cnt == 0)
         {
            this.$.Caro.setSrc('assets/starImg/csw1.jpg');
         }
         else if(cnt == 1)
         {
            this.$.Caro.setSrc('assets/starImg/csw2.jpg');
         }
         else if(cnt == 2)
         {
            this.$.Caro.setSrc('assets/starImg/csw3.jpg');
         }
         else if(cnt == 3)
         {
            this.$.Caro.setSrc('assets/starImg/csw4.jpg');
         }
      }
      else if(flag == 9)
      {
         if(cnt == 0)
         {
            this.$.Caro.setSrc('assets/starImg/ctw1.jpg');
         }
         else if(cnt == 1)
         {
            this.$.Caro.setSrc('assets/starImg/ctw2.jpg');
         }
         else if(cnt == 2)
         {
            this.$.Caro.setSrc('assets/starImg/ctw3.jpg');
         }
         else if(cnt == 3)
         {
            this.$.Caro.setSrc('assets/starImg/ctw4.jpg');
         }
      }
      cnt+=1;
      cnt%=4;
   }
});

// A simple component to do a Flickr search.
enyo.kind({
      name: "enyo.sample.PanelsFlickrSearch222",
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
         
         var params = {
            q: 'select * from html where url = "http://meeneeon.ddns.net/wishList.php"'
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
         wishListArray = new Array(tableCount);
         for(i=0; i<tableCount; i++)
            wishListArray[i] = new Array(10);
         //'produsa'프로그램을 뽑아서 wishListArray를 할당한다.
         
         data2 = data;
         for(i=0; i<tableCount; i++)
         {
            data2 = data2.substring(data2.indexOf("td"));
            data2 = data2.substring(data2.indexOf("["));
            for(j=0; j<10; j++)
            {
               if(j == 9)
               {
                  wishListArray[i][j] = data2.substring(data2.indexOf("\"")+1, data2.indexOf("]")-18);
                  break;
               }   
               wishListArray[i][j] = data2.substring(data2.indexOf("\"")+1, data2.indexOf("\","));
               data2 = data2.substring(data2.indexOf(wishListArray[i][j])+wishListArray[i][j].length+2);
            }
         } //웹에 출력된 DB를 파싱하여 wishListArray에 저장한다.
         this.doResults(wishListArray);
         return wishListArray;
      }      
      
   });