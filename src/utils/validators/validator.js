 export const requiredField = value => {
    return value ? undefined : "Field is required";
}

export const maxLengthCreator = maxLength => value => {
    if (value) return value.length <= maxLength ? undefined : `Max lenhgth is ${maxLength}`
    return undefined
}

export const minLengthCreator = minLength => value => {
    if (value) return value.length >= minLength ? undefined : `Min lenhgth is ${minLength}`
    return undefined
}