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

/**
 * Axios AJAX Library Example
 */
// @link https://github.com/axios/axios
// axios; // If we don't get an error on this line, Axios is installed and working!

// Location for our request...
axios.get( "http://api.open-notify.org/iss-now.json" ) // Type of request is GET.
  // Handle response...
  .then( response => {
    // Test test test! Are we getting anything?
    console.log( response ); // Yep! Looks like our info we want is in response.data
    // Let's grab that space station's position details!
    const pos = response.data.iss_position; // Object containing latitude and longitude properties.
    /**
     * <DL>
     *   <DT>Title of Item(s)</DT>
     *   <DD>Item Contents</DD>
     *   <DT>Title of Item(s)</DT>
     *   <DD>Item Contents</DD>
     *   <DD>Item Contents</DD>
     * </DL>
     */
    const posDL = document.createElement( "DL" );
    const latDT = document.createElement( "DT" );
    latDT.textContent = "Latitude";
    const latDD = document.createElement( "DD" );
    latDD.textContent = pos.latitude; // Get the value from our latitude property (see response.)
    const longDT = document.createElement( "DT" );
    longDT.textContent = "Longitude";
    const longDD = document.createElement( "DD" );
    longDD.textContent = pos.longitude; // Get the value from our longitude property (see response.)
    // Append all the things to <DL>!
    posDL.appendChild( latDT );
    posDL.appendChild( latDD );
    posDL.appendChild( longDT );
    posDL.appendChild( longDD );
    // Put this into the page (<body>)!
    document.body.appendChild( posDL );
  } )

