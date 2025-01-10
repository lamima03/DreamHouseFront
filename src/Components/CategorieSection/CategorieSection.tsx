export function CategoriesSection() {
  const categories = [
    { title: "Maisons", image: "/src/assets/Maison.png" },
    { title: "Maisons", image: "/src/assets/Maison.png" },
    { title: "Appartements", image: "/src/assets/Appartement.png" },
    { title: "Villas", image: "/src/assets/Villa.png" },
    { title: "Bureaux", image: "/src/assets/Bureau.png" },
    { title: "Terrains", image: "/src/assets/Terrain.png" },
    
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto max-w-[78rem]">
        <h2 className="text-3xl font-bold text-center mb-10">Top catégories</h2>
        <div className="flex justify-center overflow-x-auto snap-x snap-mandatory gap-6 pb-4">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="flex-none w-72 snap-start"
            >
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

  