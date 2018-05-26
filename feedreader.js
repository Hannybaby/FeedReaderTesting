/* feedreader.js
 *
 * This spec file is for the testing framework "Jasmine". 
 * It will read and contain all of the tests that will be run.
 
 * All tests are placed within the $() function to ensure 
 * they don't run untill the DOM is ready
 */
 
$(function() {
    /* New Test suite here: RSS Feeds */

    describe('RSS Feeds', function() {

        /* The following test ensures that the variable "allFeeds" 
         * has beend defined and not empty 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* The following test loops through all feeds 
         * and ensures that a URL is defined and not empty
         */
        it('URL is defined and not null', function() {
            allFeeds.forEach(function(allFeeds) {
                expect(allFeeds.url).toBeDefined();
                expect(allFeeds.url.length).toBeGreaterThan(0);
            });
        });



        /* The following test loops through all feed objects 
         * and ensures that a name is definded and not empty 
         */

        it('name is defined and not null', function() {
            allFeeds.forEach(function(allFeeds) {
                expect(allFeeds.name).toBeDefined();
                expect(allFeeds.name.length).toBeGreaterThan(0);
            });
        });
    });


    /* New test suite here: The menu */

    describe('The menu', function() {

        /* The following test ensures the menu is hidden by default */
        it('have a hide class', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });



        /* The following test ensures that the menu shows on click */
        it('display on click', function() {
            $('a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
        });

        /* The folowing test ensures that the menu hides on a new click */
        it('hide on click', function() {
            $('a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });



    /*  New test suite here: Initial Entries */
    describe('Initial Entries', function() {

        /* The following test ensures that the loadFeed function is called and done... */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        /* ...and has at least one .entry element in .feed container */
        it('ensures container has elements', function() {
            var elementList = document.querySelectorAll('.feed .entry');
                expect(elementList.length).toBeGreaterThan(0);
        });
    });


    /* New test suite here: New Feed Selection */
    describe('New Feed Selection', function() {

        /* The following test ensures that the loadFeed function 
         * actually changes feeds. 
         */

        var feedOne,
            feedTwo;

        beforeEach(function(done) {
            loadFeed(0, function() {
                feedOne = document.querySelector('.feed').innerHTML;

            loadFeed(1, function() {
                feedTwo = document.querySelector('.feed').innerHTML;
                done();
                });
            });
        });

        it('ensures feed changes', function(done) {
            expect(feedTwo !== feedOne).toBe(true);
            done();
        });
    });

}());