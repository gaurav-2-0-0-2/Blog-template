// $(function () {
//     for (let i = 1; i <= 9; i++) {
//         var $cards = $(".cards")
        
//         $.ajax({
//             type: 'GET',
//             url: 'https://raw.githubusercontent.com/gaurav-2-0-0-2/Blog-template/main/cards.json',
//             success: function (data) {
//                 $.each($cards, function (i, card) {
//                     $cards.append()
        
//                })
//             }
//         })
        
//     }
    
// })


for (let i = 1; i <= 9; i++) {
    

    $.getJSON("https://raw.githubusercontent.com/gaurav-2-0-0-2/Blog-template/main/cards.json",function (data) {
       
        
            $('.container-1_1 h4').html(data[i-1].title)
            $('.container-1_1 p').html(data[i-1].desc)
            $('.card-img').attr("src",data[i-1].img)
            $('.date-tag').text(data[i-1].datetime)
            $('.user-icon-h6').text(data[i-1].admin)
            $('.comment-icon-h6').html(data[i-1].comment_count)
            $('.heart-icon-h6').html(data[i-1].like_count)
                    
        
       
});
}
    


















































































// for(let i=1; i<=9; i++){
//     let cards = document.querySelector(".cards");

//     let card = document.createElement('div')
//     card.classList.add('card', `card${i}`)
//     card.innerHTML = 

//     `
    
    
//                     <img class="card-img" src="" alt="Avatar">
//                     <div class="date-tag">
//                         <h6></h6>
//                     </div>
//                     <div class="container-1_1">
                       
//                         <a href="#"><i class="fa-solid fa-user user-icon"></i></a>
//                         <h6 class="user-icon-h6"></h6>
//                         <a href="#"><i class="fa-solid fa-heart heart-icon"></i></a>
                        
        
//                         <a href="#"><i class="fa-solid fa-comment comment-icon"></i></a>
//                         <h6 class="comment-icon-h6"></h6>
//                         <h6 class="heart-icon-h6"></h6>
        
//                         <h4></h4>
//                         <p></p>
        
//                         <a href="#" class="read-more">Read More...</a>
//                     </div>
               
//     `

//     cards.append(card);
// }








// fetch("https://raw.githubusercontent.com/gaurav-2-0-0-2/Blog-template/main/cards.json")
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         for (let i = 1; i <= 9; i++) {
//             document.querySelector(`.card${i} .container-1_1 p`).textContent = data[i-1].desc
//             document.querySelector(`.card${i} .container-1_1 h4`).textContent = data[i-1].title
//             document.querySelector(`.card${i} .user-icon-h6`).textContent = data[i-1].admin
//             document.querySelector(`.card${i} .heart-icon-h6`).textContent = data[i-1].like_count
//             document.querySelector(`.card${i} .comment-icon-h6`).textContent = data[i-1].comment_count
//             document.querySelector(`.card${i} .card-img`).src = data[i-1].img
//             document.querySelector(`.card${i} .date-tag`).textContent = data[i-1].datetime
//         }
//     }).catch(err => console.error(err));







































    
    
    
    
    
  


















































































































