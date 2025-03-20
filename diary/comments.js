    const firebaseConfig = {

        apiKey: "AIzaSyDuKsQqfEYk4V6aH5YovYxzTjrx1Obl8Wk",
      
        authDomain: "orion-ae5fb.firebaseapp.com",
      
        projectId: "orion-ae5fb",
      
        storageBucket: "orion-ae5fb.firebasestorage.app",
      
        messagingSenderId: "772436598653",
      
        appId: "1:772436598653:web:c239f50b3eb77421723614",
      
        measurementId: "G-2NZQ99FZ7K"
      
      };
      
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


// Function to load and display comments from Firestore
document.getElementById("postComment").addEventListener("click", function () {
    let name = document.getElementById("name").value.trim();
    let comment = document.getElementById("comment").value.trim();

    if (name === "" || comment === "") {
        alert("Please enter both your name and comment.");
        return;
    }

    // Save comment to Firestore
    db.collection("comments").add({
        name: name,
        comment: comment,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        document.getElementById("name").value = "";
        document.getElementById("comment").value = "";
    }).catch(error => {
        console.error("Error adding comment: ", error);
    });
});


// Function to add a comment to the page
function loadComments() {
    db.collection("comments").orderBy("timestamp", "desc").onSnapshot(snapshot => {
        let commentsSection = document.getElementById("commentsSection");
        commentsSection.innerHTML = "<p style='text-align:center'>messages</p>";

        snapshot.forEach(doc => {
            let commentData = doc.data();

            let commentDiv = document.createElement("div");
            commentDiv.classList.add("comment-box");

            let nameTag = document.createElement("strong");
            nameTag.textContent = commentData.name;

            let commentText = document.createElement("p");
            commentText.textContent = commentData.comment;

            commentDiv.appendChild(nameTag);
            commentDiv.appendChild(commentText);
            commentsSection.appendChild(commentDiv);
        });
    });
}

// Load comments when the page loads
window.onload = loadComments;

