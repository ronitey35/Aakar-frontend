async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();

        const container = document.getElementById("posts");
        container.innerHTML = posts
            .map(post => `
                <div class="post">
                    <p>Post ID: ${post.id}</p>
                    <h1>${post.title}</h1>
                    <h2>${post.body}</h2>
                </div>
            `)
            .join("");
    } catch (error) {
        console.error("Error occurred: ", error);
    }
}

fetchPosts();
