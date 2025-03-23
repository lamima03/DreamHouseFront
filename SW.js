const CACHE_NAME = "dreamhouse-cache-v1";
const ASSETS_TO_CACHE = [
  "/", // La page d'accueil
  "/index.html",
  "/vite.svg", // Icône
  "/manifest.json",
  "/src/main.tsx", // Entrée principale
  "/src/assets/logo.png", // Ajoute ton logo ici
  "/src/styles/global.css", // Si tu as un fichier CSS global
];

// 📌 Installation du Service Worker et mise en cache des fichiers statiques
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Mise en cache des fichiers...");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 📌 Interception des requêtes et gestion du mode hors ligne
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch(() => {
          console.warn("⚠️ Mode hors ligne : contenu non trouvé dans le cache.");
        })
      );
    })
  );
});

// 📌 Mise à jour du cache lorsque de nouveaux fichiers sont disponibles
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("🗑️ Suppression de l'ancien cache :", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
//Ajoute ou vérifie ton fichier sw.js (dans public/) :
self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("dreamhouse-cache-v1").then((cache) => {
        return cache.addAll(["/", "/index.html", "/manifest.json", "/icons/icon-192x192.png"]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });

  self.addEventListener("fetch", (event) => {
    const url = new URL(event.request.url);
  
    // Ignore les fichiers Vite/WebSocket
    if (url.pathname.startsWith("/@vite/") || url.pathname.startsWith("/@react-refresh")) {
      return;
    }
  
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
  });