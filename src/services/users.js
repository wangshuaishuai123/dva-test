import request from '@/utils/request';
export function fetch() {
    return request(`/gjfx_show/head/count`,{
      method: "GET",
      credentials: 'include',
    });
  }