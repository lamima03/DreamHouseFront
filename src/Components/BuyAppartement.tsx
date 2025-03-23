import { useState } from "react";
import { Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const appartements = [
  {
    id: 1,
    image: "/Appartement1.webp",
    titre: "Appartement moderne à Kinshasa",
    prix: "150 000$",
    superficie: "120m²",
    chambres: 3,
    localisation: "Gombe, Kinshasa",
  },
  {
    id: 2,
    image: "/Appartement2.webp",
    titre: "Loft spacieux avec vue",
    prix: "200 000$",
    superficie: "180m²",
    chambres: 4,
    localisation: "Lingwala, Kinshasa",
  },
  {
    id: 3,
    image: "/Appartement3.webp",
    titre: "Studio meublé en centre-ville",
    prix: "80 000$",
    superficie: "45m²",
    chambres: 1,
    localisation: "Kalamu, Kinshasa",
  },
];

export const AcheterAppartement = () => {
  const [favoris, setFavoris] = useState<number[]>([]);

  const toggleFavori = (id: number) => {
    setFavoris((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="mt-24">
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-primary mb-6">
          Acheter un Appartement
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {appartements.map((appart) => (
            <div key={appart.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={appart.image} alt={appart.titre} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{appart.titre}</h2>
                <p className="text-gray-600">{appart.prix}</p>
                <p className="text-sm text-gray-500">{appart.superficie} - {appart.chambres} chambres</p>
                <p className="flex items-center text-sm text-gray-500 mt-2">
                  <MapPin className="h-4 w-4 mr-1 text-primary" />
                  {appart.localisation}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <Link
                    to={`/acheter/appartement/${appart.id}`}
                    className="text-white bg-primary px-4 py-2 rounded-lg text-sm hover:bg-primary-dark transition"
                  >
                    Voir Détails
                  </Link>
                  <button onClick={() => toggleFavori(appart.id)} className="text-primary">
                    <Heart className={`h-6 w-6 ${favoris.includes(appart.id) ? "fill-primary" : ""}`} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
