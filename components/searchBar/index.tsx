import React, { useCallback, useState } from "react"
import { GlobalState, Repositories, useAppContext } from "../../context"
import { TextInput, Text, Chip, ProgressBar } from 'react-native-paper'
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
        //setError(false)
      } catch (error) {
        setLoading(false)
        setData(prev => ({...prev, showModal: false}))
        //toggleErrorDialog()
      }

      //if (error) setError(true)
    }, [repoName, setData, setError])


    return (
        <View style={styles.topContainer}>
            <View style={styles.topChipText}>
                <Text>Alterar usuário selecionado</Text>
                <MaterialIcon size={24} name="close" style={styles.button} onPress={() => setData(prev => ({...prev, showModal: false}))}/>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={setRepoName}
                    mode="outlined"
                    value={repoName}
                    label="Github username"
                    onSubmitEditing={getRepositories}
                    autoCorrect={false}
                    autoCapitalize="none"
                />
                <View style={styles.container}>
                <Chip icon="folder" style={styles.chipIcon} textStyle={styles.chipIconText} mode="outlined">
                    <Text style={styles.chipText}>{data?.loadedRepositories?.length}</Text>
                </Chip>
                <Chip icon="heart" mode="outlined">
                    <Text style={styles.chipText}>{data?.favorites?.length}</Text>
                </Chip>
                </View>
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