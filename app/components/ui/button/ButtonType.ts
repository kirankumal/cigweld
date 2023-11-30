import {HTMLProps} from 'react';

export interface ButtonType {
  id: string;
  type: 'button' | 'submit';
  className: HTMLProps<HTMLElement>['className'];
  disabled: boolean;
  children: React.ReactNode;
  isLoading: boolean;
  variant?: 'primary' | 'ghost' | 'text';
  size?: 'lg' | 'sm' | 'xs';
}
