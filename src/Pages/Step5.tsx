"use client"

import * as React from "react"

export default function SmsVerification() {
  const [code, setCode] = React.useState(["", "", "", "", "", ""])
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)

      // Passer au champ suivant si un chiffre est entré
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Retourner au champ précédent sur backspace si le champ est vide
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").replace(/[^0-9]/g, "")
    const digits = pastedData.split("").slice(0, 6)

    const newCode = [...code]
    digits.forEach((digit, index) => {
      if (index < 6) newCode[index] = digit
    })
    setCode(newCode)

    // Mettre le focus sur le dernier champ rempli ou le premier champ vide
    const focusIndex = Math.min(digits.length, 6) - 1
    if (focusIndex >= 0) {
      inputRefs.current[focusIndex]?.focus()
    }
  }

  return (
    <div className="p-32">
    <div className="w-full max-w-2xl mx-auto p-6 space-y-6 rounded-lg bg-white shadow-lg">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Vérifions ensemble votre Messagerie</h1>
        <p className="text-gray-600">
          Saisissez le code reçu au numero : <span className="font-medium">+2348********3</span>
        </p>
      </div>

      <div className="flex justify-center items-center space-x-2">
        {code.map((digit, index) => (
          <React.Fragment key={index}>
            <input
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="w-12 h-14 text-center text-2xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {index === 2 && <span className="text-2xl text-gray-400">-</span>}
          </React.Fragment>
        ))}
      </div>

      <div className="flex justify-center space-x-4 text-sm">
        <span className="text-gray-600">Je n&apos;ai rien reçu</span>
        <button className="text-blue-600 hover:underline">Me renvoyer un code</button>
      </div>
    </div>
    </div>
  )
}

