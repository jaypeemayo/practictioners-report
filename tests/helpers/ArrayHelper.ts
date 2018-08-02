import { ArrayHelper } from "../../src/helpers/ArrayHelper";


it('should return 1 index', () => {
    let array = [{ a: 1, b: 2, c: 3 }, { a: 2, b: 3, c: 4 }, { a: 5, b: 6, c: 7 }];
    expect(ArrayHelper.findIndex(array, o => o.a === 2)).toBe(1);
});

it('should return -1 index', () => {
    let array = [{ a: 1, b: 2, c: 3 }, { a: 2, b: 3, c: 4 }, { a: 5, b: 6, c: 7 }];
    expect(ArrayHelper.findIndex(array, o => o.a === 11)).toBe(-1);
});

it('should update the 1st index with new value', () => {
    let array = [{ a: 1, b: 2, c: 3 }, { a: 2, b: 3, c: 4 }, { a: 5, b: 6, c: 7 }];
    expect(ArrayHelper.updateArray(array, 1, { a: 22, b: 33, c: 44 }))
        .toEqual([{ a: 1, b: 2, c: 3 }, { a: 22, b: 33, c: 44 }, { a: 5, b: 6, c: 7 }]);
});



