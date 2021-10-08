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
  const res = await api.delete(`/sneakers/${id}`);
  return res;
};

export const updateSneaker = async (id, sneakerData) => {
  const res = await api.put(`/sneakers/${id}`, { sneaker: sneakerData });
  return res.data;
};

export const addCommentToSneaker = async (sneakerData, id) => {
  const res = await api.post(`/sneakers/${id}/comments`, { comment: sneakerData });
  return res.data;
};