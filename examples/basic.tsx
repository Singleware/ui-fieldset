/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the basic fieldset component.
 */
import * as Fieldset from '../source';
import * as JSX from '@singleware/jsx';

const fieldset = (
  <Fieldset.Component>
    <input type="text" name="input" />
    <select name="select">
      <option value="0">Option 1</option>
      <option value="1">Option 2</option>
    </select>
    <button type="submit">Button</button>
  </Fieldset.Component>
) as Fieldset.Element;

// Change the read-only property for all first-level children.
fieldset.readOnly = true;

// Change the required property for all first-level children.
fieldset.required = true;

// Change the disabled property for all first-level children.
fieldset.disabled = true;

// Change the fieldset name.
fieldset.name = 'new-name';

// Change the value for all first-level children.
fieldset.value = {
  input: 'New value',
  select: '0'
};
