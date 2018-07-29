'use strict';

let articles = [];

// COMMENT: What is the purpose of the following function? Why is its name capitalized? Explain the context of "this" within the function. What does "rawDataObj" represent?
// PUT YOUR RESPONSE HERE
// This function is the area that the article data is input into in order to process and append to the DOM.  It is capitalozied because Article a constructor function. The this within the function represents the object in question.

function Article (rawDataObj) {
  // TODONE: Use the JS object that is passed in to complete this constructor function:
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;
}

Article.prototype.toHtml = function() {
  // COMMENT: What is the benefit of cloning the article? (see the jQuery docs)
  // TO keep from having to rewrite the code to push the articles to the dom. Cloning not only copies all of the contents but also takes with it all of it's properties, so if CSS is aplied to the original it will be applied to the clone as well.
  console.log('im in');
  let $newArticle = $('article.template').clone();
  /* TODONE: This cloned article still has a class of template. In our modules.css stylesheet, we should give all elements with a class of template a display of none so that our template does not display in the browser. But, we also need to make sure we're not accidentally hiding our cloned article. */
  //$('article.template').css({'display' : 'block'});
  if (!this.publishedOn) $newArticle.addClass('draft');
  $newArticle.attr('data-category', this.category);

  /* TODO: Now use jQuery traversal and setter methods to fill in the rest of the current template clone with values of the properties of this particular Article instance.
    We need to fill in:
      1. author name,
      2. author url,
      3. article title,
      4. article body, and
      5. publication date. */

  $newArticle.find('Title', this.title)

  // REVIEW: Display the date as a relative number of 'days ago'
  $newArticle.find('time').html('about ' + Math.floor((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newArticle.append('<hr>');
  return $newArticle;

};

rawData.sort(function(a,b) {
  // REVIEW: Take a look at this sort method; This may be the first time we've seen it. Look at the docs and think about how the dates would be sorted if the callback were not included in this method.
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

// TODONE: Refactor these for loops using the .forEach() array method.

rawData.forEach(function(articleObject) {
  articles.push(new Article(articleObject));
});


articles.forEach(function(article) {
  // REVIEW: below code will hang until TODO about cloned article is handled
  // Once that TODO is done uncomment code
  //$('#articles').append(article.toHtml());

  // COMMENT: (STRETCH) Can you figure out why code hangs?
  // The clone function is copying the html article and for each time it goes through the html grows exponentially.
});
console.log(articles);