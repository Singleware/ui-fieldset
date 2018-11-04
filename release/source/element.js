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
/**
 * Fieldset element.
 */
let Element = class Element extends HTMLElement {
    /**
     * Fieldset element.
     */
    constructor() {
        super(...arguments);
        /**
         * Element internals.
         */
        this.internals = {
            required: false,
            readOnly: false,
            disabled: false
        };
        /**
         * Element name.
         */
        this.name = '';
        /**
         * Unwind state.
         */
        this.unwind = false;
    }
    /**
     * Add all values from the specified child into the given entity.
     * @param entity Target entity.
     * @param child Child element.
     */
    addValues(entity, child) {
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
    addValue(entity, child) {
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
    defineState(name, state) {
        for (const child of this.children) {
            if (name in child) {
                child[name] = state;
            }
        }
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
            else if (child.name in value) {
                child.value = value[child.name];
            }
        }
    }
    /**
     * Gets the required state.
     */
    get required() {
        return this.internals.required;
    }
    /**
     * Sets the required state.
     */
    set required(state) {
        this.defineState('required', (this.internals.required = state));
    }
    /**
     * Gets the read-only state.
     */
    get readOnly() {
        return this.internals.readOnly;
    }
    /**
     * Sets the read-only state.
     */
    set readOnly(state) {
        this.defineState('readOnly', (this.internals.readOnly = state));
    }
    /**
     * Gets the disabled state.
     */
    get disabled() {
        return this.internals.disabled;
    }
    /**
     * Sets the disabled state.
     */
    set disabled(state) {
        this.defineState('disabled', (this.internals.disabled = state));
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
], Element.prototype, "internals", void 0);
__decorate([
    Class.Private()
], Element.prototype, "addValues", null);
__decorate([
    Class.Private()
], Element.prototype, "addValue", null);
__decorate([
    Class.Private()
], Element.prototype, "defineState", null);
__decorate([
    Class.Public()
], Element.prototype, "name", void 0);
__decorate([
    Class.Public()
], Element.prototype, "unwind", void 0);
__decorate([
    Class.Public()
], Element.prototype, "empty", null);
__decorate([
    Class.Public()
], Element.prototype, "value", null);
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
], Element.prototype, "reset", null);
__decorate([
    Class.Public()
], Element.prototype, "checkValidity", null);
Element = __decorate([
    JSX.Describe('sw-fieldset'),
    Class.Describe()
], Element);
exports.Element = Element;
