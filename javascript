// script.js
function reverseContent() {
    // Get all paragraphs on the page
    var paragraphs = document.getElementsByTagName('p');

    // Reverse the text content of each paragraph
    for (var i = 0; i < paragraphs.length; i++) {
        var originalText = paragraphs[i].textContent;
        var reversedText = reverseString(originalText);
        paragraphs[i].textContent = reversedText;
    }
}

function reverseString(str) {
    return str.split('').reverse().join('');
}
