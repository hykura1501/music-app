function render () {
  const musicAPI = 'http://localhost:3000/songs'

fetch(musicAPI)
  .then (response => response.json())
  .then (function (songs) {
    var htmls = songs.map(function (song) {
      return `
            <div class="song">
              <div class="thumb">
                <img class="image"src="${song.img}" alt="">
              </div>
              <div class="body">
                <h3 class="title">${song.name}</h3>
                <p class="author">${song.singer}</p>
              </div>
              <div class="option">
                <i class="fas fa-ellipsis-h"></i>
              </div>
            </div>
        `
    })
    const playlist = $('.playlist');
    playlist.innerHTML = htmls.join('');
  })
}

// const $ = document.querySelector.bind(document);
//         const $$ = document.querySelectorAll.bind(document);
//         const heading =  $('header h2');
//         const cdThumb =  $('.cd-thumb');
//         const audio =  $('#audio');
//         const playBtn = $('.btn-toggle-play');
//         const progress = $('#progress');
//         const nextSong = $('.btn-next');
//         const prevSong = $('.btn-prev');
//         const random = $('.btn-random');
//         const repeat = $('.btn-repeat');
//         const volumeBtn = $('.volume')
//         // Bug 
//         // - Active Song
//         // const song = document.querySelector(`.song:nth-child(${app.currentIndex+1})`);
//         // song.classList.add('active');

//         const app = {
//           currentIndex: 0,
//           isPlaying: false,
//           songs: [
//             {
//               name: "Waiting For You",
//               singer: "Chily",
//               path: './assets/music/song1.mp3',
//               image: './assets/img/img2.webp'
//             },
//             {
//               name: "Bên Ấy Bên Này",
//               singer: "Long Cao",
//               path: './assets/music/song2.mp3',
//               image: './assets/img/img1.webp'
//             },
//             {
//               name: "Yêu Lại Từ Đầu",
//               singer: "Khắc Việt",
//               path: './assets/music/song3.mp3',
//               image: './assets/img/img3.webp'
//             },
//             {
//               name: "Già Cùng Nhau Là Được",
//               singer: "Tùng TeA",
//               path: './assets/music/song4.mp3',
//               image: './assets/img/img4.webp'
//             },
//             {
//               name: "Tình Này Có Em",
//               singer: "Lê Vũ",
//               path: './assets/music/song5.mp3',
//               image: './assets/img/img5.webp'
//             },
//             {
//               name: "Đúng Người Đúng Thời Điểm",
//               singer: "Thanh Hưng",
//               path: './assets/music/song6.mp3',
//               image: './assets/img/img6.webp'
//             },
//             {
//               name: "Sai Người Sai Thời Điểm",
//               singer: "Thanh Hưng",
//               path: './assets/music/song7.mp3',
//               image: './assets/img/img7.webp'
//             },
//             {
//               name: "Sao Mình Chưa Nắm Tay Nhau",
//               singer: "Yan Nguyễn",
//               path: './assets/music/song8.mp3',
//               image: './assets/img/img8.webp'
//             },
//             {
//               name: "Nơi Này Có Anh",
//               singer: "Sơn Tùng M-TP",
//               path: './assets/music/song9.mp3',
//               image: './assets/img/img9.webp'
//             },
//             {
//               name: "Đêm Trăng Tình Yêu",
//               singer: "Nguyễn Văn Chung",
//               path: './assets/music/song10.mp3',
//               image: './assets/img/img10.webp'
//             },
//             {
//               name: "Tình Ca Tình Ta",
//               singer: "Kis",
//               path: './assets/music/song11.mp3',
//               image: './assets/img/img11.webp'
//             },
//             {
//               name: "Vây Giữ",
//               singer: "QV China",
//               path: './assets/music/song12.mp3',
//               image: './assets/img/img12.webp'
//             }
//           ],
//           render: function() {
//             const htmls = this.songs.map((song,index) => {
//               return `
//                   <div class="song ${app.currentIndex ===index ?'active': "" }">
//                     <div class="thumb">
//                       <img class="image" src="${song.image}" alt="">
//                     </div>
//                     <div class="body">
//                       <h3 class="title">${song.name}</h3>
//                       <p class="author">${song.singer}</p>
//                     </div>
//                     <div class="option">
//                       <i class="fas fa-ellipsis-h"></i>
//                     </div>
//                   </div>
//               `
//             });
//             const playlist = $('.playlist');
//             playlist.innerHTML = htmls.join('');
//           },
//           defineProperties: function () {
//             Object.defineProperty(this,'currentSong',{
//               get: function () {
//                 return this.songs[this.currentIndex];
//               }
//             })
//           },
//           handleEvents: function () {
//             const cd = $('.cd');
//             const cdWidth = cd.offsetWidth;
            
