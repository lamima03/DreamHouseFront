import { MessageSquare } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-8 md:mb-0 md:mr-8">
            <h2 className="text-3xl font-bold mb-4">
              Avez-vous des questions ?
            </h2>
            <p className="text-blue-100 text-lg mb-6">
              Notre équipe est là pour vous aider et répondre à toutes vos questions
            </p>
            <div className="flex items-center gap-4">
              <MessageSquare className="h-6 w-6" />
              <span>Chat en direct avec notre équipe support</span>
            </div>
          </div>
          <div className="w-full md:w-96">
            <form className="bg-white rounded-lg p-6 shadow-lg">
              <div className="mb-4 flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-2 focus:outline-none rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <textarea
                  placeholder="Votre message"
                  className="w-full px-4 py-2 focus:outline-none rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                />

              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-secondary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};