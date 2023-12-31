import * as React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@twilio-paste/core/box';
import { ChevronDisclosureIcon } from '@twilio-paste/icons/cjs/ChevronDisclosureIcon';

export const SideNavDisclosureButton = React.forwardRef((props, ref) => {
  return (
    <Box
      as="button"
      position="relative"
      display="flex"
      alignItems="center"
      width="100%"
      padding="space40"
      fontFamily="fontFamilyText"
      fontSize="inherit"
      fontWeight="fontWeightNormal"
      textAlign="left"
      color="colorText"
      backgroundColor="colorBackground"
      border="none"
      textDecoration="none"
      transition="0.1s background-color ease-in-out"
      outline="none"
      borderRadius="borderRadius10"
      appearance="none"
      ref={ref}
      {...props}
      _hover={{
        cursor: 'pointer',
        textDecoration: 'underline',
      }}
      _focus={{
        boxShadow: 'shadowFocus',
        textDecoration: 'underline',
      }}
      _expanded={{
        fontWeight: 'fontWeightBold',
      }}
    >
      <Box
        as="span"
        alignItems="center"
        display="flex"
        marginRight="space20"
        transform={props['aria-expanded'] === 'false' ? 'rotate(0deg)' : 'rotate(90deg)'}
        transition="transform 100ms ease-out"
      >
        <ChevronDisclosureIcon color="colorTextIcon" decorative size="sizeIcon10" />
      </Box>
      <Box flexGrow={1}>{props.children}</Box>
    </Box>
  );
});
SideNavDisclosureButton.propTypes = {
  children: PropTypes.node.isRequired,
  'aria-expanded': PropTypes.string.isRequired,
};
