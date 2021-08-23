import { Role } from '../../../types/types';

export const rows: Array<Role> = [
  {
    id: 1,
    name: 'admin',
    description: 'can view, edit, and delete all resources',
  },

  {
    id: 2,
    name: 'basic',
    description: 'can view, edit, and delete own resources',
  },
];
