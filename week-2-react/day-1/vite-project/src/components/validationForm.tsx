import React, { useState } from 'react';

function ValidationForm(){
  const [email,setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [phone, setPhone] = useState('');

  const [emailErr, setEmailErr] = useState('');
  const [passErr, setPassErr] = useState('');
  const [phoneErr, setPhoneErr] = useState('');

 const phoneRegex = /^\+628[1-9][0-9]{6,10}$/; 


  const validasiEmail = (email) => {
    if (!email.includes('@')) {
      setEmailErr('email tidak valid');
    } else {
      setEmailErr('');
    }
  };

  const validasiPhone = (phone) => {
    if (!phoneRegex.test(phone)){
      setPhoneErr("format tidak sesuai!");
    }else{
      setPhoneErr("");
    }
  }

  const validasiPass = (pass) => {
    if (pass.length < 8) {
      setPassErr('password tidak boleh kurang dari 8 karakter');
    } else {
      setPassErr('');
    }
  };

  const handleEmail = (e) => {
    const EmailBaru = e.target.value;
    setEmail(EmailBaru);
    validasiEmail(EmailBaru);
  };

  const handlePhone = (e) => {
    const phoneBaru = e.target.value;
    setPhone(phoneBaru);
    validasiPhone(phoneBaru);
  }

  const handlePass = (e) => {
    const passBaru = e.target.value;
    setPass(passBaru);
    validasiPass(passBaru); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validasiEmail(email);
    validasiPass(pass);
    validasiPhone(phone)

    if (!emailErr && !passErr && email && pass) {
      alert('data berhasil di submit!');
      console.log({ email, pass });
    } else {
      alert('terdapat kesalahan dalam pengisian, harap diperbaiki.');
    }
  };

  return (
    <form className='space-y-4' onSubmit={handleSubmit}>
      <div className='bg-blue-600 absolute -top-0.5'></div>
      <h2 className='text-xl font-semibold mb-4 text-gray-700 text-center'>form validasi</h2>
      <div>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={handleEmail}
            className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100'
          />
        </label>
        {emailErr && <p className='text-red-600 text-xs mt-1'>{emailErr}</p>}
      </div>
       <div>
        <label>
          no telp:
          <input
            type="text"
            value={phone}
            onChange={handlePhone}
            className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100'
          />
        </label>
        {phoneErr && <p className='text-red-600 text-xs mt-1'>{phoneErr}</p>}
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={pass}
            onChange={handlePass}
            className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100'
          />
        </label>
        {passErr && <p className='text-red-600 text-xs mt-1'>{passErr}</p>}
      </div>
      <button className='flex-1 w-full py-2 mt-2 bg-blue-500 text-white p-1 rounded-lg hover:bg-blue-600 transition' type="submit">submit</button>
    </form>
  );
}

export default ValidationForm;
