enyo.kind({
   name: "siyeonPanel",
   classes: "moon enyo-fit enyo-unselectable",
   components: [{
      name : "player",
      kind : "enyo.Video",
      classes:"container-video",
      src : "siyeon.mp4", 
      preload : "auto",
      autoplay : true,
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
           name : "homeButton",
             kind:"moon.Image",
             src:"assets/play/back.png",
             classes:"resize_back",
             ontap : "goHome",
         }]
   }
   ],
goHome : function(inSender, inEvent) {
      this.bubbleUp("onGoHome", {
      name : name
   });
   return true;
},
})