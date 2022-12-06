# Proffesional-Portfolio

## Deployed Link

[link](https://robogf.github.io/Proffesional-Portfolio/)

## Site Picture

![site](./public/Screenshot%202022-12-06%20at%204.35.07%20AM.png)

## Technologies Used

- React: Used this new technology to allow me to implement a one page app with reactive functions
- Tailwind CSS: This new technology allowed us to implement our styling all in one go for our REACT app
- FREECODECAMP.ORG: This amazing website allowed me to understand REACT and TAILWIND together credit to their formatting

## Summary

This is a brand new portfolio which includes a lot of more functionality
Please do use it to contact me and look at my work.

## Code Snippet

- This code snippet allows us to validate email input for our form and an error message when the message box is not filled out

```JavaScript
 const handleSubmit = (e) => {
        // e.preventDefault();
      if (e.target.name === 'email') {
         const isValid = validateEmail(e.target.value);
         console.log(isValid);
         if (!isValid) {
            setErrorMessage('Your email is invalid.');
         } else {
            setErrorMessage('');
         }
      } else {
         if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
         } else {
            setErrorMessage('');
         }
      }
      if (!errorMessage) {
         setName({ ...name, [e.target.name]: e.target.value });
      };
    }

```

## Author

## Author Link

[LinkedIn](https://www.linkedin.com/in/angel-matias-01120b251/)
[GitHub] (https://github.com/robogf)
