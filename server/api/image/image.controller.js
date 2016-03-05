/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/images              ->  index
 */

'use strict';
var images2015 = [
    {thumb: 'assets/images/2015/cojin/1.jpg', img: 'assets/images/2015/cojin/1.jpg', description: 'assets/images/2015/cojin/1.jpg'},
    {thumb: 'assets/images/2015/cojin/2.jpg', img: 'assets/images/2015/cojin/2.jpg', description: 'assets/images/2015/cojin/2.jpg'},
    {thumb: 'assets/images/2015/cojin/3.jpg', img: 'assets/images/2015/cojin/3.jpg', description: 'assets/images/2015/cojin/3.jpg'},
    {thumb: 'assets/images/2015/cojin/4.jpg', img: 'assets/images/2015/cojin/4.jpg', description: 'assets/images/2015/cojin/4.jpg'},
    {thumb: 'assets/images/2015/cojin/5.jpg', img: 'assets/images/2015/cojin/5.jpg', description: 'assets/images/2015/cojin/5.jpg'},
    {thumb: 'assets/images/2015/cojin/6.jpg', img: 'assets/images/2015/cojin/6.jpg', description: 'assets/images/2015/cojin/6.jpg'},
    {thumb: 'assets/images/2015/cojin/7.jpg', img: 'assets/images/2015/cojin/7.jpg', description: 'assets/images/2015/cojin/7.jpg'},
    {thumb: 'assets/images/2015/cojin/8.jpg', img: 'assets/images/2015/cojin/8.jpg', description: 'assets/images/2015/cojin/8.jpg'}
];

