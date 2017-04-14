module.exports = function (grunt) {

    //grunt speak
    grunt.registerTask('speak', function () {
        console.log("Speak Yogesh!");
    });

    grunt.registerTask('run', function () {
        console.log("Run Yogesh!");
    });

    //Runs when you run just grunt
    grunt.registerTask('default', ['speak', 'run']);
}