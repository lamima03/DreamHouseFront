export default function Component() {
  return (
    <div className="p-32">
    <div className="w-full max-w-2xl mx-auto p-6 space-y-6 rounded-lg bg-white shadow-lg ">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Créez un compte</h1>
        <p className="text-lg text-gray-600">
          Bénéficiez d&apos;une expérience personnalisée avec du contenu en lien avec votre Préférence
        </p>
      </div>

      <div className="space-y-4 ">
        <div className="flex items-center space-x-2">
          <input type="radio" name="account-type" id="personal" value="personal" defaultChecked className="w-4 h-4" />
          <label htmlFor="personal" className="text-lg">
            Pour vous*
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="radio" name="account-type" id="business" value="business" className="w-4 h-4" />
          <label htmlFor="business" className="text-lg">
            Pour votre entreprise
          </label>
        </div>
      </div>

      <p className="text-sm text-gray-600">
        * Vous agissez à titre professionnel ?{" "}
        <a href="#" className="text-primary hover:underline">
          Créez plutôt un compte pro !
        </a>
      </p>
    </div>
    </div>)
}
