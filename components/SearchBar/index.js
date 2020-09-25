/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { global, fonts, colors } from '../../style';
import { styles } from './SearchBar.style';

export const SearchBar = (props: Props) => {
  const {
    iconName,
    iconSize,
    iconColor,
    onChangeText,
    value,
    placeholder,
    onClearText,
    inputActivity,
    onFocus,
    onCancel,
  } = props;

  return (
    <View style={global.row}>
      <View style={styles.inputContainer}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          onFocus={onFocus}
        />
        {!!value && (
          <TouchableOpacity style={styles.closeIcon} onPress={onClearText}>
            <Icon name="close" size={20} color={colors.primary} />
          </TouchableOpacity>
        )}
      </View>
      {inputActivity && (
        <TouchableOpacity onPress={onCancel} style={styles.cancel}>
          <Text style={[fonts.textBtn, { color: colors.primary }]}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

type Props = {
  iconName?: string,
  iconSize?: number,
  iconColor?: string,
  value: string,
  onChangeText: Function,
};

SearchBar.defaultProps = {
  iconName: 'search',
  iconSize: 20,
  iconColor: colors.primary,
};
