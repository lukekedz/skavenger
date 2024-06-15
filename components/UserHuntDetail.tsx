import { View, Text, StyleSheet, FlatList } from 'react-native';
import { gameItems } from '../data/data'

function UserHuntDetail() {
    return (
        <View style={styles.container}>
            <FlatList
                data={gameItems}
                renderItem={({ item }) => {
                    return (
                        <View style={{ marginBottom: 10 }}>
                            <Text style={{ fontSize: 20 }}>{`\u2043 ${item.key}`}</Text>
                        </View>
                    );
            }}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'left',
        margin: 5,
    },
});

export default UserHuntDetail;
