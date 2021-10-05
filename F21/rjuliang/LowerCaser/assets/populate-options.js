//The following creates the language options in the select element in HTML: 

    //First, import the language list in an Array from the languages-list.js file
    const LANGUAGE_DATA = languageData;

    //Create a string variable to store the HTML
    let languageList = "";

    //Loop through the LANGUAGE_DATA variable and populate the languageList variable with the option elements
    //We add the language code as the value
    for(let counter = 0; counter<LANGUAGE_DATA.length; counter++) {            
        let languageName = LANGUAGE_DATA[counter].name;
        let languageValue = LANGUAGE_DATA[counter].code;
        languageList += '<option value='+languageValue+'>'+languageName+'</option>';
    }

    //Adds the option elements to the select inner HTML
    document.getElementById('languageDropdown').innerHTML = languageList;