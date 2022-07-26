const submitRef = document.querySelector('[type="submit"]');
const emailRef = document.querySelector('[name="email"]');
const passwordRef = document.querySelector('[name="password"]');

const onSubmit = (event) => { 
    event.preventDefault();

    if (passwordRef.value === '' || emailRef.value === '') {
        return alert('Всі поля повинні бути заповненими!');
    } else {
        const user = {
            [emailRef.name]: emailRef.value,
            [passwordRef.name]: passwordRef.value
        }

        console.log(user)
        document.querySelector('.login-form').reset()
    }

   
};
submitRef.addEventListener('click', onSubmit);
