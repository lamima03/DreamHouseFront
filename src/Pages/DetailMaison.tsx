import { useParams } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { maisons } from "../Components/Data/Maison"; // Importation des maisons

export const DetailMaison = () => {
  const { id } = useParams();
  const maison = maisons.find((m) => m.id === Number(id));

  // Vérification si la maison existe
  if (!maison) {
    return <div className="text-center text-red-500 text-xl font-semibold mt-10">🏠 Maison non trouvée.</div>;
  }

  const [imagePrincipale, setImagePrincipale] = useState(maison.images[0]);
  const [message, setMessage] = useState("");

  return (
    <div className="max-w-6xl mx-auto p-4 mt-10 grid md:grid-cols-3 gap-6">
      {/* Section des détails de la maison */}
      <div className="md:col-span-2">
        <h1 className="text-3xl font-bold text-primary mb-4">{maison.titre}</h1>
        <p className="text-xl font-semibold text-gray-700">{maison.prix}</p>
        <p className="text-gray-600 flex items-center mt-2">
          <MapPin className="h-5 w-5 mr-2 text-primary" /> {maison.localisation}
        </p>
        
        {/* Galerie d'images */}
        <div className="mt-4">
          <img src={imagePrincipale} alt="Maison" className="w-full h-96 object-cover rounded-lg shadow-lg" />
          <div className="flex mt-2 space-x-2">
            {maison.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Maison ${index + 1}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-75 border-2 border-transparent hover:border-primary transition"
                onClick={() => setImagePrincipale(img)}
              />
            ))}
          </div>
        </div>
        
        <p className="mt-6 text-gray-700 leading-relaxed">{maison.description}</p>
        <p className="mt-2 text-gray-500">Superficie : {maison.superficie} - Chambres : {maison.chambres}</p>
      </div>
      
      {/* Section de l'agent */}
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-primary mb-4">Agent Immobilier</h2>
        <p className="text-lg font-medium">Jemi MKZ</p>
        <p className="text-gray-600">Spécialiste en immobilier</p>
        <div className="mt-4">
          <p className="flex items-center text-gray-700">
            <Phone className="h-5 w-5 mr-2 text-primary" /> +243 970 000 123
          </p>
          <p className="flex items-center text-gray-700 mt-2">
            <Mail className="h-5 w-5 mr-2 text-primary" /> jemiMkze@agence.com
          </p>
        </div>
        
        {/* Champ pour laisser un message */}
        <textarea
          className="mt-4 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          rows={4}
          placeholder="Laissez un message à l'agent..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        
        <button className="mt-4 w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition">
          Contacter l'agent
        </button>
      </div>
    </div>
  );
};
