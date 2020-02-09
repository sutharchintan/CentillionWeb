import * as React from "react";
import { FormControl, TextField, FormLabel } from "@material-ui/core";

/**
 * interface to define properties for text field control
 */
interface Props {
  /**
   * defines the label for text
   */
  label: string;
  /**
   * defines the field name
   */
  fieldName: string;
  /**
   * default value
   */
  defaultValue: string;
  /**
   * Indicates whether the text is multiline or not
   */
  multiline?: boolean;
  /**
   * on text change action
   */
  onTextChange: (fieldName: string, value: any) => void;
}

/**
 * class for text field control
 */
export class TextFieldControl extends React.Component<Props> {
  /**
   * render the text field control elements
   */
  render() {
    return (
      <FormControl style={{ padding: 5 }}>
        <FormLabel>
          {this.props.label}
        </FormLabel>
        <TextField
          defaultValue={this.props.defaultValue}
          multiline={this.props.multiline}
          onChange={event =>
            this.props.onTextChange(this.props.fieldName, event.target.value)
          }
        />
      </FormControl>
    );
  }
}
