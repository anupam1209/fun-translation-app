var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

// console.log(txtInput);

function getTranslation(input){
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error){
    console.log("error occured", error)
    alert("something wrong with server! try again after some time")
}

function clickEventHandler() {
    // outputDiv.innerText = "ano mis dis la "+ txtInput.value;
    // console.log("clicked!");
    // console.log("input",txtInput.value);

        var inputText = txtInput.value;    //taking input


        //calling server for processing
        fetch(getTranslation(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;    //output
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickEventHandler);

