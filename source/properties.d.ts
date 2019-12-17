/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Fieldset properties interface.
 */
export interface Properties {
  /**
   * Fieldset classes.
   */
  class?: string;
  /**
   * Fieldset slot.
   */
  slot?: string;
  /**
   * Fieldset type.
   */
  type?: string;
  /**
   * Fieldset name.
   */
  name?: string;
  /**
   * Fieldset value.
   */
  value?: any;
  /**
   * Determines whether the fieldset properties must be unrolled.
   */
  unwind?: boolean;
  /**
   * Determines whether the fieldset is required or not.
   */
  required?: boolean;
  /**
   * Determines whether the fieldset is read-only or not.
   */
  readOnly?: boolean;
  /**
   * Determines whether the fieldset is disabled or not.
   */
  disabled?: boolean;
  /**
   * Fieldset orientation.
   */
  orientation?: string;
  /**
   * Fieldset data.
   */
  data?:DOMStringMap;
  /**
   * Fieldset children.
   */
  children?: {};
  /**
   * Change event.
   */
  onChange?: (event: Event) => void;
}
