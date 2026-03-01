import React from 'react';
import { ComboBox } from '@carbon/react';
import { useConfig } from '@openmrs/esm-framework';
import { useAppMode } from '../../hooks/useAppMode';
import { Config } from '../../config-schema';

export function OutreachBanner() {
  const { mode, outreachLocation, setOutreachLocation } = useAppMode();
  const { outreachLocations } = useConfig<Config>();

  if (mode !== 'outreach') return null;

  const items = outreachLocations.map((loc) => ({ id: loc, label: loc }));

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 1rem' }}>
      <span style={{ fontWeight: 600, whiteSpace: 'nowrap' }}>Outreach-Modus</span>
      <ComboBox
        id="outreach-location-selector"
        titleText=""
        placeholder="Standort wählen…"
        items={items}
        itemToString={(item) => item?.label ?? ''}
        selectedItem={outreachLocation ? { id: outreachLocation, label: outreachLocation } : null}
        onChange={({ selectedItem, inputValue }) => {
          const value = selectedItem?.label ?? inputValue ?? '';
          if (value) setOutreachLocation(value);
        }}
        size="sm"
      />
    </div>
  );
}

export default OutreachBanner;