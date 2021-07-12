sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
		"sap/m/MessageToast"
], function(Controller,JSONModel,MessageToast) {
	"use strict";

	return Controller.extend("zsapui5proj04gridtableZSAPUI5_Proj04_GridTable.controller.VMaxemployees", {
	onInit: function() {
			var vmaxemployees = {
				"emp": [{
					"EMPID": 100,
					"EMPNAME": "Sreejith",
					"EMPDES": "Sr.ABAPer",
					"Gender": "./images/male.png",
					"Smoker": false,
					"MaritalStatus": "Single",
					"Rating": 4.5
				}, {
					"EMPID": 101,
					"EMPNAME": "Karthik",
					"EMPDES": "UI5 Trainer",
					"Gender": "./images/male.png",
					"Smoker": false,
					"MaritalStatus": "Married",
					"Rating": 2.5
				}, {
					"EMPID": 102,
					"EMPNAME": "Paula",
					"EMPDES": "Manager",
					"Gender": "./images/female.png",
					"Smoker": true,
					"MaritalStatus": "Single",
					"Rating": 3.5
				}, {
					"EMPID": 103,
					"EMPNAME": "James",
					"EMPDES": "Sr.DeliveryHead",
					"Gender": "./images/male.png",
					"Smoker": true,
					"MaritalStatus": "Single",
					"Rating": 1
				}, {
					"EMPID": 104,
					"EMPNAME": "Clara",
					"EMPDES": "Account Head",
					"Gender": "./images/female.png",
					"Smoker": false,
					"MaritalStatus": "Married",
					"Rating": 2
				}, {
					"EMPID": 105,
					"EMPNAME": "Mohan",
					"EMPDES": "Lead Consultant",
					"Gender": "./images/male.png",
					"Smoker": true,
					"MaritalStatus": "Single",
					"Rating": 5
				}]
			};
			var vmaxempjsonmodel = new JSONModel();
			vmaxempjsonmodel.setData(vmaxemployees);
			this.getView().byId("table1").setModel(vmaxempjsonmodel, "vmax");

		}, //end of onInit
	});
});