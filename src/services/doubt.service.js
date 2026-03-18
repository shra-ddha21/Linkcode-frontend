import api from './api';

export const getDoubts = (courseId) => api.get(`/doubts/${courseId}`);
export const createDoubt = (data) => api.post('/doubts', data);
export const replyToDoubt = (doubtId, data) => api.post(`/doubts/${doubtId}/reply`, data);
