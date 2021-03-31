import request from './request';

export function fetchDayDetail(data) {
  return request({
    url: '/documents/1',
    method: 'get',
    data: data,
  });
}