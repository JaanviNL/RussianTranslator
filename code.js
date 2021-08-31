var btnTranslate=document.querySelector(".btn");
var txtInput = document.querySelector("#txt-input");
var outputdip = document.querySelector("#txt-output");


var serverURL = "https://api.funtranslations.com/translate/russian-accent.json"

function getTranslationURL(text)
{
    return serverURL + "?"+ "text=" + text
}

function errorhandler(error) {
    alert("Something went wrong with server!")
}

function clickHandler()
{
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputdip.innerText = translatedText
    }).catch(errorhandler)

}
btnTranslate.addEventListener("click", clickHandler)
