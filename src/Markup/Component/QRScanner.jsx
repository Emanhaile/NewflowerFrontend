import React, { useState } from 'react';
import axios from 'axios';

const QRScanner = () => {
  const [formDataState, setFormDataState] = useState({
    company_name: '',
    ceo_name: '',
    phone_number: '',
    email: '',
    service: '',
    expire_date: '',
    updated_expire_date: '',
    telegram: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    tiktok: '',
    instagram: ''
  });

  const [qrCodeImage, setQrCodeImage] = useState('');
  const [profileUrl, setProfileUrl] = useState('');

  const handleChange = (e) => {
    setFormDataState({
      ...formDataState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to handle both form data and file uploads
    const formData = new FormData();

    // Append the form data fields
    Object.keys(formDataState).forEach((key) => {
      formData.append(key, formDataState[key]);
    });

    // Append the logo image if it's selected
    const logoFileInput = document.getElementById('logo-input');
    if (logoFileInput.files[0]) {
      formData.append('photo_url', logoFileInput.files[0]);
    }

    try {
      // Send the form data (including file) to the backend
      const response = await axios.post('http://localhost:3003/generate-qr', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Set QR code image and profile URL from the response
      setQrCodeImage(response.data.qrCodeImage);
      setProfileUrl(response.data.profileUrl);
    } catch (error) {
      console.error('Error generating QR code:', error);
      alert('Error generating QR code. Please check the console.');
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = qrCodeImage;
    link.download = 'business_card_qr_code.png';
    link.click();
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600785267227-14da1c87db07)' }}>
      <div className="w-full max-w-lg bg-white bg-opacity-80 p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Generate Business Card QR Code</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="company_name" value={formDataState.company_name} onChange={handleChange} placeholder="Company Name" className="w-full p-2 border border-gray-300 rounded-md" required />
          <input type="text" name="ceo_name" value={formDataState.ceo_name} onChange={handleChange} placeholder="CEO Name" className="w-full p-2 border border-gray-300 rounded-md" />
          <input type="tel" name="phone_number" value={formDataState.phone_number} onChange={handleChange} placeholder="Phone Number" className="w-full p-2 border border-gray-300 rounded-md" required />
          <input type="email" name="email" value={formDataState.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border border-gray-300 rounded-md" />
          <input type="file" name="photo_url" id="logo-input" className="w-full p-2 border border-gray-300 rounded-md" />
          <input type="text" name="service" value={formDataState.service} onChange={handleChange} placeholder="Services" className="w-full p-2 border border-gray-300 rounded-md" />
          <input type="date" name="expire_date" value={formDataState.expire_date} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
          <input type="date" name="updated_expire_date" value={formDataState.updated_expire_date} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
          <input type="url" name="telegram" value={formDataState.telegram} onChange={handleChange} placeholder="Telegram Link" className="w-full p-2 border border-gray-300 rounded-md" />
          <input type="url" name="facebook" value={formDataState.facebook} onChange={handleChange} placeholder="Facebook Link" className="w-full p-2 border border-gray-300 rounded-md" />
          <input type="url" name="linkedin" value={formDataState.linkedin} onChange={handleChange} placeholder="LinkedIn Link" className="w-full p-2 border border-gray-300 rounded-md" />
          <input type="url" name="youtube" value={formDataState.youtube} onChange={handleChange} placeholder="YouTube Link" className="w-full p-2 border border-gray-300 rounded-md" />
          <input type="url" name="tiktok" value={formDataState.tiktok} onChange={handleChange} placeholder="TikTok Link" className="w-full p-2 border border-gray-300 rounded-md" />
          <input type="url" name="instagram" value={formDataState.instagram} onChange={handleChange} placeholder="Instagram Link" className="w-full p-2 border border-gray-300 rounded-md" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Generate QR Code</button>
        </form>

        {qrCodeImage && (
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold">Scan this QR code</h3>
            <img src={qrCodeImage} alt="Generated QR Code" className="mt-4 max-w-xs mx-auto" />
            <div className="mt-4">
              <button onClick={handleDownload} className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">Download QR Code</button>
            </div>
            <p className="mt-2 text-sm text-blue-600">
              <a href={profileUrl} target="_blank" rel="noopener noreferrer">View Profile Details</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRScanner;
