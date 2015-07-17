### Professional Website

The first project of WDI was to create a professional website using some of the skills we learned.  I chose to design and build a website for a local cycling team and the steps taken to reach the end product are outlined below.

 **Purpose:**<br>
The website will be used to promote Lifeline Racing.  It will provide information about the club, including the mission statement and a brief history of the organization.

**Build:**<br>
The wireframing of the site was conceptualized on mockingbird.  During the creation of the HTML/CSS files, I modified the design as I saw fit, so the end result will vary slightly from the wireframe - overall, it maintains the same flow.  

The website was designed with responsiveness in mind, so there weren't too many breakpoints, but two media queries were added to fulfill the requirements of the project scope.

**DOM Manipulation:**
- Navigation bar - jQuery was used to target specific parts of the DOM for the creation of this part of the website.  The header and main section were split in two containers and an empty CSS container with a fixed position to the top was also created as a placeholder.  This last element was targeted using jQuery and based on a set of conditional statements written in plain javascript, the function would add and remove the invisible container from the DOM thus giving the appearance of having a navigation bar glued to the top of the screen.  The jQuery method that would trigger the event was scroll() which detects any scrolling on the screen and it would be added to the execution context upon triggering the event handler.  As an added bonus, I added a second function with an event handler that would trigger anytime the navigation icons are clicked. It would then use the animate() method of jQuery to swing effect, visually smoothing out the scrolling and enhancing visual appeal and user experience. <br>

- Contact forms - Both jQuery methods and an ajax calls were used to build out this section.  The input from the user is collected within an object in a function and invoked upon an .on('click') event handler targeting the submit form button.  Once the button is clicked, the object with the data is created and another function with the ajax call is invoked.  The ajax call connects to an outside server via an API with the type set to 'POST'.  Two nested conditional statements exist within the ajax call and returns a a message to the user via jQuery DOM manipulation based on whether the API connection and 'post' were successful or not.  The ajax call appears to run asynchronous with Javascript, but the processing of the data is actually performed on the server side.  The execution stack of Javascript still runs synchronously.


**Technology Stack**<br>
- mockingbird
- HTML and Sass for CSS
- Javascript - jQuery - Ajax


<h3>Project Scope</h3>
* Be hosted on Github Pages and be available to the web
* Contain an organization structure for HTML, CSS, and Javascript
* Utilize vanilla Javascript OR jQuery for DOM manipulation
* Adequately represent your project scope; ie: a product website should contain product information.
* Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
* Use 2 media queries/breakpoints for Responsive Design
* Use 1 $.ajax calls to external APIs and render data from them
