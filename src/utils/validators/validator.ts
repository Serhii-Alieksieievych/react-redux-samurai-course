export const requiredField = (value: string) => {
    return value ? undefined : "Field is required";
}

export const maxLengthCreator = (maxLength:number) => (value: string) => {
    if (value) return value.length <= maxLength ? undefined : `Max lenhgth is ${maxLength}`
    return undefined
}

export const minLengthCreator = (minLength: number) => (value: string) => {
    if (value) return value.length >= minLength ? undefined : `Min lenhgth is ${minLength}`
    return undefined
}