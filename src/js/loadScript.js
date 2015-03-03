LPS = {
    isPage: function (page) {
        var url = location.href;
        return (url.indexOf(page) !== -1) ? true : false;
    },
    appendFile: function (file, page) {
        var script = document.createElement("script");
        var head = document.querySelector("head");
        script.src = file;
        if (this.isPage(page)) {
            head.appendChild(script);
        }
    }
};