sap.ui.define(
    ["sap/fe/core/AppComponent"],
    function (Component) {
        "use strict";

        return Component.extend("riskmanagement.risks.Component", {
            metadata: {
                manifest: "json"
            }, 

            init : function () {
                Component.prototype.init.apply(this, arguments);
    
                this.getRouter().initialize();
            }
        });
    }
);