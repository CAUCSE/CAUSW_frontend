import React, { MouseEventHandler } from 'react';
import { ReactComponent as Icon } from '@/assets/icons/notifications.svg';
import { ReactComponent as ActiveIcon } from '@/assets/icons/notifications_active.svg';

export const NotificationIcon: React.FC<{ className?: string; active: boolean; onClick?: MouseEventHandler }> =
  React.memo(({ active, className, onClick }) =>
    active ? <ActiveIcon className={className} onClick={onClick} /> : <Icon className={className} onClick={onClick} />,
  );
