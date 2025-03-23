import * as React from "react"

export default function UsernameForm() {
  const [username, setUsername] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ajoutez ici la logique de soumission
    console.log("Nom d'utilisateur soumis:", username)
  }

  return (

    <div className="p-32">
    <div className="w-full max-w-2xl mx-auto p-6 space-y-6 rounded-lg bg-white shadow-lg">
      <h1 className="text-3xl font-bold">Et pour finir choisissez un nom d&apos;utilisateur</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="username" className="block text-lg">
            Nom d&apos;utilisateur<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-[#8B7355] hover:bg-[#7A6548] text-white font-medium rounded-full transition-colors"
        >
          Confirmer
        </button>
      </form>
    </div>
    </div>
  )
}

