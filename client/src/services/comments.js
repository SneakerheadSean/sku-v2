import api from './config';

export const getAllComments = async () => {
  const res = await api.get('./comments')
  return res.data
}

export const getOneComment = async (id) => {
  const res = await api.get(`./comments/${id}`)
  return res.data
}

export const addComment = async (commentData) => {
  const res = await api.post('/comments', { comment: commentData });
  return res.data;
};

export const deleteComment = async (id) => {
  const res = await api.delete(`/comments/${id}`);
  return res;
};

export const updateComment = async (id, commentData) => {
  const res = await api.put(`/comments/${id}`, { comment: commentData });
  return res.data;
};