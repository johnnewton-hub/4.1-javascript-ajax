/**
 * AJAX Examples
 */

// Retrieving an external resource (live JSON data.)
fetch( "http://api.open-notify.org/astros.json" ) // Sends the request...
  // We can use .then() to parse the response.
  .then( response => {
    if ( response.status >= 200 && response.status <= 299 )
    { // 200 range status/response codes are SUCCESSES!
      return response.json(); // Convert to JSON, and send to next step (.then())
    }
    else
    { // If it is another range, we are unsuccessful...
      throw Error( response.statusText ); // Display a formal error message reporting the concern.
    }
  } )
  // Data has been formatted, let's have a look inside...
  .then( data => {
    // Output data to console for testing.
    console.log( data );
    // Prepare for HTML list.
    const peopleUL = document.createElement( "UL" );
    // Let's grab those people!
    const people = data.people; // This is an array of people...
    // Let's loop through them!
    for ( const person of people )
    { // Prepare an LI for this person.
      const personLI = document.createElement( "LI" );
      // Add some text content (using template literal to inject our values.)
      personLI.textContent = `${person.name} is currently aboard ${person.craft}.`;
      // Add this <li> to our <ul>.
      peopleUL.appendChild( personLI );
    }
    // Add our <ul> to the <body> so we can see it in the browser!
    document.body.appendChild( peopleUL );
  } );
