import request from './request';

export function fetchVideo(data) {
  return request({
    url: '/videos',
    method: 'get',
    data: data,
  });
}