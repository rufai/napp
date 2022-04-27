const variables = process.argv.slice(2)

console.log(`The minimum of [${variables}] is ${Math.min(...variables)}`)