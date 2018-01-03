const fs = require('fs');
const env = process.env;
const targetEnvFileObj = {};
const sourceEnvFileObj = {};
targetEnvFileObj.dev = __dirname+'/environment.ts';
sourceEnvFileObj.dev = __dirname+'/environment.dev.config.ts';
targetEnvFileObj.production = __dirname+'/environment.production.ts';
sourceEnvFileObj.production = __dirname+'/environment.production.config.ts';
// targetEnvFileObj.ci = 'environment.ci.ts';
// targetEnvFileObj.test = 'environment.test.ts';
// targetEnvFileObj.prod = 'environment.prod.ts';

const currentEnvironment = process.env.CURRENT_ENVIRONMENT; // possible values ci /test/uat/prod
//console.log("ENV:", env);
console.log("API URL FROM ENV:", env.apiUrl);
console.log("DEPENDENCY URL FROM ENV:", env.dependancyUrl);
console.log("ENV.api_url", env.api_url)
function replaceContents(sourceEnvFile, cb) {
console.log(sourceEnvFile) ; 
fs.readFile(sourceEnvFile, 'utf8' ,(err, contents) => {
if (err) return cb(err);
console.log('>>>>>>>',contents) 
var result = contents.replace(/{dependancyUrl}/g, env.exam_dependency_url)
    result = result.replace(/{apiUrl}/g, env.api_url)
    result = result.replace(/{domain}/g, env.domain)
console.log(result)
fs.writeFile(__dirname+'/environment.ts', result, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
});
}
 //console.log(sourceEnvFileObj[env.NODE_ENV] , sourceEnvFileObj)
replaceContents(sourceEnvFileObj[env.NODE_ENV] , err => {
   return "rul";
console.log('done');
});