import Auto from "./Auto.js";

describe("Jugar", () => {
    it("Al enviar I deberia girar una sola vez", () => {
        const auto = new Auto();
        girar("I");
        expect(getPosicionFinal("I")).toEqual("0,0O");
    });
  });