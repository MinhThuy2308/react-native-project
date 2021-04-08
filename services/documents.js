import request from './request';

export function fetchActivityWithDay(data) {
  return request({
    url: `/documents`,
    method: 'get',
    params: {
      activity: data.activityId,
      category: data.categoryId
    }
  });
}


