const form = document.querySelector('form')
const button = form.querySelector('button')

button.addEventListener('click', function (event) {
  event.preventDefault()

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
      'Sus datos se han registrado correctamente:<br><br>' +
      'First Name: ' +
      firstName +
      '<br>' +
      'Last Name: ' +
      lastName +
      '<br>' +
      'Email: ' +
      email +
      '<br>' +
      'Company Name: ' +
      companyName +
      '<br>' +
      'Phone Number: ' +
      phoneNumber +
      '<br>' +
      'Message: ' +
      message

    const modalData = document.getElementById('modal-data')
    modalData.innerHTML = messageText

    const modal = document.getElementById('myModal')
    const closeModal = document.getElementsByClassName('close')[0]

    modal.style.display = 'block'

    closeModal.onclick = function () {
      modal.style.display = 'none'
    }

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none'
      }
    }
  } else {
    alert('Debe rellenar todos los campos.')
  }
})
