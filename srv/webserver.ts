/**
 * Created by thebwt on 10/6/16.
 */
import * as express from "express";
import {Express} from "~express/lib/express";
export class Webserver {
    app: express.Application = express();



    talk(): void {
        console.log("wat")
    }

    deploy(): void {
        console.log("deployed!!");
        this.app.listen(3000);
    }
}