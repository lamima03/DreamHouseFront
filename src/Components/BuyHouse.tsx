// import { useState } from "react";
// import { Heart, MapPin } from "lucide-react";
// import { Link } from "react-router-dom";

// const maisons = [
//   {
//     id: 1,
//     image: "/Maison1.jpeg",
//     titre: "Villa moderne avec piscine",
//     prix: "300 000$",
//     superficie: "250m²",
//     chambres: 5,
//     localisation: "Gombe, Kinshasa",
//   },
//   {
//     id: 2,
//     image: "/Maison2.jpeg",
//     titre: "Maison familiale spacieuse",
//     prix: "220 000$",
//     superficie: "200m²",
//     chambres: 4,
//     localisation: "Limete, Kinshasa",
//   },
//   {
//     id: 3,
//     image: "/Maison3.jpeg",
//     titre: "Petite maison de charme",
//     prix: "150 000$",
//     superficie: "120m²",
//     chambres: 3,
//     localisation: "Ngaliema, Kinshasa",
//   },
//   {
//     id: 4,
//     image: "/Maison4.jpeg",
//     titre: "Villa moderne avec piscine",
//     prix: "300 000$",
//     superficie: "250m²",
//     chambres: 5,
//     localisation: "Gombe, Kinshasa",
//   },
//   {
//     id: 5,
//     image: "/Maison5.jpeg",
//     titre: "Maison familiale spacieuse",
//     prix: "220 000$",
//     superficie: "200m²",
//     chambres: 4,
//     localisation: "Limete, Kinshasa",
//   },
//   {
//     id: 6,
//     image: "/Maison6.jpeg",
//     titre: "Petite maison de charme",
//     prix: "150 000$",
//     superficie: "120m²",
//     chambres: 3,
//     localisation: "Ngaliema, Kinshasa",
//   },
// ];

// export const AcheterMaison = () => {
//   const [favoris, setFavoris] = useState<number[]>([]);

//   const toggleFavori = (id: number) => {
//     setFavoris((prevFavoris) =>
//       prevFavoris.includes(id)
//         ? prevFavoris.filter((favId) => favId !== id)
//         : [...prevFavoris, id]
//     );
//   };

//   return (
//     <div className="mt-24">
//       <div className="max-w-7xl mx-auto p-4">
//         <h1 className="text-3xl font-bold text-primary mb-6">Acheter une Maison</h1>

//         <div className="grid md:grid-cols-3 gap-6">
//           {maisons.map((maison) => (
//             <div key={maison.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <img
//                 src={maison.image}
//                 alt={maison.titre}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold">{maison.titre}</h2>
//                 <p className="text-gray-600">{maison.prix}</p>
//                 <p className="text-sm text-gray-500">
//                   {maison.superficie} - {maison.chambres} chambres
//                 </p>
//                 <p className="flex items-center text-sm text-gray-500 mt-2">
//                   <MapPin className="h-4 w-4 mr-1 text-primary" />
//                   {maison.localisation}
//                 </p>
//                 <div className="flex justify-between items-center mt-4">
//                   <Link
//                     to={`/acheter/maison/${maison.id}`}
//                     className="text-white bg-primary px-4 py-2 rounded-lg text-sm hover:bg-primary-dark transition"
//                   >
//                     Voir Détails
//                   </Link>
//                   <button
//                     onClick={() => toggleFavori(maison.id)}
//                     className="text-primary"
//                   >
//                     <Heart
//                       className={`h-6 w-6 ${
//                         favoris.includes(maison.id) ? "fill-primary" : ""
//                       }`}
//                     />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


import { useState } from "react";
import { Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { maisons } from "./Data/Maison";

 // Importation des maisons

export const AcheterMaison = () => {
  const [favoris, setFavoris] = useState<number[]>([]);

  const toggleFavori = (id: number) => {
    setFavoris((prevFavoris) =>
      prevFavoris.includes(id)
        ? prevFavoris.filter((favId) => favId !== id)
        : [...prevFavoris, id]
    );
  };

  return (
    <div className="mt-24">
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-primary mb-6">Acheter une Maison</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {maisons.map((maison) => (
            <div key={maison.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={maison.images[0]} alt={maison.titre} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{maison.titre}</h2>
                <p className="text-gray-600">{maison.prix}</p>
                <p className="text-sm text-gray-500">
                  {maison.superficie} - {maison.chambres} chambres
                </p>
                <p className="flex items-center text-sm text-gray-500 mt-2">
                  <MapPin className="h-4 w-4 mr-1 text-primary" />
                  {maison.localisation}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <Link
                    to={`/maisons/${maison.id}`} // 🔹 Génération dynamique de l'URL
                    className="text-white bg-primary px-4 py-2 rounded-lg text-sm hover:bg-primary-dark transition"
                  >
                    Voir Détails
                  </Link>
                  <button onClick={() => toggleFavori(maison.id)} className="text-primary">
                    <Heart className={`h-6 w-6 ${favoris.includes(maison.id) ? "fill-primary" : ""}`} />
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
