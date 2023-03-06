import express from "express"
import logger from "morgan"
const app = express()

import reservationRouter from "./routes/reservation.js";
import playgroundRouter from "./routes/playground.js";

//setting
app.use(logger("dev"))


//router
app.use("/playground", playgroundRouter)
app.use("/reservation", reservationRouter)


const port = 9999
app.listen(port, console.log("server started"))



//코드 빌드 순서
//1. 위에서 아래 순서로 빌드를 한다.
//2. = 를 기준으로 오른쪽에서 왼쪽으로 치환한다.
//3. .은 하위 메소드를 호출하는 방법.
//4. ()는 함수들의 모음을 의미한다.
//5. ,는 그리고로 해석한다.