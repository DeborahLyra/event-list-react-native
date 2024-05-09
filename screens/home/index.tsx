import { Text, TextInput, TouchableOpacity, View, ScrollView, FlatList, Alert } from 'react-native';
import { useState } from 'react';
import { styles } from './syle';
import { Participant } from '@/components/Participants';


export function Home() {
    const [name, setName] = useState('')
    const [nameList, setNameList] = useState(['Ana', 'José'])

    const handleParticipantAdd = () => {
        if (name === undefined || name.trim() === '') {
            return
        }

        if (nameList.includes(name)) {
            Alert.alert('Parcicipannte existe', 'O participante já foi adicionado')
            return
        }
        setNameList([...nameList, name])
    }

    const handleParticipantDelete = (name: string) => {
        Alert.alert('Remover',`Deseja mesmo remover ${name}?`,[
            {
                text:'Sim',
                onPress: () => Alert.alert('apagou')
            },
            {
                text:'Não',
                style: 'cancel'
            }
        ]
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventDate}>Sexta, 10 de maio de 2024</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor={'#6B6B6B'}
                    onChangeText={text => setName(text)}
                    value={name}
                />
                <TouchableOpacity style={styles.button}
                    onPress={handleParticipantAdd}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={nameList}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onDelete={() => handleParticipantDelete(item)}
                    />
                )}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.isEmpityText}> Ninguém chegou ainda? Adicione mais pessoas na lista</Text>
                )}
            />



        </View>
    );
}

{/* esconde a barra de scroll */ }
{/* <ScrollView showsVerticalScrollIndicator={false}>
{

    nameList.map((participant, index) => {
        return (
            <Participant
                key={participant}
                name={participant}
                onDelete={() => handleParticipantDelete(name)}
            />
        )
    })
}


</ScrollView> */}