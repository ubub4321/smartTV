var indexArray;

enyo.kind({
	name: "selectPanel",
	kind: "FittableRows",
	classes: "moon enyo-unselectable enyo-fit",
	handlers: {
		ontap: "ontap"
	},
	components: [
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
										{kind: "moon.Button", style:"margin-left:110px;",name: "Play", small: true, content: "PLAY",ontap:"Play"},
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
			    {name: "num0", kind: "enyo.Image",style:"height: 200px;margin-right:40px;",ontap:"Story_1"},
				{name: "num1", kind: "enyo.Image",style:"height: 200px;margin-right:40px;",ontap:"Story_2"},
				{name: "num2", kind: "enyo.Image",style:"height: 200px;margin-right:40px;",ontap:"Story_3"},
		  ]
		},
		{ 
			  name : "drawer2",
			  kind : "enyo.Drawer",
			  open : false,
			  components : [
			     {name: "num3", kind: "enyo.Image",style:"height: 200px;margin-right:40px;",ontap:"Story_1"},
			     {name: "num4", kind: "enyo.Image",style:"height: 200px;margin-right:40px;",ontap:"Story_2"},
			     {name: "num5", kind: "enyo.Image",style:"height: 200px;margin-right:40px;",ontap:"Story_3"},
			  ]
		},
		{ 
				  name : "drawer3",
				  kind : "enyo.Drawer",
				  open : false,
				  components : [
				  {name: "num6", kind: "enyo.Image",style:"height: 200px;margin-right:40px;",ontap:"Story_1"},
				  {name: "num7", kind: "enyo.Image",style:"height: 200px;margin-right:40px;",ontap:"Story_2"},
				  {name: "num8", kind: "enyo.Image",style:"height: 200px;margin-right:40px;",ontap:"Story_3"},
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
				this.$.num0.setSrc("assets/num1.png");
				this.$.num1.setSrc("assets/num1.png");
				this.$.num2.setSrc("assets/num1.png");
			}
		if(i == 1)
		{
			this.$.Story.setSrc("assets/sheStory_1.png");	
			this.$.drawer2.setOpen(true);
			this.$.drawer1.setOpen(false);
			this.$.drawer3.setOpen(false);
			this.$.num3.setSrc("assets/num2.png");
			this.$.num4.setSrc("assets/num2.png");
			this.$.num5.setSrc("assets/num2.png");
		}
		if(i == 2)
		{
			this.$.Story.setSrc("assets/starStory_1.png");	
			this.$.drawer3.setOpen(true);
			this.$.drawer1.setOpen(false);
			this.$.drawer2.setOpen(false);
			this.$.num6.setSrc("assets/num3.png");
			this.$.num7.setSrc("assets/num3.png");
			this.$.num8.setSrc("assets/num3.png");
		}
		
	},
	Story_1: function(inSender, inEvent)
	{
			this.$.Story.setSrc("assets/proStory_1.png");		
	},
	Story_2: function(inSender, inEvent)
	{
		this.$.Story.setSrc("assets/sheStory_1.png");		
		
	},
	Story_3: function(inSender, inEvent)
	{
		this.$.Story.setSrc("assets/starStory_1.png");		
		
	}
	
});