const accountId=1234
let accountEmail="Singh@gmail.com"
var accountPassword="00000"
accountCity="Partawal"
let accountState;

// accountId=2    not allowed
/*
prefer not to use var bcoz of issue in block scopeand functional scope
*/

accountEmail="rs@gmail.com"
accountPassword="11111"
accountCity="gkp"

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])