self.__BUILD_MANIFEST = function(s, c, a) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/": [s, c, a, "static/chunks/747-78d5926b7f6bd1b0.js", "static/css/413b1b52094806bc.css", "static/chunks/pages/index-8054b1320b039d5a.js"],
        "/_error": ["static/chunks/pages/_error-8353112a01355ec2.js"],
        "/blog": [s, c, a, "static/css/6a414869c05f791e.css", "static/chunks/pages/blog-4a7d1d97617177e6.js"],
        "/blog/[id]": [s, c, a, "static/css/96a03b973fea0458.css", "static/chunks/pages/blog/[id]-24aefb52770006f3.js"],
        "/portfolio": [c, "static/css/4ac96b591e462411.css", "static/chunks/pages/portfolio-65e9eed67db962a6.js"],
        "/portfolio/[id]": [s, "static/css/98f8c17abde08c2a.css", "static/chunks/pages/portfolio/[id]-a10ce9d785ab180b.js"],
        "/sitemap.xml": ["static/chunks/pages/sitemap.xml-e463023f141831c8.js"],
        sortedPages: ["/", "/_app", "/_error", "/blog", "/blog/[id]", "/portfolio", "/portfolio/[id]", "/sitemap.xml"]
    }
}("static/chunks/45-6f4c82ac804ec593.js", "static/chunks/675-67442ca0f6302c15.js", "static/chunks/167-dc4bcc2fb801564d.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();