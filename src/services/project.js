import request from '@/utils/request';
export function showDept(dimension) {
    return request(`/gjfx_show/datasize/action?dimension=${dimension}`,{
        method: "GET",
        credentials: 'include',
    });
  }