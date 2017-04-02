/**
 * Created by YSingh on 03/04/17.
 */

//Promise example 1:

var promiseToProject = new Promise(function (resolve, reject) {
    var projectComplete = true;

    if(projectComplete) {
        resolve("Project is complete");
    }
    else {
        reject("Project is not complete");
    }
});

promiseToProject
    .then(function (res) {
        console.log(res);
    })
    .catch(function (res) {
        console.log(res);
    });