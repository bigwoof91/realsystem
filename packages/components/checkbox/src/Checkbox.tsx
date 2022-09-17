import React, { forwardRef, useRef } from 'react';

import {
  useCheckbox,
  useInteractions,
  useToggleState,
} from '@real-system/a11y-library';
import { useMergedRef } from '@real-system/utils-library';
import { VisuallyHidden } from '@real-system/visually-hidden';

import { CheckboxControl, CheckboxLabel, CheckboxWrapper } from './components';
import type { CheckboxProps } from './types';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  props,
  ref
) {
  const interactionProps = useInteractions({ disabled: props.disabled });
  const state = useToggleState(props);
  const internalRef = useRef<HTMLInputElement>(null);
  const mergedRef = useMergedRef(internalRef, ref);

  const { inputProps } = useCheckbox(
    props,
    state,
    mergedRef as React.RefObject<HTMLInputElement>
  );

  const { invalid, helperText } = props;
  const disabled = props.disabled || props.readonly;

  return (
    <CheckboxWrapper
      disabled={disabled}
      helperText={helperText}
      invalid={invalid}
      {...interactionProps}>
      <VisuallyHidden as="div">
        <input {...inputProps} ref={mergedRef} />
      </VisuallyHidden>
      <CheckboxControl
        disabled={disabled}
        isSelected={state.isSelected}
        indeterminate={props.indeterminate}
        isInvalid={invalid?.status}
        {...interactionProps}
      />
      <CheckboxLabel disabled={disabled} required={props.required}>
        {props.children}
      </CheckboxLabel>
    </CheckboxWrapper>
  );
});

export type { CheckboxProps };
export { Checkbox };
