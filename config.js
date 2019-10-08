
const akasha  = require('akasharender');

const config = new akasha.Configuration();

// This URL is used as the base URL of the website.
// Any time AkashaCMS code calculates the full URL of
// a thing in the site, it will use this URL.
config.rootURL("https://example.akashacms.com");

// This informs the Configuration where it is located
// in the file-system.  Any time AkashaCMS code calculates
// a pathname, it uses this plus the relative pathname
// from the root of the project.
config.configDir = __dirname;

// Directories for this project
config
    .addAssetsDir('assets')
    .addAssetsDir({
        src: 'node_modules/bootstrap/dist',
        dest: 'vendor/bootstrap'
    })
   .addAssetsDir({
        src: 'node_modules/jquery/dist',
        dest: 'vendor/jquery'
    })
    .addAssetsDir({
        src: 'node_modules/popper.js/dist',
        dest: 'vendor/popper.js'
    })
    .addAssetsDir({
        src: 'node_modules/@fortawesome/fontawesome-free/',
        dest: 'vendor/fontawesome-free'
    })
    .addLayoutsDir('layouts')
    .addDocumentsDir('docs')
    .addDocumentsDir({
        src: 'guide',
        dest: 'guide',
        baseMetadata: {
            bookHomeURL: "/guide/index.html",
            title: "Table of Contents",
            tags: "AkashaRender",
            headerHeight: "140px",
            bookTitle: "Sample Open Source Software Project Documentation",
            bookAuthor: "David Herron",
            authors: "David Herron",
            published: "2019 David Herron",
            language: "English",
            coverImage: "/images/Better-Fritzing.png",
            logoImage: "/images/Better-Fritzing.png",
            noLogoImage: "false"
        }
    })
    .addPartialsDir('partials');


config
    .use(require('@akashacms/theme-bootstrap'))
    .use(require('@akashacms/plugins-base'), {
        generateSitemapFlag: true
    })
    .use(require('@akashacms/plugins-breadcrumbs'))
    .use(require('@akashacms/plugins-booknav'))
    .use(require('akashacms-external-links'))
    .use(require('@akashacms/plugins-footnotes'))
    .use(require('@akashacms/plugins-tagged-content'), {
        sortBy: 'title',
        // @tagDescription@ can only appear once
        headerTemplate: "---\ntitle: @title@\nlayout: tagpage.html.ejs\n---\n<p><a href='./index.html'>Tag Index</a></p><p>Pages with tag @tagName@</p><p>@tagDescription@</p>",
        indexTemplate: "---\ntitle: Tags for AkashaCMS Example site\nlayout: tagpage.html.ejs\n---\n",
        pathIndexes: '/tags/'
    })
    .use(require('akashacms-blog-podcast'), {
        bloglist: {
            news: {
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
            }
        }
    })
    .use(require('epub-website'));

config
    .addFooterJavaScript({ href: "/vendor/jquery/jquery.min.js" })
    .addFooterJavaScript({ href: "/vendor/popper.js/umd/popper.min.js" })
    .addFooterJavaScript({ href: "/vendor/bootstrap/js/bootstrap.min.js" })
    .addStylesheet({ href: "/vendor/bootstrap/css/bootstrap.min.css" })
    .addStylesheet({ href: "/css/flatly.min.css" })
    .addStylesheet({ href: "/css/style.css" })
    .addStylesheet({ href: "/vendor/fontawesome-free/css/all.min.css" });


config.setMahabhutaConfig({
    recognizeSelfClosing: true,
    recognizeCDATA: true
});

config.prepare();
module.exports = config;
    