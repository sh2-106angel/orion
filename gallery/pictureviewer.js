

const titleBar = document.querySelector('.title-bar-text');
const dropdown = document.querySelector('#dropdown');
const image = document.querySelector('#image');
const video = document.querySelector('#video');
const videoSource = document.querySelector('#video-source');
const description = document.querySelector('#description');

const fileDescriptions = {
    "Beautiful-Clouds.JPG" : "I had never seen clouds this pretty or defined before in my life. I was crossing the road, making my way to my usual cafe to study and thankfully, I remembered to look at the sky. I look at the sky often now, unlike before",
    "Aquarium.MP4" : "Please ignore the noise in the background.. This was my second visit to the Science Centre. The first time I visited was with my childhood best friend, and I remember that was really fun. It was pretty disappointing because there wasn't much to see now. Everything changes after all",
    "Keychain.JPG": "My keychain on my bag that I carry with me everywhere! The bag is super beaten up by now... the keychain is the cat from Kiki's Delivery Service! To be honest, I haven't watched that movie.. I remember starting it a long time ago and I'm not sure why I didn't finish it. Nothing from Studio Ghibli can be bad though. My first Ghibli film (and probably first film ever?) was Spirited Away. I was around toddler age, watching it on the TV screen",
    "Cape-Leadwort.JPG": "The day I discovered my new favourite flower. By the way, my favourite colour has always been blue!",
    "Feral-Kitty.JPG": "I see him getting fed by an elderly woman sometimes. I wonder if he lets her pet him. It's rare to see a feral cat in a neighbourhood",
    "Me-Carrying-Flowers.JPG": "Right outside the cafe I always studied at, there is a little flower stand, and I liked to pick out floral arrangements for my room. I keep the wilted flowers too, in a cup on my bookshelf. I'd feel bad if I threw them away because they were no longer beautiful or smelled nice.",
    };


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
    

        if (['bmp', 'jpg', 'jpeg', 'png'].includes(fileExtension)) {
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
