/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as JSX from '@singleware/jsx';

/**
 * Fieldset element.
 */
@JSX.Describe('sw-fieldset')
@Class.Describe()
export class Element extends HTMLElement {
  /**
   * Element internals.
   */
  @Class.Private()
  private internals = {
    required: false,
    readOnly: false,
    disabled: false
  };

  /**
   * Add all values from the specified child into the given entity.
   * @param entity Target entity.
   * @param child Child element.
   */
  @Class.Private()
  private addValues(entity: any, child: any): void {
    const values = child.value;
    for (const name in values) {
      if (values[name] !== void 0) {
        entity[name] = values[name];
      }
    }
  }

  /**
   * Add the value from the specified child into the given entity.
   * @param entity Target entity.
   * @param child Child element.
   */
  @Class.Private()
  private addValue(entity: any, child: any): void {
    if (child.name) {
      const value = child.value;
      if (value !== void 0) {
        entity[child.name] = value;
      }
    }
  }

  /**
   * Defines the specified state for all children in the element.
   * @param name State name.
   * @param state State value.
   */
  @Class.Private()
  private defineState(name: string, state: boolean): void {
    for (const child of this.children as any) {
      if (name in child) {
        child[name] = state;
      }
    }
  }

  /**
   * Element name.
   */
  @Class.Public()
  public name: string = '';

  /**
   * Unwind state.
   */
  @Class.Public()
  public unwind: boolean = false;

  /**
   * Determines whether the element is empty or not.
   */
  @Class.Public()
  public get empty(): boolean {
    for (const child of this.children as any) {
      if (!child.empty) {
        return false;
      }
    }
    return true;
  }

  /**
   * Gets the element value.
   */
  @Class.Public()
  public get value(): any {
    const entity = {} as any;
    for (const child of this.children as any) {
      if (!child.empty) {
        if (child.unwind) {
          this.addValues(entity, child);
        } else {
          this.addValue(entity, child);
        }
      }
    }
    return entity;
  }

  /**
   * Sets the element value.
   */
  public set value(value: any) {
    for (const child of this.children as any) {
      if (child.unwind) {
        child.value = value;
      } else if (child.name in value) {
        child.value = value[child.name];
      }
    }
  }

  /**
   * Gets the required state.
   */
  @Class.Public()
  public get required(): boolean {
    return this.internals.required;
  }

  /**
   * Sets the required state.
   */
  public set required(state: boolean) {
    this.defineState('required', (this.internals.required = state));
  }

  /**
   * Gets the read-only state.
   */
  @Class.Public()
  public get readOnly(): boolean {
    return this.internals.readOnly;
  }

  /**
   * Sets the read-only state.
   */
  public set readOnly(state: boolean) {
    this.defineState('readOnly', (this.internals.readOnly = state));
  }

  /**
   * Gets the disabled state.
   */
  @Class.Public()
  public get disabled(): boolean {
    return this.internals.disabled;
  }

  /**
   * Sets the disabled state.
   */
  public set disabled(state: boolean) {
    this.defineState('disabled', (this.internals.disabled = state));
  }

  /**
   * Reset all fields in the element to its initial values.
   */
  @Class.Public()
  public reset(): void {
    for (const child of this.children as any) {
      if (child.reset instanceof Function) {
        child.reset();
      } else {
        if ('value' in child && 'defaultValue' in child) {
          child.value = child.defaultValue;
        }
        if ('checked' in child && 'defaultChecked' in child) {
          child.checked = child.defaultChecked;
        }
      }
    }
  }

  /**
   * Checks the element validity.
   * @returns Returns true when the element is valid, false otherwise.
   */
  @Class.Public()
  public checkValidity(): boolean {
    for (const child of this.children as any) {
      if (child.checkValidity instanceof Function && !child.checkValidity()) {
        return false;
      }
    }
    return true;
  }
}
