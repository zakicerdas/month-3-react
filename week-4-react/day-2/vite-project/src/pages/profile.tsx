import { useProfile } from "../hooks/useProfile";

export default function ProfilePage() {
  const { profile } = useProfile();

  return (
    <div className="min-h-screen w-full flex items-center justify-center 
      bg-gradient-to-b from-blue-900 via-blue-700 to-indigo-600 text-white px-4 py-10">
      
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 
        rounded-2xl shadow-2xl p-8 w-full max-w-md">
        
        {/* Foto Profil */}
        <div className="flex flex-col items-center text-center">
          <img
            src={profile.image}
            alt={profile.trainerName}
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-300 shadow-md"
          />
          <h1 className="mt-4 text-2xl font-bold text-white">{profile.trainerName}</h1>
          <p className="text-blue-200 text-sm">{profile.stableName}</p>
        </div>


        <div className="my-6 border-t border-white/20"></div>


        <div className="space-y-2 text-sm">
          <p>
            <span className="font-semibold text-blue-200">Email:</span> {profile.email}
          </p>
          <p>
            <span className="font-semibold text-blue-200">Contact:</span> {profile.contact}
          </p>
          <p className="italic text-blue-100 mt-2">{profile.bio}</p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-blue-200 mb-2">🏇 Favorite Uma</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {profile.favoriteUma.map((uma, i) => (
              <span
                key={i}
                className="bg-blue-800/50 text-sm px-3 py-1 rounded-full border border-white/20"
              >
                {uma}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-semibold text-blue-200 mb-2">🏆 Achievements</h3>
          <ul className="list-disc list-inside text-blue-100 text-sm space-y-1">
            {profile.achievements.map((ach, i) => (
              <li key={i}>{ach}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 text-center text-xs text-blue-200/80">
          Trainer ID: <span className="font-mono">{profile.id}</span>
        </div>
      </div>
    </div>
  );
}
