var PlayFab = require('./node_modules/playfab-sdk/Scripts/PlayFab/PlayFab');
var PlayFabClient = require('./node_modules/playfab-sdk/Scripts/PlayFab/PlayFabClient');

export function  ConnectPlayfabRegisteration(_email, _password, _username){
    PlayFab.settings.titleId = "DED2F";
    var registerRequest = {
        TitleId: PlayFab.settings.titleId,
        Email: _email,
        Password: _password,
        Username: _username
    };
    PlayFabClient.RegisterPlayFabUser(registerRequest, LoginCallback);
    console.log("Playfab new user: " + _username + "registered");
}

export function ConnectPlayfabLogin(_email, _password) {
    PlayFab.settings.titleId = "DED2F";
    var loginRequest = {
        TitleId: PlayFab.settings.titleId,
        Email: _email,
        Password: _password
    };
    PlayFabClient.LoginWithEmailAddress(loginRequest, LoginCallback);
}

function LoginCallback(error, result) {
    if (result !== null) {
        console.log("Congratulations, you made your first successful API call!");
    } else if (error !== null) {
        console.log("Something went wrong with your first API call.");
        console.log("Here's some debug information:");
        console.log(CompileErrorReport(error));
    }
}

// This is a utility function we haven't put into the core SDK yet. Feel free to use it.
function CompileErrorReport(error) {
    if (error == null)
        return "";
    var fullErrors = error.errorMessage;
    for (var paramName in error.errorDetails)
        for (var msgIdx in error.errorDetails[paramName])
            fullErrors += "\n" + paramName + ": " + error.errorDetails[paramName][msgIdx];
    return fullErrors;
}