import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Components/Contente/AuthContente';
import speakeasy from 'speakeasy';
import toast from 'react-hot-toast';

export function Verify2FA() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [verificationCode, setVerificationCode] = useState('');

  const handleVerify = () => {
    // In a real application, you would verify this against your backend
    const verified = speakeasy.totp.verify({
      secret: user?.twoFactorSecret || '',
      encoding: 'base32',
      token: verificationCode,
    });

    if (verified) {
      toast.success('Vérification réussie');
      navigate('/');
    } else {
      toast.error('Code incorrect');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Vérification à deux facteurs
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-4">
                Entrez le code à 6 chiffres de votre application d'authentification
              </p>
              <input
                type="text"
                maxLength={6}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brown-500 focus:border-brown-500"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="000000"
              />
            </div>

            <button
              onClick={handleVerify}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brown-900 hover:bg-brown-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-500"
            >
              Vérifier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}