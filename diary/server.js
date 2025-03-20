const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Path to comments.json
const commentsFile = path.join(__dirname, "comments.json");

// Load comments from file
function loadComments() {
    if (!fs.existsSync(commentsFile)) {
        fs.writeFileSync(commentsFile, JSON.stringify([]));
    }
    return JSON.parse(fs.readFileSync(commentsFile));
}

// Save comments to file
function saveComments(comments) {
    fs.writeFileSync(commentsFile, JSON.stringify(comments, null, 2));
}

// API endpoint to get comments
app.get("/comments", (req, res) => {
    res.json(loadComments());
});

// API endpoint to post a comment
app.post("/comments", (req, res) => {
    const { name, comment } = req.body;
    if (!name || !comment) {
        return res.status(400).json({ error: "Both name and comment are required" });
    }

    const comments = loadComments();
    const newComment = { name, comment, timestamp: new Date().toISOString() };

    comments.push(newComment);
    saveComments(comments);

    res.json(newComment);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
