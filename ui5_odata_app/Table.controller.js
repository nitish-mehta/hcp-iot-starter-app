sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(jQuery, Controller, JSONModel) {
	"use strict";

	var TableController = Controller.extend("iotapp .Table", {
		
		/**
		 * onInit : Called when the controller is initialized. 
		 * 			Here we are creating a JSON model based on our service URL and setting that model to our view
		 */
		onInit: function () {
	
			// Replace below service URL with the path to your service.
			// Example: https://s10hanaxs.hanatrial.ondemand.com/p1941741844trial/trialhana/iotapp/iotservice.xsodata/<tableName>?$format=json
			var oModel = new JSONModel("https://<hanaserver>.hanatrial.ondemand.com/<accountName>/<hanaInstance>/<path_to_package>/iotservice.xsodata/<tableName>?$format=json");
				this.getView().setModel(oModel);
		}
	});


	return TableController;

});
