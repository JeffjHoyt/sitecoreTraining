import { useEffect, useRef } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: 'weakAreas' | 'documents') => void;
}

export default function HamburgerMenu({ isOpen, onClose, onNavigate }: Props) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div className="menu-overlay" onClick={onClose} />
      <div className="menu-drawer" ref={menuRef}>
        <div className="menu-header">
          <span className="menu-title">Menu</span>
          <button className="menu-close" onClick={onClose}>✕</button>
        </div>
        <nav className="menu-nav">
          <button className="menu-item" onClick={() => { onNavigate('documents'); onClose(); }}>
            <span className="menu-icon">📄</span>
            Study Documents
          </button>
          <button className="menu-item" onClick={() => { onNavigate('weakAreas'); onClose(); }}>
            <span className="menu-icon">📊</span>
            Weak Areas
          </button>
        </nav>
      </div>
    </>
  );
}
