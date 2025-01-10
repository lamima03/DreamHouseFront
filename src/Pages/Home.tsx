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


export const Home = () => {
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
    
      
    </main>
  );
};