if (res != undefined && res.statusCode) {
                obj.showError('Error While adding integration');
                return;
            } else {
                res = res ? res : {};
                var userIntegrationID = ParamData.userIntegrationID ? ParamData.userIntegrationID : res.userIntegrationID;
                
                ParamData.userIntegrationID = userIntegrationID;
                ParamData.formName = 'integration_config';
                var templateName = 'codereview/popup';
                var objDiv = $('#integrations_inner_body');
                ParamData.innerTemplate = "";
                if (typeof ParamData.isInstructions != 'undefined' && (ParamData.isInstructions == true || ParamData.isInstructions == 1)) {
                    ParamData.innerTemplate = 'integrationinstructions/' + ParamData.index;
                }
                
                ParamData.webHookUrl = "";
                if (typeof ParamData.isWebHook != 'undefined' && (ParamData.isWebHook == true || ParamData.isWebHook == 1)) {
                    ParamData.webHookUrl = obj.WebHookServerIP + ParamData.index + '/' + ParamData.userIntegrationID;
                }
                
                obj.restCall({
                    action: 'getUserGroupList'
                }, function (res) {
                    if (res.statusCode == 0) {
                        ParamData.groups = res.groups;
                        ParamData.isAuthenticated = false;
                        obj.getTemplateHtml(templateName, ParamData, objDiv);
                        $('#int_group_broad').val(ParamData.channels);
                        $('#int_group_broad').material_select();
                    }
                    $('#trelloAccessTokenDiv').hide();
                    $('#trelloAccessTokenDiv').hide();
                    if (typeof (ParamData.assemblaSpace) != 'undefined') {
                        if (ParamData.assemblaSpace == '') {
                            $('#assemblaDiv').hide();
                        }
                    }
                    if (typeof (ParamData.jiraProject) != 'undefined') {
                        $.each(ParamData.jiraProject, function (i, e) {
                            $("#jiraProject option[value='" + e + "']").prop("selected", true);
                        });
                    }
                    if (typeof (ParamData.breezeProject) != 'undefined') {
                        $.each(ParamData.breezeProject, function (i, e) {
                            $("#breezeProject option[value='" + e + "']").prop("selected", true);
                        });
                    }
                    if (typeof (ParamData.agileZenProject) != 'undefined') {
                        $.each(ParamData.agileZenProject, function (i, e) {
                            $("#agileZenProject option[value='" + e + "']").prop("selected", true);
                        });
                    }
                    if (typeof (ParamData.doneDoneProject) != 'undefined') {
                        $.each(ParamData.doneDoneProject, function (i, e) {
                            $("#doneDoneProject option[value='" + e + "']").prop("selected", true);
                        });
                    }
                    if (typeof (ParamData.vsProjectId) != 'undefined') {
                        $.each(ParamData.vsProjectId, function (i, e) {
                            $("#vsProjectId option[value='" + e + "']").prop("selected", true);
                        });
                    }
                    if (typeof (ParamData.teamRoomIds) != 'undefined') {
                        $.each(ParamData.teamRoomIds, function (i, e) {
                            $("#teamRoomIds option[value='" + e + "']").prop("selected", true);
                        });
                    }
                    if (typeof (ParamData.authenticationData.trelloBoardId) != 'undefined') {
                        $.each(ParamData.authenticationData.trelloBoardId, function (i, e) {
                            $("#trelloBoardId option[value='" + e + "']").prop("selected", true);
                        });
                    }
                    if (typeof (ParamData.authenticationData.asanaProjectId) != 'undefined') {
                        $.each(ParamData.authenticationData.asanaProjectId, function (i, e) {
                            $("#asanaProjectId option[value='" + e + "']").prop("selected", true);
                        });
                    }
                    if (typeof (ParamData.authenticationData.gitHubRepoIds) != 'undefined') {
                        $.each(ParamData.authenticationData.gitHubRepoIds, function (i, e) {
                            $("#gitHubRepoIds option[value='" + e + "']").prop("selected", true);
                        });
                    }
                    if (typeof ParamData.pivotalProjectId != 'undefined') {
                        $('#pivotalProjectIds').val(ParamData.pivotalProjectId);
                    }
                    if (typeof ParamData.teamworkProjectId != 'undefined') {
                        $('#teamworkProjectId').val(ParamData.teamworkProjectId);
                    }
                    // google calendar code.
                    if (typeof (ParamData.authenticationData.googlecalendarId) != 'undefined') {
                        if (ParamData.googlecalendarId.indexOf("%23") > -1) {
                            ParamData.googlecalendarId = ParamData.googlecalendarId.replace("%23", "#");
                        }
                        $("#googlecalendarId option[value='" + ParamData.googlecalendarId + "']").prop("selected", true);
                        $("#googlecalendarIdOld").val(ParamData.googlecalendarId);
                    }
                    if (typeof (ParamData.authenticationData.googleCalendarSetting) != 'undefined' && typeof (ParamData.authenticationData.googleCalendarSetting.googleCalendarReminder) != 'undefined') {
                        $("#postremindersGoogleDiv").removeClass("hideMe");
                        $("#postremindersGoogle").prop("checked", true);
                        $("#googleCalendarReminder option[value='" + ParamData.googleCalendarReminder + "']").prop("selected", true);
                    } else {
                        $("#postremindersGoogleDiv").addClass("hideMe");
                    }
                    if (typeof (ParamData.authenticationData.googleCalendarSetting) != 'undefined' && typeof (ParamData.authenticationData.googleCalendarSetting.googleCalendarAllDayReminder) != 'undefined') {
                        $("#postalldayremindersGoogleDiv").removeClass("hideMe");
                        $("#postalldayremindersGoogle").prop("checked", true);
                        $("#googleCalendarAllDayReminder option[value='" + ParamData.googleCalendarAllDayReminder + "']").prop("selected", true);
                    } else {
                        $("#postalldayremindersGoogleDiv").addClass("hideMe");
                    }
                    if (typeof (ParamData.authenticationData.webhookSetting) != 'undefined' && ParamData.authenticationData.webhookSetting != null && typeof (ParamData.authenticationData.webhookSetting.channelId) != 'undefined' && ParamData.authenticationData.webhookSetting.channelId != null) {
                        $("#googlecalendarChannelId").val(ParamData.googlecalendarChannelId);
                    }
                    if (typeof (ParamData.authenticationData.webhookSetting) != 'undefined' && ParamData.authenticationData.webhookSetting != null && typeof (ParamData.authenticationData.webhookSetting.resourceId) != 'undefined' && ParamData.authenticationData.webhookSetting.resourceId != null) {
                        $("#googlecalendarResourceId").val(ParamData.googlecalendarResourceId);
                    }
                    if (typeof (ParamData.authenticationData.webhookSetting) != 'undefined' && ParamData.authenticationData.webhookSetting != null && typeof (ParamData.authenticationData.webhookSetting.webhookExpiration) != 'undefined' && ParamData.authenticationData.webhookSetting.webhookExpiration != null) {
                        $("#googlecalendarwebhookExpiration").val(ParamData.googlecalendarwebhookExpiration);
                    }
                    if (typeof (ParamData.authenticationData.googleCalendarSetting) != 'undefined' && typeof (ParamData.authenticationData.googleCalendarSetting.timeToReminder) != 'undefined') {
                        var convertedTimeFromUtc = moment(ParamData.timeToReminder).format("HH:mm");
                        $('#timepicker').val(convertedTimeFromUtc);
                    }
                    // outlook calendar code.
                    if (typeof (ParamData.authenticationData.outlookcalendarId) != 'undefined' && ParamData.authenticationData.outlookcalendarId != null) {
                        $("#outlookcalendarId option[value='" + ParamData.outlookcalendarId + "']").prop("selected", true);
                        $("#outlookcalendarIdOld").val(ParamData.outlookcalendarId);
                    }
                    if (typeof (ParamData.authenticationData.outlookCalendarSetting) != 'undefined' && ParamData.authenticationData.outlookCalendarSetting != null && typeof (ParamData.authenticationData.outlookCalendarSetting.outlookCalendarReminder) != 'undefined' && ParamData.authenticationData.outlookCalendarSetting.outlookCalendarReminder != null) {
                        $("#postremindersDiv").removeClass("hideMe");
                        $("#postreminders").prop("checked", true);
                        $("#outlookCalendarReminder option[value='" + ParamData.outlookCalendarReminderId + "']").prop("selected", true);
                    } else {
                        $("#postremindersDiv").addClass("hideMe");
                    }
                    if (typeof (ParamData.authenticationData.outlookCalendarSetting) != 'undefined' && ParamData.authenticationData.outlookCalendarSetting != null && typeof (ParamData.authenticationData.outlookCalendarSetting.outlookCalendarAllDayReminder) != 'undefined' && ParamData.authenticationData.outlookCalendarSetting.outlookCalendarAllDayReminder != null) {
                        $("#postalldayremindersDiv").removeClass("hideMe");
                        $("#postalldayreminders").prop("checked", true);
                        $("#outlookCalendarAllDayReminder option[value='" + ParamData.outlookCalendarAllDayReminderId + "']").prop("selected", true);
                    } else {
                        $("#postalldayremindersDiv").addClass("hideMe");
                    }
                    if (typeof (ParamData.authenticationData.webhookSetting) != 'undefined' && ParamData.authenticationData.webhookSetting != null && typeof (ParamData.authenticationData.webhookSetting.subscriptionId) != 'undefined' && ParamData.authenticationData.webhookSetting.subscriptionId != null) {
                        $("#outlookcalendarsubscriptionId").val(ParamData.outlookcalendarsubscriptionId);
                    }
                    if (typeof (ParamData.authenticationData.webhookSetting) != 'undefined' && ParamData.authenticationData.webhookSetting != null && typeof (ParamData.authenticationData.webhookSetting.webhookExpiration) != 'undefined' && ParamData.authenticationData.webhookSetting.webhookExpiration != null) {
                        $("#outlookcalendarwebhookExpiration").val(ParamData.outlookcalendarwebhookExpiration);
                    }
                    if (typeof (ParamData.authenticationData.webhookSetting) != 'undefined' && ParamData.authenticationData.webhookSetting != null && typeof (ParamData.authenticationData.webhookSetting.clientStateId) != 'undefined' && ParamData.authenticationData.webhookSetting.clientStateId != null) {
                        $("#outlookcalendarclientStateId").val(ParamData.outlookcalendarclientStateId);
                    }
                    if (typeof (ParamData.authenticationData.outlookCalendarSetting) != 'undefined' && typeof (ParamData.authenticationData.outlookCalendarSetting.timeToReminder) != 'undefined') {
                        var convertedTimeFromUtc = moment(ParamData.timeToReminder).format("HH:mm");
                        $('#timepicker').val(convertedTimeFromUtc);
                    }
                    if (typeof (ParamData.authenticationData.lasttimeEventStored) != 'undefined' && ParamData.authenticationData.lasttimeEventStored != null) {
                        $("#lasttimeEventStored").val(ParamData.lasttimeEventStored);
                    }

                });
            }
