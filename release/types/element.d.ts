import * as Control from '@singleware/ui-control';
/**
 * Fieldset element.
 */
export declare class Element extends Control.Element {
    /**
     * Add all values from the specified child into the given entity.
     * @param entity Target entity.
     * @param child Child element.
     */
    private addValues;
    /**
     * Add the value from the specified child into the given entity.
     * @param entity Target entity.
     * @param child Child element.
     */
    private addValue;
    /**
     * Change event handler.
     */
    private changeHandler;
    /**
     * Default constructor.
     */
    constructor();
    /**
     * Determines whether the element is empty or not.
     */
    readonly empty: boolean;
    /**
     * Gets the element type.
     */
    /**
    * Sets the element type.
    */
    type: string;
    /**
     * Gets the element name.
     */
    /**
    * Sets the element name.
    */
    name: string;
    /**
     * Gets the element value.
     */
    /**
    * Sets the element value.
    */
    value: any;
    /**
     * Gets the unwind state of the element.
     */
    /**
    * Sets the unwind state of the element.
    */
    unwind: boolean;
    /**
     * Gets the required state of the element.
     */
    /**
    * Sets the required state of the element.
    */
    required: boolean;
    /**
     * Gets the read-only state of the element.
     */
    /**
    * Sets the read-only state of the element.
    */
    readOnly: boolean;
    /**
     * Gets the disabled state of the element.
     */
    /**
    * Sets the disabled state of the element.
    */
    disabled: boolean;
    /**
     * Gets the element orientation.
     */
    /**
    * Sets the element orientation.
    */
    orientation: string;
    /**
     * Move the focus to the first child that can be focused.
     */
    focus(): void;
    /**
     * Reset all fields in the element to its initial values.
     */
    reset(): void;
    /**
     * Checks the element validity.
     * @returns Returns true when the element is valid, false otherwise.
     */
    checkValidity(): boolean;
}
