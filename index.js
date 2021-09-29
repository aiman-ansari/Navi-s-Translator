const inputDiv = document.querySelector('#input-div');
const outputDiv = document.querySelector('#output-div');
const translate = document.querySelector('#button-translate')

var serverURL = "https://api.funtranslations.com/translate/navi.json"

function getTranslationText (txt){
    return serverURL + "?" + "text=" + txt;
}
function handleError(error){
    console.log('error occured!');
    alert('Something wrong with server! Please try again after some time')
}

function translateToNavi(){
    var textToBeTranslate = inputDiv.value
    fetch(getTranslationText(textToBeTranslate))
    .then(response => response.json())
    .then(json =>{
        var translatedOutput = json.contents.translated
        outputDiv.innerText = translatedOutput
    })
    .catch(handleError)
}


translate.addEventListener('click', translateToNavi)