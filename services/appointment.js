import request from './request';

export function fetchAppointment(data) {
  return request({
    url: '/appointments',
    method: 'get',
    data: data,
  });
}