// main.js

// Function to handle clicking on "Book Now" buttons
function redirectToBooking() {
  window.location.href = "reservation.html";
}


// Function to handle hovering over images
function handleImageHover() {
  const images = document.querySelectorAll('.fotot img, .categories img');
  images.forEach(image => {
    image.addEventListener('mouseover', () => {
      image.style.opacity = '0.7';
    });
    image.addEventListener('mouseout', () => {
      image.style.opacity = '1';
    });
  });
}

// Function to handle hovering over captions
function handleCaptionHover() {
  const captions = document.querySelectorAll('.caption');
  captions.forEach(caption => {
    caption.addEventListener('mouseover', () => {
      caption.style.opacity = '0.7';
      caption.style.fontWeight = 'bold';
    });
    caption.addEventListener('mouseout', () => {
      caption.style.opacity = '1';
      caption.style.fontWeight = 'normal';
    });
  });
}

// Function to handle booking buttons
function handleBookingButtons() {
  const bookingButtons = document.querySelectorAll('.book-button');
  bookingButtons.forEach(button => {
    button.addEventListener('click', () => {
      redirectToBooking();
    });
  });
}

// Call the functions to initialize the event listeners
window.onload = function() {
  handleImageHover();
  handleCaptionHover();
  handleBookingButtons();
};



// the code for acai bowls snack
// main.js

// Function to handle hovering over images
function handleImageHover() {
  const images = document.querySelectorAll('.categories img');
  images.forEach(image => {
    image.addEventListener('mouseover', () => {
      image.style.opacity = '0.7';
    });
    image.addEventListener('mouseout', () => {
      image.style.opacity = '1';
    });
  });
}

// Function to handle hovering over captions
function handleCaptionHover() {
  const captions = document.querySelectorAll('.caption');
  captions.forEach(caption => {
    caption.addEventListener('mouseover', () => {
      caption.style.opacity = '0.7';
      caption.style.fontWeight = 'bold';
    });
    caption.addEventListener('mouseout', () => {
      caption.style.opacity = '1';
      caption.style.fontWeight = 'normal';
    });

    // Add click event listener to the caption
    caption.addEventListener('click', () => {
      window.location.href = 'bowls.html'; // Change 'your_destination_page.html' to the desired destination page URL
    });
  });
}


document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("reservation-form");
  const button = document.getElementById("book-button");
  const confirmationMessage = document.getElementById("confirmation-message");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Simulate form submission and display confirmation message
    confirmationMessage.innerText = "The table has been booked!";
  });
});
// Function to handle booking buttons
function handleBookingButtons() {
  const bookingButtons = document.querySelectorAll('.book-button');
  bookingButtons.forEach(button => {
    button.addEventListener('click', () => {
      redirectToBooking(button.id); // Pass the id of the clicked button to the redirectToBooking function
    });
  });
}


document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("cooking-class-form");
  const button = document.getElementById("book-class-button");
  const confirmationMessage = document.getElementById("class-confirmation-message");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Simulate form submission and display confirmation message
    confirmationMessage.innerText = "Your booking for the pasta cooking class has been confirmed!";
  });
});





