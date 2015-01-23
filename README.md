# JavaScript-Form-Generator-with-Validation
JQuery Plugin to genrate Form with input fileds, radio button, checkbox, dropdown Along with the validation to those fields 


Sample Data need to send of various data fields information, Example show below

        var options = {
                            //Default Will be popup
                            "FormStyle"     : "popup",
                            //Default Will be body
                            "FormContainer" : "body",
                            "submitId"      : "submitButton",
                            "FormName"      : "LeadForm"
                       },
            fieldList =  
            
            {
                "name"  :   {
                                "name"          :   "name",
                                "type"          :   "text",
                                "value"         :   "",
                                "hidden"        :   false,
                                "placeholder"   :   "Enter the Name",
                                "class"         :   "required"
                            },
                
                "email" :   {   
                                "name"          :   "email",
                                "type"          :   "email",
                                "value"          :   "",
                                "hidden"        :   false,
                                "placeholder"   :   "Enter the Email",
                                "class"         :   "required email"
                            },
                "phone_number" :  {
                                "name"          :   "phone_number",
                                "type"          :   "text",
                                "value"          :   "",
                                "hidden"        :   false,
                                "class"         :   "required number",
                                "placeholder"   :   "Enter the Number",
                                "country" :  {
                                            "name"          :   "country_code",
                                            "type"          :   "select",
                                            "value"          :   "",
                                            "data"          :   "countryList",
                                            "hidden"        :   false,
                                            "class"         :   "required"
                                        }
                            },
                
                "telcoCircle" :  {
                                "name"          :   "telco_circle",
                                "type"          :   "select",
                                "value"          :   "",
                                "data"          :   "countryList",
                                "class"         :   "required"
                                
                            }
            };
            
            
            #To Genrate Form you need to call folowing function
            
            $(document).generateForm(options,fieldList);
            
            #To validate the form you need to call the following function, where selector is the Form id
            
             $(selector).submit(function(){
                  $(selector).BValidate({"defaultBackGroundColor":"#000"});
                  return false;
              });
