import {AuthData}  from "../contexts/Auth";

function signIn(username: string, password: string): Promise<AuthData> {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      if(password === '123456'){
        resolve({
          token: 'fake-token',
          username,
          name: 'Caio'
        })
      } else {
        reject(new Error('Credenciais inválidas'))
      }
    }, 500)
  });
}

export const authService = {signIn}