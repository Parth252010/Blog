// Function to load more posts
function loadMorePosts() {
    const hiddenPosts = document.querySelectorAll('.post.hidden');
    
    if (hiddenPosts.length > 0) {
        hiddenPosts[0].classList.remove('hidden');
    }

    // Hide the "Load More" button if no posts are left
    if (hiddenPosts.length <= 1) {
        document.getElementById('load-more').style.display = 'none';
    }
}
