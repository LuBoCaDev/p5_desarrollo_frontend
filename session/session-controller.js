import { buildAuthorizedSession, buildUnauthorizedSession } from "./session-view.js";

export function sessionController(sessionContainer) {
  const userLoggedIn = localStorage.getItem('userToken');

  if (userLoggedIn) {
    sessionContainer.innerHTML = buildAuthorizedSession();
    const logoutButton = sessionContainer.querySelector('button');
    
    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('userToken'); 
      location.reload();
    });
  } else {
    sessionContainer.innerHTML = buildUnauthorizedSession();
  }
}
