document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#add-button').disabled = true;

    document.querySelector('#todo-item').onkeyup = () => {
        if(document.querySelector('#todo-item').value.length > 0) {
            document.querySelector('#add-button').disabled = false;
        } else {
            document.querySelector('#add-button').disabled = true;
        }
    }

    document.querySelector('form').onsubmit = () => {
        const inputText = document.querySelector('#todo-item').value;
        const item = document.createElement('li');
        item.innerHTML = inputText;
        
        document.querySelector('#todo-list').append(item);

        document.querySelector('#todo-item').value = '';


        document.querySelectorAll('li').forEach(item => {
            item.onclick = () => {
                item.remove();
            }
        });

        return false;
    }

});