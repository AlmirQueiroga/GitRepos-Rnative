import React from "react"
import { Repositories, useAppContext } from "../../context"
import { View, TouchableOpacity, Text } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from "./styles"
import { fav } from "./styles"
import InfoBadge from "../info"
import { FontAwesome } from '@expo/vector-icons';

interface RepositoryProps {
    repositoryData: Repositories
  }
  
  const Repository = ({ repositoryData }: RepositoryProps) => {
    const { data, setData, storeData } = useAppContext()
  
    const isAlreadyIncluded = !!data.favorites?.find((repo: any) => repo?.id === repositoryData?.id)
  
    const handleFavorite = (repository: any) => () => {
      setData((prevState: any) => {
        if (!isAlreadyIncluded) {
          const state = {
            ...prevState,
            favorites: [...prevState.favorites, repository],
          }
          storeData(state)
          return state
        }
        const state = {
          ...prevState,
          favorites: prevState.favorites.filter((repo: any) => repo?.id !== repository?.id),
        }
        storeData(state)
        return state
      })
    }
  
    return (
      <Card style={styles.cardContainer} key={repositoryData.id}>
        <Card.Content style={styles.cardContent}>
          <Title>{repositoryData.name}</Title>
          <Paragraph>{repositoryData.description ?? '-'}</Paragraph>
          <Paragraph> 
            <FontAwesome name="circle" size={8} color={"red"} /> {repositoryData.language ?? '-'}
          </Paragraph>
          <View style={styles.footer}>
            <TouchableOpacity style={fav(isAlreadyIncluded).button} onPress={handleFavorite(repositoryData)}>
            <MaterialIcon name="star" color={isAlreadyIncluded ? 'yellow' : 'black'} />
              <Text style={fav(isAlreadyIncluded).text}>Favoritar</Text>
            </TouchableOpacity>
            <InfoBadge
              forks={repositoryData.forks_count}
              stars={repositoryData.stargazers_count}
              fulllName={repositoryData.full_name}
            />
          </View>
        </Card.Content>
      </Card>
    )
  }
  
  export default Repository