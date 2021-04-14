import request from './request';

export function updateUserById(data) {
  return request({
    url: `/users/${data.userId}`,
    method: 'put',
    data: data,
  });
}
