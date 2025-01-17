interface Action<T = string> {
    action: T
}

const step1: Action<number> = {
    action: 0
}

step1.action = 20

const step2: Action<boolean> ={
    action: true
}
step2.action = false

const step3: Action ={
    action:"valor qualquer"
}
console.log("step1: ",step1)
console.log("step2: ",step2)
console.log("step3: ",step3)
///////////////////////////////////////////////////////////////////////

type NumberOrString = number | string
interface ActionI<T extends NumberOrString = string, U = number> {
   action: T,
   timestamp: U 
}

const step4: ActionI ={
    action: "delete",
    timestamp: 123
}

const historyActions: Array<ActionI> = []

const addAction = <T extends ActionI & { id:number}>(obj:T) => {
    console.log("---- addAction -----")
    console.log(obj)
    const result ={
        ...obj,
        _id:obj.id + "_" + obj.timestamp
    }
    historyActions.push(result)
}

addAction({
    action: "delete",
    timestamp: 122456,
    teste: "ola",
    id: 123
})

//historyActions.push(step4)

console.log(" ---  historyActions----")
console.log(historyActions)


export default "teste"