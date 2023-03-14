export function checkIsString(value) {
    const digitsRegex = /^\d+$/;
    return value.trim().match(digitsRegex)
}

