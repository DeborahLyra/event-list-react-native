import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24,
        paddingTop: 70,
    },

    eventName: {
        color: '#fff',
        marginTop: 40,
        fontSize: 24,
        fontWeight: 'bold',
    },

    eventDate: {
        color: '#6B6B6B',
        marginTop: 10,
        fontSize: 16,
    },

    form: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
        marginTop: 30,
        marginBottom: 40,
    },

    input: {
        color: '#fff',
        backgroundColor: '#1F1E25',
        padding: 16,
        borderRadius: 5,
        flex: 1,
        height: 56,

    },

    button: {
        backgroundColor: '#31CF67',
        width: 56,
        height: 56,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: '#fff',
        fontSize: 30,
    },

    isEmpityText:{
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    }
});