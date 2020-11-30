import request from "@/utils/request";

export function login(params) {
  return request({
    url: "/api/admin/login",
    method: "post",
    headers: {'Access-Control-Allow-Origin':'*'},
    params
  });
}
