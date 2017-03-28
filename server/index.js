let Mock  = require('mockjs');
let Random = Mock.Random;
let arr = []
var images = [1,2,3].map(x=>Random.image('200x100', Random.color(), Random.word(2,6)));
for (var i = 0; i < 10; i++) {
    var content = Random.cparagraph(0,10);
    arr.push({
        id: i,
        title: Random.cword(8,20),
        desc: content.substr(0,40),
        tag: Random.cword(2,6),
        views: Random.integer(100,5000),
        images: images.slice(0,Random.integer(1,3))
    })
}

const db = {
    'yaotjsr': {
        "meta": {
            "msg": "ok",
            "status": 200
        },
        "data": arr
    }
}

module.exports = function() {
    return db
}
