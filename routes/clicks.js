//requires
var router = require('express').Router();


// array to store photos
var photos = [{
    number: 1, 
    url: '../gallery/gal1.jpg',
    desc: 'This is a photo of my boyfriend, Caleb, and I at a wedding last summer',
    clicks: 0,
    comments:[]
}, {
    number: 2,
    url: '../gallery/gal2.jpg',
    clicks: 0,
    desc: 'This is me and my best friend Holly in highschool',
    comments: []
    }, {
        number: 3,
        url: '../gallery/gal3.jpg',
        clicks: 0,
        desc: 'This is a picture of my little sister Ellie a few years back',
        comments: []
}, {
    number: 4,
    url: '../gallery/gal4.jpg',
    clicks: 0,
    desc: ' This is a photo of my Mom and my Step Dad, Ben',
    comments: []
    }, {
        number: 5,
        url: '../gallery/gal5.jpg',
        clicks: 0,
        desc: 'This is a photo of me and one of my other best friends Talia at her sorority semi-formal',
        comments: []
}, {
    number: 6,
    url: '../gallery/gal6.jpg',
    clicks: 0,
    desc:'This is a picture of me and my cat Oliver. I have had him since I was 5.',
    comments: []
}];

router.get('/', function (req, res){
    res.send(photos);
})//END router.get

router.post('/', function (req, res){
    photos = req.body;
    res.sendStatus(202);

})//END router.put

module.exports = router;