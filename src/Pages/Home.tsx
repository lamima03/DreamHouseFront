import { SearchBar } from '../Components/SearchBar/SearchBar';
import { Stats } from '../Components/Stats/Stats';
import { Services } from '../Components/Services/Services';
import { Benefits } from '../Components/Benefits/Benefits';
import { FeaturedListings } from '../Components/FeaturedListings/FeaturedListings';
import { Testimonials } from '../Components/Testimonials/TestimonialsSection';
import {FAQ} from '../Components/FAQ/FAQ'
import { ContactSection } from '../Components/ContactSection/ContactSection';
import { CategoriesSection } from '../Components/CategorieSection/CategorieSection'
import { CallToAction } from '../Components/CallToAction/CallToAction';
import { useState } from 'react';


export const Home = () => {

    const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendDataToBackend = async () => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("../components/Data/Maison.json"); // Charger les données locales
      const maisons = await response.json();

      console.log("Données chargées  hhhffhfh:");

      const backendResponse = await fetch("http://localhost:3333/appartement", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(maisons),
      });

      if (!backendResponse.ok) {
        throw new Error("Erreur lors de l'envoi des données");
      }

      setMessage("✅ Données envoyées avec succès !");
      console.log("Données envoyées avec succès !");
    } catch (error) {
      setMessage("❌ Erreur lors de l'envoi des données");
      console.error("Erreur :", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <main>
      
      <div 
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl text-white font-bold text-center mb-6">
            Trouvez votre bien immobilier de rêve
          </h1>
          <p className="text-xl text-white text-center mb-8">
            Des milliers de propriétés vous attendent
          </p>
          <SearchBar />
        </div>
      </div>
      <Stats />
      <CategoriesSection />
      <Services />
      <CallToAction/>
      <Benefits />
      
      <FeaturedListings />
      <Testimonials />
      <FAQ />
      
      <ContactSection />
    
    <section className='py-8'>

    <div className="p-6 text-center">
        
      <button
        className="bg-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={sendDataToBackend}
        disabled={loading}
      >
        {loading ? "Envoi en cours..." : "Envoyer les données"}

      </button>
      {message && <p className="mt-4 text-lg font-semibold">{message}</p>}
    </div>

    </section>
      
    </main>
  );
};