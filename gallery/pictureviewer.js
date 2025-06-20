

const titleBar = document.querySelector('.title-bar-text');
const dropdown = document.querySelector('#dropdown');
const image = document.querySelector('#image');
const video = document.querySelector('#video');
const videoSource = document.querySelector('#video-source');
const description = document.querySelector('#description');

const fileDescriptions = {
    "Beautiful-Clouds.JPG" : "I had never seen clouds this pretty or defined before in my life. I was crossing the road, making my way to my usual cafe to study and thankfully, I remembered to look at the sky. I look at the sky often now, unlike before",
    "Aquarium.MP4" : "Please ignore the noise in the background.. This was my second visit to the Science Centre after several years. The first time I visited was with someone irreplaceable. There was so much to see back then, but everything was replaced in the end.",
    "Keychain.JPG": "My keychain on my bag that I carry with me everywhere! The cat from Kiki's Delivery Service! My first Ghibli film - and first film ever - was Spirited Away.",
    "Cape-Leadwort.JPG": "The day I discovered my new favourite flower. By the way, my favourite colour has always been blue!",
    "Feral-Kitty.JPG": "I see him getting fed by an elderly woman sometimes. I wonder if he lets her pet him. It's rare to see a feral cat in a neighbourhood. One time, I witnessed a cat fight between him and the tabby cat, and I saw his white fur flying in the air in the midst of the brawl. Cats are terrifying sometimes.. ",
    "Me-Carrying-Flowers.JPG": "Right outside the cafe I studied at, there was a little flower stand, and I liked to handpick floral arrangements for my room. It was really fun putting them together. I still keep the wilted flowers, in a cup on my bookshelf. I think I will throw them now.",
    "Stamp-Collection.AVIF": "Their temporary new home is an old puzzle box.",
    "Favourite-Stamp.AVIF": "'Utazás a holdba és a hold körül': Journey to and around the Moon."};


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
