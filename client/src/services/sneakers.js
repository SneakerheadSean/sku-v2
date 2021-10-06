import api from './config'

export const getAllSneakers = async () => {
  const res = await api.get('./sneakers')
  return res.data
}

export const getOneSneaker = async (id) => {
  const res = await api.get(`./sneakers/${id}`)
  return res.data
}

export const addSneaker = async (sneakerData) => {
  const res = await api.post('/sneakers', { sneaker: sneakerData });
  return res.data;
};

export const deleteSneaker = async (id) => {
  const res = await api.delete(`/sneaker/${id}`);
  return res;
};

export const updateSneaker = async (id, sneakerData) => {
  const res = await api.put(`/foods/${id}`, { sneaker: sneakerData });
  return res.data;
};

// export const addCommentToSneaker = async (sneakerId, id) => {
//   const res = await api.put(`/flavors/${sneaker_id}/foods/${id}`);
//   return res.data;
// };