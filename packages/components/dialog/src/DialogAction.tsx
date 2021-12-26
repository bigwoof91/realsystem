import React, { forwardRef, useCallback, useRef } from 'react';

import { Button, ButtonProps } from '@real-system/button';
import { makeTestId, useMergedRefs } from '@real-system/utils';

import { useDialogContext } from './DialogContext';

type DialogActionProps = ButtonProps;

const DialogAction = forwardRef<HTMLButtonElement, DialogActionProps>(
  function DialogAction({ onPress = undefined, ...restProps }, ref) {
    const { hide } = useDialogContext();

    const innerRef = useRef<HTMLButtonElement>(null);
    const combinedRef = useMergedRefs<HTMLButtonElement>(innerRef, ref);

    const handleOnPress = useCallback(
      (e) => {
        if (onPress) {
          return onPress(e);
        }
        !!hide && hide();
      },
      [onPress, hide]
    );

    return (
      <Button
        onPress={handleOnPress}
        data-testid={makeTestId('modal-action')}
        ref={combinedRef}
        {...restProps}
      />
    );
  }
);

export type { DialogActionProps };
export { DialogAction };
