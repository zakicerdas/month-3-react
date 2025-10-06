import React, { useState } from 'react';

function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange = (a) => {
    const { name, value } = a.target;
    setForm(dataAwal => ({
      ...dataAwal,
      [name]: value    
    }));
  };

  const handleSubmit = (a) => {
    a.preventDefault();
    alert(`Terima kasih, ${form.firstName}-sama, form telah terisi.`);
  };

  return (
    <form onSubmit={handleSubmit} className='bg-amber-50 border-white shadow-lg gap-2 p-6 space-y-6 mt-3'>
      <h2>form kontak</h2>
      <div>
        <label>Nama depan: </label>
        <input className='border-1 rounded-lg'
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Nama belakang: </label>
        <input className='border-1 rounded-lg'
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email: </label>
        <input className='border-1 rounded-lg'
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <button className='bg-black text-white p-1 rounded-lg' type="submit">Submit</button>
      <p>{form.firstName}-{form.lastName}-{form.email}</p>
    </form>
  );
}

export default ContactForm;