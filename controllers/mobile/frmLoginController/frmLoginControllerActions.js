define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnLogin **/
    AS_Button_gdedfd69a30c4f9982cd7dc2b1e54846: function AS_Button_gdedfd69a30c4f9982cd7dc2b1e54846(eventobject) {
        var self = this;

        function SHOW_ALERT__b9fe34df0b844f0f934403282b332155_True() {}
        function INVOKE_IDENTITY_SERVICE__j9c7c5c7b567485aa7dbb470894bfe82_Success(status, login) {
            function SHOW_ALERT__d863d92a5aa84ab6ab75c26452d8c2f4_Callback() {
                SHOW_ALERT__d863d92a5aa84ab6ab75c26452d8c2f4_True();
            }
            kony.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": "Success",
                "yesLabel": "Ok",
                "noLabel": null,
                "alertIcon": null,
                "message": "Login Successful.",
                "alertHandler": SHOW_ALERT__d863d92a5aa84ab6ab75c26452d8c2f4_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
            var ntf = new kony.mvc.Navigation("frmContacts");
            ntf.navigate();
        }
        function INVOKE_IDENTITY_SERVICE__j9c7c5c7b567485aa7dbb470894bfe82_Failure(status, login) {
            function SHOW_ALERT__b9fe34df0b844f0f934403282b332155_Callback() {
                SHOW_ALERT__b9fe34df0b844f0f934403282b332155_True();
            }
            kony.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": null,
                "yesLabel": null,
                "noLabel": null,
                "alertIcon": null,
                "message": "Authentication Failed!",
                "alertHandler": SHOW_ALERT__b9fe34df0b844f0f934403282b332155_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }
        function SHOW_ALERT__d863d92a5aa84ab6ab75c26452d8c2f4_True() {}
        if (login_inputparam == undefined) {
            var login_inputparam = {};
        }
        login_inputparam["serviceID"] = "MicrosoftActiveDirectory$login";
        login_inputparam["operation"] = "login";
        MicrosoftActiveDirectory$login = mfidentityserviceinvoker("MicrosoftActiveDirectory", login_inputparam, INVOKE_IDENTITY_SERVICE__j9c7c5c7b567485aa7dbb470894bfe82_Success, INVOKE_IDENTITY_SERVICE__j9c7c5c7b567485aa7dbb470894bfe82_Failure);
    }
});