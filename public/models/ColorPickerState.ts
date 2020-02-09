/**
 * class to define state for color
 */
export class ColorPickerState {
    /**
     * check either picker should open or not
     */
    open : boolean = false;

    /**
     * stores the picked color
     */
    color: string = "#fff";
    
    /**
     * Stores the color name to update
     */
    name: string;
}