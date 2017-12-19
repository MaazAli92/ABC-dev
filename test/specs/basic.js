
describe("First Spec", function() {
    it("should navigate to the webdriverIO homepage", function(){
        return browser.url("http://www.abc.net.au/news/")
            .click("[href='/guide.html']")
            .getUrl().then(function(url){
                console.log(url) // outputs "http://webdriver.io/guide.html"
                expect(url).to.equal("http://webdriver.io/guide.html");
            });
    });
}) ;