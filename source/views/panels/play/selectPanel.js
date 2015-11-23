var indexArray;
var index;
var index2;
var index3;
var tog1;
var tog2;
var tog3;

enyo.kind({
   name: "selectPanel",
   kind: "FittableRows",
   classes : "Select_background",
   handlers: {
      ontap: "ontap"
   },
   components: [
   {
      name:"Home",
      kind: "moon.Image",
      classes: "S_Home",
      src:"assets/play/homeB.jpg",
      onclick : "goHome",
      onmouseout:"Homeout",
      onmouseover:"Homeon"
   },
      {kind: "moon.Scroller", fit:true, components: [
            {

               orientation: "vertical",
               components: [
                  { components: [
                     {name: 'image', src:"assets/play/poster.png",style:"margin-left:80px;margin-right:80px;margin-top:40px;",kind: 'enyo.Image',ontap:"Play1",onmouseover:"Playon1",onmouseout:"Playout1"},
                     {name: 'image2',src:"assets/play/poster_she.jpg", style:"margin-left:80px;margin-right:80px;margin-top:40px;",kind: 'enyo.Image',ontap:"Play2",onmouseover:"Playon2",onmouseout:"Playout2"},
                     {name: 'image3',src:"assets/play/poster_star.jpg", style:"margin-left:80px;margin-right:80px;margin-top:40px;",kind: 'enyo.Image',ontap:"Play3",onmouseover:"Playon3",onmouseout:"Playout3"}
                  ]}
               ],//actionComponents
            }
         
      ]},

      { 
           name : "drawer1",
           kind : "enyo.Drawer",
      //   style: "margin-bottom : 150px;",
           open : false,
           components : [
                 {name: 'Story',classes:"font",style:"width:1600px;margin-left:150px;", kind: 'moon.BodyText'},
                 {kind: "moon.Divider"},
                {name: "pro_1", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;",onmouseout:"outNumpro1",onmouseover:"onNumpro1",ontap:"imageClick"},
               {name: "pro_2", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;",onmouseout:"outNumpro2",onmouseover:"onNumpro2",ontap:"imageClick"},
               {name: "pro_3", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;",onmouseout:"outNumpro3",onmouseover:"onNumpro3",ontap:"imageClick"},
                {name: "pro_4", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;"},
               {name: "pro_5", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;"},
               {name: "pro_6", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;"},
                {name: "pro_7", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;"},
               {name: "pro_8", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;"},
               {name: "pro_9", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;"},
                {name: "pro_10", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;"},
               {name: "pro_11", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;"},
           ]
         },
         { 
              name : "drawer2",
              kind : "enyo.Drawer",
             // style: "margin-bottom : 350px;",
              open : false,
              components : [
                          {name: 'Story2',classes:"font",style:"width:1600px;margin-left:150px;", kind: 'moon.BodyText'},
                          {kind: "moon.Divider"},
                 {name: "she_1", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;",onmouseout:"outNumshe1",onmouseover:"onNumshe1",ontap:"imageClick"},
                 {name: "she_2", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;",onmouseout:"outNumshe2",onmouseover:"onNumshe2",ontap:"imageClick"},
                 {name: "she_3", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;",onmouseout:"outNumshe3",onmouseover:"onNumshe3",ontap:"imageClick"},
                 {name: "she_4", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;"},
                 {name: "she_5", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;"},
                 {name: "she_6", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;"},
                 {name: "she_7", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;"},
                 {name: "she_8", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;"},
                 {name: "she_9", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;"},
                 {name: "she_10", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;"},
                 {name: "she_11", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;"},
              ]
         },
         { 
                 name : "drawer3",
                 kind : "enyo.Drawer",
                // style: "margin-bottom : 350px;",
                 open : false,
                 components : [
                             {name: 'Story3',classes:"font",style:"width:1600px;margin-left:150px;", kind: 'moon.BodyText'},
                             {kind: "moon.Divider"},
                 {name: "star_1", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;",onmouseout:"outNumstar1",onmouseover:"onNumstar1",ontap:"imageClick"},
                 {name: "star_2", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;",onmouseout:"outNumstar2",onmouseover:"onNumstar2",ontap:"imageClick"},
                 {name: "star_3", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;",onmouseout:"outNumstar3",onmouseover:"onNumstar3",ontap:"imageClick"},
                 {name: "star_4", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;"},
                 {name: "star_5", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;"},
                 {name: "star_6", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;"},
                 {name: "star_7", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;"},
                 {name: "star_8", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;"},
                 {name: "star_9", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;"},
                 {name: "star_10", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;"},
                 {name: "star_11", kind: "enyo.Image",style:"width: 100px;height: 100px;margin-right:40px;margin-bottom : 5px;"},
                 ]
         },

      
   ],
   Playon1: function(inSender, inEvent)
   {
   
         this.$.image.setSrc("assets/play/postert.png");
      
   },
   Playout1: function(inSender, inEvent)
   {
      if(tog1 != 1)
      {
         this.$.image.setSrc("assets/play/poster.png");
      }
   },
   Playon2: function(inSender, inEvent)
   {
         this.$.image2.setSrc("assets/play/poster_she_t.jpg");
   },
   Playout2: function(inSender, inEvent)
   {
      if(tog2 != 1)
      {
         this.$.image2.setSrc("assets/play/poster_she.jpg");
      }
   },
   Playon3: function(inSender, inEvent)
   {
         this.$.image3.setSrc("assets/play/poster_star_t.jpg");
   },
   Playout3: function(inSender, inEvent)
   {
      if(tog3 != 1)
      {
         this.$.image3.setSrc("assets/play/poster_star.jpg");
      }
   },
   Homeon: function(inSender, inEvent)
   {
         this.$.Home.setSrc("assets/play/homeBt.jpg");   
   },
   Homeout: function(inSender, inEvent)
   {
         this.$.Home.setSrc("assets/play/homeB.jpg");      
   },
   Play1: function(inSender, inEvent)
   {
      tog1 = 1;
      this.$.image.setSrc("assets/play/postert.png");
            if(index == 0)
               {
                  this.$.drawer1.setOpen(false);
                  this.$.image.setSrc("assets/play/poster.png");

                  index =1;
               }
            else{
                  this.$.Story.setContent(" 본의 아니게 예능국 OJT 좋아하는 대학 동아리 누나 때문에 KBS 예능국에 들어온 백승찬(김수현),예능국 여왕벌 탁예진(공효진)와 1박 2일 PD준모(차태현),인기 가수 신디(아이유)가 펼치는 예능국 안에서의 이야기! 밤샘회의에 촬영에 편집에 마라톤을 뛰고도 시청률 떨어지면 밥버러지 취급을 받으니 ... 출입증을 목에 걸고 오늘도 여의도 18번지 6층으로 출근하는 피디 아닌 직장인들의 사무실 이야기.");   
                  
                  this.$.drawer1.setOpen(true);
                  this.$.drawer2.setOpen(false);
                  this.$.drawer3.setOpen(false);
                  //this.$.drawer0.setOpen(false);
                  
                  this.$.pro_1.setSrc("assets/play/1.png");
                  this.$.pro_2.setSrc("assets/play/2.png");
                  this.$.pro_3.setSrc("assets/play/3.png");
                  this.$.pro_4.setSrc("assets/play/4.png");
                  this.$.pro_5.setSrc("assets/play/5.png");
                  this.$.pro_6.setSrc("assets/play/6.png");
                  this.$.pro_7.setSrc("assets/play/7.png");
                  this.$.pro_8.setSrc("assets/play/8.png");
                  this.$.pro_9.setSrc("assets/play/9.png");
                  this.$.pro_10.setSrc("assets/play/10.png");
                  this.$.pro_11.setSrc("assets/play/11.png");
                  index = 0;
            }
            index2 = 1;
            index3 = 1;
            tog2 = 0;
            tog3 = 0;
            this.$.image2.setSrc("assets/play/poster_she.jpg");
            this.$.image3.setSrc("assets/play/poster_star.jpg");
   },
   Play2: function(inSender, inEvent)
   {
      tog2 = 1;
      this.$.image2.setSrc("assets/play/poster_she_t.jpg");   
      if(index3 == 0)
      {
         this.$.drawer3.setOpen(false);
         this.$.image2.setSrc("assets/play/poster_she.jpg");   

         index3 = 1;
      }
      else
      {
            this.$.Story2.setContent(" 주근깨 뽀글머리 '역대급 폭탄녀'로 역변한 혜진과 '초절정 복권남'으로 정변한 성준 완벽한듯 하지만 '빈틈 많은 섹시녀'하리, 베일에 가려진 '똘끼충만 반전남'신혁, 네 남녀의 재기발랄 로맨틱 코미디! 스스로를 '주연'아닌 '조연'으로 여겼던, 그래서 첫사랑 앞에 당당히 나서지도 못했던 그녀가.. 이젠 스스로를 알리고 싶은 첫사랑 '그'를 만나 인생의 당당한 '주연'으로 성장해 나가는 상큼발랄 로맨스!");
            this.$.drawer2.setOpen(true);
            this.$.drawer1.setOpen(false);
            this.$.drawer3.setOpen(false);
            //this.$.drawer0.setOpen(false);
            index3 = 0;
            this.$.she_1.setSrc("assets/play/1.png");
            this.$.she_2.setSrc("assets/play/2.png");
            this.$.she_3.setSrc("assets/play/3.png");
            this.$.she_4.setSrc("assets/play/4.png");
            this.$.she_5.setSrc("assets/play/5.png");
            this.$.she_6.setSrc("assets/play/6.png");
            this.$.she_7.setSrc("assets/play/7.png");
            this.$.she_8.setSrc("assets/play/8.png");
            this.$.she_9.setSrc("assets/play/9.png");
            this.$.she_10.setSrc("assets/play/10.png");
            this.$.she_11.setSrc("assets/play/11.png");
      }
      index = 1;
      index2 =1;
      tog1 = 0;
      tog3 = 0;
      this.$.image.setSrc("assets/play/poster.png");
      this.$.image3.setSrc("assets/play/poster_star.jpg");
   },
   Play3: function(inSender, inEvent)
   {
      tog3 = 1;
      this.$.image3.setSrc("assets/play/poster_star_t.jpg");
      if(index2 == 0)
      {
         this.$.drawer2.setOpen(false);
         index2 = 1;
         this.$.image3.setSrc("assets/play/poster_star.jpg");

      }
      else
      {
    	    this.$.Story3.setContent("조선왕조실록 광해 20권에는 기이한 기록이 남아 있다 1609년 가을. 강원도 간성, 원주, 춘천, 양양, 강릉 등지에서 거의 비슷한 시간에 알 수없는 비행 물체들이 출몰했다는 것. 만약, 그것이 '조선으로 날아온 UFO'였고 그 때 이 땅에 정착한 외계인이 있다면? 바로 옆집에 누가 살고 있는지 모르고 나의 옆집에서 어느 사랑스러운 외계인이 살고 잇을지 그와 기적과도 같은 달콤한 로맨스를 만들어 갈 수 있을지 알이다.");

            this.$.drawer3.setOpen(true);
            this.$.drawer1.setOpen(false);
            this.$.drawer2.setOpen(false);
            //this.$.drawer0.setOpen(false);
            index2 = 0;
            this.$.star_1.setSrc("assets/play/1.png");
            this.$.star_2.setSrc("assets/play/2.png");
            this.$.star_3.setSrc("assets/play/3.png");
            this.$.star_4.setSrc("assets/play/4.png");
            this.$.star_5.setSrc("assets/play/5.png");
            this.$.star_6.setSrc("assets/play/6.png");
            this.$.star_7.setSrc("assets/play/7.png");
            this.$.star_8.setSrc("assets/play/8.png");
            this.$.star_9.setSrc("assets/play/9.png");
            this.$.star_10.setSrc("assets/play/10.png");
            this.$.star_11.setSrc("assets/play/11.png");
      }
      index = 1;
      index3 = 1;
      tog1 = 0;
      tog2 = 0;
      this.$.image.setSrc("assets/play/poster.png");
      this.$.image2.setSrc("assets/play/poster_she.jpg");
   },
   
   goHome : function(inSender, inEvent) {
       index = 1;
       index2 = 1;
        index3 = 1;
        tog1 = 0;
        tog2 = 0;
        tog3 = 0;
	   this.bubbleUp("onGoHome", {
         name : name
      });
      return true;
   },
    imageClick: function(inSender, inEvent) {
       //alert(inSender.name); // 
        index = 1;
       index2 = 1;
        index3 = 1;
        tog1 = 0;
        tog2 = 0;
        tog3 = 0;
       var name = inSender.name;
       this.bubbleUp("onShowPanel", {name:name});
       return true;
    },
    outNumpro1: function(inSender, inEvent)
   {
         this.$.pro_1.setSrc("assets/play/1.png");   
   },
   onNumpro1: function(inSender, inEvent)
   {
         this.$.pro_1.setSrc("assets/play/1_.png");      
   },
    outNumpro2: function(inSender, inEvent)
   {
         this.$.pro_2.setSrc("assets/play/2.png");   
   },
   onNumpro2: function(inSender, inEvent)
   {
         this.$.pro_2.setSrc("assets/play/2_.png");      
   },
    outNumpro3: function(inSender, inEvent)
   {
         this.$.pro_3.setSrc("assets/play/3.png");   
   },
   onNumpro3: function(inSender, inEvent)
   {
         this.$.pro_3.setSrc("assets/play/3_.png");      
   },
   outNumshe1: function(inSender, inEvent)
   {
         this.$.she_1.setSrc("assets/play/1.png");   
   },
   onNumshe1: function(inSender, inEvent)
   {
         this.$.she_1.setSrc("assets/play/1_.png");      
   },
    outNumshe2: function(inSender, inEvent)
   {
         this.$.she_2.setSrc("assets/play/2.png");   
   },
   onNumshe2: function(inSender, inEvent)
   {
         this.$.she_2.setSrc("assets/play/2_.png");      
   },
    outNumshe3: function(inSender, inEvent)
   {
         this.$.she_3.setSrc("assets/play/3.png");   
   },
   onNumshe3: function(inSender, inEvent)
   {
         this.$.she_3.setSrc("assets/play/3_.png");      
   },
   outNumstar1: function(inSender, inEvent)
   {
         this.$.star_1.setSrc("assets/play/1.png");   
   },
   onNumstar1: function(inSender, inEvent)
   {
         this.$.star_1.setSrc("assets/play/1_.png");      
   },
    outNumstar2: function(inSender, inEvent)
   {
         this.$.star_2.setSrc("assets/play/2.png");   
   },
   onNumstar2: function(inSender, inEvent)
   {
         this.$.star_2.setSrc("assets/play/2_.png");      
   },
    outNumstar3: function(inSender, inEvent)
   {
         this.$.star_3.setSrc("assets/play/3.png");   
   },
   onNumstar3: function(inSender, inEvent)
   {
         this.$.star_3.setSrc("assets/play/3_.png");      
   },

});