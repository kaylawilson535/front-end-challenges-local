const DOMReviewerImage = document.getElementById('reviewer-img');
const DOMReview = document.getElementById('review-text');
const DOMReviewerName = document.getElementById('name');
const DOMReviewerTitle = document.getElementById('title');

const forwardBtn = document.getElementById('forward');
const backwardBtn = document.getElementById('backward');

let reviews = [
    '\“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. \"'
    ,
    '\“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. \”'
];
let reviewers = ['Tanya Sinclair', 'John Tarkpor'];
let reviewerTitles = ['UX Engineer', 'Junior Front-end Developer'];
let imageSrc = ['resources/images/image-tanya.jpg', 'resources/images/image-john.jpg']

let reviewIndex = 0;

forwardBtn.addEventListener("click", function(){
   // console.log('forward');
    changeIndex(1);
});

backwardBtn.addEventListener("click", function(){
   // console.log('backward');
    changeIndex(-1);
});

function changeIndex(increment){
    reviewIndex = (reviewIndex + increment) % reviewers.length;
    console.log(reviewIndex);

    DOMReview.innerHTML= reviews[reviewIndex];
    DOMReviewerName.innerHTML = reviewers[reviewIndex];
    DOMReviewerTitle.innerHTML = reviewerTitles[reviewIndex];
    DOMReviewerImage.src = imageSrc[reviewIndex];
}

