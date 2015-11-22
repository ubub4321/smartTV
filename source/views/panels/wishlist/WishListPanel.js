var wishList;
var buyitem;

enyo.kind({
   name: "wishPanel",
   kind: "moon.Panels",
   classes: "main",
   arrangerKind: "CollapsingArranger",
   spotlight: true,
   components: [
                {name: "backToolbar", kind: "onyx.Toolbar", fit: false, showing: false},   
                {classes:"Caro",components:[
                             {name:"carousel", kind:'ImageCarousel', fit:true, onTransitionFinish: 'transitionFinish'},
                             {classes:"Caro1",layoutKind:"FittableColumnsLayout", fit:true,components:[
                                        {kind: 'moon.Icon', icon: "arrowsmallleft", allowHtml: true, ontap:'previous'},
                                        //{kind: 'onyx.InputDecorator', classes: 'imagecarousel-sample-input', components: [{name: 'carouselIndexInput', kind: 'onyx.Input', value: '0', onchange: 'updateIndex'}]},
                                        {kind: 'moon.Icon', icon: "arrowsmallright", allowHtml: true, ontap:'next'}]}]},
                {layoutKind:"FittableRowsLayout", components:[
                            {name:"flickrImage",kind:"Image",classes:"RoadPan"},
                            {layoutKind:"FittableColumnsLayout",classes:"ExpPan",components:[
                                        {layoutKind:"FittableRowsLayout", components:[{content:"이름",classes:"ExpItem"},{content:"브랜드",classes:"ExpItem"},{content:"가격",classes:"ExpItem"},{content:"프로그램이름",classes:"ExpItem"}]},
                                        {layoutKind:"FittableRowsLayout", components:[{name:"clothes_name",classes:"ExpItem"},{name:"clothes_brand",classes:"ExpItem"},{name:"clothes_price",classes:"ExpItem"},{name:"program_name",classes:"ExpItem"}]},
                                        //{layoutKind:"FittableColumnsLayout", components:[{name:"clothes_price",classes:"ExpItem"},{name:"program_name",classes:"ExpItem"}]},
                                        ]},
                            {name:"BuyClothes",kind:"onyx.Button",classes:"remove-button-css",content:"사러가기",ontap:"purchaseTap"/*,components:[{kind:"onyx.Icon",src:""}]*/}]},
                {layoutKind:"FittableRowsLayout",components:[
                            /*{kind:"onyx.Toolbar",components:[
                                  {name:"searchSpinner",kind:"Image",src:"assets/spinner.gif",showing:false}]},*/
                            {kind:"FittableRows",classes:"listPan",style:"opacity:0.8;",components:[
                                  /*{kind:"onyx.Toolbar",components:[
                                        {kind:"onyx.InputDecorator",layoutKind:"FittableColumnsLayout",components:[
                                              {name:"searchSpinner",kind:"Image",src:"assets/spinner.gif",showing:false},
                                              {comtent:"장바구니",onResults:"search"}]}]},*/
                                  {content:"장바구니"},
                                  {kind:"List",touch:true,onSetupItem:"setupItem",components:[
                                              {name:"item",layoutKind:"FittableColumnsLayout",fit:true,classes:"panels-sample-flickr-item",ontap:"itemTap",components:[
                                                    {name:"thumbnail",kind:"Image",style:"width:75px;height:75px;",classes:"panels-sample-flickr-thumbnail"},
                                                    {name:"title",style:"width:200px;height:75px;margin-left:40px;margin-top:20px;font-size:24px;"},
                                                    /*{name:"purchase",kind:"moon.IconButton",src:"assets/addtowhishlist.png",classes:"remove-button-css",ontap:"purchaseTap"},*/
                                                    {name:"remove",kind:"Image",style:"background-image: url('assets/delete.png');width:60px;height:60px;margin-left:30px;",ontap:"removeTap"}]}]},
                                  ]}]},
                {kind:"moon.Image",classes:"home",ontap:"gohome"},
                {kind:"enyo.Audio",src:"buttonclick.mp3"},
               {name: "flickrSearch_wish", kind: "enyo.sample.PanelsFlickrSearch22", onResults: "searchResults"}],
   rendered: enyo.inherit(function(sup) {
      return function() {
         this.search();
         sup.apply(this, arguments);
         this.urls=['assets/street1.jpg','assets/street2.jpg','assets/street3.jpg','assets/street4.jpg','assets/street5.jpg','assets/street6.jpg','assets/street7.jpg','assets/street8.jpg','assets/street9.jpg','assets/street10.jpg'];
         this.$.carousel.setImages(this.urls);
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
      //this.searchText = this.$.searchInput.getValue();
      this.page = 0;
      this.results = [];
      //this.$.searchSpinner.show();
      this.$.flickrSearch_wish.search(this.searchText);
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
      this.$.audio.play();
      var i = inEvent.index;   
      //this.$.imageSpinner.show();         clothes_name   clothes_brand   clothes_price   program_name
      var item = wishListArray[i][9];
      var Cname = wishListArray[i][1];
      var Cbrand = wishListArray[i][2];
      var Cprice = wishListArray[i][8];
      var Cprogramname = wishListArray[i][4];
      this.$.flickrImage.setSrc(item);
      this.$.clothes_name.setContent(wishListArray[i][1]);
      this.$.clothes_brand.setContent(wishListArray[i][2]);
      this.$.clothes_price.setContent(wishListArray[i][8]);
      this.$.program_name.setContent(wishListArray[i][4]);
      buyitem = wishListArray[i][7];
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
      location = getitem;
   },
   gohome: function(inSender,inEvent)
   {
      this.$.audio.play();
      this.bubbleUp("onGoHome");
      return true;
   },
   updateIndex: function(inSender, inEvent) {
      var index = this.trimWhitespace(this.$.carouselIndexInput.getValue());
      if (index === '' || isNaN(index)) {
         //enyo.log('Numbers only please.')
         return;
      }
      this.$.carousel.setIndex(parseInt(index, 9));
   },
   trimWhitespace: function(inString) {
      return inString.replace(/^\s+|\s+$/g,'');
   },
   previous: function(inSender, inEvent) {
       var index = this.$.carousel.getIndex();
       this.$.carousel.previous();
       if (index == 0)
       {
          this.$.carousel.setIndex(9);
       }
       this.changedHeadLineText();   
    },
    next: function(inSender, inEvent) {
       var index = this.$.carousel.getIndex();
       this.$.carousel.next();
       if (index == 9)
       {
          this.$.carousel.setIndex(0);
       }
       this.changedHeadLineText();
    },
   transitionFinish: function(inSender, inEvent) {
      if (this.$.carouselIndexInput) {
         this.$.carouselIndexInput.setValue(inEvent.toIndex);
      }
   }
});

// A simple component to do a Flickr search.
enyo.kind({
      name: "enyo.sample.PanelsFlickrSearch22",
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
