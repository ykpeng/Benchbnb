const React = require('react');
const ReactDOM = require('react-dom');

var MyComponent = React.createClass({
  render() {
    return(
      <div>Inside component</div>
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<MyComponent />, document.getElementById('content'));
});


// $.ajax({
//   url: "api/benches",
//   type: "POST",
//   data: {bench:{description: "puppy bench", lat: 33.33333, lng: -122.22222}},
//   dataType: "json",
//   success: function(response){
//     console.log(response);
//   }
// })
