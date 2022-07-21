// $(function () {
//     for (let i = 1; i <= 9; i++) {
//         var $cards = $(".cards")
        
//         $.ajax({
//             type: 'GET',
//             url: 'https://raw.githubusercontent.com/gaurav-2-0-0-2/Blog-template/main/cards.json',
//             success: function (data) {
//                 $.each($cards, function (i, card) {
//                     $cards.append(`<div class="card">
    
//                     <img class="card-img" src="images/one.jpg" alt="Avatar">
//                     <div class="date-tag">
//                         <h6>24 MAY</h6>
//                     </div>
//                     <div class="container-1_1">
                    
//                         <a href="#"><i class="fa-solid fa-user user-icon"></i></a>
//                         <h6 class="user-icon-h6">By: Admin</h6>
//                         <a href="#"><i class="fa-solid fa-heart heart-icon"></i></a>
//                         <h6 class="heart-icon-h6">15</h6>
        
//                         <a href="#"><i class="fa-solid fa-comment comment-icon"></i></a>
//                         <h6 class="comment-icon-h6">25</h6>
//                         <h6 class="heart-icon-h6">15</h6>
        
//                         <h4>Lorem ipsum dolor sit amet</h4>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipicing </p>
//                         <p>elit. Nullam feugiat dignissim metus, id vestibulum</p>
//                         <p>tellus Cras ante commodo.</p>
        
//                         <a href="#" class="read-more">Read More...</a>
//                     </div>
//                 </div>`
                
                
            
//                 )
        
//                })
//             }
//         })
        
//     }
    
    
    




fetch('https://raw.githubusercontent.com/gaurav-2-0-0-2/Blog-template/main/cards.json')
    .then(result => result.json())
    .then((output) => {
        console.log('Output: ', output);
        
}).catch(err => console.error(err));









































    
    
    
    
    
  








































































// for(let i=1; i<=9; i++){
//     let cards = document.querySelector(".cards");

//     let container = document.createElement('div')
//     container.classList.add('container', `container${i}`)
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













































