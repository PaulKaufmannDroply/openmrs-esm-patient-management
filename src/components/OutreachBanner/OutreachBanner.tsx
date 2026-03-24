import React, { useState } from 'react';
import { useConfig } from '@openmrs/esm-framework';
import { useAppMode } from '../../hooks/useAppMode';
import { type Config } from '../../config-schema';

export function OutreachBanner() {
  const { mode, outreachLocation, setOutreachLocation } = useAppMode();
  const { outreachLocations } = useConfig<Config>();
  const [inputValue, setInputValue] = useState(outreachLocation ?? '');

  if (mode !== 'outreach') return null;

  const listId = 'outreach-locations-list';
  const locations = outreachLocations ?? [];

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 1rem' }}>
      <span style={{ fontWeight: 600, whiteSpace: 'nowrap' }}>Outreach-Modus</span>
      <datalist id={listId}>
        {locations.map((loc) => (
          <option key={loc} value={loc} />
        ))}
      </datalist>
      <input
        list={listId}
        value={inputValue}
        placeholder="Standort wählen…"
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={() => {
          if (inputValue && inputValue !== outreachLocation) setOutreachLocation(inputValue);
        }}
        style={{ fontSize: '0.875rem', padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
      />
    </div>
  );
}

export default OutreachBanner;