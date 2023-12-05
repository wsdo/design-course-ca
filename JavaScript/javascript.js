//.js for model before turning to another page
var modal = document.getElementById("myLivestreamListModal");
var livestreamFrameBlock1 = document.getElementById("livestream_frame_block_1");
var livestreamFrameBlock2 = document.getElementById("livestream_frame_block_2");
var livestreamFrameBlock3 = document.getElementById("livestream_frame_block_3");
var livestreamFrameBlock4 = document.getElementById("livestream_frame_block_4");
var yesButton = document.getElementById("yesButton");
var noButton = document.getElementById("noButton");

// When Livestream Frame Block 1 is clicked, show the modal
livestreamFrameBlock1.addEventListener("click", function () {
    modal.style.display = "block";
});

// When Livestream Frame Block 2 is clicked, show the modal
livestreamFrameBlock2.addEventListener("click", function () {
    modal.style.display = "block";
});

// When Livestream Frame Block 3 is clicked, show the modal
livestreamFrameBlock3.addEventListener("click", function () {
    modal.style.display = "block";
});

// When Livestream Frame Block 4 is clicked, show the modal
livestreamFrameBlock4.addEventListener("click", function () {
    modal.style.display = "block";
});



// When Yes button is clicked, navigate to page2
yesButton.addEventListener("click", function () {
    window.location.href = "../pages/LivestreamDetails.html";
});

// When No button is clicked, close the modal
noButton.addEventListener("click", function () {
    modal.style.display = "none";
});

// Close the modal if the user clicks outside of it
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
