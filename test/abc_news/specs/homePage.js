
var homePage = require("../page-objects/homePage.js")

describe("ABC - new website tests", function() {

    var home;

    before(function() {
        home = new homePage();
    });

    it("Should verify that the page loads successfully and News Banner loads", function(){
        return browser.url("http://www.abc.net.au/news/")
            browser.click(home.banner)
            browser.getUrl().then(function(url){
                console.log(url)
                expect(url).to.equal("http://www.abc.net.au/news/");
            });
    });

    it("Should Navigate to JustIn Page", function(){
            var title = browser.getTitle()
            console.log(title)
            browser.click(home.justIn)
                expect(title).to.be.equal("ABC News (Australian Broadcasting Corporation)")
    });

    it ("Should Validate articles in JustIn Page", function(){
            var list = browser.elements("ul[class='article-index'] li").value.length
            console.log(list)
            var heading = browser.elements("ul[class='article-index'] li h3").value.length
            console.log(heading)
            var time = browser.elements("ul[class='article-index'] li time").value.length
            console.log(time)
    });
});