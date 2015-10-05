/**
	For simple applications, you might define all of your views in this file.  
	For more complex applications, you might choose to separate these kind definitions 
	into multiple files under this folder.
*/

enyo.kind({
	name: "myapp.MainView",
	handlers: {
		onShowPanel: "showPanel",
		onGoHome: "goHome"
	},
	components:[
	    	    {name: "panels", kind: "moon.Panels", arrangerKind: "CardArranger", classes: "moon enyo-fit", components: [	 
	    	        {name: "menu", kind: "mainMenuPanel"}
	            ]}
	    	    
	    	],
	    	
		showPanel: function(inSender, inEvent) { 
		var panelKind = inEvent.name+"Panel";   // addBff������  addBffPanel      	
		var model = inEvent.model;
		//if(inEvent.name == "news" | inEvent.name == "popup")
			//{
			this.$.panels.popPanels(-1);
			//}
		this.$.panels.pushPanel({kind: panelKind, model: model});
		//alert(panelKind);
		return true;
	},
	goHome: function() {
		
		this.$.panels.set("index",0); // return home view
		return true;
	}
});
