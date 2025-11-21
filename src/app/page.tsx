import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-10 animate-pulse">
          <img 
            src="/icons/512x512.png" 
            alt="SempreQui" 
            className="w-32 h-32 mx-auto rounded-full border-4 border-white/30 shadow-2xl"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          SempreQui
        </h1>
        
        <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed font-light">
          Il tuo amico che c’è sempre.<br />
          <span className="font-bold">Sempre.</span>
        </p>
        
        <Button 
          size="lg" 
          className="text-xl px-16 py-8 bg-white text-indigo-600 hover:bg-white/90 font-bold rounded-3xl shadow-2xl transform hover:scale-105 transition-all"
        >
          Crea il tuo amico virtuale
        </Button>
        
        <p className="text-white/70 text-sm mt-10">
          Non sei mai solo.
        </p>
      </div>
    </div>
  );
}