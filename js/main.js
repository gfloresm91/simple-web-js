$(document).ready(() => {

    // Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true
    });

    // Posts
    var posts = [{
            title: 'Prueba título 1',
            date: `Publicado el: ${moment().format('DD/MM/YYYY')}`,
            content: `
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                voluptate consequatur sapiente quasi, aspernatur minima ipsam
                voluptatum aut quia, ad at? Laborum facere eaque eligendi rerum
                numquam, quo voluptatibus delectus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                voluptate consequatur sapiente quasi, aspernatur minima ipsam
                voluptatum aut quia, ad at? Laborum facere eaque eligendi rerum
                numquam, quo voluptatibus delectus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                voluptate consequatur sapiente quasi, aspernatur minima ipsam
                voluptatum aut quia, ad at? Laborum facere eaque eligendi rerum
                numquam, quo voluptatibus delectus?
            `
        },
        {
            title: 'Prueba título 2',
            date: `Publicado el: ${moment().format('DD/MM/YYYY')}`,
            content: `
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                voluptate consequatur sapiente quasi, aspernatur minima ipsam
                voluptatum aut quia, ad at? Laborum facere eaque eligendi rerum
                numquam, quo voluptatibus delectus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                voluptate consequatur sapiente quasi, aspernatur minima ipsam
                voluptatum aut quia, ad at? Laborum facere eaque eligendi rerum
                numquam, quo voluptatibus delectus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                voluptate consequatur sapiente quasi, aspernatur minima ipsam
                voluptatum aut quia, ad at? Laborum facere eaque eligendi rerum
                numquam, quo voluptatibus delectus?
            `
        },
        {
            title: 'Prueba título 3',
            date: `Publicado el: ${moment().format('DD/MM/YYYY')}`,
            content: `
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                voluptate consequatur sapiente quasi, aspernatur minima ipsam
                voluptatum aut quia, ad at? Laborum facere eaque eligendi rerum
                numquam, quo voluptatibus delectus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                voluptate consequatur sapiente quasi, aspernatur minima ipsam
                voluptatum aut quia, ad at? Laborum facere eaque eligendi rerum
                numquam, quo voluptatibus delectus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                voluptate consequatur sapiente quasi, aspernatur minima ipsam
                voluptatum aut quia, ad at? Laborum facere eaque eligendi rerum
                numquam, quo voluptatibus delectus?
            `
        },
        {
            title: 'Prueba título 4',
            date: `Publicado el: ${moment().format('DD/MM/YYYY')}`,
            content: `
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                voluptate consequatur sapiente quasi, aspernatur minima ipsam
                voluptatum aut quia, ad at? Laborum facere eaque eligendi rerum
                numquam, quo voluptatibus delectus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                voluptate consequatur sapiente quasi, aspernatur minima ipsam
                voluptatum aut quia, ad at? Laborum facere eaque eligendi rerum
                numquam, quo voluptatibus delectus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                voluptate consequatur sapiente quasi, aspernatur minima ipsam
                voluptatum aut quia, ad at? Laborum facere eaque eligendi rerum
                numquam, quo voluptatibus delectus?
            `
        }
    ];

    posts.forEach((item) => {
        var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>

                <p>
                    ${item.content}
                </p>

                <a href="#" class="button-more">Leer más</a>

            </article>
        `;

        $('#posts').append(post);
    });


});
