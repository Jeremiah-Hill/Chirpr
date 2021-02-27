console.log('Hello World!')

const form = document.querySelector('form');

form.addEventListener('Submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content')

    const form = {
        name,
        content
    };
    console.log(form)

});