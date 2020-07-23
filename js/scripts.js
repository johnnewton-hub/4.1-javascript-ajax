/**
 * AJAX Examples
 */

// Retrieving an external resource (live JSON data.)
fetch( "http://api.open-notify.org/astros.json" ) // Sends the request...
  // We can use .then() to parse the response.
  .then( response => {
    return response.json()
  } )
  // Data has been formatted, let's have a look inside...
  .then( data => {
    console.log( data )
  } )
