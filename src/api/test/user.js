import request from "@/utils/request"

export function getInfor(params){
    return request({
        url: '/index.php?g=api&m=staff&a=index',
        method: 'get',
        params
    })
}