const variables = process.argv.slice(2)

const makeImportant = (s, l = s.length) =>  `${s}${"!".repeat(l)}`

module.exports = makeImportant