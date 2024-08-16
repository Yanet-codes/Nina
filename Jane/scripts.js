document.addEventListener('DOMContentLoaded', () => {
    const addTopicIcon = document.getElementById('add-topic');
    const topicsContainer = document.getElementById('topics-container');

    addTopicIcon.addEventListener('click', () => {
        const topicTitle = document.getElementById('topic-title').value;

        if (topicTitle.trim() === '') {
            alert('Please enter a topic title.');
            return;
        }

        // Create new topic element
        const topicDiv = document.createElement('div');
        topicDiv.className = 'topic';

        const titleElement = document.createElement('div');
        titleElement.className = 'topic-title';
        titleElement.textContent = topicTitle;

        const commentForm = document.createElement('div');
        commentForm.className = 'comment-form';
        commentForm.innerHTML = `
            <span>
                <input type="text" class="comment-input" placeholder="Add a comment">
                <span type="button" class="add-comment">
                    <i class="fa-solid fa-plus" id="add-topic"></i>
                </span>
            </span>
            <span>
                <i class="fa-regular fa-comment-dots"></i>
                <i class="fa-solid fa-heart is" id="heart" onclick="document.getElementById('heart').style.color = 'red'"></i>
                <i class="fa-regular fa-bookmark"></i>
                <i class="fa-solid fa-share"></i>
            </span>
            
        `;

        const buttons = document.createElement('div');
        buttons.className = 'button';
        buttons.innerHTML = `     
        `;


        //const faBookMark = buttons.querySelector('.fa-bookmark')
        //if (faBookMark.focus()){
        //    alert('This post is archived!')
        //}

        //const icon1=document.createElement('i');
        //icon1.className='fa-regular fa-comment-dots';

        topicDiv.appendChild(titleElement);
        topicDiv.appendChild(commentForm);
        topicDiv.appendChild(buttons)
        //buttons.appendChild(icon1);
        // Append new topic to container
        topicsContainer.appendChild(topicDiv);
        //topicsContainer.appendChild(buttons);
        // Clear input field
        document.getElementById('topic-title').value = '';

        // Add event listener for new comments
        commentForm.querySelector('.add-comment').addEventListener('click', () => {
            const commentInput = commentForm.querySelector('.comment-input');
            const commentText = commentInput.value;

            if (commentText.trim() === '') {
                alert('Please enter a comment.');
                return;
            }

            // Create new comment element
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment';
            commentDiv.textContent = commentText;

            // Append new comment to topic
            topicDiv.appendChild(commentDiv);

            // Clear input field
            commentInput.value = '';
        });
    });
    //const heartIcon = document.getElementById('heart');
    //heartIcon.addEventListener('click', () =>{
    //    document.getElementById("heart").style.color = "red";
    //})
});
