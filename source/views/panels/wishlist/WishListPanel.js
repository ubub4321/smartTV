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
                {components:[
                             {name:"carousel", kind:'ImageCarousel', fit:true, onTransitionFinish: 'transitionFinish'},
                             {layoutKind:"FittableColumnsLayout", fit:true,components:[
                                        {kind: 'onyx.Button', content:'&larr;', allowHtml: true, ontap:'previous'},
                                        {kind: 'onyx.InputDecorator', classes: 'imagecarousel-sample-input', components: [{name: 'carouselIndexInput', kind: 'onyx.Input', value: '0', onchange: 'updateIndex'}]},
                                        {kind: 'onyx.Button', content:'&rarr;', allowHtml: true, ontap:'next'}]}]},
                {layoutKind:"FittableRowsLayout", components:[
                            {name:"flickrImage",kind:"Image",classes:"RoadPan"},
                            {layoutKind:"FittableRowsLayout",classes:"ExpPan",components:[
                                        {layoutKind:"FittableColumnsLayout", components:[{name:"clothes_name",classes:"ExpItem"},{name:"clothes_brand",classes:"ExpItem"}]},
                                        {layoutKind:"FittableColumnsLayout", components:[{name:"clothes_price",classes:"ExpItem"},{name:"program_name",classes:"ExpItem"}]},
                                        {name:"BuyClothes",kind:"onyx.Button",classes:"remove-button-css",content:"사러가기",ontap:"purchaseTap"/*,components:[{kind:"onyx.Icon",src:""}]*/}]}]},
                {layoutKind:"FittableRowsLayout",components:[
                            /*{kind:"onyx.Toolbar",components:[
                                  {name:"searchSpinner",kind:"Image",src:"assets/spinner.gif",showing:false}]},*/
                            {kind:"FittableRows",classes:"listPan",style:"opacity:0.8;",components:[
                                  /*{kind:"onyx.Toolbar",components:[
                                        {kind:"onyx.InputDecorator",layoutKind:"FittableColumnsLayout",components:[
                                              {name:"searchSpinner",kind:"Image",src:"assets/spinner.gif",showing:false},
                                              {comtent:"장바구니",onResults:"search"}]}]},*/
                                  {content:"장바구니"},
                                  {kind:"List",fit:true,touch:true,onSetupItem:"setupItem",style:"background-color:#FFA420;",components:[
                                              {name:"item",style:"padding:10px;",classes:"panels-sample-flickr-item enyo-border-box",ontap:"itemTap",components:[
                                                    {name:"thumbnail",kind:"Image",classes:"panels-sample-flickr-thumbnail"},
                                                    {name:"title",kind:"Image",classes:"panels-sample-flickr-title"},
                                                    /*{name:"purchase",kind:"moon.IconButton",src:"assets/addtowhishlist.png",classes:"remove-button-css",ontap:"purchaseTap"},*/
                                                    {name:"remove",kind:"moon.IconButton",src:"assets/delete.png",classes:"remove-button-css",ontap:"removeTap"}]}]},
                                  ]}]},
                {kind:"moon.Image",classes:"home",ontap:"gohome"},
               {name: "flickrSearch_wish", kind: "enyo.sample.PanelsFlickrSearch22", onResults: "searchResults"}],
   rendered: enyo.inherit(function(sup) {
      return function() {
         sup.apply(this, arguments);
         this.urls=['assets/street1.jpg','assets/street2.jpg','assets/street3.jpg','assets/street4.jpg','assets/street5.jpg','assets/street6.jpg','assets/street7.jpg','assets/street8.jpg','assets/street9.jpg','assets/street10.jpg'];
         this.$.carousel.setImages(this.urls);
         this.search();
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
      var i = inEvent.index;   
      //this.$.imageSpinner.show();         clothes_name   clothes_brand   clothes_price   program_name
      var item = wishListArray[i][6];
      var Cname = wishListArray[i][1];
      var Cbrand = wishListArray[i][2];
      var Cprice = wishListArray[i][8];
      var Cprogramname = wishListArray[i][4];
      this.$.flickrImage.setSrc(item);
      this.$.clothes_name.setContent("이름 : "+wishListArray[i][1]);
      this.$.clothes_brand.setContent("브랜드 : "+wishListArray[i][2]);
      this.$.clothes_price.setContent("가격 : "+wishListArray[i][8]);
      this.$.program_name.setContent("프로그램이름 : "+wishListArray[i][4]);
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
         xmlhttp.open("GET","http://192.168.0.59/delete_sora.php?p="+str,true);
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
      this.$.carousel.previous();
   },
   next: function(inSender, inEvent) {
      this.$.carousel.next();
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
            wishListArray[i] = new Array(9);
         //'produsa'프로그램을 뽑아서 wishListArray를 할당한다.
         
         data2 = data;
         for(i=0; i<tableCount; i++)
         {
            data2 = data2.substring(data2.indexOf("td"));
            data2 = data2.substring(data2.indexOf("["));
            for(j=0; j<9; j++)
            {
               if(j == 8)
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

enyo.kind({
    name: "enyo.Iframe",
    kind: enyo.Control,
    published: {
            /**
                    Url of the web page to load in the iframe.
            */
            url: ""
    },
    className: "enyo-iframe",
    //* @protected
    domAttributes: {frameborder: 0},
    nodeTag: "iframe",
    create: function() {
            this.inherited(arguments);
            this.urlChanged();
            enyo.mixin(this.domAttributes, {
                    onload: enyo.bubbler
            });
    },
    urlChanged: function() {
            this.setAttribute("src", this.url);
    },
    //* @public
    /**
            Navigates to the previous web page in the history list.
    */
    goBack: function() {
            if (this.hasNode()) {
                    this.node.contentWindow.history.go(-1);
            }
    },
    /**
            Navigates to the next web page in the history list.
    */
    goForward: function() {
            if (this.hasNode()) {
                    this.node.contentWindow.history.go(1);
            }
    },
    /**
            Reloads the page specified by the value of the url property. Note that this is
            not necessarily the same as the currently displayed url because the url property
            does not update when the user interacts with the loaded page.
    */
    refresh: function() {
            this.setUrl(this.url);
    },
    /**
            Returns the url of the loaded page. This url is not necessarily the same as
            the value of the url property because the value of this.url is not updated
            when a user navigates to a different url by interacting with the loaded page.
    */
    fetchCurrentUrl: function() {
            var n = this.hasNode();
            var url = this.getUrl();
            try {
                    return n ? n.contentDocument.location.href : url;
            } catch(e) {
                    return url;
            }
    },
    //* @protected
    setHTML: function(inUrl, inHtml) {
            if (this.hasNode()) {
                    this.node.contentWindow.document.body.innerHTML = inHtml;
            }
    }
});