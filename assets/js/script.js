document.addEventListener('DOMContentLoaded', () => {
  const cookiePopup = document.getElementById('cookie-popup');
  //  launch popup test !=!
  cookiePopup.showModal();

  const cookieForm = document.getElementById('cookie-form');
  const acceptNecessaryButton = document.getElementById('accept-necessary-cookies');
  const declineButton = document.getElementById('decline-cookies');

  //   ? see if the cookies are already accepted by user?
  if (localStorage.getItem('cookiesAccepted') !== 'true') {
    cookiePopup.showModal();
  } else if (localStorage.getItem('necessaryCookiesOnly') === 'true') {
    console.log('Only necessary cookies are enabled.');
  }
  // ! if Yes ty for your data !! :P
  cookieForm.addEventListener('submit', (event) => {
    event.preventDefault();
    localStorage.setItem('cookiesAccepted', 'true');
    cookiePopup.close();
  });
  //   ! if u want only nessesary cookies
  acceptNecessaryButton.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookiePopup.close();
  });
  //  ! if NO! we all hate u gl in life
  declineButton.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'false');
    cookiePopup.close();
  });
});
