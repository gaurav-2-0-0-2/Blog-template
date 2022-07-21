$(function () {
    for (let i = 1; i <= 9; i++) {
        var $cards = $(".cards")
        
        $.ajax({
            type: 'GET',
            url: 'https://raw.githubusercontent.com/gaurav-2-0-0-2/Blog-template/main/cards.json',
            success: function (data) {
                $.each($cards, function (i, card) {
                    $cards.append(`<div class="card">
    
                    <img class="card-img" src="images/one.jpg" alt="Avatar">
                    <div class="date-tag">
                        <h6>24 MAY</h6>
                    </div>
                    <div class="container-1_1">
                    
                        <a href="#"><i class="fa-solid fa-user user-icon"></i></a>
                        <h6 class="user-icon-h6">By: Admin</h6>
                        <a href="#"><i class="fa-solid fa-heart heart-icon"></i></a>
                        <h6 class="heart-icon-h6">15</h6>
        
                        <a href="#"><i class="fa-solid fa-comment comment-icon"></i></a>
                        <h6 class="comment-icon-h6">25</h6>
                        <h6 class="heart-icon-h6">15</h6>
        
                        <h4>Lorem ipsum dolor sit amet</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipicing </p>
                        <p>elit. Nullam feugiat dignissim metus, id vestibulum</p>
                        <p>tellus Cras ante commodo.</p>
        
                        <a href="#" class="read-more">Read More...</a>
                    </div>
                </div>`
                
                    
            
                )
        
               })
            }
        })
        
    }
    
})
















































































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







































    
    
    
    
    
  








































































// for(let i=1; i<=9; i++){
//     let cards = document.querySelector(".cards");

//     let container = document.createElement('div')
//     container.classList.add('card', `card${i}`)
//     container.innerHTML = 
//     `
//     <div class="img">
//         <img>
//         <div class="date"></div>
//     </div>
//     <div class="blog-info">
//         <div class="admin">
//             <i class="fa-solid fa-user"></i>
//             By: <span></span>
//         </div>
//         <div class="comment">
//             <i class="fa-solid fa-heart"></i>
//             <span> </span>  &nbsp; | &nbsp;
//             <i class="fa-solid fa-comment"></i>
//             <span> </span>
//         </div>
//     </div>
//     <div class="blog-text">
//         <h3></h3>
//         <p></p>
//         <a href="">Read More...</a>
//     </div>
//     `

//     cards.append(container);
// }

// fetch("https://raw.githubusercontent.com/gaurav-2-0-0-2/Blog-template/main/cards.json")
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
        // for (let i = 1; i <= 9; i++) {
        //     document.querySelector(`.container${i} .blog-text p`).textContent = data[i-1].desc
        //     document.querySelector(`.container${i} .blog-text h3`).textContent = data[i-1].title
        //     document.querySelector(`.container${i} .admin span`).textContent = data[i-1].author
        //     document.querySelector(`.container${i} .comment span:nth-child(2)`).textContent = data[i-1].like_count
        //     document.querySelector(`.container${i} .comment span:nth-child(4)`).textContent = data[i-1].comment_count
        //     document.querySelector(`.container${i} .img img`).src = data[i-1].img
        //     // document.querySelector(`.container${i} .img img`).setAttribute("src", data[i-1].img)

        //     document.querySelector(`.container${i} .date`).textContent = data[i-1].date
//         }
//     })













































