sap.ui.define(['sap/ui/core/UIComponent', 'sap/ui/core/mvc/XMLView'],
    function(UIComponent, XMLView) {
        "use strict";

        var Component = UIComponent.extend("iotapp.Component", {

            metadata: {
                publicMethods: [
                    "getTable"
                ],
                dependencies: {
                    libs: [
                        "sap.m",
                        "sap.ui.layout"
                    ]
                },
                config: {
                    sample: {
                        files: [
                            "Table.view.xml",
                            "Table.controller.js",
                            "Formatter.js"
                        ]
                    }
                }
            },

            getTable: function() {
                return this._rootView.getContent()[0];
            }
        });

        /**
         * Creates the view iotapp.Table as content of this Container
         * @return {object} View to be placed as content
         */
        Component.prototype.createContent = function() {
            this._rootView = sap.ui.xmlview({
                viewName: "iotapp.Table"
            });
            return this._rootView;
        };

        return Component;

    });
