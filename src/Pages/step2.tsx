
import * as React from "react"

export default function EmailForm() {
  const [email, setEmail] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ajoutez ici la logique de soumission
    console.log("Email soumis:", email)
  }

  return (
    <div className="p-32">
    <div className="w-full max-w-2xl mx-auto p-6 space-y-6 rounded-lg bg-white shadow-lg">
      <h1 className="text-3xl font-bold tracking-tight">Commençons par un e-mail</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-lg font-medium">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-500"
          />
        </div>

        <div className="space-y-4">
          <label className="flex items-start space-x-3">
            <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300" />
            <span className="text-base">
              Recevoir nos newsletters à propos des nouvelles fonctionnalités, des offres promo du moment et des
              tendances de recherches
            </span>
          </label>

          <label className="flex items-start space-x-3">
            <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300" />
            <span className="text-base">Recevoir les communications en collaboration avec nos partenaires</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-[#8B7355] hover:bg-[#7A6548] text-white font-medium rounded-full transition-colors"
        >
          Continuer
        </button>
      </form>
    </div>
    </div>
  )
}