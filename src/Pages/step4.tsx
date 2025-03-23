import * as React from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react"

export default function PasswordForm() {
  const [password, setPassword] = React.useState("")
  const [showPassword, setShowPassword] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ajoutez ici la logique de soumission
    console.log("Mot de passe soumis:", password)
  }

  return (
    <div className="p-32">
    <div className="w-full max-w-2xl mx-auto p-6 space-y-6 rounded-lg bg-white shadow-lg">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Définissez votre mot de passe</h1>
        <p className="text-xl text-gray-600">
          Choisissez un mot de passe que vous n&apos;utilisez nulle part ailleurs.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="password" className="block text-lg">
            Mot de passe<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOffIcon className="h-6 w-6" /> : <EyeIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-[#8B7355] hover:bg-[#7A6548] text-white font-medium rounded-full transition-colors"
        >
          Confirmer
        </button>
      </form>

      <div className="space-y-2 text-sm">
        <a href="#" className="text-gray-900 hover:underline">
          Me renseigner
        </a>
        <p className="text-gray-600">
          sur les finalités du traitement de mes données personnelles, les destinataires, le responsable du traitement,
          les durées de conservation, les coordonnées du DPO et mes droits
        </p>
        <p className="text-gray-500">*Champ requis</p>
      </div>
    </div>
    </div>
  )
}

