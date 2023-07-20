sap.ui.define(
    ["./BaseController"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.personal.portfolio.controller.Skills", {
            onHomePress: function () {
                this.getOwnerComponent().getRouter().navTo("MainView");  
              },
            onpress1: function () {
              this.getOwnerComponent().getRouter().navTo("Aboutme");  
            },
            onpress2: function () {
                this.getOwnerComponent().getRouter().navTo("Skills");  
            },
            onpress3: function () {
                this.getOwnerComponent().getRouter().navTo("Resume");  
            },
            onpress4: function () {
                this.getOwnerComponent().getRouter().navTo("Contact");  
            },
        });
    },
);
