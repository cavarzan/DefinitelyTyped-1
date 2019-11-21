<<<<<<< HEAD
// Type definitions for react-native-material-textfield 0.15.1
// Project: https://github.com/n4kz/react-native-material-textfield
// Definitions by: Ville Venäläinen <https://github.com/mindhivefi>
//                 Deividi Cavarzan <https://github.com/cavarzan>
=======
// Type definitions for react-native-material-textfield 0.15
// Project: https://github.com/n4kz/react-native-material-textfield
// Definitions by: Ville Venäläinen <https://github.com/mindhivefi>
//                 Kyle Roach <https://github.com/iRoachie>
>>>>>>> fdeac13eba6173c41b86000b040b5953a7987b9b
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import {
    StyleProp,
    TextInputProps,
    TextStyle,
    ViewStyle,
    View
} from 'react-native';

export interface ContentInset {
    top?: number;
    label?: number;
    input?: number;
}

export interface TextFieldProps extends TextInputProps {
    animationDuration?: number;

    fontSize?: number;
    labelFontSize?: number;
    contentInset?: ContentInset;

    style?: StyleProp<TextStyle>;
    labelTextStyle?: StyleProp<TextStyle>;
    titleTextStyle?: StyleProp<TextStyle>;
    affixTextStyle?: StyleProp<TextStyle>;

    tintColor?: string;
    textColor?: string;
    baseColor?: string;

    label?: string;
    title?: string;

    characterRestriction?: number;

    error?: string;
    errorColor?: string;

    lineWidth?: number;
    activeLineWidth?: number;

    disabled?: boolean;

    disabledLineWidth?: number;

    renderAccessory?(): JSX.Element;

    clearTextOnFocus?: boolean;

    prefix?: string;
    suffix?: string;

    containerStyle?: StyleProp<ViewStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;

    onPress?(event: Event): void;
    onChangeText?(text: string): void;
}

/**
 * Material Style Text Field
 * @see https://github.com/n4kz/react-native-material-textfield/blob/master/src/components/field/index.js
 */
export class TextField extends React.Component<TextFieldProps, any> {
    /*
     * Acquire focus
     */
    focus(): void;
    /*
     * Release focus
     */
    blur(): void;
    /*
     * Clear text field
     */
    clear(): void;
    /*
     * Get current value
     */
    value(): string;
    /*
     * Get current focus state
     */
    isFocused(): boolean;
    /*
     * Get current restriction state
     */
    isRestricted(): boolean;
}

export class OutlinedTextField extends TextField {

}
export class FilledTextField extends TextField {
    
}