import { clientInstance } from './client';

export const fetchTrialData = async (value) => {
  return clientInstance.get('/', {
    params: {
      name: value || 'null',
    },
  });
};
