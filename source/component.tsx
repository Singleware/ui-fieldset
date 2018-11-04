/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as JSX from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

import { Properties } from './properties';
import { Element } from './element';

/**
 * Fieldset component class.
 */
@Class.Describe()
export class Component<T extends Properties = Properties> extends Control.Component<T> {
  /**
   * Element instance.
   */
  @Class.Private()
  private skeleton = <sw-fieldset {...this.properties.class}>{this.children}</sw-fieldset> as Element;

  /**
   * Gets the element.
   */
  @Class.Public()
  public get element(): Element {
    return this.skeleton;
  }

  /**
   * Gets the empty state.
   */
  @Class.Public()
  public get empty(): boolean {
    return this.skeleton.empty;
  }

  /**
   * Gets the element name.
   */
  @Class.Public()
  public get name(): string {
    return this.skeleton.name;
  }

  /**
   * Sets the element name.
   */
  public set name(name: string) {
    this.skeleton.name = name;
  }

  /**
   * Gets the component value.
   */
  @Class.Public()
  public get value(): any {
    return this.skeleton.value;
  }

  /**
   * Sets the component value.
   */
  public set value(value: any) {
    this.skeleton.value = value;
  }

  /**
   * Gets the unwind state.
   */
  @Class.Public()
  public get unwind(): boolean {
    return this.skeleton.unwind;
  }

  /**
   * Sets the unwind state.
   */
  public set unwind(state: boolean) {
    this.skeleton.unwind = state;
  }

  /**
   * Gets the required state.
   */
  @Class.Public()
  public get required(): boolean {
    return this.skeleton.required;
  }

  /**
   * Sets the required state.
   */
  public set required(state: boolean) {
    this.skeleton.required = state;
  }

  /**
   * Gets the read-only state.
   */
  @Class.Public()
  public get readOnly(): boolean {
    return this.skeleton.readOnly;
  }

  /**
   * Sets the read-only state.
   */
  public set readOnly(state: boolean) {
    this.skeleton.readOnly = state;
  }

  /**
   * Gets the disabled state.
   */
  @Class.Public()
  public get disabled(): boolean {
    return this.skeleton.disabled;
  }

  /**
   * Sets the disabled state.
   */
  public set disabled(state: boolean) {
    this.skeleton.disabled = state;
  }

  /**
   * Reset all fields in the component to its initial values.
   */
  @Class.Public()
  public reset(): void {
    this.skeleton.reset();
  }

  /**
   * Checks the component validity.
   * @returns Returns true when the component is valid, false otherwise.
   */
  @Class.Public()
  public checkValidity(): boolean {
    return this.skeleton.checkValidity();
  }
}
