var HomePage =(function(){

    function HomePage() {
        this.homeurl = "http://www.abc.net.au/news/";
        this.banner = "#header";
        this.justIn = "[href='/news/justin/']";
        this.justInSub = ".header subheader"
        this.radiourl = "http://www.abc.net.au/radionational/";
        this.logo = "[href='/radionational/']";
        this.article = "ul[class='article-index'] li";
        this.head = "ul[class='article-index'] li h3";
        this.post = "ul[class='article-index'] li time";
        this.program = ".sf-with-ul";
        this.subprogram = "[href='/radionational/programs/bigideas/']";
    };

    return HomePage;

})();

module.exports = HomePage;