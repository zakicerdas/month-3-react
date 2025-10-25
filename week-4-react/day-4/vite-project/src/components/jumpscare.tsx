import { type FC, useEffect, useRef } from "react";

interface JumpscareProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc?: string;
  autoHideMs?: number;
}

const Jumpscare: FC<JumpscareProps> = ({
  isOpen,
  onClose,
  imageSrc = "https://static.icy-veins.com/forum-files/news/84396-zenless-zone-zero-celebrates-yuzuha-with-stylish-ep-video-and-releases-version-21-banner-information.jpg",
  autoHideMs = 500,
}) => {
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    timeoutRef.current = window.setTimeout(() => {
      onClose();
    }, autoHideMs);

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [isOpen, autoHideMs, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black pointer-events-none overflow-hidden" aria-hidden>
      <img
        src={imageSrc}
        alt="jumpscare"
        className="w-full h-full object-cover animate-jumpscare-fade"
        draggable={false}
      />
    </div>
  );
};

export default Jumpscare;
