var indexArray;

enyo.kind({
   name: "selectPanel",
   kind: "FittableRows",
   classes : "Select_background",
   handlers: {
      ontap: "ontap"
   },
   components: [
   {
      name : "homeButton",
      kind: "moon.Image",
      classes: "S_Home",
      ontap : "goHome"
   },
      {kind: "moon.Scroller", fit:true, components: [
         {kind: "Repeater", count:3, classes:"moon-hspacing", onSetupItem:"setupItem", components: [
            {

               orientation: "vertical",
               components: [
                  {kind: "moon.Item", components: [
                     {name: 'image', kind: 'enyo.Image',}
                  ]},
                  {
                     kind: "moon.Button",visible: false ,classes:"imsi", style:"margin-left:160px;width:240px",name: "Play", small: true, content: "PLAY",ontap:"Play"
                  }
               ],//actionComponents
            }
         ]}
      ]},
      
      {name: 'Story',style:"padding-top:100px;height:100px;", kind: 'moon.BodyText'},
      {name: 'Story2',style:"", kind: 'moon.BodyText'},
   /*   { 
           name : "drawer0",
           kind : "enyo.Drawer",
           open : true,
           fit : true,
           components : [
                {name: "adv_1", kind: "enyo.Image",style:"width: 400px;height: 135px;margin-right:40px;",src:"assets/ese.jpg"},
               {name: "adv_2", kind: "enyo.Image",style:"width: 400px;height: 135px;margin-right:40px;",src:"assets/smart.png"},
               {name: "adv_3", kind: "enyo.Image",style:"width: 400px;height: 135px;margin-right:40px;",src:"assets/inu.jpg"},
           ]
      },*/
      {kind: "moon.Divider"},

      { 
        name : "drawer1",
        kind : "enyo.Drawer",
      //  classes: "drawer_background",
        open : false,
        components : [
             {name: "pro_1", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;",ontap:"imageClick"},
            {name: "pro_2", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;",ontap:"imageClick"},
            {name: "pro_3", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;",ontap:"imageClick"},
             {name: "pro_4", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;"},
            {name: "pro_5", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;"},
            {name: "pro_6", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;"},
             {name: "pro_7", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;"},
            {name: "pro_8", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;"},
            {name: "pro_9", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;"},
             {name: "pro_10", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;"},
            {name: "pro_11", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;"},
        ]
      },
      { 
           name : "drawer2",
           kind : "enyo.Drawer",
         //  classes: "drawer_background",
           open : false,
           components : [
              {name: "she_1", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;",ontap:"imageClick"},
              {name: "she_2", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;",ontap:"imageClick"},
              {name: "she_3", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;",ontap:"imageClick"},
              {name: "she_4", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;"},
              {name: "she_5", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;"},
              {name: "she_6", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;"},
              {name: "she_7", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;"},
              {name: "she_8", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;"},
              {name: "she_9", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;"},
              {name: "she_10", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;"},
              {name: "she_11", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;"},
           ]
      },
      { 
              name : "drawer3",
              kind : "enyo.Drawer",
            //  classes: "drawer_background",
              open : false,
              components : [
              {name: "star_1", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;",ontap:"imageClick"},
              {name: "star_2", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;",ontap:"imageClick"},
              {name: "star_3", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;",ontap:"imageClick"},
              {name: "star_4", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;"},
              {name: "star_5", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;"},
              {name: "star_6", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;"},
              {name: "star_7", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;"},
              {name: "star_8", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;"},
              {name: "star_9", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;"},
              {name: "star_10", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;"},
              {name: "star_11", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;"},
              ]
      },
   ],
   setupItem: function(inSender, inEvent) {
      var i = inEvent.index;
      if(i == 0){
      inEvent.item.$.image.setSrc("assets/poster.png");
      }
      if(i == 1){
         inEvent.item.$.image.setSrc("assets/poster1.png");
         }
      if(i == 2){
         inEvent.item.$.image.setSrc("assets/poster2.png");
         }
   },
   Play: function(inSender, inEvent)
   {
      var i = inEvent.index;
      if(i == 0)
         {
         this.$.Story.setContent(" 본의 아니게 예능국 OJT 좋아하는 대학 동아리 누나 때문에 KBS 예능국에 들어온 백승찬(김수현), ");
         this.$.Story2.setContent(" 예능국 여왕벌 탁예진(공효진)와 1박 2일 PD준모(차태현),인기 가수 신디(아이유)가 펼치는 예능국 안에서의 이야기!");
                  
      //   this.$.Story.setContent(" 인기 가수 신디(아이유)가 펼치는 예능국 안에서의 이야기!");   

         this.$.drawer1.setOpen(true);
         this.$.drawer2.setOpen(false);
         this.$.drawer3.setOpen(false);
         //this.$.drawer0.setOpen(false);
         
         this.$.pro_1.setSrc("assets/1_.png");
         this.$.pro_2.setSrc("assets/2_.png");
         this.$.pro_3.setSrc("assets/3_.png");
         this.$.pro_4.setSrc("assets/4.png");
         this.$.pro_5.setSrc("assets/5.png");
         this.$.pro_6.setSrc("assets/6_.png");
         this.$.pro_7.setSrc("assets/7.png");
         this.$.pro_8.setSrc("assets/8.png");
         this.$.pro_9.setSrc("assets/9.png");
         this.$.pro_10.setSrc("assets/10.png");
         this.$.pro_11.setSrc("assets/11.png");
         }
      if(i == 1)
      {

         this.$.Story.setContent(" 주근깨 뽀글머리 '역대급 폭탄녀'로 역변한 혜진과 '초정절 복권남'으로 정변한 성준 완벽한듯 하지만 '빈틈 많은 섹시녀'하리,");
         this.$.Story2.setContent(" 베일에 가려진 '똘끼충만 반전남'신혁, 네 남녀의 재기발랄 로멘틱 코미디!");
         this.$.drawer2.setOpen(true);
         this.$.drawer1.setOpen(false);
         this.$.drawer3.setOpen(false);
         //this.$.drawer0.setOpen(false);
         
         this.$.she_1.setSrc("assets/1_.png");
         this.$.she_2.setSrc("assets/2_.png");
         this.$.she_3.setSrc("assets/3_.png");
         this.$.she_4.setSrc("assets/4.png");
         this.$.she_5.setSrc("assets/5.png");
         this.$.she_6.setSrc("assets/6_.png");
         this.$.she_7.setSrc("assets/7.png");
         this.$.she_8.setSrc("assets/8.png");
         this.$.she_9.setSrc("assets/9.png");
         this.$.she_10.setSrc("assets/10.png");
         this.$.she_11.setSrc("assets/11.png");
      }
      if(i == 2)
      {
         this.$.Story.setContent(" 실제 1609년 조선왕조실록에 기록된 비행물체 출현을 근거로, 외계남 도민준과 왕싸가지 한류여신 톱스타");
         this.$.Story2.setContent(" 천송이의 기적과도 같은 달콤 발랄 로멘스!");
         this.$.drawer3.setOpen(true);
         this.$.drawer1.setOpen(false);
         this.$.drawer2.setOpen(false);
         //this.$.drawer0.setOpen(false);
         
         this.$.star_1.setSrc("assets/1_.png");
         this.$.star_2.setSrc("assets/2_.png");
         this.$.star_3.setSrc("assets/3_.png");
         this.$.star_4.setSrc("assets/4.png");
         this.$.star_5.setSrc("assets/5.png");
         this.$.star_6.setSrc("assets/6_.png");
         this.$.star_7.setSrc("assets/7.png");
         this.$.star_8.setSrc("assets/8.png");
         this.$.star_9.setSrc("assets/9.png");
         this.$.star_10.setSrc("assets/10.png");
         this.$.star_11.setSrc("assets/11.png");
      }
      
   },
   goHome : function(inSender, inEvent) {
      this.bubbleUp("onGoHome", {
         name : name
      });
      return true;
   },
    imageClick: function(inSender, inEvent) {
       //alert(inSender.name); // 
       var name = inSender.name;
       this.bubbleUp("onShowPanel", {name:name});
       return true;
    },
   pro_1: function(inSender, inEvent)
   {
         this.$.Story.setContent("dsadsadsadsadsadsadsadadsadsad");      
   },
   pro_2: function(inSender, inEvent)
   {
      this.$.Story.setSrc("assets/sheStory_1.png");      
      
   },
   pro_3: function(inSender, inEvent)
   {
      this.$.Story.setSrc("assets/starStory_1.png");      
      
   },
   star_1: function(inSender, inEvent)
   {
         this.$.Story.setSrc("assets/proStory_1.png");      
   },
   star_2: function(inSender, inEvent)
   {
      this.$.Story.setSrc("assets/sheStory_1.png");      
      
   },
   star_3: function(inSender, inEvent)
   {
      this.$.Story.setSrc("assets/starStory_1.png");      
      
   },
   she_1: function(inSender, inEvent)
   {
         this.$.Story.setSrc("assets/proStory_1.png");      
   },
   she_2: function(inSender, inEvent)
   {
      this.$.Story.setSrc("assets/sheStory_1.png");      
      
   },
   she_3: function(inSender, inEvent)
   {
      this.$.Story.setSrc("assets/starStory_1.png");      
      
   },
});