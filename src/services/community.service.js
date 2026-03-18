import api from './api';

export const getPosts = () => api.get('/community/posts');
export const createPost = (data) => api.post('/community/posts', data);
export const replyToPost = (postId, data) => api.post(`/community/posts/${postId}/reply`, data);
