import * as Control from '@singleware/ui-control';
import { Properties } from './properties';
import { Element } from './element';
/**
 * Fieldset component class.
 */
export declare class Component<T extends Properties = Properties> extends Control.Component<T> {
    /**
     * Element instance.
     */
    private skeleton;
    /**
     * Gets the element.
     */
    readonly element: Element;
    /**
     * Gets the empty state.
     */
    readonly empty: boolean;
    /**
     * Gets the element name.
     */
    /**
    * Sets the element name.
    */
    name: string;
    /**
     * Gets the component value.
     */
    /**
    * Sets the component value.
    */
    value: any;
    /**
     * Gets the unwind state.
     */
    /**
    * Sets the unwind state.
    */
    unwind: boolean;
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
     * Reset all fields in the component to its initial values.
     */
    reset(): void;
    /**
     * Checks the component validity.
     * @returns Returns true when the component is valid, false otherwise.
     */
    checkValidity(): boolean;
}
