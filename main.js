document.addEventListener('DOMContentLoaded', function () {
    // Get the post-it element
    var postIt = document.querySelector('.post-it');

    postIt.style.animation= 'loopAnimation 5s linear'

    // Animate the post-it to slide down
    setTimeout(function () {
        postIt.style.top = '100%'; // Adjust the final position as needed
    }, 1000); // Adjust the delay time (in milliseconds) as needed
});
