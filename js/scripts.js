/**
 * AJAX Examples
 */

// Retrieving an external resource (text file.)
fetch( "https://www.w3schools.com/xml/ajax_info.txt" ) // Sends the request...
  // We can use .then() to parse the response.
  .then( response => {
    console.log( response );
  } )

// Retrieving an external resource (live JSON data.)
fetch( "http://api.open-notify.org/astros.json" ) // Sends the request...
  // We can use .then() to parse the response.
  .then( response => {
    console.log( response );
  } )