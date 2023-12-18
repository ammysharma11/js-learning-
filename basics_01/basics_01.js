const accountId=1234
let accountEmail = "ammy@gmail.com"
var accountPassword = "12445"
accountCity="pathankot"
let accountState;

// accountId = 221 not allowed 
accountEmail="am@am.com"
accountPassword="12334"
accountCity="bengluru"

/* perefer not to use var
because of issue in block scope and functions 
*/
console.log(accountId)
console.table([accountId, accountEmail,accountPassword,accountCity,accountState])