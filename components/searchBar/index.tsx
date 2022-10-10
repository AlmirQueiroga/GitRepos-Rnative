import React, { useCallback, useState } from "react"
import { GlobalState, Repositories, useAppContext } from "../../context"
import { TextInput, Text, ProgressBar, Button } from 'react-native-paper'
import { View } from "react-native"
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import styles from "./styles"
import { api } from "../../services/api"
  
  const SearchBar = () => {
    const [repoName, setRepoName] = useState('')
    const [loading, setLoading] = useState(false)
    const [ setError] = useState(false)
    const { setData } = useAppContext()
    
    const getRepositories = useCallback(async (): Promise<void> => {

      try {
        setLoading(true)
        const response: { data: Array<Repositories> } = await api.get(`/users/${repoName}/repos`)
        setData((prevState: GlobalState) => ({
          ...prevState,
          loadedRepositories: response.data,
          showModal: false
        }))
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setData(prev => ({...prev, showModal: false, showError: true}))
      }
    }, [repoName, setData, setError])


    return (
      <View style={styles.topContainer}>
				<View style={styles.topChip}>
						<Text style={styles.topChipText}>Alterar usuário selecionado</Text>
						<MaterialIcon size={24} name="close" style={styles.closeButton} onPress={() => setData(prev => ({...prev, showModal: false}))}/>
				</View>
        <View>
					<TextInput
							style={styles.input}
							onChangeText={setRepoName}
							mode="outlined"
							value={repoName}
							label="Github username"
							theme={{ roundness: 10 }} 
							onSubmitEditing={getRepositories}
							autoCorrect={false}
							autoCapitalize="none"/>
					<Button labelStyle={styles.labelStyle} uppercase={false} style={styles.confirmButton} onPress={() => getRepositories()}>Salvar</Button>
					<ProgressBar style={styles.loader} visible={loading} indeterminate={true} />
        </View>
      </View>
    )
  }
  
  export default SearchBar