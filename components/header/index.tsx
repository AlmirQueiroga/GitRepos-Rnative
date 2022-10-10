import React from "react"
import { View } from "react-native"
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import styles from "./styles"
import WeFit from "../../components/wefit"

  
  const Header = (props: { onPress: () => void }) => {

    const { onPress } = props

    return (
      <View style={styles.container}>
       <WeFit fontSize={20}/>
       <MaterialIcon size={24} name="settings" style={styles.button} onPress={() => onPress()}/>
      </View>
    )
  }
  
  export default Header