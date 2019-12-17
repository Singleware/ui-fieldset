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
  private skeleton = (
    <swe-fieldset
      class={this.properties.class}
      slot={this.properties.slot}
      type={this.properties.type}
      name={this.properties.name}
      value={this.properties.value}
      unwind={this.properties.unwind}
      required={this.properties.required}
      readOnly={this.properties.readOnly}
      disabled={this.properties.disabled}
      orientation={this.properties.orientation}
      onChange={this.properties.onChange}
    >
      {this.children}
    </swe-fieldset>
  ) as Element;

  /**
   * Default constructor.
   * @param properties Initial properties.
   * @param children Initial children.
   */
  constructor(properties?: T, children?: any[]) {
    super(properties, children);
    if (this.properties.data) {
      this.data = this.properties.data;
    }
  }

  /**
   * Gets the element.
   */
  @Class.Public()
  public get element(): Element {
    return this.skeleton;
  }

  /**
   * Gets the empty state of the element.
   */
  @Class.Public()
  public get empty(): boolean {
    return this.skeleton.empty;
  }

  /**
   * Gets the element type.
   */
  @Class.Public()
  public get type(): string {
    return this.skeleton.type;
  }

  /**
   * Sets the element type.
   */
  public set type(type: string) {
    this.skeleton.type = type;
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
   * Gets the element value.
   */
  @Class.Public()
  public get value(): any {
    return this.skeleton.value;
  }

  /**
   * Sets the element value.
   */
  public set value(value: any) {
    this.skeleton.value = value;
  }

  /**
   * Gets the unwind state of the element.
   */
  @Class.Public()
  public get unwind(): boolean {
    return this.skeleton.unwind;
  }

  /**
   * Sets the unwind state of the element.
   */
  public set unwind(state: boolean) {
    this.skeleton.unwind = state;
  }

  /**
   * Gets the required state of the element.
   */
  @Class.Public()
  public get required(): boolean {
    return this.skeleton.required;
  }

  /**
   * Sets the required state of the element.
   */
  public set required(state: boolean) {
    this.skeleton.required = state;
  }

  /**
   * Gets the read-only state of the element.
   */
  @Class.Public()
  public get readOnly(): boolean {
    return this.skeleton.readOnly;
  }

  /**
   * Sets the read-only state of the element.
   */
  public set readOnly(state: boolean) {
    this.skeleton.readOnly = state;
  }

  /**
   * Gets the disabled state of the element.
   */
  @Class.Public()
  public get disabled(): boolean {
    return this.skeleton.disabled;
  }

  /**
   * Sets the disabled state of the element.
   */
  public set disabled(state: boolean) {
    this.skeleton.disabled = state;
  }

  /**
   * Gets the element orientation.
   */
  @Class.Public()
  public get orientation(): string {
    return this.skeleton.orientation;
  }

  /**
   * Sets the element orientation.
   */
  public set orientation(orientation: string) {
    this.skeleton.orientation = orientation;
  }

  /**
   * Gets the element data.
   */
  @Class.Public()
  public get data(): DOMStringMap {
    return this.skeleton.dataset;
  }

  /**
   * Sets the element data.
   */
  public set data(data: DOMStringMap) {
    for (const key in this.skeleton.dataset) {
      delete this.skeleton.dataset[key];
    }
    for (const key in data) {
      this.skeleton.dataset[key] = data[key];
    }
  }

  /**
   * Move the focus to the first child that can be focused.
   */
  @Class.Public()
  public focus(): void {
    this.skeleton.focus();
  }

  /**
   * Reset all fields in the element to its initial values.
   */
  @Class.Public()
  public reset(): void {
    this.skeleton.reset();
  }

  /**
   * Checks the element validity.
   * @returns Returns true when the element is valid, false otherwise.
   */
  @Class.Public()
  public checkValidity(): boolean {
    return this.skeleton.checkValidity();
  }
}
