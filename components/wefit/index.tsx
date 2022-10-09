import React from "react"
import { View, Text, StyleProp, ViewStyle } from "react-native"
import styles,{ logo } from "./styles"

interface LogoProps{
	fontSize: number,
	logoStyle?: StyleProp<ViewStyle>
}

const WeFit = ({fontSize, logoStyle} : LogoProps) => {
	return (	
		<View style={logoStyle}>
			<View style={styles.flex}>
				<Text style={{...logo(fontSize).logo, fontWeight:'bold'}}>We</Text>
				<Text style={logo(fontSize).logo}>Fit</Text>
			</View>
		</View>
	)}
export default WeFit


