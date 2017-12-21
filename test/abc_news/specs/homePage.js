
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

    it ("Should Validate articles in JustIn Page have headings", function(){
            //await
            var list = browser.elements(home.article).value.length
            console.log(list)
            var heading = browser.elements(home.head).value.length
            console.log(heading)
            if (list == heading)
            {
                console.log("All Articles have Headings")
            }
    });

    it("Navigate to Radio National website", function(){
        return browser.url("http://www.abc.net.au/radionational/#")
        browser.click(home.logo)
        browser.getUrl().then(function(url){
            console.log(url)
            expect(url).to.equal("http://www.abc.net.au/news/");
        });
    });

    it("Navigate to the Program and select program from sub program menu", function(){
        browser.click(home.program)
        browser.click(home.subprogram)
    });
/*
    it("iterate till Last program", function(){
        return browser.url("http://www.abc.net.au/radionational/#")
        var program = browser.elements(".at-a-glance")
        console.log(program)
            browser.elements('.at-a-glance', function(err, res){
                // iterate through elements
                res.value.forEach(function(elem) {
                    // execute specific action
                    browser.click(elem.Element, function(err, res) {
                        // callback logic here
                        // ...
                    });
                });
            });
    });*/
});