import React, { useCallback, useState } from "react"
import { GlobalState, Repositories, useAppContext } from "../../context"
import { TextInput, Text, ProgressBar, Button } from 'react-native-paper'
import { View } from "react-native"
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import styles from "./styles"
import { api } from "../../services/api"
import DialogError from "../dialogs/error"

const ERROR_MSG = {
    title: 'Ops!',
    message:
      'Um erro aconteceu ao processar sua solicitação, tente um diferente parâmetro ou tente novamente',
  }
  
  const SearchBar = (props: { setShowOpacity: () => void }) => {
    const [repoName, setRepoName] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const { data, setData } = useAppContext()
    
  
    const toggleErrorDialog = () => {
      setError(prevState => !prevState)
    }
  
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
        setData(prev => ({...prev, showModal: false}))
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
            <DialogError
                visible={error}
                handleConfirm={toggleErrorDialog}
                title={ERROR_MSG.title}
                message={ERROR_MSG.message}
            />
        </View>
      </View>
    )
  }
  
  export default SearchBar