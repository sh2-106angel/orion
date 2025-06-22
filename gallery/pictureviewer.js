

const titleBar = document.querySelector('.title-bar-text');
const dropdown = document.querySelector('#dropdown');
const image = document.querySelector('#image');
const video = document.querySelector('#video');
const videoSource = document.querySelector('#video-source');
const description = document.querySelector('#description');

const fileDescriptions = {
    "CLOUDS.JPG" : "I had never seen clouds this pretty or defined before in my life. I was crossing the road, making my way to my usual cafe to study and thankfully, I remembered to look at the sky. I look at the sky so much more now than before. 11 March 2025",
    "AQUARIUM.MP4" : "This was my second visit to this place after several years. The first time I visited was with someone irreplaceable. There was so much to see back then, but everything was replaced in the end. 8 May 2024",
    "CAPE-LEADWORT.JPG": "The day I discovered my new favourite flower. My favourite colour has always been blue.",
    "OLD-STAMPS.AVIF": "Their temporary new home is an old puzzle box.",
    "FAVOURITE-STAMP.AVIF": "Translated from Hungarian: 'Journey to and around the Moon.'",
    "LILYPADS.AVIF": "21 June 2025",
    "SWAN-LAKE.AVIF": "21 June 2025",
    "PAINTING.AVIF": "21 June 2025"};


// Function: Changing title bar when different item is selected in dropdown menu
// Set initial title bar text (with default selected option)
const defaultFilePath = dropdown.value;
const defaultFileName = defaultFilePath.split('\\').pop();
titleBar.textContent = "Picture Viewer - Select File to See or Hear - " + defaultFileName;

description.textContent = fileDescriptions[defaultFileName] 



// Event listener for dropdown change
dropdown.addEventListener('change', (event) => {
// Extract the file name (last part of the path)
        const filePath = event.target.value;
        const fileName = filePath.split('\\').pop();

        // Update the title bar text
        titleBar.textContent = "Picture Viewer - Select File to See or Hear - " + fileName;

        // Check if selected file is an image or video
        const fileExtension = filePath.split('.').pop().toLowerCase();
    

        if (['bmp', 'jpg', 'jpeg', 'png', 'avif'].includes(fileExtension)) {
        // It's an image file
        image.style.display = 'block'; // Show image
        video.style.display = 'none';  // Hide video
        image.src = filePath;          // Update image source
        description.textContent = fileDescriptions[fileName]


        

        } else if (['mp4', 'mov', 'avi', 'mkv'].includes(fileExtension)) {
        // It's a video file
        video.style.display = 'block';  // Show video
        image.style.display = 'none';   // Hide image
        videoSource.src = filePath;     // Update video source
        video.load();                   // Reload the video to apply the new source
        description.textContent = fileDescriptions[fileName]
    
        } else {
        // In case of unsupported file types, hide both
        image.style.display = 'none';
        video.style.display = 'none';
    }

    
});



console.log()
debugger;
