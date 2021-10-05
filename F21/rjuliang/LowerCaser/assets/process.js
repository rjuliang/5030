//This hides the div where we include the lowercase result
    document.getElementById('lowercasedDiv').style.display = "none";


/**
 * The following (lowerCaseWord) is the function that gets called when user clicks 'Lower Case Word' button
 * - It takes a string word, a string language and a boolean unitTest as parameters
 * - The test.js file also calls this function directly
 * - As we are modifying the HTML, we use the unitest variable to help us know if the function is ran by the user or a test
 *      -When running from the test.js file, unitTest is set true, otherwise, is empty
*/
    const lowerCaseWord = (word, language, unitTest) =>{

        //If there is not a boolean unitTest, we set unitTest to false which means that the function was triggered by a user and not a test
        if(!unitTest)
            unitTest = false;

        //Then, if the word was not provided by the parameter, we get the value typed by the user
        if(!word)
            word = document.getElementById('wordField').value;

        //As a precaution, we check a word exists at this point to avoid errors
        if(word != "" && word != null){

            //If there is a word present: 

            //Get the code of the language selected by the user
            
            if(!language)
                language = document.getElementById('languageDropdown').value;

            /**
             * IMPORTANT:
             * In here, we get the lower case version of a word:
             * - By running the toLocaleLowerCase JavaScript function -> it takes a language code as parameter
             *      - See MDN documentation here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase 
             * - Then, we assign it to a variable
             * - This function does NOT fully work for Irish words, so, first, we check if the user selected Irish
             */

            let lowerCasedWord = '';

            if(language != "ga" && language != "ga-IE"){//"ga" or "ga-IE" is the code for Irish
                
                //If it is different than irish, we trigger the default native function
                lowerCasedWord = word.toLocaleLowerCase(language.toString());

            } else {

                //If user selected Irish, we trigger a custom resolveIrishWord function (see it in line 79)
                lowerCasedWord = resolveIrishWord(word, language);
            }

            


            //Then, we check if a user is triggering the function and not a unit test (unitTest is False)
            if(unitTest == false) {

                //Then, if it is not a test, we populate the content of the lowercasedDiv with the result                 
                document.getElementById('lowercasedDiv').style.display = "block";
                document.getElementById('lowercased').innerHTML="<p>"+lowerCasedWord+"</p>";

            }
            
            //Finally, we return the value of the lowercased word
            return lowerCasedWord;

        } else {

            //If the user did not provide a word, we show an alert
            alert('Type a word to lower case');

            return false;
        }
        
    }

    function resolveIrishWord (word, language){
        //First, we define the variables
        let resolvedWord; // Generic variable where we will store the final lowercased word
        let firstCharacter = word.charAt(0);//Gets the FIRST character of the word
        let secondCharacter = word.charAt(1);//Gets the SECOND character of the word

        if(firstCharacter != "n" && firstCharacter != "t"){

            //If the first character is NOT "n" or "t", we run the default native toLocaleLowerCase
            resolvedWord = word.toLocaleLowerCase(language.toString());

        } else {

            //If the first character is "n" or "t", we run our customization by triggering the isVowel function with the second character (see function in line 116)
            if(isVowel(secondCharacter) == false){

                //If the second character is NOT an uppercased vowel, we run the default native toLocaleLowerCase
                resolvedWord = word.toLocaleLowerCase(language.toString());
            } else {

                //If the character IS an uppercased vowel

                //We convert the word into an array
                const arrayOfWord = word.split("");

                //Then, we insert the dash (-) in the second position of the array
                arrayOfWord.splice(1,0,"-");

                //Join the word into a string and converting the string to a lowercase
                resolvedWord = arrayOfWord.join("").toLowerCase();                   
            }
        }

        //Finally, we return the resolvedWord
        return resolvedWord;
    }

    function isVowel(character) {
        /**
         * In here, we return a boolean (TRUE | FALSE) if the character is equal to one of the uppercased vowels:
         * (A,E,I,O,U,Á,É,Í,Ó,Ú)
         */
        let result;

        result = character === "A" || character === "E" || character === "I" || character === "O" || character === "U" || character === "Á" || character === "É" || character === "Í" || character === "Ó" || character === "Ú";

        return result;
    }

    

exports = {lowerCaseWord}