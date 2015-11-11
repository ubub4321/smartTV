var vodsArray;
var textArray;
enyo.kind({
   name: "selectPanel",
   kind: "moon.Panels",
   spotlight: true,
   classes: "main-css",
   arrangerKind: "CollapsingArranger",
   components: [{name: "pictureView", fit: true, kind: "FittableRows", classes: "RoadPan-css", style: "opacity: 0.9;", components: [
                                                                                                                                    {kind: "FittableRows",components: [
                                                                                                                                    {content: "줄거리입니다", classes: "story-bar-css"},
                                                                                                                                    {name: "backToolbar", kind: "onyx.Toolbar", fit: true, showing: false},
                                                                                                                                    {fit: true, style: "position: relative;", components: [
                                                                                                                                         {name: "flickrImage", kind: "Image", classes: "enyo-fit panels-sample-flickr-center panels-sample-flickr-image", showing: false, onload: "imageLoaded", onerror: "imageLoaded"},
                                                                                                                                         {name: "flickrImage-explain", kind: "Text", content: "", classes: ""},
                                                                                                                                         ]},
                                                                                                                                    ]},
                                                                                                                                    {kind: "FittableRows",components: [
                                                                                                                                    {content: "줄거리", classes: "story-bar-css"},
																																	{name:"txt"},
																																	{name:"play",kind:"moon.Image",classes:"S_play",ontap: "Tplay"},
																																	{kind: "moon.Image", classes: "home", ontap: "gohome"}
                                                                                                                                    ]}
                                                                                                                                    
                                                                                                                                    ]},
                                                                                                                              {kind: "FittableRows"/*layoutKind: "FittableRowsLayout"*/, classes: "ListPan-css", style: "opacity: 0.9;", components: [
                                                                                                                                                                                                                                                      
                                                                                                                                          //{kind: "moon.BodyText", name:"console", content: "No change yet"},
                                                                                                                                          {kind: "onyx.Toolbar", components: [
                                                                                                                                               {kind: "onyx.InputDecorator", style: "width: 90%;", layoutKind: "FittableColumnsLayout", components: [
                                                                                                                                                    {content: "VOD", onResults: "search"}]}]},
                                                                                                                                                    {name:"asd1", kind:"moon.Image", classes: "S_play",ontap: "itemTap",},
                                                                                                                                                    {name:"asd2", kind:"moon.Image", classes: "S_play",ontap: "itemTap",},
                                                                                                                                                    {name:"asd3", kind:"moon.Image", classes: "S_play",ontap: "itemTap",},
                                                                                                                                          {kind: "List", fit: true, touch: true, onSetupItem: "setupItem", components: [
                                                                                                                                               {name: "item", style: "padding: 10px;", classes: "panels-sample-flickr-item enyo-border-box", ontap: "itemTap", components: [
                                                                                                                                                    {name: "thumbnail", kind: "Image", classes: "panels-sample-flickr-thumbnail"},
                                                                                                                                                    {name: "title", classes: "panels-sample-flickr-title"}
                                                                                                                                                    ]}]}]},
                                                                                                                              {name: "flickrSearch", kind: "enyo.sample.PanelsFlickrSearch11", onResults: "searchResults"}
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
   Tplay: function(inSender, inEvent) {
			var name = inSender.name;
			this.bubbleUp("onShowPanel", {name:name});
			return true;

   },
   setupItem: function(inSender, inEvent) {
	      var i = inEvent.index;
	      
	      this.$.item.addRemoveClass("onyx-selected", inSender.isSelected(inEvent.index));
	      this.$.thumbnail.setSrc(vodsArray[i][2]); //4//11
	      this.$.title.setContent(vodsArray[i][1]);
	      return true;
	   },
	   itemTap: function(inSender, inEvent) {
	      if (enyo.Panels.isScreenNarrow()) {
	         this.setIndex(1);
	      }
	      var i = inEvent.index;
	     
	      this.$.imageSpinner.show();
	      var item = vodsArray[i][2];
	      var txt = vodsArray[i][3];
	      this.$.setContent("dsadsadsadas");
	      this.$.flickrImage.setSrc(item);
	      
	   },
	   settxt: function(inSender, inEvent) {
		      if (enyo.Panels.isScreenNarrow()) {
		         this.setIndex(1);
		      }
		      var i = inEvent.index;
		      this.$.txt.setContent("dsadsadsadas");
		      //this.$.flickrImage-explain.setContent("aaa");
		      
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
   gohome: function(inSender, inEvent){
		this.bubbleUp("onGoHome");
		return true;
  }
});

// A simple component to do a Flickr search.

enyo.kind({
   name: "enyo.sample.PanelsFlickrSearch11",
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
    		  q: 'select * from html where url = "http://meeneeon.ddns.net:8080/vods.php"'
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
	      vodsArray = new Array(tableCount);
	      for(i=0; i<tableCount; i++)
	         vodsArray[i] = new Array(9);
	      //'produsa'프로그램을 뽑아서 vodsArray를 할당한다.
	      
	      data2 = data;
	      for(i=0; i<tableCount; i++)
	      {
	         data2 = data2.substring(data2.indexOf("td"));
	         data2 = data2.substring(data2.indexOf("["));
	         for(j=0; j<4; j++)
	         {
	            if(j == 3)
	            {
	               vodsArray[i][j] = data2.substring(data2.indexOf("\"")+1, data2.indexOf("]")-18);
	               break;
	            } 
	            else if(j == 2)
	            {
	            	if(i == 0)
	            		{
	            			vodArray[i][j] = "dsadsadsadas1";
	            		}
	            	if(i == 1)
            		{
            			vodArray[i][j] = "dsadsadsadas2";
            		}
	            	if(i == 2)
            		{
            			vodArray[i][j] = "dsadsadsadas3";
            		}
	            }
	            vodsArray[i][j] = data2.substring(data2.indexOf("\"")+1, data2.indexOf("\","));
	            data2 = data2.substring(data2.indexOf(vodsArray[i][j])+vodsArray[i][j].length+2);
	         }
	      } //웹에 출력된 DB를 파싱하여 vodsArray에 저장한다.
	      
	     
	      this.doResults(vodsArray);
	      return vodsArray;
	   }      
	    
   
});