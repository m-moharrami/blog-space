fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        let html = ""
        for (let post of postsArr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }

        document.getElementById("blog-list").innerHTML = html
    })

const article = new Object();
article.body = '';
article.title = '';

document.getElementById("new-post").addEventListener('submit', function(event) {
    event.preventDefault();
    const postTitle = document.getElementById("post-title").value;
    const postBody = document.getElementById("post-body").value;
    const article = {
        title: postTitle,
        body: postBody
    };
    console.log(article);
})