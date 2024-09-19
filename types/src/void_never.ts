function showFeedback(message: string, type: string): void{
    alert(type.toUpperCase() + ": " + message)
}

const feedback = showFeedback("ola", "info")

function showError(message: string): never{
   throw new Error("função marcada com never nunca ratorna nada") 
}

const error = showError("mensagem de erro")