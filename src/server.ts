import express, { Request, Response } from "express";
import path from "path";
import { Socket } from "socket.io";
import CoffeeMaker from "./CoffeeMaker";

const port = process.env.PORT || 3000;
const app = express();
app.set("port", port);
const network = require("http").Server(app);

const io = require("socket.io")(network);

app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

io.on("connection", (socket: Socket) => {
    console.log("A user has connected. Creating a new Coffee Maker");
    const coffeeMaker = new CoffeeMaker();
    const interval = setInterval( () => {
        coffeeMaker.update();
        io.emit("update", coffeeMaker.machineState());
    }, 500);

    socket.on("disconnect", () => {
        console.log("A user has disconnected");
        clearInterval(interval);
    });

    socket.on("pushPowerButton", async (msg: string) => {
        try {
            console.log(`pushPowerButton ${msg}`);
            coffeeMaker.pushPowerButton();
            io.emit("update", coffeeMaker.machineState());
        } catch (e) {
            console.log(e);
            io.emit("error", e);
        }
    });

    socket.on("addWater", async (msg: number) => {
        try {
            console.log("adding water");
            coffeeMaker.addWater(msg);
            io.emit("update", coffeeMaker.machineState());
        } catch (e) {
            console.log(e);
            io.emit("error", e);
        }
    });

    socket.on("addCoffeeGrounds", async (msg: number) => {
        try {
            console.log(`addCoffeeGrounds ${msg}`);
            coffeeMaker.addCoffeeGrounds(msg);
            io.emit("update", coffeeMaker.machineState());
        } catch (e) {
            console.log(e);
            io.emit("error", e);
        }
    });

    socket.on("pushBrewButton", async (msg: number) => {
        try {
            console.log(`pushBrewButton ${msg}`);
            coffeeMaker.pushBrewButton();
            io.emit("update", coffeeMaker.machineState());
        } catch (e) {
            console.log(e);
            io.emit("error", e);
        }
    });

    socket.on("pourCoffee", async (msg: number) => {
        try {
            console.log(`pouring Coffee ${msg}`);
            coffeeMaker.pourCoffee(msg);
            io.emit("coffee", "Making Coffee, Hold on");
        } catch (e) {
            console.log(e);
            io.emit("error", e);
        }
    });
});

network.listen(port, () => {
    console.log(`listening on *:${port}`);
});
