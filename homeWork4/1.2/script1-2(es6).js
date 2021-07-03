"use strict";

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

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
attachedPostEdit.edit('editText')
console.log(attachedPostEdit);
