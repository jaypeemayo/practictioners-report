export abstract class ArrayHelper {
    //es6 find is not supported in ie, so we do this.
    static findIndex(array: any[], condition: any) {
        var index = -1;
        array.some((o, i) => {
            if (condition(o)) {
                index = i;
                return true;
            }
        });
        return index;
    }

    static updateArray(array, index, newValue) {
        var newState = [
            ...array.slice(0, index),
            newValue,
            ...array.slice(index + 1)
        ];
        return newState;
    }
}