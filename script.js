const textarea = document.getElementById('message');
const counter = document.getElementById('charCounter');
const warning = document.getElementById('warningMsg');
const clearBtn = document.getElementById('clearBtn');
const maxChars = 200;

textarea.addEventListener('input', () => {
    const currentLength = textarea.value.length;
    counter.textContent = `${currentLength}/${maxChars} characters`;
    const clearBtn = document.getElementById('clearBtn');


    if (currentLength >= maxChars) {
        warning.style.display = 'block';
    } else {
        warning.style.display = 'none';
    }

});
clearBtn.addEventListener('click', () => {
    textarea.value = '';
    counter.textContent = `0/${maxChars} characters`;
    warning.style.display = 'none';
});
