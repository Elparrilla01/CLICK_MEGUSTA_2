document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-button');
    const likesCounts = document.querySelectorAll('.likes');

    likeButtons.forEach((button, index) => {
        let likes = 0; 

        button.addEventListener('click', () => {
            likes++; 
            likesCounts[index].textContent = `${likes} like(s)`; 
        });
    })
})