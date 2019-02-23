$(document).ready(() => {

    // Slider
    if (window.location.href.indexOf('index') > -1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true
        });
    }

    // Posts
    if (window.location.href.indexOf('index') > -1) {
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
    }

    // Switch themes
    var theme = $('#theme');

    $('#to-green').click(() => {
        toGreen();
        localStorage.setItem('color', 'green');
    });

    $('#to-red').click(() => {
        toRed();
        localStorage.setItem('color', 'red');
    });

    $('#to-blue').click(() => {
        toBlue();
        localStorage.setItem('color', 'blue');
    });

    var color_pick = localStorage.getItem('color');

    if (color_pick == 'red') {
        toRed();
    } else if (color_pick == 'blue') {
        toBlue();
    } else {
        toGreen();
    }

    function toGreen() {
        theme.attr('href', 'css/green.css');
    }

    function toRed() {
        theme.attr('href', 'css/red.css');
    }

    function toBlue() {
        theme.attr('href', 'css/blue.css');
    }

    // Scroll to up
    $('.subir').click((event) => {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Fake login
    $('#login form').submit(() => {
        var form_name = $('#form_name').val();

        localStorage.setItem('form_name', form_name);
    });

    var form_name = localStorage.getItem('form_name');

    if (form_name != null && form_name != 'undefined') {
        var about_parrafo = $('#about p');

        about_parrafo.html(`<br> <strong>Bienvenido: ${form_name}</strong>`);
        about_parrafo.append('<br> <a href="#" id="logout">Cerrar sesión</a>');
        $('#login').hide();

        $('#logout').click(() => {
            localStorage.clear();
            location.reload();
        });
    }

    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();
    }

});