const variables = process.argv.slice(2)

const result =
    variables
    .map ( item => item.charAt(0) )
    .reduce ( (acc, cIndex ) => acc + cIndex )

console.log(`[${variables}] becomes "${result}"`)
    