/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as JSX from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

/**
 * Fieldset element.
 */
@JSX.Describe('swe-fieldset')
@Class.Describe()
export class Element extends Control.Element {
  /**
   * Add all values from the specified child into the given entity.
   * @param entity Target entity.
   * @param child Child element.
   */
  @Class.Private()
  private addValues(entity: any, child: any): void {
    const values = child.value;
    if (values instanceof Object) {
      for (const name in values) {
        if (values[name] !== void 0) {
          entity[name] = values[name];
        }
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
   * Change event handler.
   */
  @Class.Private()
  private changeHandler(): void {
    this.updatePropertyState('empty', this.empty);
    this.updatePropertyState('invalid', !this.empty && !this.checkValidity());
  }

  /**
   * Default constructor.
   */
  constructor() {
    super();
    this.addEventListener('keyup', this.changeHandler.bind(this));
    this.addEventListener('change', this.changeHandler.bind(this));
  }

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
   * Gets the element type.
   */
  @Class.Public()
  public get type(): string {
    return this.getAttribute('type') || '';
  }

  /**
   * Sets the element type.
   */
  public set type(type: string) {
    this.setAttribute('type', type);
  }

  /**
   * Gets the element name.
   */
  @Class.Public()
  public get name(): string {
    return this.getAttribute('name') || '';
  }

  /**
   * Sets the element name.
   */
  public set name(name: string) {
    this.setAttribute('name', name);
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
      } else {
        const name = child.name;
        if (value instanceof Object && value[name] !== void 0) {
          child.value = value[name];
        }
      }
    }
  }

  /**
   * Gets the unwind state of the element.
   */
  @Class.Public()
  public get unwind(): boolean {
    return this.hasAttribute('unwind');
  }

  /**
   * Sets the unwind state of the element.
   */
  public set unwind(state: boolean) {
    this.updatePropertyState('unwind', state);
  }

  /**
   * Gets the required state of the element.
   */
  @Class.Public()
  public get required(): boolean {
    return this.hasAttribute('required');
  }

  /**
   * Sets the required state of the element.
   */
  public set required(state: boolean) {
    this.updatePropertyState('required', state);
    this.updateChildrenState('required', state);
  }

  /**
   * Gets the read-only state of the element.
   */
  @Class.Public()
  public get readOnly(): boolean {
    return this.hasAttribute('readonly');
  }

  /**
   * Sets the read-only state of the element.
   */
  public set readOnly(state: boolean) {
    this.updatePropertyState('readonly', state);
    this.updateChildrenState('readOnly', state);
  }

  /**
   * Gets the disabled state of the element.
   */
  @Class.Public()
  public get disabled(): boolean {
    return this.hasAttribute('disabled');
  }

  /**
   * Sets the disabled state of the element.
   */
  public set disabled(state: boolean) {
    this.updatePropertyState('disabled', state);
    this.updateChildrenState('disabled', state);
  }

  /**
   * Gets the element orientation.
   */
  @Class.Public()
  public get orientation(): string {
    return this.getAttribute('orientation') || 'column';
  }

  /**
   * Sets the element orientation.
   */
  public set orientation(orientation: string) {
    this.setAttribute('orientation', orientation);
  }

  /**
   * Move the focus to the first child that can be focused.
   */
  @Class.Public()
  public focus(): void {
    for (const child of this.children as any) {
      if (child.tabIndex >= 0 && !child.disabled && !child.readOnly) {
        child.focus();
        break;
      }
    }
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
        if ('value' in child) {
          child.value = child.defaultValue;
        }
        if ('checked' in child) {
          child.checked = child.defaultChecked;
        }
      }
    }
    this.changeHandler();
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