//             const cdThumbAnimate = cdThumb.animate([
//                 { transform: "rotate(360deg)"}
//               ],{
//                   duration: 10000,
//                   iterations: Infinity,
//               });
//             cdThumbAnimate.pause();
//             document.onscroll = function () {
//               const scrollTop = window.scrollY || document.documentElement.scrollTop;
//               const newCdWidth = cdWidth - scrollTop;
//               cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
//               cd.style.opacity = newCdWidth > 0 ? newCdWidth/cdWidth : 0;
//             }

//             playBtn.onclick = function () {
//               if(app.isPlaying) {
//                 audio.pause()
//               }else {
//                 audio.play()
//               }
//             }
//             audio.onplay = function () {
//                 $('.player').classList.add('playing');
//                 app.isPlaying = true;
//                 cdThumbAnimate.play();
                
//             }
//             audio.onpause = function () {
//                 $('.player').classList.remove('playing');
//                 app.isPlaying = false;
//                 cdThumbAnimate.pause();
//             }
//             var repeatActive;
//             repeat.onclick = function () {
//                 repeat.classList.toggle('active');
//                 repeatActive = $('.active');
//             }
//             audio.ontimeupdate = function () {
//               if(audio.duration) {
//                 progress.value = Math.floor(audio.currentTime/audio.duration *100);
//               }
//               if (audio.duration === audio.currentTime) {
//                 if (repeatActive) {
//                   app.loadCurrentSong();
//                   audio.play();
//                 } else {
//                   if (randomActive) {
//                     app.currentIndex = Math.floor(Math.random()*(app.songs.length));
//                     app.loadCurrentSong();
//                     audio.play();
//                   } else {
//                     app.currentIndex++;
//                     app.loadCurrentSong();
//                     audio.play();
//                   }
//                 }
//               }
//             }
//             progress.onchange = function () {
//                 audio.currentTime = progress.value*audio.duration /100;
//             }
//             var randomActive;
//             random.onclick = function () {
//                 random.classList.toggle('active');
//                 randomActive = $('.active');
//             }
            
//             nextSong.onclick = function () {
//                 if(randomActive) {
//                   var songIndex = Math.floor(Math.random()*(app.songs.length));
//                 }
//                 if(app.currentIndex!=(app.songs.length - 1) || songIndex) {
//                   app.currentIndex = songIndex || app.currentIndex + 1;
//                   app.loadCurrentSong();
//                   audio.play();
//                 }
//                 app.render();
//             }
//             prevSong.onclick = function () {
//                 if(randomActive) {
//                   var songIndex = Math.floor(Math.random()*(app.songs.length));
//                 }
//                 if(app.currentIndex!=0 || songIndex) {
//                   app.currentIndex = songIndex || app.currentIndex - 1;
//                   app.loadCurrentSong();
//                   audio.play();
//                 }
//                 app.render();
//             }
//             volumeBtn.oninput = function () {
//               audio.volume = volumeBtn.value/100;
//             }
//           },
//           loadCurrentSong: function (){
//             $('header h2').innerText = this.currentSong.name;
//             $('.cd-thumb').style.backgroundImage = `url(${this.currentSong.image})`
//             $('#audio').src= this.currentSong.path;
//             // const song = document.querySelector(`.song:nth-child(${app.currentIndex+1})`);
//             // song.classList.add('active');
//           },
//           playSongWhenClick: function () {
//             Array.from($$('.song')).forEach(function (song, index) {
//                song.onclick = function () {
//                   app.currentIndex = index;
//                   app.loadCurrentSong();
//                   audio.play();
//                }
//             })
            
//           },
//           start: function () {
//             this.defineProperties()
//             this.handleEvents()
//             this.render()
//             this.loadCurrentSong()
//             this.playSongWhenClick()
//           }



//         }
//         app.start();