import request from './request';

export function fetchNote(data) {
  return request({
    url: '/notes',
    method: 'get',
    data: data,
  });
}

export function fetchNoteByUser(data) {
  console.log('fetchNoteByUser', data);
  return request({
    url: '/notes',
    method: 'get',
    params: {
      user: parseInt(data.userId),
    }
  });
}

export function addNoteByUser(data) {
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

