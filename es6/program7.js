const variables = process.argv.slice(2)

const average = (...a) => a.reduce( (a,c) => a + c ) / a.length

module.exports = average