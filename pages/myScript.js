function titleHover(){
    $(document).ready(function() {
        $("h1").hover(function() {
            $(this).css("color", "green");
        }, function() {
            $(this).css("color", "aliceblue");
        });
    });
}

// plan selection between monthly and annual
function priceSelection() {
    // Initial price values
    let price1 = 20;
    let price2 = 25;

    // Click event for the Monthly button
    $('#monthlyBtn').click(function() {
        updatePrice1(20);
        updatePrice2(25);
    });

    // Click event for the Annual button
    $('#annualBtn').click(function() {
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

//























// generate three containers that can use for price display.
function generateContainer(){
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
function showCourses(){
        // Function to change the displayed image
        function displayImage(imageSource) {
        var imageContainer = document.getElementById('image-container-1');
        imageContainer.innerHTML = '<img src="' + imageSource + '" alt="Displayed Image">';
    }

        // Button click event listeners
        document.getElementById('button1').addEventListener('click', function() {
        displayImage('/images/icons/pay.png'); // Replace with the actual path to your image
    });

        document.getElementById('button2').addEventListener('click', function() {
        displayImage('path/to/image2.jpg'); // Replace with the actual path to your image
    });

        document.getElementById('button3').addEventListener('click', function() {
        displayImage('path/to/image3.jpg'); // Replace with the actual path to your image
    });
}