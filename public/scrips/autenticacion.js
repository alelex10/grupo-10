
export const auth = {
    // guarda el usuario en localStorage
    login(user) {
      localStorage.setItem("loggedUser", JSON.stringify(user));
    },
  
 
    logout() {
      localStorage.removeItem("loggedUser");
    },
  
  
    getUser() {
      return JSON.parse(localStorage.getItem("loggedUser"));
    },
  
   
    isLoggedIn() {
      return !!localStorage.getItem("loggedUser");
    }
  };
  

  