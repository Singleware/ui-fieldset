/**
 * Fieldset element.
 */
export declare class Element extends HTMLElement {
    /**
     * Element internals.
     */
    private internals;
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
     * Defines the specified state for all children in the element.
     * @param name State name.
     * @param state State value.
     */
    private defineState;
    /**
     * Element name.
     */
    name: string;
    /**
     * Unwind state.
     */
    unwind: boolean;
    /**
     * Determines whether the element is empty or not.
     */
    readonly empty: boolean;
    /**
     * Gets the element value.
     */
    /**
    * Sets the element value.
    */
    value: any;
    /**
     * Gets the required state.
     */
    /**
    * Sets the required state.
    */
    required: boolean;
    /**
     * Gets the read-only state.
     */
    /**
    * Sets the read-only state.
    */
    readOnly: boolean;
    /**
     * Gets the disabled state.
     */
    /**
    * Sets the disabled state.
    */
    disabled: boolean;
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
