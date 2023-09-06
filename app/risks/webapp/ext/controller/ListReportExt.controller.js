sap.ui.define([
    'sap/ui/core/mvc/ControllerExtension'
], function (
    ControllerExtension
) {
    'use strict';

    return ControllerExtension.extend('riskmanagement.risks.ext.controller.ListReportExt', {
        override: {
            onInit: function () {
                $.ajax({
                    url: "/user-api/currentUser",
                    // url: "../user",
                    async: false,
                    success: function (data, resp) {
                        alert("done")
                    },
                    error: function (msg) {
                        alert("noooo")
                    }
    
                });
            }
        }
    });
});
