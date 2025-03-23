
import { useState } from "react"

export default function PaymentPage() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    address: "",
    city: "",
    zipCode: "",
  })

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    console.log("Payment submitted:", formData)
    // Ici, vous ajouteriez la logique pour traiter le paiement
  }

  return (
    <div className="min-h-screen bg-customchoco">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Logo et titre */}
        <div className="text-center mb-8">
          <span className="text-3xl font-bold text-primary">Dream House</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Formulaire de paiement */}
          <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-primary mb-6">Informations de paiement</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray">
                    Numéro de carte
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bgBlue focus:ring focus:ring-bgBlue focus:ring-opacity-50 p-2"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiryDate" className="block text-sm font-medium text-gray">
                      Date d'expiration
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      placeholder="MM/YY"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bgBlue focus:ring focus:ring-bgBlue focus:ring-opacity-50 p-2"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      placeholder="123"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bgBlue focus:ring focus:ring-bgBlue focus:ring-opacity-50 p-2"
                      value={formData.cvv}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="cardName" className="block text-sm font-medium text-gray">
                    Nom sur la carte
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    placeholder="lamima"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-2"
                    value={formData.cardName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray">
                    Adresse de facturation
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="123 Rue Example"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-2"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray">
                      Ville
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Kinshasa"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-2"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray">
                      Code postal
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      placeholder="75001"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-footercolor focus:ring-opacity-50 p-2"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-footercolor transition-colors duration-200 font-medium"
              >
                Payer maintenant
              </button>
            </form>
          </div>

          {/* Image de l'immobilier */}
          <div className="md:w-1/2">
            <div className="relative w-full h-[600px] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3"
                alt="Propriété de luxe"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold">Villa de luxe</h3>
                <p className="text-secondary">Prix: 850,000 €</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

