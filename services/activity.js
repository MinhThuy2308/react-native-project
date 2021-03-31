import request from './request';

export function fetchActivity(data) {
  return request({
    url: '/activities',
    method: 'get',
    data: data,
  });
}