const compose = (...functions) => (comp) => {
    return functions.reduceRight((prevResult, current) => current(prevResult), comp)
}

export default compose