'use strict';

let articles = [];

// COMMENTED: What is the purpose of the following function? Why is its name capitalized? Explain the context of "this" within the function. What does "rawDataObj" represent?
// The following is a Constructor Function. The names of Constructor Functions are capitalized. This is not a necessary rule but is one that is generally followed by developers to represent functions that create objects of the same "type." The purpose of this function is to create iterations of each blog post from the blogArticles.js page. When you see "this" in the function below, it refers to the specific iteration (or object in this case) that is being fed through from the rawData array. rawDataObj represents each object within the rawData array.)

function Article (rawDataObj) {
  // COMPLETED: Use the JS object that is passed in to complete this constructor function:
  // Save ALL the properties of `rawDataObj` into `this`
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;
}

Article.prototype.toHtml = function() {
  // COMMENTED: What is the benefit of cloning the article? (see the jQuery docs)
  // The clone function allows for a class element to be copied and appended in the DOM.  This prevents the repetetive process of rewriting lines of code.  This function can create duplicates of the elements, so it is best to avoid using it with IDs.

  let $newArticle = $('article.template').clone();
  /* COMPLETED: This cloned article still has a class of template. In our modules.css stylesheet, we should give all elements with a class of template a display of none so that our template does not display in the browser. But, we also need to make sure we're not accidentally hiding our cloned article. */

  if (!this.publishedOn) $newArticle.addClass('draft');
  $newArticle.attr('data-category', this.category);

  /* COMPLETED: Now use jQuery traversal and setter methods to fill in the rest of the current template clone with values of the properties of this particular Article instance.
    We need to fill in:
      1. author name,
      2. author url,
      3. article title,
      4. article body, and
      5. publication date. */

  $newArticle.find('a').html(this.author);
  $newArticle.find('a').attr('href', this.authorUrl);
  $newArticle.find('h1').text(this.title);
  $newArticle.find('.article-body').html(this.body);
  $newArticle.find('time').text(this.publishedOn);
  $newArticle.removeClass('template');

  // REVIEWED: Display the date as a relative number of 'days ago'
  $newArticle.find('time').html('about ' + Math.floor((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newArticle.append('<hr>');
  return $newArticle;
};

rawData.sort(function(a,b) {
  // REVIEWED: Take a look at this sort method; This may be the first time we've seen it. Look at the docs and think about how the dates would be sorted if the callback were not included in this method.
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

// COMPLETE: Refactor these for loops using the .forEach() array method.

rawData.forEach(function(element) {
  articles.push(new Article(element));
});

articles.forEach(function(element) {
  $('#articles').append(element.toHtml());
});

// REVIEW: below code will hang until TODO about cloned article is handled
// Once that TODO is done uncomment code

// COMMENT: (STRETCH) Can you figure out why code hangs?
// Until the class temeplate was removed, the code would clone the template exponentially until it would crash. Remove the template call allowed the clone function to clone only once and then make visible to the DOM.

