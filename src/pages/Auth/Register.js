import React from 'react'

const Register = () => {
  return (
    <div>
        <h2>Kayıt Ol</h2>
        <input placeholder='Kullanıcı adı'></input>
        <input type={'password'} placeholder='Şifre'></input>
        <button type='submit'>Kaydı Tamamla</button>
    </div>
  )
}

export default Register