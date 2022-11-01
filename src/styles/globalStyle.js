import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    body: {
        flex: 1,
        padding: 40,
        paddingBottom: 5,
        backgroundColor:'seashell'
    },
    items: {
        flex: 1,
        marginTop: 10,
    },
    person: {
        padding: 20,
        marginTop: 15,
        borderColor: 'orange',
        borderWidth: 1,
        borderRadius: 20,
        borderStyle: 'dashed',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text: {
        fontSize: 16,
        // fontWeight: "bold",
        fontFamily: 'yekan'
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'orangered',
        padding: 10,
        marginBottom: 10,
        fontFamily: "yekan",
        fontSize: 16
    },
    header: {
        height: 90,
        paddingTop: 40,
        backgroundColor: 'darkorange'
    },
    title: {
        textAlign: "center",
        color: 'white',
        fontSize: 25,
        // fontWeight: "bold"
        fontFamily: 'yekan'
    },
    headerIcon: {
        color: 'whitesmoke',
        fontSize: 26,
        marginHorizontal: 15
    },
    boldText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red'
    },
    border1: {
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 15,
        borderColor: 'orange',
        padding: 20
    }
});