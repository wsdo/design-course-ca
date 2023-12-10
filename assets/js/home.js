function titleHover() {
    $(document).ready(function () {
        $("h1").hover(function () {
            $(this).css("color", "green");
        }, function () {
            $(this).css("color", "aliceblue");
        });
    });
}

// price.plan selection between monthly and annual
function priceSelection() {
    // Initial price values
    let price1 = 20;
    let price2 = 25;

    // Click event for the Monthly button
    $('#monthlyBtn').click(function () {
        updatePrice1(20);
        updatePrice2(25);
    });

    // Click event for the Annual button
    $('#annualBtn').click(function () {
        updatePrice1(18);
        updatePrice2(23);
    });

    // Function to update the displayed price
    function updatePrice1(newPrice) {
        price1 = newPrice;
        $('#price1').text('$' + price1);
    }

    function updatePrice2(newPrice) {
        price2 = newPrice;
        $('#price2').text('$' + price2);
    }
}

// ##################################################################
//  index.browseCourse
function browseCourses() {
    $(document).ready(function () {
        // When the button with id "redirectButton" is clicked
        $("#browseCourses").click(function () {
            // Redirect to courses page
            window.location.href = './pages/course-detail.html';
        });
    });
}


//  index.onclic go to setting
function goToSetting() {
    $(document).ready(function () {
        // When the button with id "getProAccess" is clicked
        $("#getProAccess").click(function () {
            // Redirect to courses page
            window.location.href = './pages/setting.html';
        });
    });
}


//  index.onclic go to couses
function goToCourse() {
    $(document).ready(function () {
        // When the button with id "redirectButton" is clicked
        $("#moreTutorials").click(function () {
            // Redirect to courses page
            window.location.href = './pages/course-detail.html';
        });
    });
}



//  index.onclic go to appstore
function goToAppStore() {
    $(document).ready(function () {
        // When the button with id "appStore" is clicked
        $("#appStore").click(function () {
            // Redirect to courses page
            window.location.href = 'https://www.apple.com/ie/app-store/';
        });
    });
}





// index.createAccount
function CreateAccount() {
    $(document).ready(function () {
        // When the button with id "redirectButton" is clicked
        $("#certs").click(function () {
            // Redirect to courses page
            window.location.href = './pages/setting.html';
        });
    });
}

// index setNavbarFooter
// function setNavbarAndFooter(){
//     // Load navbar and footer using jQuery AJAX
//     $(function() {
//     $('#navbar').load('../navbar/navbar.html');
//     $('#footer').load('../navbar/footer.html');
//     });
// }



















// generate three containers that can use for price display.
function generateContainer() {
    $(document).ready(function () {
        var container = $('.row.align-items-start.course-list');
        var htmlContent = '';
        var data = [
            {
                name: 'c1',
                content: 'jialing'
            },
            {
                name: 'c2',
                content: 'wancheng'
            },
            {
                name: 'c3',
                content: 'jiage'
            },
            {
                name: 'c4',
                content: 'stark'
            }

        ]

        data.forEach(function (item, index) {  // Added index parameter here
            htmlContent += '<div class="col' + (index === 0 ? ' courseItem' : '') + '" style="min-width: 200px;height: 360px;padding: 20px;">' +
                'One of three columns ' + item.name + ' ====== ' + item.content + // Fixed concatenation here
                '<div style="margin-right:' + (index === 0 ? '10px;' : '0;') + 'border: 1px solid #000; height: 100px;' +
                'background: linear-gradient(209.21deg, rgb(79, 73, 139) 13.57%, rgb(24, 16, 45) 98.38%);">' +
                '</div></div>';
        });

        container.append(htmlContent);
    });


}




//*********************************************************home*****************
// show different courses when different button clicked
// function showCourses() {
//     // Function to change the displayed image
//     function displayImage(imageSource1, imageSource2, imageSource3, imageSource4, imageSource5, imageSource6) {
//         var imageContainer = document.getElementById('image-container-1');
//         imageContainer.innerHTML = '<img src="' + imageSource1 + '" alt="Displayed Image 1">' +
//             '<img src="' + imageSource2 + '" alt="Displayed Image 2">' +
//             '<img src="' + imageSource3 + '" alt="Displayed Image 3">' +
//             '<img src="' + imageSource4 + '" alt="Displayed Image 4">' +
//             '<img src="' + imageSource5 + '" alt="Displayed Image 5">' +
//             '<img src="' + imageSource6 + '" alt="Displayed Image 6">';
//     }
//
//     // Button click event listeners
//     document.getElementById('button1').addEventListener('click', function () {
//         displayImage('/images/icons/pay.png'); // Replace with the actual path to your image
//     });
//
//     document.getElementById('button2').addEventListener('click', function () {
//         displayImage('path/to/image2.jpg'); // Replace with the actual path to your image
//     });
//
//     document.getElementById('button3').addEventListener('click', function () {
//         displayImage('path/to/image3.jpg'); // Replace with the actual path to your image
//     });
// }



function filterCourses(category) {
    // Get all course elements
    var courses = document.querySelectorAll('#index-courses-list a');

    // Loop through each course and toggle visibility based on the selected category
    courses.forEach(function(course) {
        var courseCategory = course.getAttribute('data-category');

        if (category === 'all' || category === courseCategory) {
            course.style.display = 'inline-block'; // Show the course
        } else {
            course.style.display = 'none'; // Hide the course
        }
    });
}






