function attachEvents() {
    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    const loadPostButton = document.getElementById('btnLoadPosts');
    const postViewElement = document.getElementById('btnViewPost');
    const selectPostElement = document.getElementById('posts');
    const postTitleElement = document.getElementById('post-title');
    const postBodyElement = document.getElementById('post-body');
    const commentListElement = document.getElementById('post-comments');
    loadPostButton.addEventListener('click', () => {
        selectPostElement.innerHTML = '';
        postBodyElement.textContent = '';
        postBodyElement.textContent = '';
        commentListElement.innerHTML = '';
        fetch(postsUrl)
            .then(response => response.json())
            .then(posts => {
                Object.values(posts)
                    .forEach((post => {
                        const optionElement = document.createElement('option');
                        // optionElement.setAttribute('value', post.id);
                        optionElement.value = post.id;
                        console.log('post id = ' + post.id);
                        optionElement.textContent = post.title;
                        selectPostElement.appendChild(optionElement);
                    }))
            })
    })

    postViewElement.addEventListener("click", async () => {
        const selectedPostId = selectPostElement.value;
        console.log('Selected post Id = ' + selectedPostId);

        const postResponse = await fetch(`${postsUrl}/${selectedPostId}`);
        const selectedPost = await postResponse.json();
        console.log('selected post json = ' + selectedPost);

        postTitleElement.textContent = selectedPost.title;
        console.log('selected post title = ' + selectedPost.title);
        postBodyElement.textContent = selectedPost.body;

        const commentsResponse = await fetch(commentsUrl);
        const comments = await commentsResponse.json();
        const commentsFragment = document.createDocumentFragment();
        Object.values(comments)
            .filter(comment => comment.postId === selectedPostId)
            .forEach(comment => {
                const liElement = document.createElement('li');
                liElement.textContent = comment.text;
                liElement.id = comment.id;
                commentsFragment.appendChild(liElement);
            });
        commentListElement.innerHTML = '';
        commentListElement.appendChild(commentsFragment);
    })
}

attachEvents();