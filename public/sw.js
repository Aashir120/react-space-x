let cacheData = "website";

this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((Data) => {
            Data.addAll([
                "/static/js/bundle.js",
                "/static/js/main.chunk.js",
                "/static/js/0.chunk.js",
                "index.html",
                "/",
                "https://spacexdata.herokuapp.com/graphql",
                "/Home",
                "/launch",
                "/launch/:id"
            ])
        }).catch((err) => {
            console.log("err", err)
        })
    )
})