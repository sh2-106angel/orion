
// Function 1. Changing title bar when different item is selected in dropdown menu
const titleBar = document.querySelector('.title-bar-text');
const dropdown = document.querySelector('#dropdown');
const image = document.querySelector('#image');
const video = document.querySelector('#video');
const videoSource = document.querySelector('#video-source');
// Set initial title bar text (with default selected option)
const defaultFilePath = dropdown.value;
const defaultFileName = defaultFilePath.split('\\').pop();
titleBar.textContent = "Picture Viewer - Select File to See or Hear - " + defaultFileName;

// Event listener for change in selected item of dropdown menu
dropdown.addEventListener('change', (event) => {
// Extract the file name (last part of the path)
        const filePath = event.target.value;
        const fileName = filePath.split('\\').pop();

        // Update the title bar text
        titleBar.textContent = "Picture Viewer - Select File to See or Hear - " + fileName;
        const fileExtension = filePath.split('.').pop().toLowerCase();

        if (['bmp', 'jpg', 'jpeg', 'png'].includes(fileExtension)) {
        // If it's an image file
        image.style.display = 'block'; // Show image
        video.style.display = 'none';  // Hide video
        image.src = filePath;          // Update image source
        } else if (['mp4', 'mov', 'avi', 'mkv'].includes(fileExtension)) {
        // If it's a video file
        video.style.display = 'block';  // Show video
        image.style.display = 'none';   // Hide image
        videoSource.src = filePath;     // Update video source
        video.load();                   // Reload the video to apply the new source
        } else {
        // In case of unsupported file types, hide both
        image.style.display = 'none';
        video.style.display = 'none';
    }
});

console.log()
debugger;
