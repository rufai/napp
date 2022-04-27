const variables = process.argv.slice(2)

const midpoint = (lower = 0, upper = 1) =>  ( lower + upper ) / 2

module.exports = midpoint