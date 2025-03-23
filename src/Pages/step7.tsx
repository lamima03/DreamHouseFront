import type React from "react"

import { useState } from "react"

export default function PhoneInputForm() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [countryCode, setCountryCode] = useState("+243")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(`Numéro soumis: ${countryCode} ${phoneNumber}`)
    // Ici vous pouvez ajouter la logique pour traiter le numéro
  }

  return (
    <div className="p-32">
    <div className="w-full max-w-md mx-auto p-8 bg-white rounded-3xl shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-8">Entrer votre Numero</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="phone" className="block text-xl mb-2">
            Numero<span className="text-red-500">*</span>
          </label>

          <div className="flex">
            <div className="relative">
              <button
                type="button"
                className="flex items-center justify-between px-4 py-2 bg-gray-300 rounded-l-full h-14 w-[120px]"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <span>{countryCode}</span>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-[120px] bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  {["+243", "+33", "+1", "+44"].map((code) => (
                    <button
                      key={code}
                      type="button"
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setCountryCode(code)
                        setIsDropdownOpen(false)
                      }}
                    >
                      {code}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <input
              id="phone"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="flex-1 rounded-r-full h-14 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B7144] focus:border-transparent"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full h-14 rounded-full bg-[#8B7144] hover:bg-[#7A6239] text-white text-lg font-medium transition-colors"
        >
          Continuer
        </button>
      </form>
    </div>
    </div>
  )
}

