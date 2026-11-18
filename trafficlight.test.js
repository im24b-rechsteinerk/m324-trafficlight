//import module traffic light
const app = require("./trafficlight");

//test suite
describe('test suite traffic light', () => {
    //case red light (given)
    it(`case red light`, () => {
        expect(app.trafficLight("red"))
            .toBe("DON'T WALK!");
    });

    //case orange light
    it(`case orange light`, () => {
        expect(app.trafficLight("orange"))
            .toBe("ATTENTION!");
    });

    //case green light
    it(`case green light`, () => {
        expect(app.trafficLight("green"))
            .toBe("WALK!");
    });

    //case no argument: traffic light is out of order
    it(`case no color (out of order)`, () => {
        expect(app.trafficLight())
            .toBe("OUT OF ORDER");
    });

    //case unknown color: no message is returned
    it(`case unknown color`, () => {
        expect(app.trafficLight("blue"))
            .toBeUndefined();
    });

    //case upper case: colors are case-sensitive
    it(`case upper case color`, () => {
        expect(app.trafficLight("RED"))
            .toBeUndefined();
    });
});
