module.exports = function (grunt) {

    //grunt speak
    grunt.registerTask('speak', function () {
        console.log("Speak Yogesh!");
    });

    //Runs when you run just grunt
    grunt.registerTask('default', function () {
       console.log("Hello Yogesh Singh!");
    });
}