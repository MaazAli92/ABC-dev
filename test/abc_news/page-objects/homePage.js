var HomePage =(function(){

    function HomePage() {
        this.homeurl = "http://www.abc.net.au/news/";
        this.banner = "#header";
        this.justIn = "[href='/news/justin/']";
        this.justInSub = ".header subheader"
        //this.guideButton = "[href='/guide.html']";
        //this.apiButton = "[href='/api.html']";
    };

    return HomePage;

})();

module.exports = HomePage;