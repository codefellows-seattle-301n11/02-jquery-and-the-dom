# Project Name

**Author**: Matthew, Hai, and Harry
**Version**: 1.0.0 (increment the patch/fix version number up if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for a Code Fellows 301 class. (i.e. What's your problem domain?) -->
Our team wanted to expand on our previous lab, in which we created a blog application that allowed users to easily update its content. The application must allow users to view their blog on both desktop and mobile platforms. The site should display the users most recent blog postings first, in decending orer by date.  We wanted to continue styling the application using SMACSS practices, and continue to refine our CSS for better optimization. We continued to use as dry of code as possible and rendered articles from a seperate data file, again, allowing for better optimization. 

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->
Run live server from root directory.

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->
In this lab, our team used multiple new applications to further our design elements. To do this, we implimented jQuery into our application along side JavaScript and CSS. Utilizing the jQuery librarie's functionality allowed us to access, traverse, and manipulate elements on the DOM. We also used the toHtml() method, which allowed us to render each article instance to the DOM. We refactored all for loops using the .forEach() method.

## Change Log
<!-- Use this are to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:
01-01-2001 4:59pm - Application now has a fully-functional express server, with GET and POST routes for the book resource.-->
07-28-2018 12:00PM - loaded scripts by orcer of Jquery, blogArticle.css, article.css 
07-28-2018 12:27PM - routing the arrays into the constructor functions to make instances of objects
07-28-2018 13:12PM - Using the cloned method to clone the original templates and putting the value into the cloned version.
07-28-2018 14:20PM - hiding the original templates and removing the template class to display only the cloned versions of the templates.
07-28-2018 15:30PM - Application now has a fully-functional express server, Everything is working properly

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

A primary resource we used was the jQuery cheatsheet provided to us in our lab README file. 
https://oscarotero.com/jquery/ 

We also used this site for future jQuery help.
https://api.jquery.com/clone/22