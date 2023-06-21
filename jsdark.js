const form = document.querySelector('form')
const button = form.querySelector('button')

button.addEventListener('click', function (event) {

  const firstName = form.querySelector('#first-name').value
  const lastName = form.querySelector('#last-name').value
  const email = form.querySelector('#email').value
  const companyName = form.querySelector('#company-name').value
  const phoneNumber = form.querySelector('#phone-number').value
  const message = form.querySelector('#message').value

  if (
    firstName !== '' &&
    lastName !== '' &&
    email !== '' &&
    companyName !== '' &&
    phoneNumber !== '' &&
    message !== ''
  ) {
    console.log(
      'First Name: ' +
        firstName +
        '\n' +
        'Last Name: ' +
        lastName +
        '\n' +
        'Email: ' +
        email +
        '\n' +
        'Company Name: ' +
        companyName +
        '\n' +
        'Phone: ' +
        phoneNumber +
        '\n' +
        'Message: ' +
        message
    )

    const messageText =
      'Datos enviados:\n\n' +
      'First Name: ' +
      firstName +
      '\n' +
      'Last Name: ' +
      lastName +
      '\n' +
      'Email: ' +
      email +
      '\n' +
      'Company Name: ' +
      companyName +
      '\n' +
      'Phone Number: ' +
      phoneNumber +
      '\n' +
      'Message: ' +
      message

    alert(messageText)
  }
})
