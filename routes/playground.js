import express from "express";
const router = express.Router()

//playground와 관련된 api를 작성(crud)

//playground 정보를 가져오는 api
router.get("/", (req, res) => {
    res.json({
        msg : "playground get all data"
    })
})
//playground 정보를 생성하는 api
router.post("/create", (req, res) => {
    res.json({
        msg : "create a playground"
    })
})
//playground 정보를 수정하는 api
router.put("/", (req, res) => {
    res.json({
        msg : "update a playground"
    })
})
//playground 정보를 삭제하는 api
router.delete("/", (req, res) => {
    res.json({
        msg : "delete a playground"
    })
})







export default router