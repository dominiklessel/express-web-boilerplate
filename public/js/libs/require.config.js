var jam = {
    "packages": [
        {
            "name": "jquery",
            "location": "/js/libs/jquery",
            "main": "jquery.js"
        },
        {
            "name": "underscore",
            "location": "/js/libs/underscore",
            "main": "underscore.js"
        }
    ],
    "version": "0.2.11",
    "shim": {}
};

if (typeof require !== "undefined" && require.config) {
    require.config({packages: jam.packages, shim: jam.shim});
}
else {
    var require = {packages: jam.packages, shim: jam.shim};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}