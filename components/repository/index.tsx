import React from "react"
import { Repositories, useAppContext } from "../../context"
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles, { fav } from "./styles"
import InfoBadge from "../info"
import { FontAwesome } from "@expo/vector-icons"

interface RepositoryProps {
    repositoryData: Repositories
    isfavoritesc: boolean
  }
  
  const Repository = ({ repositoryData, isfavoritesc }: RepositoryProps) => {
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
          <View style={styles.header}>
						<Title style={styles.title}>{repositoryData.owner.login}/<Title style={styles.titleName}>{repositoryData.name}</Title></Title>  
						<Image source={{uri:repositoryData.owner.avatar_url}} style={styles.profileAvatar}/>
          </View>      
          <Paragraph>{repositoryData.description ?? '-'}</Paragraph>
          <View style={styles.footer}>
						{isfavoritesc === false &&
							<TouchableOpacity style={fav(isAlreadyIncluded).button} onPress={handleFavorite(repositoryData)}>
								<MaterialIcon name="star" color={isAlreadyIncluded ? 'yellow' : 'black'} />
								<Text style={fav(isAlreadyIncluded).text}>Favoritar</Text>
							</TouchableOpacity>
						}
            <InfoBadge
              stars={repositoryData.stargazers_count}
              fulllName={repositoryData.full_name}
            />
            <Paragraph> 
              <FontAwesome name="circle" size={8} color={"red"} /> {repositoryData.language ?? '-'}
            </Paragraph>
          </View>
        </Card.Content>
      </Card>
    )
  }
  
  export default Repository