// var config = {
//     list: 'http://gaojun.s1.natapp.cc/nongshang/admin/index.php?api-app-api',
//     anwser: 'http://gaojun.s1.natapp.cc/nongshang/admin/index.php?api-app-api-getAnswer',
//     test: 'http://gaojun.s1.natapp.cc/nongshang/admin/index.php?api-app-api-getQuesList',
//     user: 'http://gaojun.s1.natapp.cc/nongshang/admin/index.php?api-app-user',
//     score: 'http://gaojun.s1.natapp.cc/nongshang/admin/index.php?api-app-user-getUserExamList'
// }

var config = {
    list: 'http://106.14.161.68/index.php?api-app-api',
    anwser: 'http://106.14.161.68/index.php?api-app-api-getAnswer',
    test: 'http://106.14.161.68/index.php?api-app-api-getQuesList',
    user: 'http://106.14.161.68/index.php?api-app-user',
    score: 'http://106.14.161.68/index.php?api-app-user-getUserExamList',
    confirm: 'http://106.14.161.68/index.php?api-app-user-checkUser',
    openid: 'http://106.14.161.68/index.php?api-app-user-checkUserByOpenId&openid=',
    knows: 'http://106.14.161.68/index.php?api-app-knows-getKnows',
    search: 'http://106.14.161.68/index.php?api-app-knows-searchKnows',
    rank: 'http://106.14.161.68/index.php?api-app-user-getRanking',
    scoreView: 'http://106.14.161.68/index.php?api-app-api-getAllList'
}

module.exports = config;