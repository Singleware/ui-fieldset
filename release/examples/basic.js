"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the basic fieldset component.
 */
const Fieldset = require("../source");
const JSX = require("@singleware/jsx");
const fieldset = (JSX.create(Fieldset.Component, null,
    JSX.create("input", { type: "text", name: "input" }),
    JSX.create("select", { name: "select" },
        JSX.create("option", { value: "0" }, "Option 1"),
        JSX.create("option", { value: "1" }, "Option 2")),
    JSX.create("button", { type: "submit" }, "Button")));
// Change the read-only property of all fiends.
fieldset.readOnly = true;
// Change the required property of all fiends.
fieldset.required = true;
// Change the disabled property of all fiends.
fieldset.disabled = true;
// Change the fieldset name.
fieldset.name = 'new-name';
// Change the value of all fields.
fieldset.value = {
    input: 'New value',
    select: '0'
};
