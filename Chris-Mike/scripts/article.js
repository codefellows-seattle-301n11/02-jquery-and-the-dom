'use strict';

let articles = [];

// COMMENTED: What is the purpose of the following function? Why is its name capitalized? Explain the context of "this" within the function. What does "rawDataObj" represent?
// This function is a constructor function, used to build article objects out of raw data strings.  The name is capitalied as a convention to identify constructor functions.  "this" represents the specific instance that is being currently run through the constructor function.  "rawDataObj" would be the data that is used to create the articles, in this case, the variable 'rawData'.

function Article (rawDataObj) {
  // TODONE: Use the JS object that is passed in to complete this constructor function:
  // Save ALL the properties of `rawDataObj` into `this`
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;
  // articles.push(this);
}

Article.prototype.toHtml = function() {
  // COMMENTED: What is the benefit of cloning the article? (see the jQuery docs)
  // Cloning the article allows the cloned article to carry the same DOM elements from the template for us to use as getters and setters.

  let $newArticle = $('article.template').clone();
  /* TODONE: This cloned article still has a class of template. In our modules.css stylesheet, we should give all elements with a class of template a display of none so that our template does not display in the browser. But, we also need to make sure we're not accidentally hiding our cloned article. */
  
  if (!this.publishedOn) $newArticle.addClass('draft');
  $newArticle.find('.template').data('category', this.category);
  $newArticle.find('a').attr('href', this.authorUrl);
  $newArticle.find('a').html(this.author);
  $newArticle.find('.article-body').html(this.body);
  $newArticle.find('h1').html(this.title);
  $newArticle.find('time').attr('datetime', this.publishedOn);
  $newArticle.removeClass('template');
  /* TODONE: Now use jQuery traversal and setter methods to fill in the rest of the current template clone with values of the properties of this particular Article instance.
    We need to fill in:
      1. author name,
      2. author url,
      3. article title
      4. article body, and
      5. publication date. */

  // REVIEWED: Display the date as a relative number of 'days ago'

  $newArticle.find('time').html('about ' + Math.floor((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newArticle.append('<hr>');
  return $newArticle;
};

rawData.sort(function(a,b) {
  // REVIEWED: Take a look at this sort method; This may be the first time we've seen it. Look at the docs and think about how the dates would be sorted if the callback were not included in this method.
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

// TODONE: Refactor these for loops using the .forEach() array method.

rawData.forEach(function(rawData) {
  articles.push(new Article(rawData))
});

// REVIEWED: below code will hang until TODO about cloned article is handled
// Once that TODO is done uncomment code

articles.forEach(function(articles) {
  $('#articles').append(articles.toHtml());
});
// COMMENT: (STRETCH) Can you figure out why code hangs?
// It has to do with the clone() method