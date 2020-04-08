export default {
    'GET /gjfx_show/head/count': {
        code:200,
        data:{
            "fieldSum":"111",
            "dataSum":"2222",
            "tableSum":"3333",
            "tableDel":"4444",
            "deptSum":"7559"
        },
        message:"Success"
    },
    'GET /gjfx_show/datasize/action': {
        code:200,
        data:[{
            deptName: "小听听",
            number: "2222222"
        },{
            deptName: "大听听",
            number: "333333333"
        }],
        message:"Success"
    },
}