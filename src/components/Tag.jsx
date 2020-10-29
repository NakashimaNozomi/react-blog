import React from 'react';
import { Chip } from '@material-ui/core';

export const Tag = (props) => {
  const tag = props.tag;
  const handleOnClick = props.handleOnClick;

  return (
    <Chip
      label={tag.name}
      onClick={() => {
        console.info('tagです');
      }}
    />
  );
};
