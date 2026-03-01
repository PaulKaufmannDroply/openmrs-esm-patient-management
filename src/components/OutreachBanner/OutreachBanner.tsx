import React from 'react';
import { InlineNotification } from '@carbon/react';
import { useAppMode } from '../../hooks/useAppMode';

export function OutreachBanner() {
  const { mode, outreachLocation } = useAppMode();

  if (mode !== 'outreach') return null;

  return (
    <InlineNotification
      kind="info"
      title="Outreach-Modus"
      subtitle={outreachLocation ?? 'Kein Standort gewählt'}
      lowContrast
      hideCloseButton
    />
  );
}

export default OutreachBanner;
