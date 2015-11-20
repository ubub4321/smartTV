var indexArray;

enyo.kind({
	name: "selectPanel",
	kind: "FittableRows",
	classes: "moon enyo-unselectable enyo-fit",
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
					kind: "moon.ObjectActionDecorator", 
					orientation: "vertical",
					components: [
						{kind: "moon.Item", components: [
							{name: 'image', kind: 'enyo.Image'}
						]}
					],
					actionComponents: [
										{kind: "moon.Button",classes:"imsi", style:"margin-left:110px;",name: "Play", small: true, content: "PLAY",ontap:"Play"},
									]
				}
			]}
		]},
		{name: 'Story',style:"padding-top:100px;height:200px;", kind: 'enyo.Image'},
		{kind: "moon.Divider"},
		{ 
		  name : "drawer1",
		  kind : "enyo.Drawer",
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
			this.$.Story.setSrc("assets/proStory_1.png");	
			this.$.drawer1.setOpen(true);
			this.$.drawer2.setOpen(false);
			this.$.drawer3.setOpen(false);
			
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
			this.$.Story.setSrc("assets/sheStory_1.png");	
			this.$.drawer2.setOpen(true);
			this.$.drawer1.setOpen(false);
			this.$.drawer3.setOpen(false);
			
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
			this.$.Story.setSrc("assets/starStory_1.png");	
			this.$.drawer3.setOpen(true);
			this.$.drawer1.setOpen(false);
			this.$.drawer2.setOpen(false);
			
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
			this.$.Story.setSrc("assets/proStory_1.png");		
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