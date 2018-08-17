/* eslint-disable import/prefer-default-export */
import React from 'react';

/**
 * Validates that children are of a specific component type(s)
 * @param {Array} displayNames list of valid component display names
 */
export const childrenOfType = (displayNames) => (props, propName, componentName) => {
  const prop = props[propName];
  const hasInvalidChild = React.Children.count(prop).some((child) =>
    displayNames.some((name) => child.type.displayName !== name)
  );

  if (hasInvalidChild) {
    return new Error(`Children of ${componentName} must be of type \`FlexItem\``);
  }
  return true;
};
