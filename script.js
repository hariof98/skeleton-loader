const skeletonTemplate = function(){
    const grid = document.querySelector('.container');
    const cardTemplate = document.querySelector('#card-template');

    var idCount = 10;
    for(var i = 1; i<=idCount; i++){
        grid.append(cardTemplate.content.cloneNode(true))
    }
    
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => {
            return response.json();
        }).then((posts) => {
            grid.innerHTML = '';
            posts.forEach(post => {
                const div = cardTemplate.content.cloneNode(true);
                div.querySelector('[data-id]').innerHTML = post.id;
                div.querySelector('[data-title]').innerHTML = post.title;
                div.querySelector('[data-body]').innerHTML  = post.body;
                grid.append(div);
            });
            console.table(posts);
        }).catch((err) => {
            console.log(err);
        })
    }, 5000);
}

skeletonTemplate();