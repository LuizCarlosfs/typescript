type ArrUniqueTypes<T> = T[]

const teste: ArrUniqueTypes<string> = ["ola", "mundo"]
const teste2: ArrUniqueTypes<number | boolean> = [1,2, false]
