var wishListArray;
enyo.kind({
   name: "wishPanel",
   kind: "moon.Panels",
   classes: "main-css",
 //  arrangerKind: "CollapsingArranger",
   spotlight: true,
   components: [
                
                {kind : "FittableColumns", components : [
                {name: "pictureView1", kind: "FittableRows", classes: "RoadPan1-css", style: "opacity: 0.9;",
                   components :[
                                {kind: "FittableRows", classes: "RoadPan1-css", style: "opacity: 0.9;background-color : black;"},
                                {kind: "FittableRows", classes: "RoadPan1-css", style: "opacity: 0.9;background-color : red;"},
                                ]},
                {name: "pictureView", fit: true, kind: "FittableRows", classes: "RoadPan-css", style: "opacity: 0.9;", 
                    components: [
                                {kind: "FittableRows", classes: "RoadPan-css", style: "opacity: 0.9;background-color : black;"},
                                {kind: "FittableRows", classes: "RoadPan-css", style: "opacity: 0.9;background-color : red;",
                                   components: [
                                                {kind: "moon.Image", classes: "home", ontap: "gohome"},
                      {kind: "enyo.Button", ontap: "highlight", components: [
                            {kind: "enyo.Image",classes: "highlight-css", src: "assets/highlight.png"}]}
                                                ]},
                      {name: "backToolbar", kind: "onyx.Toolbar", fit: true, showing: false},
                     
                      {fit: true, style: "position: relative;", components: [
                           {name: "flickrImage", kind: "Image", classes: "enyo-fit panels-sample-flickr-center panels-sample-flickr-image", showing: false, onload: "imageLoaded", onerror: "imageLoaded"},
                           {name: "flickrImage-explain", kind: "Text", content: "", classes: ""},
                           {name: "imageSpinner", kind: "Image", src: "assets/spinner-large.gif", classes: "enyo-fit panels-sample-flickr-center", showing: false}]},
                      {name : "nani", content: "추천리스트", classes: "chocheon-bar-css"},
                      ]},
                      {kind: "FittableRows", classes: "ListPan-css", style: "opacity: 0.8;", 
                    	  components: [
                    	               {kind: "onyx.Toolbar", 
                    	            	   components: [
                    	            	                {kind: "onyx.InputDecorator", layoutKind: "FittableColumnsLayout", 
                    	            	                	components: [
                    	            	                	             {content: "장바구니", onResults: "search"}]}]},
                    	            	                	             {kind: "List", fit: true, touch: true, onSetupItem: "setupItem", style : "background-color : black;",
                    	            	                	            	 components: [
                    	            	                	            	              {name: "item", classes: "panels-sample-flickr-item enyo-border-box", ontap: "itemTap", 
                    	            	                	            	            	  components: [
                    	            	                	            	            	               {name: "thumbnail", kind: "Image", classes: "panels-sample-flickr-thumbnail"},
                    	            	                	            	            	               {name: "title", classes: "panels-sample-flickr-title"},
                    	            	                	            	            	               {name: "purchase", kind: "moon.IconButton", src: "assets/addtowhishlist.png", classes: "remove-button-css", ontap: "purchaseTap"},
                    	            	                	            	            	               {name: "remove", kind: "moon.IconButton", src: "assets/delete.png", classes: "remove-button-css", ontap: "removeTap"}
                    	            	                	            	            	               ]}]}]},
                                ]},
                            
                
                {name: "flickrSearch", kind: "enyo.sample.PanelsFlickrSearch22", onResults: "searchResults"}
   ],
   rendered: enyo.inherit(function(sup) {
      return function() {
         sup.apply(this, arguments);
         this.search();
      };
   }),
   reflow: enyo.inherit(function(sup) {
      return function() {
         sup.apply(this, arguments);
         var backShowing = this.$.backToolbar.showing;
        // var backShowing1 = this.$.backToolbar1.showing;
         this.$.backToolbar.setShowing(enyo.Panels.isScreenNarrow());
        // this.$.backToolbar1.setShowing(enyo.Panels.isScreenNarrow());
         if (this.$.backToolbar.showing != backShowing) {
            this.$.pictureView.resize();
         }
         //if (this.$.backToolbar1.showing != backShowing) {
        //     this.$.pictureView1.resize();
        // }
      };
   }),
   search: function() {
     // this.searchText = this.$.searchInput.getValue();
      this.page = 0;
      this.results = [];
      //this.$.searchSpinner.show();
      this.$.flickrSearch.search(this.searchText);
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
      
      this.$.item.addRemoveClass("onyx-selected", inSender.isSelected(inEvent.index));
      this.$.thumbnail.setSrc(wishListArray[i][6]); //4//11
      this.$.title.setContent(wishListArray[i][1]);
     // this.$.remove.setSrc("assets/delete.png");
      return true;
   },
   itemTap: function(inSender, inEvent) {
      if (enyo.Panels.isScreenNarrow()) {
         this.setIndex(1);
      }
      var i = inEvent.index;
      this.$.imageSpinner.show();
      var item = wishListArray[i][6];

      this.$.flickrImage.setSrc(item);
   },
   imageLoaded: function() {
      var img = this.$.flickrImage;
      //var txt = this.$.flickrImage-explain;
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
      this.$.imageSpinner.hide();
   },
   showList: function() {
      this.setIndex(0);
   },
   removeTap: function(inSender, inEvent){
       var i = inEvent.index;
       var str = '\''+wishListArray[i][6]+'\'';
       
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
           xmlhttp.open("GET","http://192.168.0.59/delete_sora.php?q="+str,true);
          // http://meeneeon.ddns.net:8080/wishList.php
           xmlhttp.send();
        }
       this.search();
   },
   purchaseTap: function(inSender, inEvent){
      if (enyo.Panels.isScreenNarrow()) {
            this.setIndex(1);
      }
      var i = inEvent.index;
      var getitem = wishListArray[i][7];
      location = getitem;
   },
   gohome: function(inSender, inEvent){
      this.bubbleUp("onGoHome");
      return true;
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
         q: 'select * from html where url = "http://192.168.0.59/wishList.php"'
      }; 
      var req;
      req = new enyo.JsonpRequest({url: this.url, callbackName: "callback"})
        // .response.setCharacterEncoding("UTF-8")
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