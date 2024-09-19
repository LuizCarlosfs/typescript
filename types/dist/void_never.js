"use strict";
function showFeedback(message, type) {
    alert(type.toUpperCase() + ": " + message);
}
var feedback = showFeedback("ola", "info");
function showError(message) {
    throw new Error("função marcada com never nunca ratorna nada");
}
var error = showError("mensagem de erro");
