$(document).ready(function () {
    var container = $('.livestreamDetails-center');
    var htmlContent = '';
    var data = [
        {
            livestreamName: 'UI Design Livestreams',
            content: 'My Design Process\n' +
                'Colors, Grid, Adaptive Layout\n' +
                'UI Patterns, Visual Hierarchy and Iterations\n' +
                'Prototyping, Animation and Developer Handoff\n' +
                'UI Design for developers and Design System\n' +
                'iOS 14 Design\n' +
                'UI Design new techniques\n' +
                'Review UIs and Design Techniques in Figma\n' +
                'Prototyping UI, Shapes and Animations in SwiftUI\n' +
                'Code Onboarding UI and Animation\n' +
                'How we built our app\n' +
                'Building your first iOS app\n' +
                'SF Symbols 3, Canvas Animation\n' +
                'Bottom Sheet UI with Gestures'
        },
        {
            livestreamName: 'React Livestreams',
            content: 'Prototyping from Figma\n' +
                'Peek Scrolling Concept using GeometryReader\n' +
                'Design and code for iOS, iPadOS, Big Sur\n' +
                'Lazy Grid and Matched Geometry Effect\n' +
                'Design and code the App Store Today\n' +
                'Design, code, analyze the ClubHouse app bottom card UI\n' +
                'Gradients and Glassmorphism in SwiftUI\n' +
                'WWDC 2021 Student Challenge - How to create a SwiftUI Project for Swift Playgrounds\n' +
                'Prototyping UI, Shapes and Animations\n' +
                'Code Onboarding UI and Animation\n' +
                'How we built ourapp\n' +
                'Building your first iOS app\n' +
                'SF Symbols 3, Canvas \nAnimation\n' +
                'Bottom Sheet UI with Gestures'
        },
        {
            livestreamName: 'SwiftUI Livestreams',
            content: 'How we built our website with React Hooks\n' +
                'Text Animation with React and CSS'
        },
        {
            livestreamName: 'Design Founder Livestreams',
            content: 'My journey as a design founder'
        }
    ];

    data.forEach(function (item, index) {
        htmlContent += `<div class="livestream_middle_frame">
                            <div class="livestream_frame_image">
                                <div class="livestream_frame_block">
                                    <img src="../images/livestream_frame_image_${index + 1}.png" alt="Image">    
                                    <h2>${item.livestreamName}</h2>
                                    </img>
                                </div>
                            </div>
                            <div class="livestream_frame_content">
                                <div class="livestream_small-frame">
                                    <ol class="livestream_frame_list-style">
                                        ${parseContent(item.content)}
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <br><br>`;
    });



    function parseContent(content) {
        // Split the content by newline characters
        var lines = content.split('\n');
        // Create list items from the lines
        var listItems = lines.map(function (line) {
            return `<li>${line}</li>`;
        });
        // Join the list items into a single string
        return listItems.join('');
    }

    container.append(htmlContent);
});

//========================================================================================
document.addEventListener("DOMContentLoaded", function () {
    const livestreamModalTrigger = document.getElementById("livestreamModalTrigger");
    const confirmationModal = document.getElementById("confirmationModal");

    livestreamModalTrigger.addEventListener("click", function () {
        confirmationModal.style.display = "block";
    });
});

function navigateToDetailPage() {
    // Redirect to the detail page or perform any desired action
    window.location.href = "detail-page.html";
}

function closeModal() {
    const confirmationModal = document.getElementById("confirmationModal");
    confirmationModal.style.display = "none";
}












//=====================================================================================================================


// // Define livestream data
// const livestreamsData = [
//     {
//         imageSrc: "../images/livestream_frame_image_1.png",
//         title: "UI Design Livestreams",
//         topics: [
//             "My Design Process",
//             "Colors, Grid, Adaptive Layout",
//             "UI Patterns, Visual Hierarchy and Iterations",
//             "Prototyping, Animation and Developer Handoff",
//             "UI Design for developers and Design System",
//             "iOS 14 Design",
//             "UI Design new techniques",
//             "Review UIs and Design Techniques in Figma",
//             "Prototyping UI, Shapes and Animations in SwiftUI",
//             "Code Onboarding UI and Animation",
//             "How we built our iOS app",
//             "Building your first iOS app",
//             "SF Symbols 3, Canvas<br> Animation",
//             "Bottom Sheet UI with Gestures",

//         ]
//     },
//     {
//         imageSrc: "../images/livestream_frame_image_2.png",
//         title: "React Livestreams",
//         topics: [
//             "Prototyping from Figma",
//             "Peek Scrolling Concept using GeometryReader",
//             "Design and code for iOS, iPadOS, Big Sur",
//             "Lazy Grid and Matched Geometry Effect",
//             "Design and code the App<br>Store Today",
//             "Design, code, analyze the ClubHouse app bottom card UI",
//             "Gradients and Glassmorphism in SwiftUI",
//             "WWDC 2021 Student Challenge - How to create a SwiftUI Project for Swift Playgrounds",
//             "Prototyping UI, Shapes and Animations in SwiftUI",
//             "Code Onboarding UI and Animation",
//             "How we built our iOS app",
//             "Building your first iOS app",
//             "SF Symbols 3, Canvas < br > Animation",
//             "Bottom Sheet UI with Gestures",

//         ]
//     },
//     {
//         imageSrc: "../images/livestream_frame_image_3.png",
//         title: "SwiftUI Livestreams",
//         topics: [
//             "How we built our website with React Hooks",
//             "Text Animation with React and CSS",

//         ]
//     },
//     {
//         imageSrc: "../images/livestream_frame_image_4.png",
//         title: "Design Founder Livestreams",
//         topics: [
//             "My journey as a design founder",

//         ]
//     },
// ];

// // Function to generate livestream HTML
// function generateLivestreamHTML(livestream) {
//     return `
//         <div class="livestream_middle_frame">
//             <div class="livestream_frame_image">
//                 <div class="livestream_frame_block">
//                     <img src="${livestream.imageSrc}" alt="Image">
//                     <h2>${livestream.title}</h2>
//                 </div>
//             </div>
//             <div class="livestream_frame_content">
//                 <div class="livestream_small-frame">
//                     <ol class="livestream_frame_list-style">
//                         ${livestream.topics.map(topic => `<li>${topic}</li>`).join('')}
//                     </ol>
//                 </div>
//             </div>
//         </div>
//         <br><br>
//     `;
// }

// // Render livestreams
// const livestreamsContainer = document.body;

// livestreamsData.forEach(livestream => {
//     const livestreamHTML = generateLivestreamHTML(livestream);
//     livestreamsContainer.innerHTML += livestreamHTML;
// });

