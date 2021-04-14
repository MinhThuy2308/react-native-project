import request from './request';

export function fetchMenu(data) {
  return request({
    url: '/menus',
    method: 'get',
    data: data,
  });
}

export function fetchFoodByMenu(data) {
  return request({
    url: `/foods?menu=${data.menuId}`,
    method: 'get',
  });
}

export function fetchFoodDetail(data) {
  return request({
    url: `/foods/${data.foodId}`,
    method: 'get',
  });
}


