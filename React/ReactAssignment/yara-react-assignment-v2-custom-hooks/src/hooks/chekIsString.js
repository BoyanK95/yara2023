export function checkIsString(value) {
    const stringRegex = /^[A-Za-z ]+$/;
    return value.trim().match(stringRegex)
}

