import request from "@/utils/request";

export function getInfor(params) {
  return request({
    // url: "/weather_mini",
    url: "/index.php",
    method: "post",
    params
  });
}
