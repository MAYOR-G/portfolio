import React from 'react';

interface CrtOverlayProps {
  enabled?: boolean;
}

export const CrtOverlay: React.FC<CrtOverlayProps> = ({ enabled = true }) => {
  if (!enabled) return null;

  return (
    <>
      <div className="crt-overlay" aria-hidden="true" />
      <div className="crt-vignette" aria-hidden="true" />
    </>
  );
};
