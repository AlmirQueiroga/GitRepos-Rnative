import React from 'react'
import { View, Text, TouchableOpacity, Linking } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'

interface InfoBadgeProps {
  stars: number
  fulllName: string
}

const InfoBadge = ({ stars, fulllName }: InfoBadgeProps) => {
  return (
    <View style={styles.wrapper}>
      <MaterialIcon onPress={() => {
            Linking.openURL(`http://github.com/${fulllName}/stargazers`)}} 
            size={20} name="star" color="yellow" />  
      <Text>{stars}</Text>
    </View>
  )
}

export default InfoBadge