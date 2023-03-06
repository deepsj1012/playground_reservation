//1.
import express from "express";
const router = express.Router()

//reservation과 관련된 api를 작성(crud)

//playground 정보를 가져오는 api
router.get("/all",(req, res) => {
    res.json({
        msg : "reservation get all data"
    })
})

router.post("/create",(req, res) => {
    res.json({
        msg : "create a reservation"
    })
})

router.put("/update",(req, res) => {
    res.json({
        msg : "update a reservation"
    })
})

router.delete("/delete", (req, res) => {
    res.json({
        msg : "delete a reservation"
    })
})











//2.
export default router