
(function($){
    // List of all countries
    var countrycodeList =   {
                            "93"    :   "Afghanistan",
                            "355"   :   "Albania",
                            "213"   :   "Algeria",
                            "684"   :   "American Samoa",
                            "376"   :   "Andorra",
                            "244"   :   "Angola",
                            "1-264" :   "Anguilla",
                            "672"   :   "Antarctica",
                            "1-268" :   "Antigua and Barbuda",
                            "54"    :   "Argentina",
                            "374"   :   "Armenia",
                            "297"   :   "Aruba",
                            "61"    :   "Australia",
                            "43"    :   "Austria",
                            "994"   :   "Azerbaijan",
                            "1-242" :   "Bahamas",
                            "973"   :   "Bahrain",
                            "880"   :   "Bangladesh",
                            "1-246" :   "Barbados",
                            "375"   :   "Belarus",
                            "32"    :   "Belgium",
                            "501"   :   "Belize",
                            "229"   :   "Benin",
                            "1-441" :   "Bermuda",
                            "975"   :   "Bhutan",
                            "591"   :   "Bolivia",
                            "387"   :   "Bosnia-Herzegovina",
                            "267"   :   "Botswana",
                            "55"    :   "Brazil",
                            "673"   :   "Brunei Darussalam",
                            "359"   :   "Bulgaria",
                            "226"   :   "Burkina Faso",
                            "257"   :   "Burundi",
                            "855"   :   "Cambodia",
                            "237"   :   "Cameroon",
                            "1"     :   "Canada",
                            "238"   :   "Cape Verde",
                            "1-345" :   "Cayman Islands",
                            "236"   :   "Central African Republic",
                            "235"   :   "Chad",
                            "56"    :   "Chile",
                            "86"    :   "China",
                            "61"    :   "Christmas Island",
                            "61"    :   "Cocos (Keeling) Islands",
                            "57"    :   "Colombia",
                            "269"   :   "Comoros",
                            "242"   :   "Congo",
                            "243"   :   "Congo, Dem. Republic",
                            "682"   :   "Cook Islands",
                            "506"   :   "Costa Rica",
                            "385"   :   "Croatia",
                            "53"    :   "Cuba",
                            "357"   :   "Cyprus",
                            "420"   :   "Czech Rep.",
                            "45"    :   "Denmark",
                            "253"   :   "Djibouti",
                            "1-767" :   "Dominica",
                            "809"   :   "Dominican Republic",
                            "593"   :   "Ecuador",
                            "20"    :   "Egypt",
                            "503"   :   "El Salvador",
                            "240"   :   "Equatorial Guinea",
                            "291"   :   "Eritrea",
                            "372"   :   "Estonia",
                            "251"   :   "Ethiopia",
                            "500"   :   "Falkland Islands (Malvinas)",
                            "298"   :   "Faroe Islands",
                            "679"   :   "Fiji",
                            "358"   :   "Finland",
                            "33"    :   "France",
                            "594"   :   "French Guiana",
                            "241"   :   "Gabon",
                            "220"   :   "Gambia",
                            "995"   :   "Georgia",
                            "49"    :   "Germany",
                            "233"   :   "Ghana",
                            "350"   :   "Gibraltar",
                            "44"    :   "Great Britain",
                            "30"    :   "Greece",
                            "299"   :   "Greenland",
                            "1-473" :   "Grenada",
                            "590"   :   "Guadeloupe (French)",
                            "1-671" :   "Guam (USA)",
                            "502"   :   "Guatemala",
                            "224"   :   "Guinea",
                            "245"   :   "Guinea Bissau",
                            "592"   :   "Guyana",
                            "509"   :   "Haiti",
                            "504"   :   "Honduras",
                            "852"   :   "Hong Kong",
                            "36"    :   "Hungary",
                            "354"   :   "Iceland",
                            "91"    :   "India",
                            "62"    :   "Indonesia",
                            "98"    :   "Iran",
                            "964"   :   "Iraq",
                            "353"   :   "Ireland",
                            "972"   :   "Israel",
                            "39"    :   "Italy",
                            "225"   :   "Ivory Coast",
                            "1-876" :   "Jamaica",
                            "81"    :   "Japan",
                            "962"   :   "Jordan",
                            "7"     :   "Kazakhstan",
                            "254"   :   "Kenya",
                            "686"   :   "Kiribati",
                            "850"   :   "Korea-North",
                            "82"    :   "Korea-South",
                            "965"   :   "Kuwait",
                            "996"   :   "Kyrgyzstan",
                            "856"   :   "Laos",
                            "371"   :   "Korea-North",
                            "961"   :   "Lebanon",
                            "266"   :   "Lesotho",
                            "231"   :   "Liberia",
                            "218"   :   "Libya",
                            "423"   :   "Liechtenstein",
                            "370"   :   "Lithuania",
                            "352"   :   "Luxembourg",
                            "853"   :   "Macau",
                            "389"   :   "Macedonia",
                            "261"   :   "Madagascar",
                            "265"   :   "Malawi",
                            "60"    :   "Malaysia",
                            "960"   :   "Maldives",
                            "223"   :   "Mali",
                            "356"   :   "Malta",
                            "692"   :   "Marshall Islands",
                            "596"   :   "Martinique (French)",
                            "222"   :   "Mauritania",
                            "230"   :   "Mauritius",
                            "269"   :   "Mayotte",
                            "52"    :   "Mexico",
                            "691"   :   "Micronesia",
                            "373"   :   "Moldova",
                            "377"   :   "Monaco",
                            "976"   :   "Mongolia",
                            "382"   :   "Montenegro",
                            "1-664" :   "Montserrat",
                            "212"   :   "Morocco",
                            "258"   :   "Mozambique",
                            "95"    :   "Myanmar",
                            "264"   :   "Namibia",
                            "674"   :   "Nauru",
                            "977"   :   "Nepal",
                            "31"    :   "Netherlands",
                            "599"   :   "Netherlands Antilles",
                            "687"   :   "New Caledonia (French)",
                            "64"    :   "New Zealand",
                            "505"   :   "Nicaragua",
                            "227"   :   "Niger",
                            "234"   :   "Nigeria",
                            "683"   :   "Niue",
                            "672"   :   "Norfolk Island",
                            "670"   :   "Northern Mariana Islands",
                            "47"    :   "Norway",
                            "968"   :   "Oman",
                            "92"    :   "Pakistan",
                            "680"   :   "Palau",
                            "507"   :   "Panama",
                            "675"   :   "Papua New Guinea",
                            "595"   :   "Paraguay",
                            "51"    :   "Peru",
                            "63"    :   "Philippines",
                            "48"    :   "Poland",
                            "689"   :   "Polynesia (French)",
                            "351"   :   "Portugal",
                            "1-787" :   "Puerto Rico",
                            "974"   :   "Qatar",
                            "262"   :   "Reunion (French)",
                            "40"    :   "Romania",
                            "7"     :   "Russia",
                            "250"   :   "Rwanda",
                            "290"   :   "Saint Helena",
                            "1-869" :   "Saint Kitts &amp; Nevis Anguilla",
                            "1-758" :   "Saint Lucia",
                            "508"   :   "Saint Pierre and Miquelon",
                            "1-784" :   "Saint Vincent &amp; Grenadines",
                            "684"   :   "Samoa",
                            "378"   :   "San Marino",
                            "239"   :   "Sao Tome and Principe",
                            "966"   :   "Saudi Arabia",
                            "221"   :   "Senegal",
                            "381"   :   "Serbia",
                            "248"   :   "Seychelles",
                            "232"   :   "Sierra Leone",
                            "65"    :   "Singapore",
                            "421"   :   "Slovakia",
                            "386"   :   "Slovenia",
                            "677"   :   "Solomon Islands",
                            "252"   :   "Somalia",
                            "27"    :   "South Africa",
                            "34"    :   "Spain",
                            "94"    :   "Sri Lanka",
                            "249"   :   "Sudan",
                            "597"   :   "Suriname",
                            "268"   :   "Swaziland",
                            "46"    :   "Sweden",
                            "41"    :   "Switzerland",
                            "963"   :   "Syria",
                            "886"   :   "Taiwan",
                            "992"   :   "Tajikistan",
                            "255"   :   "Tanzania",
                            "66"    :   "Thailand",
                            "228"   :   "Togo",
                            "690"   :   "Tokelau",
                            "676"   :   "Tonga",
                            "1-868" :   "Trinidad and Tobago",
                            "216"   :   "Tunisia",
                            "90"    :   "Turkey",
                            "993"   :   "Turkmenistan",
                            "1-649" :   "Turks and Caicos Islands",
                            "688"   :   "Tuvalu",
                            "44"    :   "U.K.",
                            "1"     :   "USA",
                            "256"   :   "Uganda",
                            "380"   :   "Ukraine",
                            "971"   :   "United Arab Emirates",
                            "598"   :   "Uruguay",
                            "998"   :   "Uzbekistan",
                            "678"   :   "Vanuatu",
                            "39"    :   "Vatican",
                            "58"    :   "Venezuela",
                            "84"    :   "Vietnam",
                            "1-284" :   "Virgin Islands (British)",
                            "1-340" :   "Virgin Islands (USA)", 
                            "681"   :   "Wallis and Futuna Islands",
                            "967"   :   "Yemen",
                            "260"   :   "Zambia",
                            "263"   :   "Zimbabwe"
                             
    },
    countrycodeListWithFlag =   {
                            "93"    :   {
                                            "name"  :   "Afghanistan",
                                            "flag"  :   "af"
                                        },
                            "355"   :   {
                                            "name"  :   "Albania",
                                            "flag"  :   "al"
                                        },
                            "213"   :   {
                                            "name"  :   "Algeria",
                                            "flag"  :   "dz"
                                        },
                            "684"   :   {
                                            "name"  :   "American Samoa",
                                            "flag"  :   "as"
                                        },
                            "376"   :   {
                                            "name"  :   "Andorra",
                                            "flag"  :   "ad"
                                        },
                            "244"   :   {
                                            "name"  :   "Angola",
                                            "flag"  :   "ao"
                                        },
                            "1-264" :   {
                                            "name"  :   "Anguilla",
                                            "flag"  :   "ai"
                                        },
                            "672"   :   {
                                            "name"  :   "Antarctica",
                                            "flag"  :   "aq"
                                        },
                            "1-268" :   {
                                            "name"  :   "Antigua and Barbuda",
                                            "flag"  :   "ag"
                                        },
                            "54"    :   {
                                            "name"  :   "Argentina",
                                            "flag"  :   "ar"
                                        },
                            "374"   :   {
                                            "name"  :   "Armenia",
                                            "flag"  :   "am"
                                        },
                            "297"   :   {
                                            "name"  :   "Aruba",
                                            "flag"  :   "aw"
                                        },
                            "61"    :   {
                                            "name"  :   "Australia",
                                            "flag"  :   "au"
                                        },
                            "43"    :   {
                                            "name"  :   "Austria",
                                            "flag"  :   "at"
                                        },
                            "994"   :   {   
                                            "name"  :   "Azerbaijan",
                                            "flag"  :   "az"
                                        },
        
                            "1-242" :   {
                                            "name"  :   "Bahamas",
                                            "flag"  :   "bs"
                                        },
                            "973"   :   {
                                            "name"  :   "Bahrain",
                                            "flag"  :   "bh"
                                        },
                            "880"   :   {
                                            "name"  :   "Bangladesh",
                                            "flag"  :   "bd"
                                        },
                            "1-246" :   {   
                                            "name"  :   "Barbados",
                                            "flag"  :   "bb"
                                        },
                            "375"   :   {
                                            "name"  :   "Belarus",
                                            "flag"  :   "by"
                                        },
        
                            "32"    :   {
                                            "name"  :   "Belgium",
                                            "flag"  :   "be"
                                        },
                            "501"   :   {
                                            "name"  :   "Belize",
                                            "flaf"  :   "bz"
                                        },
                            "229"   :   {
                                            "name"  :   "Benin",
                                            "flag"  :   "bj"
                                        },
                            "1-441" :   {
                                            "name"  :   "Bermuda",
                                            "flag"  :   "bm"
                                        },
                            "975"   :   {
                                            "name"  :   "Bhutan",
                                            "flag"  :   "bt"
                                        },
                            "591"   :   {
                                            "name"  :   "Bolivia",
                                            "flag"  :   "bo"
                                        },
                            "387"   :   {
                                            "name"  :   "Bosnia-Herzegovina",
                                            "flag"  :   "ba"
                                        },
                            "267"   :   {
                                            "name"  :   "Botswana",
                                            "flag"  :   "bw"
                                        },
                            "55"    :   {
                                            "name"  :   "Brazil",
                                            "flag"  :   "br"
                                        },
                            "673"   :   {
                                            "name"  :   "Brunei Darussalam",
                                            "flag"  :   "bn"
                                        },
                            "359"   :   {
                                            "name"  :   "Bulgaria",
                                            "flag"  :   "bg"
                                        },
                            "226"   :   {
                                            "name"  :   "Burkina Faso",
                                            "flag"  :   "bf"
                                        },
                            "257"   :   {
                                            "name"  :   "Burundi",
                                            "flag"  :   "bi"
                                        },
                            "855"   :   {
                                            "name"  :   "Cambodia",
                                            "flag"  :   "kh"
                                        },
                            "237"   :   {
                                            "name"  :   "Cameroon",
                                            "flag"  :   "cm"
                                        },
                            "1"     :   {
                                            "name"  :   "Canada",
                                            "flag"  :   "ca"   
                                        },
                            "238"   :   {
                                            "name"  :   "Cape Verde",
                                            "flag"  :   "cv"
                                        },
                            "1-345" :   {
                                            "name"  :   "Cayman Islands",
                                            "flag"  :   "ky"
                                        },
                            "236"   :   {
                                            "name"  :   "Central African Republic",
                                            "flag"  :   "cf"
                                        },
                            "235"   :   {
                                            "name"  :   "Chad",
                                            "flag"  :   "td"
                                        },
                            "56"    :   {
                                            "name"  :   "Chile",
                                            "flag"  :   "cl"
                                        },
                            "86"    :   {
                                            "name"  :   "China",
                                            "flag"  :   "cn"
                                        },
                            "61"    :   {
                                            "name"  :   "Christmas Island",
                                            "flag"  :   "cx"
                                        },
                            "61"    :   {
                                            "name"  :   "Cocos (Keeling) Islands",
                                            "flag"  :   "cc"
                                        },
                            "57"    :   {
                                            "name"  :   "Colombia",
                                            "flag"  :   "co"
                                        },
                            "269"   :   {
                                            "name"  :   "Comoros",
                                            "flag"  :   "km"
                                        },
                            "242"   :   {
                                            "name"  :   "Congo",
                                            "flag"  :   "cd",
                                        },
                            "243"   :   {
                                            "name"  :   "Congo, Dem. Republic",
                                            "flag"  :   "cf"
                                        },
                            "682"   :   {
                                            "name"  :   "Cook Islands",
                                            "flag"  :   "ck"
                                        },
                            "506"   :   {
                                            "name"  :   "Costa Rica",
                                            "flag"  :   "cr"
                                        },
                            "385"   :   {
                                            "name"  :   "Croatia",
                                            "flag"  :   "hr"
                                        },
                            "53"    :   {
                                            "name"  :   "Cuba",
                                            "flag"  :   "cu"
                                        },
                            "357"   :   {
                                            "name"  :   "Cyprus",
                                            "flag"  :   "cy"
                                        },
                            "420"   :   {
                                            "name"  :   "Czech Rep.",
                                            "flag"  :   "cz"
                                        },
                            "45"    :   {
                                            "name"  :   "Denmark",
                                            "flag"  :   "dk"
                                        },
                            "253"   :   {
                                            "name"  :   "Djibouti",
                                            "flag"  :   "dj"
                                        },
                            "1-767" :   {
                                            "name"  :   "Dominica",
                                            "flag"  :   "dm"
                                        },
                            "809"   :   {
                                            "name"  :   "Dominican Republic",
                                            "flag"  :   "do"
                                        },
                            "593"   :   {
                                            "name"  :   "Ecuador",
                                            "flag"  :   "ec"
                                        },
                            "20"    :   {
                                            "name"  :   "Egypt",
                                            "flag"  :   "eg"
                                        },
                            "503"   :   {
                                            "name"  :   "El Salvador",
                                            "flag"  :   "sv"
                                        },
                            "240"   :   {
                                            "name"  :   "Equatorial Guinea",
                                            "flag"  :   "gq"
                                        },
                            "291"   :   {
                                            "name"  :   "Eritrea",
                                            "flag"  :   "er"
                                        },
                            "372"   :   {
                                            "name"  :   "Estonia",
                                            "flag"  :   "ee"
                                        },
                            "251"   :   {
                                            "name"  :   "Ethiopia",
                                            "flag"  :   "et"
                                        },
                            "500"   :   {
                                            "name"  :   "Falkland Islands (Malvinas)",
                                            "flag"  :   "fk"
                                        },
                            "298"   :   {
                                            "name"  :   "Faroe Islands",
                                            "flag"  :   "fo"
                                        },
                            "679"   :   {
                                            "name"  :  "Fiji",
                                            "flag"  :   "fj"
                                        },
                            "358"   :   {
                                            "name"  :   "Finland",
                                            "flag"  :   "fi"
                                        },
                            "33"    :   {
                                            "name"  :   "France",
                                            "flag"  :   "fr"
                                        },
                            "594"   :   {
                                            "name"  :   "French Guiana",
                                            "flag"  :   "gf"
                                        },
                            "241"   :   {
                                            "name"  :   "Gabon",
                                            "flag"  :   "ga"
                                        },
                            "220"   :   {
                                            "name"  :   "Gambia",
                                            "flag"  :   "gm"
                                        },
                            "995"   :   {
                                            "name"  :   "Georgia",
                                            "flag"  :   "ge"
                                        },
                            "49"    :   {
                                            "name"  :   "Germany",
                                            "flag"  :   "de"
                                        },
                            "233"   :   {
                                            "name"  :   "Ghana",
                                            "flag"  :   "gh"
                            },
                            "350"   :   {
                                            "name"  :   "Gibraltar",
                                            "flag"  :   "gi"
                                        },
                            "44"    :   {
                                            "name"  :   "Great Britain",
                                            "flag"  :   ""
                                        },
                            "30"    :   {
                                            "name"  :   "Greece",
                                            "flag"  :   "gr"
                                
                                        },
                            "299"   :   {
                                            "name"  :   "Greenland",
                                            "flag"  :   "gl"
                                        },
                            "1-473" :   {
                                            "name"  :   "Grenada",
                                            "flag"  :   "gd"
                                        },
                            "590"   :   {
                                            "name"  :   "Guadeloupe (French)",
                                            "flag"  :   "gp"
                                        },
                            "1-671" :   {
                                            "name"  :   "Guam (USA)",
                                            "flag"  :   "gu"
                                        },
                            "502"   :   {
                                            "name"  :   "Guatemala",
                                            "flag"  :   "gt"
                                        },
                            "224"   :   {
                                            "name"  :   "Guinea",
                                            "flag"  :   "gn"
                                        },
                            "245"   :   {
                                            "name"  :   "Guinea Bissau",
                                            "flag"  :   "gw"
                                        },
                            "592"   :   {
                                            "name"  :   "Guyana",
                                            "flag"  :   "gy"
                                        },
                            "509"   :   {
                                            "name"  :   "Haiti",
                                            "flag"  :   "ht"
                                        },
                            "504"   :   {
                                            "name"  :   "Honduras",
                                            "flag"  :   "hn"    
                                        },
                            "852"   :   {
                                            "name"  :   "Hong Kong",
                                            "flag"  :   "hk"
                                        },
                            "36"    :   {
                                            "name"  :   "Hungary",
                                            "flag"  :   "hu"
                                        },
                            "354"   :   {
                                            "name"  :   "Iceland",
                                            "flag"  :   "is"
                                        },
                            "91"    :   {
                                            "name"  :   "India",
                                            "flag"  :   "in"
                                        },
                            "62"    :   {
                                            "name"  :   "Indonesia",
                                            "flag"  :   "id"
                                        },
                            "98"    :   {
                                            "name"  :   "Iran",
                                            "flag"  :   "ir"
                                        },
                            "964"   :   {
                                            "name"  :   "Iraq",
                                            "flag"  :   "iq"
                                        },
                            "353"   :   {
                                            "name"  :   "Ireland",
                                            "flag"  :   "ie"
                                        },
                            "972"   :   {
                                            "name"  :   "Israel",
                                            "flag"  :   "il"
                                        },
                            "39"    :   {
                                            "name"  :   "Italy",
                                            "flag"  :   "it"
                                        },
                            "225"   :   {
                                            "name"  :   "Ivory Coast",
                                            "flag"  :   ""
                                        },
                            "1-876" :   {
                                            "name"  :   "Jamaica",
                                            "flag"  :   "jm"
                                        },
                            "81"    :   {
                                            "name"  :   "Japan",
                                            "flag"  :   "jp"
                                        },
                            "962"   :   {
                                            "name"  :   "Jordan",
                                            "flag"  :   "jo"
                                        },
                            "7"     :   {
                                            "name"  :   "Kazakhstan",
                                            "flag"  :   "kz"
                                        },
                            "254"   :   {
                                            "name"  :   "Kenya",
                                            "flag"  :   "ke"
                                        },
                            "686"   :   {
                                            "name"  :   "Kiribati",
                                            "flag"  :   "ki"
                                        },
                            "850"   :   {
                                            "name"  :   "Korea-North",
                                            "flag"  :   "kp"
                                        },
                            "82"    :   {
                                            "name"  :   "Korea-South",
                                            "flag"  :   "kr"
                                        },
                            "965"   :   {
                                            "name"  :   "Kuwait",
                                            "flag"  :   "kw"
                                        },
                            "996"   :   {
                                            "name"  :   "Kyrgyzstan",
                                            "flag"  :   "kg"
                                        },
                            "856"   :   {
                                            "name"  :   "Laos",
                                            "flag"  :   "la"
                                        },
                            "961"   :   {
                                            "name"  :   "Lebanon",
                                            "flag"  :   "lb"
                                        },
                            "266"   :   {
                                            "name"  :   "Lesotho",
                                            "flag"  :   "ls"
                                        },
                            "231"   :   {
                                            "name"  :   "Liberia",
                                            "flag"  :   "lr"   
                                        },
                            "218"   :   {
                                            "name"  :   "Libya",
                                            "flag"  :   "ly"
                                        },
                            "423"   :   {
                                            "name"  :   "Liechtenstein",
                                            "flag"  :   "li"
                                        },
                            "370"   :   {
                                            "name"  :   "Lithuania",
                                            "flag"  :   "lt"
                                        },
                            "352"   :   {
                                            "name"  :   "Luxembourg",
                                            "flag"  :   "lu"
                                        },
                            "853"   :   {
                                            "name"  :   "Macau",
                                            "flag"  :   "mo"
                                        },
                            "389"   :   {
                                            "name"  :   "Macedonia",
                                            "flag"  :   "mk"
                                        },
                            "261"   :   {
                                            "name"  :   "Madagascar",
                                            "flag"  :   "mg"
                                        },
                            "265"   :   {
                                            "name"  :   "Malawi",
                                            "flag"  :   "mw"
                                        },
                            "60"    :   {
                                            "name"  :   "Malaysia",
                                            "flag"  :   "my"
                                        },
                            "960"   :   {
                                            "name"  :   "Maldives",
                                            "flag"  :   "mv"
                                        },
                            "223"   :   {
                                            "name"  :   "Mali",
                                            "flag"  :   "ml"
                                        },
                            "356"   :   {
                                            "name"  :   "Malta",
                                            "flag"  :   "mt"
                                        },
                            "692"   :   {
                                            "name"  :   "Marshall Islands",
                                            "flag"  :   "mh"
                                        },
                            "596"   :   {
                                            "name"  :   "Martinique (French)",
                                            "flag"  :   "mq"
                                        },
                            "222"   :   {
                                            "name"  :   "Mauritania",
                                            "flag"  :   "mr"
                                        },
                            "230"   :   {
                                            "name"  :   "Mauritius",
                                            "flag"  :   "mu"
                                        },
                            "269"   :   {
                                            "name"  :   "Mayotte",
                                            "flag"  :   "yt"
                                        },
                            "52"    :   {
                                            "name"  :   "Mexico",
                                            "flag"  :   "mx"
                                        },
                            "691"   :   {
                                            "name"  :   "Micronesia",
                                            "flag"  :   "fm"
                                        },
                            "373"   :   {
                                            "name"  :   "Moldova",
                                            "flag"  :   "md"
                                        },
                            "377"   :   {
                                            "name"  :   "Monaco",
                                            "flag"  :   "mc"    
                                        },
                            "976"   :   {
                                            "name"  :   "Mongolia",
                                            "flag"  :   "mn"
                                        },
                            "382"   :   {
                                            "name"  :   "Montenegro",
                                            "flag"  :   "me"
                                        },
                            "1-664" :   {
                                            "name"  :   "Montserrat",
                                            "flag"  :   "ms"
                                        },
                            "212"   :   {
                                            "name"  :   "Morocco",
                                            "flag"  :   "ma"
                                        },
                            "258"   :   {
                                            "name"  :   "Mozambique",
                                            "flag"  :   "mz"
                                        },
                            "95"    :   {
                                            "name"  :   "Myanmar",
                                            "flag"  :   "mm"
                                        },
                            "264"   :   {
                                            "name"  :   "Namibia",
                                            "flag"  :   "na"
                                        },
                            "674"   :   {
                                            "name"  :   "Nauru",
                                            "flag"  :   "nr"
                                        },
                            "977"   :   {
                                            "name"  :   "Nepal",
                                            "flag"  :   "np"
                                        },
                            "31"    :   {
                                            "name"  :   "Netherlands",
                                            "flag"  :   "nl"
                                        },
                            "599"   :   {
                                            "name"  :   "Netherlands Antilles",
                                            "flag"  :   "an"
                                        },
                            "687"   :   {
                                
                                            "name"  :   "New Caledonia (French)",
                                            "flag"  :   "nc"    
                                        },
                            "64"    :   {
                                            "name"  :   "New Zealand",
                                            "flag"  :   "nz"
                                        },
                            "505"   :   {
                                            "name"  :   "Nicaragua",
                                            "flag"  :   "ni"
                                        },
                            "227"   :   {
                                            "name"  :   "Niger",
                                            "flag"  :   "ne"
                                        },
                            "234"   :   {
                                            "name"  :   "Nigeria",
                                            "flag"  :   "ng"
                                        },
                            "683"   :   {
                                            "name"  :   "Niue",
                                            "flag"  :   "nu"
                                        },
                            "672"   :   {
                                            "name"  :   "Norfolk Island",
                                            "flag"  :   "nf",
                                        },
                            "670"   :   {
                                            "name"  :   "Northern Mariana Islands",
                                            "flag"  :   "mp"
                                        },
                            "47"    :   {
                                            "name"  :   "Norway",
                                            "flag"  :   "no"
                                        },
                            "968"   :   {
                                            "name"  :   "Oman",
                                            "flag"  :   "om"
                                        },
                            "92"    :   {
                                            "name"  :   "Pakistan",
                                            "flag"  :   "pk"
                                        },
                            "680"   :   {
                                            "name"  :   "Palau",
                                            "flag"  :   "pw"
                                        },
                            "507"   :   {
                                            "name"  :   "Panama",
                                            "flag"  :   "pa"
                                        },
                            "675"   :   {
                                            "name"  :   "Papua New Guinea",
                                            "flag"  :   "pg"
                            },
                            "595"   :   {
                                            "name"  :   "Paraguay",
                                            "flag"  :   "py"
                                        },
                            "51"    :   {
                                            "name"  :   "Peru",
                                            "flag"  :   "pe"
                                        },
                            "63"    :   {
                                            "name"  :   "Philippines",
                                            "flag"  :   "ph"
                                        },
                            "48"    :   {
                                            "name"  :   "Poland",
                                            "flag"  :   "pl"
                                        },
                            "689"   :   {
                                            "name"  :   "Polynesia (French)",
                                            "flag"  :   "pf"
                                        },
                            "351"   :   {
                                            "name"  :   "Portugal",
                                            "flag"  :   "pt"
                                        },
                            "1-787" :   {
                                            "name"  :   "Puerto Rico",
                                            "flag"  :   "pr"
                                
                                        },
                            "974"   :   {
                                            "name"  :   "Qatar",
                                            "flag"  :   "qa"
                                        },
                            "262"   :   {
                                            "name"  :   "Reunion (French)",
                                            "flag"  :   "re"
                                        },
                            "40"    :   {
                                            "name"  :   "Romania",
                                            "flag"  :   "ro"
                                        },
                            "7"     :   {
                                            "name"  :   "Russia",
                                            "flag"  :   "ru"
                                        },
                            "250"   :   {
                                            "name"  :   "Rwanda",
                                            "flga"  :   "rw"
                                        },
                            "290"   :   {
                                            "name"  :   "Saint Helena",
                                            "flag"  :   "sh"
                                        },
                            "1-869" :   {
                                            "name"  :   "Saint Kitts &amp; Nevis Anguilla",
                                            "flag"  :   "kn"
                                        },
                            "1-758" :   {
                                            "name"  :   "Saint Lucia",
                                            "flag"  :   "lc"
                                        },
                            "508"   :   {
                                            "name"  :   "Saint Pierre and Miquelon",
                                            "flag"  :   "pm"
                                        },
                            "1-784" :   {
                                            "name"  :   "Saint Vincent &amp; Grenadines",
                                            "flag"  :   "vc"
                                        },
                            "684"   :   {
                                            "name"  :   "Samoa",
                                            "flag"  :   "ws"
                                        },
                            "378"   :   {
                                            "name"  :   "San Marino",
                                            "flag"  :   "sm"
                                        },
                            "239"   :   {
                                            "name"  :   "Sao Tome and Principe",
                                            "flag"  :   "st"
                                        },
                            "966"   :   {
                                            "name"  :   "Saudi Arabia",
                                            "flag"  :   "sa"
                                        },
                            "221"   :   {
                                            "name"  :   "Senegal",
                                            "flag"  :   "sn"
                                        },
                            "381"   :   {
                                            "name"  :   "Serbia",
                                            "flag"  :   "rs"
                                        },
                            "248"   :   {
                                            "name"  :   "Seychelles",
                                            "flag"  :   "sc"
                                        },
                            "232"   :   {
                                            "name"  :   "Sierra Leone",
                                            "flag"  :   "sl"
                                        },
                            "65"    :   {
                                            "name"  :   "Singapore",
                                            "flag"  :   "sg"
                                
                                        },
                            "421"   :   {
                                            "name"  :   "Slovakia",
                                            "flag"  :   "sk"
                                        },
                            "386"   :   {
                                            "name"  :   "Slovenia",
                                            "flag"  :   "si"
                                        },
                            "677"   :   {
                                            "name"  :   "Solomon Islands",
                                            "flag"  :   "sb"
                                        },
                            "252"   :   {
                                            "name"  :   "Somalia",
                                            "flag"  :   "so"
                                        },
                            "27"    :   {
                                            "name"  :   "South Africa",
                                            "flag"  :   "za"
                                        },
                            "34"    :   {
                                            "name"  :   "Spain",
                                            "flag"  :   "Es"
                                        },
                            "94"    :   {
                                            "name"  :   "Sri Lanka",
                                            "flag"  :   "lk"
                                        },
                            "249"   :   {
                                            "name"  :   "Sudan",
                                            "flag"  :   "sd"
                                        },
                            "597"   :   {
                                            "name"  :   "Suriname",
                                            "flag"  :   "sr"
                                        },
                            "268"   :   {
                                            "name"  :   "Swaziland",
                                            "flag"  :   "sz"    
                                        },
                            "46"    :   {
                                            "name"  :   "Sweden",
                                            "flag"  :   "se"
                                        },
                            "41"    :   {
                                            "name"  :   "Switzerland",
                                            "flag"  :   "ch"
                                        },
                            "963"   :   {
                                            "name"  :   "Syria",
                                            "flag"  :   "ch"
                                        },
                            "886"   :   {
                                            "name"  :   "Taiwan",
                                            "flag"  :   "tw"
                                        },
                            "992"   :   {
                                            "name"  :   "Tajikistan",
                                            "flag"  :   "tj"
                                        },
                            "255"   :   {
                                            "name"  :   "Tanzania",
                                            "flag"  :   "tz"
                                        },
                            "66"    :   {
                                            "name"  :   "Thailand",
                                            "flag"  :   "th"
                                        },
                            "228"   :   {
                                            "name"  :   "Togo",
                                            "flag"  :   "tg"
                                        },
                            "690"   :   {
                                            "name"  :   "Tokelau",
                                            "flag"  :   "tk"
                                        },
                            "676"   :   {
                                            "name"  :   "Tonga",
                                            "flag"  :   "to"
                                        },
                            "1-868" :   {
                                            "name"  :   "Trinidad and Tobago",
                                            "flag"  :   "tt"
                                        },
                            "216"   :   {
                                            "name"  :   "Tunisia",
                                            "flag"  :   "tn"
                                        },
                            "90"    :   {
                                            "name"  :   "Turkey",
                                            "flag"  :   "tr"    
                                        },
                            "993"   :   {
                                            "name"  :   "Turkmenistan",
                                            "flag"  :   "tm"
                                        },
                            "1-649" :   {
                                            "name"  :   "Turks and Caicos Islands",
                                            "flag"  :   "tc"
                                        },
                            "688"   :   {
                                            "name"  :   "Tuvalu",
                                            "flag"  :   "tv"
                                        },
                            "44"    :   {
                                            "name"  :   "U.K.",
                                            "flag"  :   "gb"
                                        },
                            "1"     :   {
                                            "name"  :   "USA",
                                            "flag"  :   "us"
                                        },
                            "256"   :   {
                                            "name"  :   "Uganda",
                                            "flag"  :   "flag"
                                        },
                            "380"   :   {
                                            "name"  :   "Ukraine",
                                            "flag"  :   "ua"
                                        },
                            "971"   :   {
                                            "name"  :  "United Arab Emirates",
                                            "flag"  :   "ae"
                                        },
                            "598"   :   {
                                            "name"  :   "Uruguay",
                                            "flag"  :   "uy"
                                        },
                            "998"   :   {
                                            "name"  :   "Uzbekistan",
                                            "flag"  :   "uz"
                                        },
                            "678"   :   {
                                            "name"  :   "Vanuatu",
                                            "flag"  :   "vu"
                                        },
                            "39"    :   {
                                            "name"  :   "Vatican",
                                            "flag"  :   "va"
                                        },
                            "58"    :   {
                                            "name"  :   "Venezuela",
                                            "flag"  :   "ve"
                                        },
                            "84"    :   {
                                            "name"  :   "Vietnam",
                                            "flag"  :   "vn"
                                        },
                            "1-284" :   {
                                            "name"  :   "Virgin Islands (British)",
                                            "flag"  :   "vg"
                                        },
                            "1-340" :   {
                                            "name"  :   "Virgin Islands (USA)",
                                            "flag"  :   "vi"
                                        },
                            "681"   :   {
                                            "name"  :   "Wallis and Futuna Islands",
                                            "flag"  :   "wf"
                                        },
                            "967"   :   {
                                            "name"  :   "Yemen",
                                            "flag"  :   "ye"
                                        },
                            "260"   :   {
                                            "name"  :   "Zambia",
                                            "flag"  :   "zm"
                                        },
                            "263"   :   {
                                            "name"  :   "Zimbabwe",
                                            "flag"  :   "zm"
                            }
                             
    },
    //List of  Telco Cirles
    countryCirleList = {
                            "1"     :   "Delhi",
                            "41"    :   "Karnataka",
                            "3"     :   "Andhra Pradesh",
                            "4"     :   "Chennai",
                            "5"     :   "Tamil Nadu",
                            "6"     :   "Gurgaon",
                            "7"     :   "Maharashtra &amp; Goa",
                            "8"     :   "Mumbai",
                            "9"     :   "Rajasthan",
                            "10"    :   "MP/Chattisgarh",
                            "11"    :   "Haryana",
                            "12"    :   "Himachal Pradesh",
                            "15"    :   "Punjab",
                            "16"    :   "Gujarat",
                            "17"    :   "Kolkata",
                            "18"    :   "Orissa",
                            "19"    :   "UP East",
                            "20"    :   "Bihar",
                            "21"    :   "UP West",
                            "22"    :   "Kerala",
                            "23"    :   "West Bengal",
                            "24"    :   "J&amp;K",
                            "25"    :   "North East",
                            "26"    :   "Others"
    },
    //Default settignfor the form
    defaults = {
                        //Default Will be popup
                        "FormStyle"     : "popup",
                        //Default Will be popup
                        "FormContainer" : "body",
                        "submitId"      : "submitButton"
                    },
        
    //default methods to genrate form
    methods = {
                    init: function(options){
                        var form = this;
                    },
                    _sortByName : function(dt){
                        var dim = 0;
                        var i = 0;
                        for (k in dt)
                        {
                            if((typeof dt[k])==="string"){
                                dim = 1;
                            } else if((typeof dt[k])==="object"){
                                dim = 2;
                            }
                            break;
                        }
                        if(dim==1){
                            var tmparr = Array();
                            $.map(dt, function(i,el) {  
                                tmparr[i] = {
                                                "name"  :   i,
                                                "id"    :   el
                                            };
                            });
                        } else {
                            var tmparr = Array();
                            $.map(dt, function(i,el) {  
                                i.id = el;
                                tmparr[i.name] = i;
                            });
                        }
                        var tmpsortarr = [];
                        for (k in tmparr)
                        {
                            if (tmparr.hasOwnProperty(k))
                            {
                                tmpsortarr.push(k);
                            }
                        }
                        tmpsortarr = tmpsortarr.sort();
                        var FinalArray = Object();
                        for(i=0; i<tmpsortarr.length; i++){
                           FinalArray[i] = tmparr[tmpsortarr[i]];
                        }
                        return FinalArray;
                    },
                    _dataField : function(fieldAttr,data,itr){
                        var finalfieldData ="";
                        var type = ((fieldAttr.type!=undefined)?((((['text','email','number','hidden'].indexOf(fieldAttr.type)>=0))?"input":fieldAttr.type)):"input");
                        switch(type){
                                    case "input"  :   
                                                    finalfieldData = "<input ";
                                                    for(var v in fieldAttr){
                                                        if(v=="hidden"){
                                                            if(fieldAttr[v]){
                                                                finalfieldData += v+" ='hidden' "; 
                                                            }
                                                        } else {
                                                            finalfieldData += v+" ='"+fieldAttr[v]+"' "; 
                                                        }
                                                    }
                                                    finalfieldData += "/>";
                                                    break;
                                    case "select"  :   
                                                    var tmpClass = "dropdown-list";
                                                    finalfieldData = "<input ";
                                                    if(fieldAttr['class']!=undefined){ 
                                                        tmpClass += " "+fieldAttr['class'];
                                                    } else {
                                                        tmpClass = "dropdown-list";
                                                    }
                                                    fieldAttr['class'] = tmpClass;
                                                    for(var v in fieldAttr){
                                                        if((v=="hidden") || (v=="type")) continue;
                                                        if(v=="data"){
                                                           if(["countryList","cirleList"].indexOf(fieldAttr[v])<0){
                                                                finalfieldData += v+" ='"+fieldAttr[v]+"' "; 
                                                           }
                                                        } else {
                                                            finalfieldData += v+" ='"+fieldAttr[v]+"' "; 
                                                        }
                                                    }
                                                    finalfieldData += "/>";
                                                    finalfieldData += "<ul"+((fieldAttr.data=="countryList")?" class='f16'":"")+">";
                                                    if((typeof data)==="object"){
                                                        for(var dt in data){
                                                            //console.log(dt);
                                                            var objname = ((((typeof data[dt])==="object") && ((typeof data[dt].name)!=="undefined"))?data[dt].name:data[dt]);
                                                            var objflag = ((((typeof data[dt])==="object") && ((typeof data[dt].flag)!=="undefined"))?data[dt].flag:"");
                                                            finalfieldData += "<li value='"+data[dt].id+"'>"+((objflag!="")?"<span class='flag "+objflag+"'></span>":"")+objname+" (+"+data[dt].id+")</li>";
                                                        }
                                                    }
                                                    finalfieldData += "</ul>";
                                                    break;
                                    defaults    :   
                                                    finalfieldData = "<input ";
                                                    for(var v in fieldAttr){
                                                        if(v=='name'){
                                                            finalfieldData += v+" ='name_"+itr+"'"; 
                                                        }
                                                        if(v=="hidden"){
                                                            if(fieldAttr[v]){
                                                                finalfieldData += v+" ='hidden' "; 
                                                            }
                                                        } else {
                                                            finalfieldData += v+" ='"+fieldAttr[v]+"' "; 
                                                        }
                                                    }
                                                    finalfieldData += "/>";
                                                    break;
                        }
                        return finalfieldData;
                    },
                    _countrycodeList : function() {
                            var data = this._sortByName(countrycodeList),
                            countryList = "<select name='countrycodeList'>";
                            $.each(data,function(i,v){
                                countryList+="<option value='"+v.id+"'>"+v.name+"</option>";
                            });
                            countryList += "</option>";
                            return countryList;
                    },
                    _countryCirleList : function() {
                            var data = this._sortByName(countryCirleList),
                            CirleList = "<select name='countryCirleList'>";
                            $.each(data,function(i,v){
                                CirleList+="<option value='"+v.id+"'>"+v.name+"</option>";
                            });
                            CirleList += "</option>";
                            return CirleList;
                    },
                    generateForm: function(options,fieldList){
                        console.log(options);
                        var itr =0,label = "";
                        var finalList = "<form action='' method='POST' autocomplete='off' id='"+options.FormName+"' novalidate>";
                        for(var obj in fieldList){
                            label = (((obj=="label") && (fieldList[obj]==true))?"<label>"+obj.capitalize()+"</lable>":"");
                            finalList += "<div class='form-row'>";
                            itr++;
                            var tmpFieldDat = "";
                            switch(obj){
                                    case "name"             :   
                                                                tmpFieldDat = this._dataField(fieldList[obj],"",itr);
                                                                finalList += label+"<div class='fieldinfo'>"+tmpFieldDat+"</div>";
                                                                break;
                                    case "email"            :   
                                                                tmpFieldDat = this._dataField(fieldList[obj],"",itr);
                                                                finalList += label+"<div class='fieldinfo'>"+tmpFieldDat+"</div>";
                                                                break;
                                    case "phone_number"     :
                                                                var tmpcountrydata="",tmpFieldDat="";
                                                                if(fieldList[obj]["country"]!=undefined){
                                                                    var data = {};
                                                                    if(fieldList[obj]["country"].data=="countryList"){
                                                                        data = this._sortByName(countrycodeListWithFlag);
                                                                    }
                                                                    tmpcountrydata = "<div class='country_container'><div class='data-list'>"+this._dataField(fieldList[obj]["country"],data)+"</div></div>";
                                                                    tmpFieldDat = this._dataField(fieldList[obj],"",itr);
                                                                    finalList += label+"<div class='fieldinfo'>"+tmpcountrydata+tmpFieldDat+"</div>";
                                                                } else {
                                                                    tmpFieldDat = this._dataField(fieldList[obj],"",itr);
                                                                    finalList += label+"<div class='fieldinfo'>"+tmpFieldDat+"</div>";
                                                                }
                                                                break;
                                    case "country"          :   
                                                                var data = {};
                                                                if(fieldList[obj].data=="countryList"){
                                                                    data = countrycodeListWithFlag;
                                                                }
                                                                tmpFieldDat = this._dataField(fieldList[obj],data,itr);
                                                                finalList += label+"<div class='fieldinfo'>"+tmpFieldDat+"</div>";
                                                                break;


                                    case "telcoCircle" :   
                                                                var data = {};
                                                                if(fieldList[obj].data=="countryList"){
                                                                    data = this._sortByName(countryCirleList);
                                                                }
                                                                tmpFieldDat = this._dataField(fieldList[obj],data,itr);
                                                                finalList += label+"<div class='fieldinfo'><div class='data-list'>"+tmpFieldDat+"</div></div>";
                                                                break;
                                    case defaults           :
                                                                this._dataField(fieldList[obj],"",itr);
                                                                break;
                            }
                            finalList += "</div>";
                        }
                        finalList += "<div class='fieldinfo'><input type='submit' value='Submit'/></div></form>";
                        finalList = "<div class='form-content'>"+finalList+"</div>";
                        if(options.FormStyle=="popup"){
                           this._popupform(finalList,options);
                        } else if(options.FormStyle=="popup"){
                            this._normalForm(finalList,options);
                        }
                        return false;
                    },
                    _popupform: function(formcontent,options){
                        var css = "<style></style>";
                        var overlay="<div class='form-overlay'>"+formcontent+"</div>"+css;
                        $('body').append(overlay);
                    },
                    _showdropDownList: function(data){
                        $(".data-list ul").hide();
                        $(data).parent().find('ul').show();
                    },
                    _normalForm: function(formcontent){
                        $('body').append(formcontent);
                    },
                    _setDefaults: function(options){
                        $.extend(defaults,options);
                    }
              };
    var ValidatorMethods = {
                    _regex_validation_rules: function(obj){
                        if($(obj).is('input')){
                            $(obj).removeClass("err");
                            if($(obj).hasClass("required") && !this._validatField("required",obj)){
                               this._pushMsg(this._MakeMsg("required",obj),obj);
                            }
                            if($(obj).hasClass("email") && !this._validatField("email",obj)){
                               this._pushMsg(this._MakeMsg("email",obj),obj);
                            }
                            if($(obj).hasClass("number") && !this._validatField("number",obj)){
                               this._pushMsg(this._MakeMsg("number",obj),obj);
                            }
                        }
                    },
                    _validatField: function(mtd,obj){
                        switch(mtd){
                                case "required"     :   
                                                        if(($(obj).val()).trim()==""){
                                                            return false;
                                                        } else {
                                                            return true;
                                                        }
                                                        break;
                                case "email"     :   
                                                        if(($(obj).val()).trim()!=""){
                                                           var regex = /\S+@\S+\.\S+/
                                                           return ($(obj).val()).match(regex);
                                                        } else {
                                                           return true;
                                                        }
                                case "number"     :   
                                                        if(($(obj).val()).trim()!=""){
                                                           var regex = /^[1-9]{1}[0-9]{9,11}$/
                                                           return ($(obj).val()).match(regex);
                                                        } else {
                                                           return true;
                                                        }
                                                        
                        }
                    },
                    _MakeMsg: function(mtd,obj){
                        switch(mtd){
                                case "required"     :   
                                                        return "This is required field";
                                                        break;
                                case "email"        :   return "Invald E-mail id";
                                                        break;
                                case "number"       :   return "Invald Number should not start with 0 and should be 10 digit";
                                                        break;
                                default        :   return "Something wrong with the field please check";
                                                        break;
                        }
                    },
                    _pushMsg: function(txt,obj){
                                            $(obj).addClass("err");
                                            var top=$(obj).offset().top,
                                                left=$(obj).offset().left+$(obj).outerWidth();
                                            var txt = "<div class='err-container' style='top:"+top+"px;left:"+left+"px'><div class='arrow-left'></div><div class='err-content'>"+txt+"</div></div>";
                                            $context = $('body').append(txt);
                                            this._closeErrMsg(txt);
                        
                    },
                    _closeErrMsg: function(obj){
                        $('.err-container').on('click',function(){
                            $(this).fadeOut();
                        });
                    }
    }

    //adding new Method to the string.
    String.prototype.capitalize = function(){
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
    
    $.fn.generateForm = function(options,fieldList){
        methods.generateForm(options,fieldList);
        return false;
    }
    $.fn.BValidate = function(options){
        var frmObj = $(this).find("input.required");
        $(this).find('.err').removeClass('.err');
        $('.err-container').remove();
        $(frmObj).each(function(i,k){
            ValidatorMethods._regex_validation_rules(k);
        });
        return false;
       
    };
    $(document).ready(function(){
        var filename = "flags16.css";
        $('head').append('<link rel="stylesheet" href="'+filename+'" type="text/css" />');
        setTimeout(function(){
            
           $(document).on('focus','.dropdown-list',function(){
               methods._showdropDownList(this); 
           });
            $(document).on('focusout',function(e){
                var x = $('.data-list');
                //if($(e).has('.data-list') || $(e).parent().has('.data-list') || $(e).parent().parent().has('.data-list')){
                    if(e.target.className!="dropdown-list"){
                      //  $(".data-list ul").hide();
                    }
                //}
            });
            $(document).on('click','.data-list li',function(){
                $(this).parent().parent().find('input').val($(this).text());
                $(this).parent().hide();
            });
            $('.dropdown-list').on('keyup',function(e){
                var enteredValue = escape(this.value);
                if(enteredValue=="") $(this).parent().find('li').show();
                if((e.which>47)||(["8"].indexOf(e.which))){
                    var tmprgx = new RegExp("^"+enteredValue+".*$","gi");
                    $($(this).parent().find("li")).each(function(i,k){
                        if(($(k).text()).match(tmprgx)){
                           $(k).show();
                        } else {
                            $(k).hide();
                        }
                    });
                }
            });
        },500);
    });
})(jQuery);