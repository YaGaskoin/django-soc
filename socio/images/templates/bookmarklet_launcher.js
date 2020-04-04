(function() {
    if (window.myBookmarklet !== undfined){
        myBookmarklet();
    }else{
        document.body.appendChild(
            document.createElement('script')
        ).src="http://eb1dae93.ngrok.io/static/js/bookmarklet.js?r='Math.floor(Math.random()*999999999999999999);'"
    }
})();