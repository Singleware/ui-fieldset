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
 * Fieldset element.
 */
let Element = class Element extends Control.Element {
    /**
     * Default constructor.
     */
    constructor() {
        super();
        this.addEventListener('keyup', this.changeHandler.bind(this));
        this.addEventListener('change', this.changeHandler.bind(this));
    }
    /**
     * Add all values from the specified child into the given entity.
     * @param entity Target entity.
     * @param child Child element.
     */
    addValues(entity, child) {
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
    addValue(entity, child) {
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
    changeHandler() {
        this.updatePropertyState('empty', this.empty);
        this.updatePropertyState('invalid', !this.empty && !this.checkValidity());
    }
    /**
     * Determines whether the element is empty or not.
     */
    get empty() {
        for (const child of this.children) {
            if (!child.empty) {
                return false;
            }
        }
        return true;
    }
    /**
     * Gets the element type.
     */
    get type() {
        return this.getAttribute('type') || '';
    }
    /**
     * Sets the element type.
     */
    set type(type) {
        this.setAttribute('type', type);
    }
    /**
     * Gets the element name.
     */
    get name() {
        return this.getAttribute('name') || '';
    }
    /**
     * Sets the element name.
     */
    set name(name) {
        this.setAttribute('name', name);
    }
    /**
     * Gets the element value.
     */
    get value() {
        const entity = {};
        for (const child of this.children) {
            if (!child.empty) {
                if (child.unwind) {
                    this.addValues(entity, child);
                }
                else {
                    this.addValue(entity, child);
                }
            }
        }
        return entity;
    }
    /**
     * Sets the element value.
     */
    set value(value) {
        for (const child of this.children) {
            if (child.unwind) {
                child.value = value;
            }
            else {
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
    get unwind() {
        return this.hasAttribute('unwind');
    }
    /**
     * Sets the unwind state of the element.
     */
    set unwind(state) {
        this.updatePropertyState('unwind', state);
    }
    /**
     * Gets the required state of the element.
     */
    get required() {
        return this.hasAttribute('required');
    }
    /**
     * Sets the required state of the element.
     */
    set required(state) {
        this.updatePropertyState('required', state);
        this.updateChildrenState('required', state);
    }
    /**
     * Gets the read-only state of the element.
     */
    get readOnly() {
        return this.hasAttribute('readonly');
    }
    /**
     * Sets the read-only state of the element.
     */
    set readOnly(state) {
        this.updatePropertyState('readonly', state);
        this.updateChildrenState('readOnly', state);
    }
    /**
     * Gets the disabled state of the element.
     */
    get disabled() {
        return this.hasAttribute('disabled');
    }
    /**
     * Sets the disabled state of the element.
     */
    set disabled(state) {
        this.updatePropertyState('disabled', state);
        this.updateChildrenState('disabled', state);
    }
    /**
     * Gets the element orientation.
     */
    get orientation() {
        return this.getAttribute('orientation') || 'column';
    }
    /**
     * Sets the element orientation.
     */
    set orientation(orientation) {
        this.setAttribute('orientation', orientation);
    }
    /**
     * Move the focus to the first child that can be focused.
     */
    focus() {
        for (const child of this.children) {
            if (child.tabIndex >= 0 && !child.disabled && !child.readOnly) {
                child.focus();
                break;
            }
        }
    }
    /**
     * Reset all fields in the element to its initial values.
     */
    reset() {
        for (const child of this.children) {
            if (child.reset instanceof Function) {
                child.reset();
            }
            else {
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
    checkValidity() {
        for (const child of this.children) {
            if (child.checkValidity instanceof Function && !child.checkValidity()) {
                return false;
            }
        }
        return true;
    }
};
__decorate([
    Class.Private()
], Element.prototype, "addValues", null);
__decorate([
    Class.Private()
], Element.prototype, "addValue", null);
__decorate([
    Class.Private()
], Element.prototype, "changeHandler", null);
__decorate([
    Class.Public()
], Element.prototype, "empty", null);
__decorate([
    Class.Public()
], Element.prototype, "type", null);
__decorate([
    Class.Public()
], Element.prototype, "name", null);
__decorate([
    Class.Public()
], Element.prototype, "value", null);
__decorate([
    Class.Public()
], Element.prototype, "unwind", null);
__decorate([
    Class.Public()
], Element.prototype, "required", null);
__decorate([
    Class.Public()
], Element.prototype, "readOnly", null);
__decorate([
    Class.Public()
], Element.prototype, "disabled", null);
__decorate([
    Class.Public()
], Element.prototype, "orientation", null);
__decorate([
    Class.Public()
], Element.prototype, "focus", null);
__decorate([
    Class.Public()
], Element.prototype, "reset", null);
__decorate([
    Class.Public()
], Element.prototype, "checkValidity", null);
Element = __decorate([
    JSX.Describe('swe-fieldset'),
    Class.Describe()
], Element);
exports.Element = Element;
