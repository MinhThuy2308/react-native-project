import request from './request';

export function login(data) {
  return request({
    url: '/auth/local',
    method: 'post',
    data: data,
  });
}

export function register(data) {
  return request({
    url: '/auth/local/register',
    method: 'post',
    data: data,
  });
}