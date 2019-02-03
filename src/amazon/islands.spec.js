const islands = require('./islands')

describe("islands", () => {
    describe("example tests", () => {
      it("should return 4", () => {
        const map = [[0, 1, 0, 1], [0, 0, 0, 0], [1, 0, 1, 0], [1, 0, 1, 0]];
  
        expect(islands(map)).toEqual(4);
      });
  
      it("should return 2", () => {
        const map = [[1, 1, 1], [0, 0, 0], [0, 0, 1]];
  
        expect(islands(map)).toEqual(2);
      });
  
      it("should return 1", () => {
        const map = [[0, 1], [1, 1]];
  
        expect(islands(map)).toEqual(1);
      });
  
      it("should return 1", () => {
        const map = [[0, 1, 1, 1],
                     [0, 0, 1, 0],
                     [1, 0, 1, 0],
                     [1, 1, 1, 0]];
        expect(islands(map)).toEqual(1);
      });
    });
  });