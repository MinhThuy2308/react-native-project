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

export function addFavFoodByUser(data) {
  return request({
    url: '/fav-foods',
    method: 'post',
    data: data,
    params: {
      user: parseInt(data.userId),
    }
  });
}

export function fetchFavFoodByUser(data) {
  console.log('fetchFavFoodByUser', data);
  return request({
    url: '/fav-foods',
    method: 'get',
    params: {
      user: parseInt(data.userId),
    }
  });
}

export function fetchDeleteFavFood(data) {
  return request({
    url: `/favfood/${data.foodId}`,
    method: 'delete',
  });
}



