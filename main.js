document.addEventListener('DOMContentLoaded', () => {
    // User posts
    const userPosts = [
        { content: "Just joined this amazing network!", timestamp: "2024-07-22 10:00" },
        { content: "Hello, world!", timestamp: "2024-07-21 12:30" },
    ];

    // Feed posts
    const feedPosts = [
        { username: "friend1", content: "Had a great day today!", timestamp: "2024-07-22 14:00" },
        { username: "friend2", content: "Check out my new blog post!", timestamp: "2024-07-21 15:45" },
    ];

    // Friends
    const friends = ["friend1", "friend2"];

    // Display user posts
    const userPostsContainer = document.getElementById('user-posts');
    userPosts.forEach(post => {
        const postElement = document.createElement('li');
        postElement.textContent = `${post.timestamp}: ${post.content}`;
        userPostsContainer.appendChild(postElement);
    });

    // Display feed posts
    const feedPostsContainer = document.getElementById('feed-posts');
    feedPosts.forEach(post => {
        const postElement = document.createElement('li');
        postElement.textContent = `${post.timestamp} - ${post.username}: ${post.content}`;
        feedPostsContainer.appendChild(postElement);
    });

    // Display friends
    const friendsListContainer = document.getElementById('friends-list');
    friends.forEach(friend => {
        const friendElement = document.createElement('li');
        friendElement.textContent = friend;
        friendsListContainer.appendChild(friendElement);
    });

    // Add new post
    document.getElementById('new-post-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const newPostContent = document.getElementById('new-post-content').value;
        const newPost = { content: newPostContent, timestamp: new Date().toISOString() };
        userPosts.push(newPost);
        const newPostElement = document.createElement('li');
        newPostElement.textContent = `${newPost.timestamp}: ${newPost.content}`;
        userPostsContainer.appendChild(newPostElement);
        document.getElementById('new-post-content').value = '';
    });

    // Add new friend
    document.getElementById('add-friend-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const newFriendUsername = document.getElementById('friend-username').value;
        friends.push(newFriendUsername);
        const newFriendElement = document.createElement('li');
        newFriendElement.textContent = newFriendUsername;
        friendsListContainer.appendChild(newFriendElement);
        document.getElementById('friend-username').value = '';
    });

    // Update settings
    document.getElementById('settings-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Settings updated!');
    });
});
