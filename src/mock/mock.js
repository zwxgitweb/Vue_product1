import axios from 'axios'
import mocks from 'axios-mock-adapter'
import musics from '../data/music.json'
import shops from '../data/shop.json'

let mock = new mocks(axios);

// login的用户信息
mock.onGet('http://localhost:8080/login')
.reply(200, [
    {
        "id": 1,
        "username": "zs",
        "password": "123456"
    },
    {
        "id": 2,
        "username": "zwx",
        "password": "123456"
    },
    {
        "id": 3,
        "username": "lisi",
        "password": "123456"
    }
])

// music的数据
mock.onGet('http://localhost:8080/music')
.reply(config => {
    let musicNav = config.params.musicPath;
    return new Promise((resolve, reject) => {
        resolve([200, musics[musicNav]]);
    })
})

// shopCar数据
mock.onGet('http://localhost:8080/shop')
.reply(200, shops)