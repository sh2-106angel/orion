document.getElementById("postComment").addEventListener("click", function () {
    let name = document.getElementById("name").value.trim();
    let comment = document.getElementById("comment").value.trim();
    let commentSection = document.getElementById("commentsSection");

    if (name === "" || comment === "") {
        alert("Please enter both your name and comment.");
        return;
    }

    // Create comment elements
    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comment-box");
    
    let nameTag = document.createElement("strong");
    nameTag.textContent = name;
    
    let commentText = document.createElement("p");
    commentText.textContent = comment;

    commentDiv.appendChild(nameTag);
    commentDiv.appendChild(commentText);
    
    // Add new comment to the comment section
    commentSection.appendChild(commentDiv);

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
});
