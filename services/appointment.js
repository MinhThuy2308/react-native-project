import request from './request';

export function fetchNote(data) {
  return request({
    url: '/notes',
    method: 'get',
    data: data,
  });
}

export function fetchUpdateNote(data) {
  return request({
    url: '/notes',
    method: 'post',
    data: data,
  });
}

export function fetchDeleteNote(data) {
  return request({
    url: `/notes/${data.noteId}`,
    method: 'delete',
  });
}

