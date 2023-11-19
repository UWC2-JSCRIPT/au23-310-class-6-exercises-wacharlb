// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

// Access (read) the data-color attribute of the <img>,
// log to the console

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"
$(document).ready(function () {
    // Get the data-color of the <img> element
    const imgElem = $('img').eq(0);
    const dataColor = imgElem.attr("data-color");

    // Add highlight to third <li> element
    const thirdLiElem = $('li').eq(2);
    thirdLiElem.addClass('highlight');

    // Create a new <a> element
    let newAElem = $('<a>')
    newAElem.text('Buy Now!');
    newAElem.attr('id','cta');

    // Append new <a> to last <p> element
    let p = $('p:last');
    p.after(newAElem);

    // Remove the last <p> element
    p.remove();
    console.log(document.body.outerHTML);

    // Add a click listener to the <a> element and update the text when clicked
    newAElem.click(function(e) {
        console.log(e.target);
        console.log(e.target.text);
        e.target.text = "Added to cart"
    });
});