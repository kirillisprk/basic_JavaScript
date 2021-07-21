"use strict";

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
};

let authorContent = 'author';
let textContent = 'text';
let dataContent = new Date();

const post1 = new Post(authorContent, textContent, dataContent);
console.log(post1);

const postEdit = new Post(authorContent, textContent, dataContent);
postEdit.edit('editText');
console.log(postEdit);

let attachedAuthor1Content = 'attachedAuthor';
let attachedTextContent = 'attachedText';
let attachedDataContent = new Date();

const attachedPost1 = new AttachedPost(attachedAuthor1Content, attachedTextContent, attachedDataContent);
console.log(attachedPost1);

const attachedPostEdit = new AttachedPost(attachedAuthor1Content, attachedTextContent, attachedDataContent);
attachedPostEdit.makeTextHighlighted();
attachedPostEdit.edit("editText");
console.log(attachedPostEdit);
