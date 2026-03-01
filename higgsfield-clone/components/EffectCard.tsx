type EffectCardProps = {
  title: string;
  image: string;
  tag?: string;
};

export default function EffectCard({ title, image, tag }: EffectCardProps) {
  return (
    <div className="relative rounded-xl overflow-hidden group cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover group-hover:scale-105 transition duration-300"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

      {/* Title */}
      <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
        {title}
      </div>

      {/* Tag */}
      {tag && (
        <span className="absolute top-3 right-3 bg-white/20 backdrop-blur px-3 py-1 text-xs rounded-full text-white">
          {tag}
        </span>
      )}
    </div>
  );
}