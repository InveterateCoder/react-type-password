# React Type Password

Controlled password input that can be of text type.


## Installation

```sh
$ npm install react-type-password
```

## Usage

```js
import Password from 'react-type-password';
```

```js
<Password
  id="password"
  type="text"
  mask='?'
  className="form-control"
  name="password"
  placeholder="Enter password"
  style={{backgroundColor:"transparent"}}
  disabled={false}
  value={this.state.password}
  onChange={this.handleChange}
/>
```

## Options

| Option        | Type      | Description                                                   |
|---------------|-----------|---------------------------------------------------------------|
| `type`        | string    | Defines the type of the input. Options: `password`, `text`. Default: `text`.  |
| `value`       | string    | Required. The current value of the password/text field.       |
| `id`          | string    | The HTML `id` attribute.                                      |
| `mask`        | char      | The character used to hide the inpupt. Default: `•`           |
| `name`        | string    | The HTML `name` attribute.                                    |
| `className`   | string    | A space-separated list of HTML `class` attributes.            |
| `placeholder` | string    | The HTML `placeholder` attribute.                             |
| `style`       | object    | Inline CSS styles to be applied.                              |
| `disabled`    | boolean   | The HTML `disabled` attribute.                                |
| `onChange`    | function  | Required. A callback function to be invoked when the `value` of the field changes. Receives an argument containing the new text value.  |




## License

MIT
