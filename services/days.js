import request from './request';

export function fetchDay(data) {
  return request({
    url: '/categories',
    method: 'get',
    data: data,
  });
}


