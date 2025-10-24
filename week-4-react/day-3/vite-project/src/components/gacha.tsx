import { useSelector } from 'react-redux';
import { type RootState } from '../apps/store';

export default function GachaCards() {
  const banners = useSelector((state: RootState) => state.gacha.items);

  if (!banners || banners.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {banners.slice(0, 2).map((b) => (
        <div key={b.id} className=" overflow-hidden">
          <img src={b.image_url} alt={b.card_type} className="w-full h-48 object-cover" />
          <div className="p-3">
            <h3 className="font-semibold">{b.pickups[0]?.chara_data.name_en}</h3>
            <p className="text-sm text-gray-600">{b.pickups[0]?.title_en}</p>
          </div>
        </div>
      ))}
    </div>
  );
}