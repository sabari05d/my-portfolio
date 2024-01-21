// // Change theme function 
// function toggleTheme() {
//     const body = document.body;
//     body.classList.toggle('dark-mode');    
//     // Save the user's preferred theme to localStorage
//     if (body.classList.contains('dark-mode')) {
//       localStorage.setItem('theme', 'dark');
//     } else {
//       localStorage.setItem('theme', 'light');
//     }
// }
// //Check if a preferred theme is saved in localStorage and apply it
// const savedTheme = localStorage.getItem('theme');
// if (savedTheme === 'dark') {
//     document.body.classList.add('dark-mode');
    
// }
//============================================================

// const contactForm = document.getElementById('contactForm');

// contactForm.addEventListener('submit', function(event) {
//   event.preventDefault();

//   // Fetching form values
//   const firstName = document.getElementById('firstName').value.trim();
//   const lastName = document.getElementById('lastName').value.trim();
//   const email = document.getElementById('email').value.trim();
//   const phone = document.getElementById('phone').value.trim();
//   const inquiry = document.getElementById('inquiry').value.trim();

//   // Check if fields are empty
//   if (!firstName || !lastName || !email || !phone || !inquiry) {
//     alert('Please fill in all fields.');
//     return; // Prevent form submission if fields are empty
//   }

//   // Check if inquiry length is less than 10 characters
//   if (inquiry.length < 10) {
//     alert('Please provide a more detailed inquiry (at least 10 characters).');
//     return; // Prevent form submission if inquiry length is too short
//   }

//   // Do something with the form data (you can replace this with your functionality)
//   console.log('Submitted Data:');
//   console.log('First Name:', firstName);
//   console.log('Last Name:', lastName);
//   console.log('Email:', email);
//   console.log('Phone Number:', phone);
//   console.log('Inquiry:', inquiry);

//   // You can add further functionality here like sending the data to a server, etc.
// });
