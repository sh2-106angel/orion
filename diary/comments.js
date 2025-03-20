document.getElementById("postComment").addEventListener("click", function (event) {
    event.preventDefault();  // Prevent page reload

    let name = document.getElementById("name").value.trim();
    let comment = document.getElementById("comment").value.trim();
    let commentSection = document.getElementById("commentsSection");

    if (name === "" || comment === "") {
        alert("Please enter both your name and comment.");
        return;
    }

    let newComment = { name, comment };
    
    // Get existing comments from localStorage
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    
    // Add new comment to the list
    comments.push(newComment);
    
    // Save updated comments list back to localStorage
    localStorage.setItem("comments", JSON.stringify(comments));
    
    // Add comment to page without refreshing
    addCommentToPage(newComment);

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
});

// Function to load and display comments from localStorage on page load
function loadComments() {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.forEach(addCommentToPage);
}

// Function to add a comment to the page
function addCommentToPage(comment) {
    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comment-box");

    let nameTag = document.createElement("strong");
    nameTag.textContent = comment.name;

    let commentText = document.createElement("p");
    commentText.textContent = comment.comment;

    commentDiv.appendChild(nameTag);
    commentDiv.appendChild(commentText);

    document.getElementById("commentsSection").appendChild(commentDiv);
}

// Load stored comments when the page loads
window.onload = loadComments;
