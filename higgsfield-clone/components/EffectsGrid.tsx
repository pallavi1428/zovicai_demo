import EffectCard from "./EffectCard";
import { effects } from "@/data/effects";

export default function EffectsGrid() {
  return (
    <div className="bg-black min-h-screen text-white p-6">
      <h2 className="text-3xl font-bold mb-8">Explore Effects</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {effects.map((effect) => (
          <EffectCard
            key={effect.id}
            title={effect.title}
            image={effect.image}
            tag={effect.tag}
          />
        ))}
      </div>
    </div>
  );
}