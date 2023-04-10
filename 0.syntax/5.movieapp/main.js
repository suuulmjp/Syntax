function getAPI() {
    //로딩시작 메세지출력
    let parent = document.querySelector('#app')    //쿼리셀렉터는 인자값을 id로(#) 조작
    parent.innerHTML = '로딩중...'

    //API취득하기
    fetch('https://proxy.cors.sh/https://yts.mx/api/v2/list_movies.json?sort_by=title', {
  headers: {
    'x-cors-api-key': 'temp_4c7de16411563049c8a33da38cab0ea1',
  }
})
    .then((res) => res.json())
    .then((json) => {
        let movies=json.data.movies
        console.log(movies)

        //로딩 끝 메세지 제거
        parent.innerHTML = ''

        //DOM조작하기   Document Object Model
        //DOM이란 도큐먼트Document를 객체화Object한 모델Model 문서객체모델 
        // 자바스크립트에서 HTML문서를 조작하기 위해 HTML 문서를 객체화해서 도큐먼트에 담은것(자동으로 담김)
        //DOM의 위치는 body의 끝부분
        
        for (let i = 0; i < movies.length; i++) {
            //타이틀
            let movieTitle = document.createElement("a")
            movieTitle.setAttribute("class", "movieTitle")
            movieTitle.innerHTML = movies[i].title
            movieTitle.href = movies[i].url
            parent.appendChild(movieTitle)

            //레이팅+추천아이콘
            let movieRating = document.createElement("div")
            movies[i].rating >= 7.5
                ? movieRating.setAttribute("class", "movieRatingGood")
                : movies[i].rating>=5
                ? movieRating.setAttribute("class", "movieRatingSoso")
                : movieRating.setAttribute("class", "movieRatingBad")
            goodIcon = movies[i].rating >= 7.0 ? '👍' : ""      
            movieRating.innerHTML = `평점 :${movies[i].rating} / 10점 ${goodIcon}`
            parent.appendChild(movieRating)
            

            
             
            
              

            //이미지
            let movieImage = document.createElement("img")
            movieImage.src = movies[i].medium_cover_image
            parent.appendChild(movieImage)

            


        }
    })
}

function init(){
    getAPI()
}

init()  