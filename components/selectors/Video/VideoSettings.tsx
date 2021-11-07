import React from 'react';

import { ToolbarSection, ToolbarItem } from '../../editor';

export const VideoSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection title="Image">
        <ToolbarItem
          full={true}
          propKey="videoId"
          type="text"
          label="Image URL"
        />
      </ToolbarSection>
    </React.Fragment>
  );
};
