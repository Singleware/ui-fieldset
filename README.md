# UI-Fieldset

Custom HTML element used to mirror field properties in its first-level children.

### State Attributes

| Name    | Description                                                              |
| ------- | ------------------------------------------------------------------------ |
| empty   | Automatically assigned when all first-level children are empty           |
| invalid | Automatically assigned when one or more first-level children are invalid |

### Mirrored Properties

| Name     | Description                                                                    |
| -------- | ------------------------------------------------------------------------------ |
| value    | Get or set an object with the `name` and `value` from all first-level children |
| required | Get or set the `required` state into all first-level children                  |
| readOnly | Get or set the `readOnly` state into all first-level children                  |
| disabled | Get or set the `disabled` state into all first-level children                  |

### Properties

| Name        | Description                                                                                |
| ----------- | ------------------------------------------------------------------------------------------ |
| type        | Get or set the fieldset type                                                               |
| name        | Get or set the fieldset name                                                               |
| empty       | Get the empty state based on all first-level children                                      |
| unwind      | Get or set the unwind state determining whether the value property must be unrolled or not |
| orientation | Get and set the fieldset orientation. Use: `row` or `column` value                         |

### Methods

| Name          | Description                                                 |
| ------------- | ----------------------------------------------------------- |
| focus         | Move the focus to the first-level child that can be focused |
| reset         | Reset all first-level children to its initial values        |
| checkValidity | Check whether all first-level children are valid or not     |

### Events

| Name   | Description                                           |
| ------ | ----------------------------------------------------- |
| change | Dispatched when some field in the fieldset is changed |

## Install

Using npm:

```sh
npm i @singleware/ui-fieldset
```

## License

[MIT &copy; Silas B. Domingos](https://balmante.eti.br)
