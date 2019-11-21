const addFuncs = (func) => {
    return {
        type: "ADD",
        func: [...func]
    }
}

export default addFuncs;