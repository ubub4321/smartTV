/**
   For simple applications, you might define all of your views in this file.  
   For more complex applications, you might choose to separate these kind definitions 
   into multiple files under this folder.
*/


enyo.kind({
   
   name: "mainMenuPanel",
   kind:"FittableColumns",
   style:"text-align:center;",
   ontimeupdate : "timeChanged",
   classes: "panels-sample-flickr-panels1",
   pattern:"activity",
   spotlight: true,
   components: [{   
               kind: "FittableRows",
               components:[{name:"android", kind:"moon.Image",classes:"androidb", style:"margin-left:-250px;margin-top:50px;",src:"assets/main/android1.jpg",onmouseover:"Androidon",onmouseout:"Androidout"},{
                  kind:"FittableColumns",
                  components:[
                              {
                              kind: "FittableRows",
                              components:[{
                                 name: "twit",kind:"moon.Image",src:"assets/main/twit.png",style:"margin-left:250px;margin-top:30px;",classes :"twitb",onmouseout:"Twitout",onmouseover:"Twiton", onclick: "gotwit"
                                       }]
                           }]
               },
               {
                  kind:"FittableColumns",
                  components:[{
                              kind: "FittableRows",
                              components:[{
                                       name: "wish",kind:"moon.Image",src:"assets/main/wish.png",style:"margin-left:300px;margin-top:140px;",classes :"wishb", onmouseout:"Wishout",onmouseover:"Wishon",onclick: "imageClick"
                                       }]
                           }]
               }
               ]
             },
             {
                kind: "FittableRows",
                  components:[{
                              kind:"FittableColumns",
                              components:[{
                                          kind: "FittableRows",
                                          components:[{
                                                   name: "face",kind:"moon.Image",src:"assets/main/face.jpg",classes :"faceb",onmouseout:"Faceout",onmouseover:"Faceon", onclick: "goface"
                                                   }]
                                       }]
                           },
                           {
                              kind:"FittableColumns",
                              components:[{
                                          kind: "FittableRows",
                                          components:[{
                                                   name: "select",kind:"moon.Image",src:"assets/main/play.jpg",classes :"playb",onmouseout:"Secletout",onmouseover:"Secleton",onclick: "imageClick",
                                                   }]
                                       }]
                           },
                           {
                              kind:"FittableColumns",
                              components:[{
                                          kind: "FittableRows",
                                          components:[{
                                                   name: "news",kind:"moon.Image",src:"assets/main/news.png",classes :"newsb",onmouseout:"Newsout",onmouseover:"Newson", onclick: "imageClick"
                                                   }]
                                       }]
                           },
                           ]
             }],
               imageClick: function(inSender, inEvent) {
                  //alert(inSender.name); // 
                  var name = inSender.name;
                  this.bubbleUp("onShowPanel", {name:name});
                  return true;
               },
              Androidon: function(inSender, inEvent)
              {
                    this.$.android.setSrc("assets/main/android2.jpg");   
              },
              Androidout: function(inSender, inEvent)
              {
                    this.$.android.setSrc("assets/main/android1.jpg");     
              },
              Faceon: function(inSender, inEvent)
              {
                    this.$.face.setSrc("assets/main/facet.png");   
              },
              Faceout: function(inSender, inEvent)
              {
                    this.$.face.setSrc("assets/main/face.jpg");      
              },
              Twiton: function(inSender, inEvent)
              {
                    this.$.twit.setSrc("assets/main/twitt.png");   
              },
              Twitout: function(inSender, inEvent)
              {
                    this.$.twit.setSrc("assets/main/twit.png");      
              },
              Wishon: function(inSender, inEvent)
              {
                    this.$.wish.setSrc("assets/main/wisht.png");   
              },
              Wishout: function(inSender, inEvent)
              {
                    this.$.wish.setSrc("assets/main/wish.png");      
              },
              Secleton: function(inSender, inEvent)
              {
                    this.$.select.setSrc("assets/main/playt.jpg");   
              },
              Secletout: function(inSender, inEvent)
              {
                    this.$.select.setSrc("assets/main/play.jpg");      
              },
              Newson: function(inSender, inEvent)
              {
                    this.$.news.setSrc("assets/main/newst.png");   
              },
              Newsout: function(inSender, inEvent)
              {
                    this.$.news.setSrc("assets/main/news.png");      
              },
               goface : function()
               {
            	   window.open('https://www.facebook.com/hashtag/%ED%8C%A8%EC%85%98?fref=ts',"facebook",'scrollbars=yes,menubar=no');
                     return true;
               },
              gotwit : function()
               {
            	  window.open('https://twitter.com/search?q=fashion&src=tyah',"twit",'scrollbars=yes,menubar=no');
                     return true;
               }
});