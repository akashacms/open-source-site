
const akasha  = require('akasharender');

const config = new akasha.Configuration();

config.rootURL("https://example.akashacms.com");

config.configDir = __dirname;

config
    .addAssetsDir('assets')
    .addLayoutsDir('layouts')
    .addDocumentsDir('docs')
    .addDocumentsDir({
        src: 'guide',
        dest: 'guide'
    })
    .addPartialsDir('partials');


config
    .use(require('akashacms-theme-bootstrap'))
    .use(require('akashacms-base'), {
        generateSitemapFlag: true
    })
    .use(require('akashacms-breadcrumbs'))
    .use(require('akashacms-booknav'))
    .use(require('akashacms-dlassets'))
    .use(require('akashacms-external-links'))
    .use(require('akashacms-footnotes'))
    .use(require('akashacms-tagged-content'))
    .use(require('akashacms-blog-podcast'))
    .use(require('epub-website'));

config
    .addFooterJavaScript({ href: "/vendor/jquery/jquery.min.js" })
    .addFooterJavaScript({ href: "/vendor/popper.js/umd/popper.min.js" })
    .addFooterJavaScript({ href: "/vendor/bootstrap/js/bootstrap.min.js" })
    .addStylesheet({ href: "/vendor/bootstrap/css/bootstrap.min.css" })
    .addStylesheet({ href: "/pulse.min.css" })
    .addStylesheet({ href: "/style.css" });


config.plugin('akashacms-blog-podcast')
    .addBlogPodcast(config, "news", {
        rss: {
            title: "News",
            description: "Announcements and news",
            site_url: "http://akashacms.com/blog/index.html",
            image_url: "http://akashacms.com/logo.gif",
            managingEditor: 'David Herron',
            webMaster: 'David Herron',
            copyright: '2015 David Herron',
            language: 'en',
            categories: [ "Node.js", "Content Management System", "HTML5", "Static website generator" ]
        },
        rssurl: "/blog/rss.xml",
        rootPath: "blog",
        matchers: {
            layouts: [ "blog.html.ejs" ],
            path: /^blog\//
        }
    });
