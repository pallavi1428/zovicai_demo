import Navbar from "@/components/Navbar";
import EffectsGrid from "@/components/EffectsGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <EffectsGrid />
    </div>
  );
}