import { Text, StyleSheet, View, TextInput } from 'react-native'
import React, { useState, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { nanoid } from 'nanoid';
import { auth, db } from '../Firebase';
import { collection, addDoc, getDocs, query, orderBy, onSnapshot } from 'firebase/firestore';

export default function ChatScreen({route}) {
    const {user} = route.params
    const messagesRef = db.collection('chats');

    const [messages, setMessages] = useState([]);

    React.useLayoutEffect(() => {
        const q = query(collection(db, 'chats'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => setMessages(
            snapshot.docs.map(doc => ({
                _id: doc.data()._id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user,
            }))
        ));

        return () => {
            unsubscribe();
        };  
    }, [])

    React.useEffect(() => {
        console.log(messages);
    }, [])

    const onSend = useCallback((messages = []) => {
        const { _id, createdAt, text, user,} = messages[0]

        addDoc(collection(db, 'chats'), { _id, createdAt,  text, user });
    }, []);
    
    return (
      <View style={styles.container}>
           <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            user={{
                name: user,
            }}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F5F7",
        padding: 20,
        paddingTop: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#858585',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        position: 'absolute',
        left: 20,
        right: 20,
        bottom: 20
    }
});