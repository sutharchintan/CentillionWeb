/**
 * interface for message properties and action
 */
export interface MessageInterface {
    /**
     * show message action
     */
    showMessage: (variant: string, message: string) => void;
}