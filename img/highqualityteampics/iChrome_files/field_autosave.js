/*
 *
 *  * Copyright (c) 2004-2015, School Loop, Inc. All Rights Reserved.
 *
 */

var FieldAutoSave =  Class.$extend({
    __init__: function(formDataID, id, name, url, updateAfterInit)
    {
        sl.log("Autosave:" + id + " name:" + name + " formDataID:" + formDataID);
        this.formDataID = formDataID;
        this.id = id;
        this.name = name;
        this.url = url;
        this.timeoutTriggered = false;
        jQuery("#" + id).data("autosave",this);
        jQuery("#" + id).keydown(jQuery.proxy(this.keydownHandler, this));
        jQuery("#" + id).change(jQuery.proxy(this.changeHandler, this));
        if ( updateAfterInit )
        {
            this.updateField();
        }
    },

    keydownHandler: function(event)
    {
        if ( this.timeoutTriggered == false )
        {
            this.timeoutTriggered = true;
            setTimeout(jQuery.proxy(this.updateField, this), 5000);
        }
    },

    ckeditorEventHandler: function(event)
    {
        if ( this.timeoutTriggered == false )
        {
            this.timeoutTriggered = true;
            setTimeout(jQuery.proxy(this.updateField, this), 5000);
        }
    },


    changeHandler: function(event)
    {
        if ( this.timeoutTriggered == false )
        {
            this.timeoutTriggered = true;
            setTimeout(jQuery.proxy(this.updateField, this), 5000);
        }
    },

    updateField: function()
    {
        this.timeoutTriggered = false;
        if ( CKEDITOR.instances[this.id] != null )
        {
            CKEDITOR.instances[this.id].updateElement();
        }
        var value = jQuery("#" + this.id).val();
        sl.log("FieldUpdater value:" + value);
        var variables = {};
        variables["form_data_id"] = this.formDataID;
        variables["field_name"] = this.name;
        variables["field_value"] = value;
        jQuery.ajax({
            url: this.url,
            type: "POST",
            data: variables,
            context: this,
            success: function(data)
            {
                if ( (data != null) && (data.lastIndexOf("err", 0) != -1) )
                {
                    window.location = sl.getTimeoutURL();
                }
            },
            error: function()
            {
                window.location = sl.getTimeoutURL();
            }
        });
    }
});