var images2013 = [
    {thumb: 'assets/images/2013/truff/1.jpg', img: 'assets/images/2013/truff/1.jpg', description: 'assets/images/2013/truff/1.jpg'},
    {thumb: 'assets/images/2013/truff/2.jpg', img: 'assets/images/2013/truff/2.jpg', description: 'assets/images/2013/truff/2.jpg'},
    {thumb: 'assets/images/2013/truff/3.jpg', img: 'assets/images/2013/truff/3.jpg', description: 'assets/images/2013/truff/3.jpg'},
    {thumb: 'assets/images/2013/truff/4.jpg', img: 'assets/images/2013/truff/4.jpg', description: 'assets/images/2013/truff/4.jpg'},
    {thumb: 'assets/images/2013/truff/5.jpg', img: 'assets/images/2013/truff/5.jpg', description: 'assets/images/2013/truff/5.jpg'},
    {thumb: 'assets/images/2013/truff/6.jpg', img: 'assets/images/2013/truff/6.jpg', description: 'assets/images/2013/truff/6.jpg'},
    {thumb: 'assets/images/2013/truff/7.jpg', img: 'assets/images/2013/truff/7.jpg', description: 'assets/images/2013/truff/7.jpg'},
    {thumb: 'assets/images/2013/truff/8.jpg', img: 'assets/images/2013/truff/8.jpg', description: 'assets/images/2013/truff/8.jpg'},
    {thumb: 'assets/images/2013/truff/9.jpg', img: 'assets/images/2013/truff/9.jpg', description: 'assets/images/2013/truff/9.jpg'},
    {thumb: 'assets/images/2013/truff/10.jpg', img: 'assets/images/2013/truff/10.jpg', description: 'assets/images/2013/truff/10.jpg'},
    {thumb: 'assets/images/2013/truff/11.jpg', img: 'assets/images/2013/truff/11.jpg', description: 'assets/images/2013/truff/11.jpg'},
    {thumb: 'assets/images/2013/truff/12.jpg', img: 'assets/images/2013/truff/12.jpg', description: 'assets/images/2013/truff/12.jpg'},
    {thumb: 'assets/images/2013/truff/13.jpg', img: 'assets/images/2013/truff/13.jpg', description: 'assets/images/2013/truff/13.jpg'},
    {thumb: 'assets/images/2013/truff/14.jpg', img: 'assets/images/2013/truff/14.jpg', description: 'assets/images/2013/truff/14.jpg'},
    {thumb: 'assets/images/2013/truff/15.jpg', img: 'assets/images/2013/truff/15.jpg', description: 'assets/images/2013/truff/15.jpg'},
    {thumb: 'assets/images/2013/truff/16.jpg', img: 'assets/images/2013/truff/16.jpg', description: 'assets/images/2013/truff/16.jpg'},
    {thumb: 'assets/images/2013/truff/17.jpg', img: 'assets/images/2013/truff/17.jpg', description: 'assets/images/2013/truff/17.jpg'},
    {thumb: 'assets/images/2013/truff/18.jpg', img: 'assets/images/2013/truff/18.jpg', description: 'assets/images/2013/truff/18.jpg'},
    {thumb: 'assets/images/2013/truff/19.jpg', img: 'assets/images/2013/truff/19.jpg', description: 'assets/images/2013/truff/19.jpg'},
    {thumb: 'assets/images/2013/truff/20.jpg', img: 'assets/images/2013/truff/20.jpg', description: 'assets/images/2013/truff/20.jpg'},
    {thumb: 'assets/images/2013/truff/21.jpg', img: 'assets/images/2013/truff/21.jpg', description: 'assets/images/2013/truff/21.jpg'},
    {thumb: 'assets/images/2013/truff/22.jpg', img: 'assets/images/2013/truff/22.jpg', description: 'assets/images/2013/truff/22.jpg'}
];
// Gets a list of Images
export function index(req, res) {
  var images = [
    {thumb: 'assets/images/2015/cojin/1.jpg', img: 'assets/images/2015/cojin/1.jpg', description: 'assets/images/2015/cojin/1.jpg'},
    {thumb: 'assets/images/2015/cojin/2.jpg', img: 'assets/images/2015/cojin/2.jpg', description: 'assets/images/2015/cojin/2.jpg'},
    {thumb: 'assets/images/2015/cojin/3.jpg', img: 'assets/images/2015/cojin/3.jpg', description: 'assets/images/2015/cojin/3.jpg'},
    {thumb: 'assets/images/2015/cojin/4.jpg', img: 'assets/images/2015/cojin/4.jpg', description: 'assets/images/2015/cojin/4.jpg'},
    {thumb: 'assets/images/2015/cojin/5.jpg', img: 'assets/images/2015/cojin/5.jpg', description: 'assets/images/2015/cojin/5.jpg'},
    {thumb: 'assets/images/2015/cojin/6.jpg', img: 'assets/images/2015/cojin/6.jpg', description: 'assets/images/2015/cojin/6.jpg'},
    {thumb: 'assets/images/2015/cojin/7.jpg', img: 'assets/images/2015/cojin/7.jpg', description: 'assets/images/2015/cojin/7.jpg'},
    {thumb: 'assets/images/2015/cojin/8.jpg', img: 'assets/images/2015/cojin/8.jpg', description: 'assets/images/2015/cojin/8.jpg'},
    {thumb: 'assets/images/2013/truff/1.jpg', img: 'assets/images/2013/truff/1.jpg', description: 'assets/images/2013/truff/1.jpg'},
    {thumb: 'assets/images/2013/truff/2.jpg', img: 'assets/images/2013/truff/2.jpg', description: 'assets/images/2013/truff/2.jpg'},
    {thumb: 'assets/images/2013/truff/3.jpg', img: 'assets/images/2013/truff/3.jpg', description: 'assets/images/2013/truff/3.jpg'},
    {thumb: 'assets/images/2013/truff/4.jpg', img: 'assets/images/2013/truff/4.jpg', description: 'assets/images/2013/truff/4.jpg'},
    {thumb: 'assets/images/2013/truff/5.jpg', img: 'assets/images/2013/truff/5.jpg', description: 'assets/images/2013/truff/5.jpg'},
    {thumb: 'assets/images/2013/truff/6.jpg', img: 'assets/images/2013/truff/6.jpg', description: 'assets/images/2013/truff/6.jpg'},
    {thumb: 'assets/images/2013/truff/7.jpg', img: 'assets/images/2013/truff/7.jpg', description: 'assets/images/2013/truff/7.jpg'},
    {thumb: 'assets/images/2013/truff/8.jpg', img: 'assets/images/2013/truff/8.jpg', description: 'assets/images/2013/truff/8.jpg'},
    {thumb: 'assets/images/2013/truff/9.jpg', img: 'assets/images/2013/truff/9.jpg', description: 'assets/images/2013/truff/9.jpg'},
    {thumb: 'assets/images/2013/truff/10.jpg', img: 'assets/images/2013/truff/10.jpg', description: 'assets/images/2013/truff/10.jpg'},
    {thumb: 'assets/images/2013/truff/11.jpg', img: 'assets/images/2013/truff/11.jpg', description: 'assets/images/2013/truff/11.jpg'},
    {thumb: 'assets/images/2013/truff/12.jpg', img: 'assets/images/2013/truff/12.jpg', description: 'assets/images/2013/truff/12.jpg'},
    {thumb: 'assets/images/2013/truff/13.jpg', img: 'assets/images/2013/truff/13.jpg', description: 'assets/images/2013/truff/13.jpg'},
    {thumb: 'assets/images/2013/truff/14.jpg', img: 'assets/images/2013/truff/14.jpg', description: 'assets/images/2013/truff/14.jpg'},
    {thumb: 'assets/images/2013/truff/15.jpg', img: 'assets/images/2013/truff/15.jpg', description: 'assets/images/2013/truff/15.jpg'},
    {thumb: 'assets/images/2013/truff/16.jpg', img: 'assets/images/2013/truff/16.jpg', description: 'assets/images/2013/truff/16.jpg'},
    {thumb: 'assets/images/2013/truff/17.jpg', img: 'assets/images/2013/truff/17.jpg', description: 'assets/images/2013/truff/17.jpg'},
    {thumb: 'assets/images/2013/truff/18.jpg', img: 'assets/images/2013/truff/18.jpg', description: 'assets/images/2013/truff/18.jpg'},
    {thumb: 'assets/images/2013/truff/19.jpg', img: 'assets/images/2013/truff/19.jpg', description: 'assets/images/2013/truff/19.jpg'},
    {thumb: 'assets/images/2013/truff/20.jpg', img: 'assets/images/2013/truff/20.jpg', description: 'assets/images/2013/truff/20.jpg'},
    {thumb: 'assets/images/2013/truff/21.jpg', img: 'assets/images/2013/truff/21.jpg', description: 'assets/images/2013/truff/21.jpg'},
    {thumb: 'assets/images/2013/truff/22.jpg', img: 'assets/images/2013/truff/22.jpg', description: 'assets/images/2013/truff/22.jpg'}
  ];
  res.json(images);
}

export function year(req, res) {
    var images = [];
    switch (req.params.year) {
        case '2015':
            images = images2015;
            break;
        case '2013':
            images = images2013;
            break;
        default:

    }
    res.json(images);
}
