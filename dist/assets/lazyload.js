window.indexPageLoadCheck = function() {
    if(!window.appLoaded && window.jsLoaded) {
        window.resourcesReady = true;

        // Remove loader if app is ready.
        if(window.appReady) {
            var loader = document.getElementById("loader-overlay");
            if(loader){ loader.style.display = "none"; }

            window.appLoaded = true;
        }
    }
};

// Load scripts
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "assets/common.js";
script.onload = function(){
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "assets/main.js";
    script.onload = function(){ window.jsLoaded = true; window.indexPageLoadCheck();};
    document.getElementsByTagName("head")[0].appendChild(script);
};

document.getElementsByTagName("head")[0].appendChild(script);
