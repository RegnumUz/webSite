export const increase = () => ({
  type: 'INCREASE',
});

export const increaseWithValue = (payload) => ({
  type: 'PAYLOAD',
  payload,
});

export const decrease = () => ({
  type: 'DECREASE',
});
