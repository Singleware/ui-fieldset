"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const JSX = require("@singleware/jsx");
const Control = require("@singleware/ui-control");
/**
 * Fieldset component class.
 */
let Component = class Component extends Control.Component {
    /**
     * Default constructor.
     * @param properties Initial properties.
     * @param children Initial children.
     */
    constructor(properties, children) {
        super(properties, children);
        /**
         * Element instance.
         */
        this.skeleton = (JSX.create("swe-fieldset", { class: this.properties.class, slot: this.properties.slot, type: this.properties.type, name: this.properties.name, value: this.properties.value, unwind: this.properties.unwind, required: this.properties.required, readOnly: this.properties.readOnly, disabled: this.properties.disabled, tabIndex: this.properties.tabIndex || 0, orientation: this.properties.orientation, onChange: this.properties.onChange }, this.children));
        if (this.properties.data) {
            this.data = this.properties.data;
        }
    }
    /**
     * Gets the element.
     */
    get element() {
        return this.skeleton;
    }
    /**
     * Gets the empty state of the element.
     */
    get empty() {
        return this.skeleton.empty;
    }
    /**
     * Gets the element type.
     */
    get type() {
        return this.skeleton.type;
    }
    /**
     * Sets the element type.
     */
    set type(type) {
        this.skeleton.type = type;
    }
    /**
     * Gets the element name.
     */
    get name() {
        return this.skeleton.name;
    }
    /**
     * Sets the element name.
     */
    set name(name) {
        this.skeleton.name = name;
    }
    /**
     * Gets the element value.
     */
    get value() {
        return this.skeleton.value;
    }
    /**
     * Sets the element value.
     */
    set value(value) {
        this.skeleton.value = value;
    }
    /**
     * Gets the unwind state of the element.
     */
    get unwind() {
        return this.skeleton.unwind;
    }
    /**
     * Sets the unwind state of the element.
     */
    set unwind(state) {
        this.skeleton.unwind = state;
    }
    /**
     * Gets the required state of the element.
     */
    get required() {
        return this.skeleton.required;
    }
    /**
     * Sets the required state of the element.
     */
    set required(state) {
        this.skeleton.required = state;
    }
    /**
     * Gets the read-only state of the element.
     */
    get readOnly() {
        return this.skeleton.readOnly;
    }
    /**
     * Sets the read-only state of the element.
     */
    set readOnly(state) {
        this.skeleton.readOnly = state;
    }
    /**
     * Gets the disabled state of the element.
     */
    get disabled() {
        return this.skeleton.disabled;
    }
    /**
     * Sets the disabled state of the element.
     */
    set disabled(state) {
        this.skeleton.disabled = state;
    }
    /**
     * Gets the element orientation.
     */
    get orientation() {
        return this.skeleton.orientation;
    }
    /**
     * Sets the element orientation.
     */
    set orientation(orientation) {
        this.skeleton.orientation = orientation;
    }
    /**
     * Gets the element data.
     */
    get data() {
        return this.skeleton.dataset;
    }
    /**
     * Sets the element data.
     */
    set data(data) {
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
    focus() {
        this.skeleton.focus();
    }
    /**
     * Reset all fields in the element to its initial values.
     */
    reset() {
        this.skeleton.reset();
    }
    /**
     * Checks the element validity.
     * @returns Returns true when the element is valid, false otherwise.
     */
    checkValidity() {
        return this.skeleton.checkValidity();
    }
};
__decorate([
    Class.Private()
], Component.prototype, "skeleton", void 0);
__decorate([
    Class.Public()
], Component.prototype, "element", null);
__decorate([
    Class.Public()
], Component.prototype, "empty", null);
__decorate([
    Class.Public()
], Component.prototype, "type", null);
__decorate([
    Class.Public()
], Component.prototype, "name", null);
__decorate([
    Class.Public()
], Component.prototype, "value", null);
__decorate([
    Class.Public()
], Component.prototype, "unwind", null);
__decorate([
    Class.Public()
], Component.prototype, "required", null);
__decorate([
    Class.Public()
], Component.prototype, "readOnly", null);
__decorate([
    Class.Public()
], Component.prototype, "disabled", null);
__decorate([
    Class.Public()
], Component.prototype, "orientation", null);
__decorate([
    Class.Public()
], Component.prototype, "data", null);
__decorate([
    Class.Public()
], Component.prototype, "focus", null);
__decorate([
    Class.Public()
], Component.prototype, "reset", null);
__decorate([
    Class.Public()
], Component.prototype, "checkValidity", null);
Component = __decorate([
    Class.Describe()
], Component);
exports.Component = Component;
