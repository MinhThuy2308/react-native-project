import request from './request';

export function fetchActivityWithDay(data) {
  return request({
    url: `/documents?activity=${data.activityId}&category=${data.categoryId}`,
    method: 'get',
  });
}


