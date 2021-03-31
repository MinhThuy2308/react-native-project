import request from './request';

export function fetchDocumentDetail(data) {
  return request({
    url: '/documents/1',
    method: 'get',
    data: data,
  });
}