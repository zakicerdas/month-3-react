import React, { type FC, useCallback, useState } from "react";
import Jumpscare from "./jumpscare";


const LAYOUT: number[][] = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1],
  [2,0,0,0,0,1,0,0,0,1,0,3,1],
  [1,1,1,0,1,1,0,1,0,1,0,1,1],
  [1,0,0,0,0,0,0,1,0,0,0,0,1],
  [1,0,1,1,1,1,0,1,1,1,1,0,1],
  [1,0,0,0,0,0,0,0,0,0,1,0,1],
  [1,1,1,1,0,1,1,1,1,0,1,0,1],
  [1,0,0,0,0,0,0,0,1,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1],
];

const CELL = 32;

const Maze: FC = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [showJumpscare, setShowJumpscare] = useState(false);
  const [lastHitAt, setLastHitAt] = useState<number | null>(null);
  const [reachedFinish, setReachedFinish] = useState(false);

  const handleWallHit = useCallback(() => {
    if (!isStarted || reachedFinish) return;
    const now = Date.now();
    if (lastHitAt && now - lastHitAt < 600) return;
    setLastHitAt(now);
    setShowJumpscare(true);
  }, [isStarted, lastHitAt, reachedFinish]);

  const handleFinishEnter = useCallback(() => {
    if (!isStarted || reachedFinish) return;
    setReachedFinish(true);
    setIsStarted(false);
    alert("🎉 Selamat, Oniichan! Kamu berhasil mencapai FINISH!");
  }, [isStarted, reachedFinish]);

  const resetGame = useCallback(() => {
    setIsStarted(false);
    setShowJumpscare(false);
    setLastHitAt(null);
    setReachedFinish(false);
  }, []);

  const rows = LAYOUT.length;
  const cols = LAYOUT[0].length;
  const width = cols * CELL;
  const height = rows * CELL;

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-start py-8 bg-gradient-to-b from-slate-100 to-slate-200">
        <h1 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-3">Maze — Demo</h1>

        <div className="flex gap-3 mb-4">
          <button
            onClick={() => {
              resetGame();
              setIsStarted(true);
            }}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md shadow"
          >
            Start
          </button>
          <button
            onClick={resetGame}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md shadow"
          >
            Reset
          </button>
        </div>

        <div
          className="relative bg-white rounded-lg shadow p-2 border border-gray-200"
          style={{ width, height }}
        >
          {LAYOUT.map((row, rIdx) =>
            row.map((cell, cIdx) => {
              const key = `${rIdx}-${cIdx}`;
              const left = cIdx * CELL;
              const top = rIdx * CELL;

              const style: React.CSSProperties = {
                left,
                top,
                width: CELL,
                height: CELL,
              };

              if (cell === 1) {
                return (
                  <div
                    key={key}
                    onMouseEnter={handleWallHit}
                    title="Wall"
                    className="absolute bg-slate-800 border border-slate-900"
                    style={style}
                  />
                );
              } else if (cell === 2) {
                return (
                  <div
                    key={key}
                    className="absolute flex items-center justify-center bg-green-100 border border-green-300"
                    style={style}
                    title="Start"
                  >
                    <div className="text-[10px] font-bold text-green-800 select-none">START</div>
                  </div>
                );
              } else if (cell === 3) {
                return (
                  <div
                    key={key}
                    onMouseEnter={handleFinishEnter}
                    className="absolute flex items-center justify-center bg-yellow-100 border border-yellow-300"
                    style={style}
                    title="Finish"
                  >
                    <div className="text-[10px] font-bold text-yellow-800 select-none">FINISH</div>
                  </div>
                );
              } else {
                return (
                  <div
                    key={key}
                    className="absolute bg-gray-50 border border-gray-100"
                    style={style}
                  />
                );
              }
            })
          )}
        </div>

        <p className="mt-4 text-sm text-gray-600 max-w-xl text-center">
         jangan sentuh tembok!
        </p>
      </div>

      <Jumpscare
        isOpen={showJumpscare}
        onClose={() => setShowJumpscare(false)}
        autoHideMs={500}
        imageSrc="https://static.icy-veins.com/forum-files/news/84396-zenless-zone-zero-celebrates-yuzuha-with-stylish-ep-video-and-releases-version-21-banner-information.jpg"
      />
    </>
  );
};

export default Maze;
