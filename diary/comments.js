document.addEventListener("DOMContentLoaded", loadComments);

document.getElementById("postComment").addEventListener("click", function () {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let comment = document.getElementById("comment").value.trim();
    
    if (name === "" || comment === "") {
        alert("Please enter both your name and comment.");
        return;
    }

    fetch("http://localhost:3000/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, comment }),
    })
    .then(response => response.json())
    .then(data => {
        addCommentToPage(data);
        document.getElementById("name").value = "";
        document.getElementById("comment").value = "";
    })
    .catch(error => console.error("Error:", error));
});

// Load existing comments on page load
function loadComments() {
    fetch("http://localhost:3000/comments")
        .then(response => response.json())
        .then(comments => {
            comments.forEach(addCommentToPage);
        })
        .catch(error => console.error("Error loading comments:", error));
}

// Append a comment to the page
function addCommentToPage(comment) {
    let commentSection = document.getElementById("commentsSection");
    
    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comment-box");

    let nameTag = document.createElement("strong");
    nameTag.textContent = comment.name;

    let commentText = document.createElement("p");
    commentText.textContent = comment.comment;

    commentDiv.appendChild(nameTag);
    commentDiv.appendChild(commentText);

    commentSection.appendChild(commentDiv);
}
