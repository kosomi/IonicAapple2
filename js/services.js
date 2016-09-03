angular.module('starter.services', [])
    .service('tasks', function($firebaseArray, $firebaseObject, fb){

        var self = this;

        self.itens = [{title:'공지: 덧글 많이 남겨주세요.'}];
    
        self.add = function (item){
            self.itens.push(item);
        };
        
        self.refresh = function(){
            self.itens.unshift ({title:'item -1'});
        };

        self.usernames = JSON.parse(localStorage.getItem('storedData')) 

        self.nickName = function(){
          if(!JSON.parse(localStorage.getItem('storedData'))){ 
            return "왼쪽 회원정보에서 아이디를 만들어 주세요.";
          } else {
            return self.usernames[0];
            console.log(9899);
          };
        }(); 
 
        self.getAllThreads = function(){
            var ref = new Firebase(fb.url + '/threads');
            return $firebaseArray(ref);
        };

        self.getThread = function(threadId){
            var ref = new Firebase(fb.url + '/threads/' + threadId);
            return $firebaseObject(ref);
        };

        self.getComment = function(threadId, commentId){
            var ref = new Firebase(fb.url + '/threads/' + threadId + '/comments/' + commentId + '/replies');
            return $firebaseObject(ref);
        };  

        self.getCommentFire = function(threadId, $index){
            return new Firebase(fb.url + '/threads/' + threadId + '/comments/' + $index + '/replies');
            console.log('getCommentFire index: ' + $index);
        }; 

        self.visitors = function(){
        var ref = new Firebase(fb.url);
        return $firebaseArray(ref);
        }; 
 
        self.items = [{
                        "title": "Zoozzy",
                        "lat": "50.79313",
                        "lng": "15.83559"
                      }, {
                        "title": "Demivee",
                        "lat": "21.74285",
                        "lng": "111.61362"
                      }, {
                        "title": "Twitterlist",
                        "lat": "1.531",
                        "lng": "110.3442"
                      }, {
                        "title": "Cogilith",
                        "lat": "41.6649",
                        "lng": "-91.5151"
                      }, {
                        "title": "Zoonoodle",
                        "lat": "26.54549",
                        "lng": "118.44776"
                      }, {
                        "title": "Kazio",
                        "lat": "-7.31138",
                        "lng": "112.79681"
                      }, {
                        "title": "Mynte",
                        "lat": "-34.58333",
                        "lng": "-58.38333"
                      }, {
                        "title": "Browsecat",
                        "lat": "-1.79008",
                        "lng": "-79.28759"
                      }, {
                        "title": "Meezzy",
                        "lat": "46.06946",
                        "lng": "121.91632"
                      }, {
                        "title": "Tazzy",
                        "lat": "38.4",
                        "lng": "-8.7667"
                      }, {
                        "title": "Eimbee",
                        "lat": "63.8284",
                        "lng": "20.2597"
                      }, {
                        "title": "Photospace",
                        "lat": "59.2741",
                        "lng": "15.2066"
                      }, {
                        "title": "Oloo",
                        "lat": "40.65583",
                        "lng": "19.5025"
                      }, {
                        "title": "Eabox",
                        "lat": "44.28237",
                        "lng": "17.08597"
                      }, {
                        "title": "Topicblab",
                        "lat": "55.72545",
                        "lng": "52.41122"
                      }, {
                        "title": "Photobug",
                        "lat": "32.0493",
                        "lng": "112.90305"
                      }, {
                        "title": "Katz",
                        "lat": "50.34071",
                        "lng": "30.42356"
                      }, {
                        "title": "Eamia",
                        "lat": "51.66638",
                        "lng": "16.53494"
                      }, {
                        "title": "Mydo",
                        "lat": "17.87569",
                        "lng": "-77.23711"
                      }, {
                        "title": "Fliptune",
                        "lat": "59.3326",
                        "lng": "18.0649"
                      }, {
                        "title": "Eazzy",
                        "lat": "-8.1886",
                        "lng": "113.4889"
                      }, {
                        "title": "Wordify",
                        "lat": "-9.30528",
                        "lng": "-36.86472"
                      }, {
                        "title": "Jaxspan",
                        "lat": "8.68333",
                        "lng": "-82.5"
                      }, {
                        "title": "Mynte",
                        "lat": "51.37017",
                        "lng": "20.03915"
                      }, {
                        "title": "Skimia",
                        "lat": "-8.0946",
                        "lng": "111.744"
                      }, {
                        "title": "Zooxo",
                        "lat": "6.05772",
                        "lng": "124.46661"
                      }, {
                        "title": "Leexo",
                        "lat": "-8.1415",
                        "lng": "111.8928"
                      }, {
                        "title": "Tekfly",
                        "lat": "5.9765",
                        "lng": "116.1158"
                      }, {
                        "title": "Skynoodle",
                        "lat": "53.2",
                        "lng": "5.7833"
                      }, {
                        "title": "Thoughtstorm",
                        "lat": "30.66879",
                        "lng": "120.78848"
                      }, {
                        "title": "Photojam",
                        "lat": "50.09449",
                        "lng": "19.40357"
                      }, {
                        "title": "Eimbee",
                        "lat": "23.04525",
                        "lng": "113.44889"
                      }, {
                        "title": "Eazzy",
                        "lat": "45.5653",
                        "lng": "-122.6448"
                      }, {
                        "title": "Wikibox",
                        "lat": "27.85306",
                        "lng": "119.31528"
                      }, {
                        "title": "Edgeblab",
                        "lat": "46.97719",
                        "lng": "124.91041"
                      }, {
                        "title": "Omba",
                        "lat": "-10.41528",
                        "lng": "-76.23556"
                      }, {
                        "title": "Pixonyx",
                        "lat": "39.7698",
                        "lng": "76.64803"
                      }, {
                        "title": "Youbridge",
                        "lat": "6.65175",
                        "lng": "-4.20406"
                      }, {
                        "title": "Roodel",
                        "lat": "28.51998",
                        "lng": "121.00177"
                      }, {
                        "title": "Linktype",
                        "lat": "32.39523",
                        "lng": "119.42688"
                      }, {
                        "title": "Buzzshare",
                        "lat": "5.84752",
                        "lng": "-5.682"
                      }, {
                        "title": "Bluejam",
                        "lat": "50.95151",
                        "lng": "14.55699"
                      }, {
                        "title": "Rooxo",
                        "lat": "7.36332",
                        "lng": "2.59978"
                      }, {
                        "title": "Quatz",
                        "lat": "-9.1725",
                        "lng": "-78.35889"
                      }, {
                        "title": "Eare",
                        "lat": "-10.74167",
                        "lng": "-40.36083"
                      }, {
                        "title": "Fivespan",
                        "lat": "-8.013",
                        "lng": "112.7696"
                      }, {
                        "title": "Omba",
                        "lat": "18.79545",
                        "lng": "109.87392"
                      }, {
                        "title": "Meevee",
                        "lat": "31.48621",
                        "lng": "131.2421"
                      }, {
                        "title": "Kimia",
                        "lat": "-7.5379",
                        "lng": "108.7836"
                      }, {
                        "title": "Mynte",
                        "lat": "30.3189",
                        "lng": "-81.6854"
                      }];   
    }); 