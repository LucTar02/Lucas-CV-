const increment = (data) => {
    return {
        type: 'INCREMENT', // öka
        payload: data // spara data
    }
}


export { increment, }