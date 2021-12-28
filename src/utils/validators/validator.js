 export const requiredField = value => {
    return value ? undefined : "Field is required";
}

export const maxLengthCreator = maxLength => value => {
    if (value) return value.length <= maxLength ? undefined : `Max lenhgth is ${maxLength}`
    return undefined
}

export const minLengthCreator = minLength => value => {
    return value >= minLength ? undefined : `Max lenhgth is ${minLength}`
}