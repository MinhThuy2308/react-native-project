import request from './request';

export function fetchMenu(data) {
  return request({
    url: '/menus',
    method: 'get',
    data: data,
  });
}


