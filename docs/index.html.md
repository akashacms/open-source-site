---
layout: article.html.ejs
title: Example Open Source Software Web Site
---

This website is dedicated to open source software developers around the world.  It is an example of a way to build a website for your open source software project.

Included in this demonstration website are several elements that would be useful for open source software teams:

* A "brochure" area giving a high level overview of the software product
* A "blog" that you can use to post project announcements and tutorials
* An "e-Book" area to hold your documentation
* The e-Book area can also be published as an EPUB file, for example to post for sale via various online book stores

Your website is not limited by what is shown in this demonstration.  The demonstration is built on the foundation offered by AkashaCMS - a tool for building any kind of static HTML website - and AkashaEPUB - tool for building EPUB 3 documents.

* TODO [](akashacms-intro.html)
* TODO [](akashaepub-intro.html)

Your content is stored as simple Markdown files in a file system, and not in an obscure database schema.  With AkashaCMS the content is rendered into HTML files, that can utilize any advanced HTML5, JavaScript or CSS3 technique you like.  Because they're simply HTML files, the rendered website can be deployed to any low-end inexpensive web hosting provider yet provide excellent page loading times.

The design of AkashaEPUB allows e-Book content to be both published online, in a website, or as an EPUB.  Why should your project documentation be hosted by a 3rd party service?  It should be on your website, instead.  


## Green Transportation News

<blog-rss-link blogtag="news"></blog-rss-link>
<blog-rss-icon blogtag="news" title="News and Video postings"></blog-rss-icon>

<blog-news-river maxentries="150" blogtag="news" template="blog-river-thumbs.html.ejs"></blog-news-river>

